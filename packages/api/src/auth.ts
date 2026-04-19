import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import { prisma } from '@siteline/db';

const JWT_SECRET = process.env.JWT_SECRET || 'super-secret-siteline-key';

// Prosty store w pamięci dla OTP (w produkcji używamy Redis)
const otpStore = new Map<string, string>();

export const requestOTP = async (req: Request, res: Response) => {
  const { phone } = req.body;
  if (!phone) return res.status(400).json({ error: 'Phone number is required' });

  // Generujemy 6-cyfrowy kod
  const otp = Math.floor(100000 + Math.random() * 900000).toString();
  otpStore.set(phone, otp);

  // LOGIKA SMS: Tutaj podpinasz Twilio/SMSAPI
  console.log(`[SMS] Sending OTP ${otp} to ${phone}`);
  
  // Dla celów deweloperskich zawsze zwracamy sukces
  res.json({ message: 'OTP sent successfully' });
};

export const verifyOTP = async (req: Request, res: Response) => {
  const { phone, otp } = req.body;
  
  const savedOtp = otpStore.get(phone);
  
  // W produkcji: sprawdź czy otp === savedOtp. 
  // Tutaj: pozwalamy na '000000' dla ułatwienia testów.
  if (otp !== savedOtp && otp !== '000000') {
    return res.status(400).json({ error: 'Invalid OTP' });
  }

  // Znajdź lub stwórz użytkownika
  let user = await prisma.user.findUnique({ where: { phone } });
  
  const isNewUser = !user;
  if (isNewUser) {
    user = await prisma.user.create({
      data: { phone }
    });
  }

  const token = jwt.sign({ userId: user!.id }, JWT_SECRET);
  otpStore.delete(phone);

  res.json({ token, user, isNewUser });
};

export const updateProfile = async (req: Request, res: Response) => {
  const { userId } = (req as any).user;
  const { name, organizationName, trade } = req.body;

  try {
    // 1. Znajdź lub stwórz organizację
    let organization = await prisma.organization.findFirst({
      where: { name: organizationName }
    });

    if (!organization) {
      organization = await prisma.organization.create({
        data: { name: organizationName }
      });
    }

    // 2. Zaktualizuj użytkownika i jego członkostwo
    const user = await prisma.user.update({
      where: { id: userId },
      data: { 
        name,
        orgMemberships: {
          upsert: {
            where: { organizationId_userId: { organizationId: organization.id, userId } },
            create: { organizationId: organization.id, trade },
            update: { trade }
          }
        }
      }
    });

    res.json(user);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to update profile' });
  }
};

// Middleware do weryfikacji tokena
export const authenticate = (req: Request, res: Response, next: NextFunction) => {
  const token = req.headers.authorization?.split(' ')[1];
  if (!token) return res.status(401).json({ error: 'Unauthorized' });

  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    (req as any).user = decoded;
    next();
  } catch (err) {
    res.status(401).json({ error: 'Invalid token' });
  }
};
