import express from 'express';
import { createServer } from 'http';
import { Server } from 'socket.io';
import cors from 'cors';
import dotenv from 'dotenv';
import { prisma } from '@siteline/db';
import { requestOTP, verifyOTP, updateProfile, authenticate } from './auth';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// AUTH ROUTES
app.post('/auth/request-otp', requestOTP);
app.post('/auth/verify-otp', verifyOTP);
app.put('/auth/profile', authenticate, updateProfile);

// PROJECT & MESSAGING ROUTES
app.get('/projects/:projectId/channels', authenticate, async (req, res) => {
  try {
    const channels = await prisma.channel.findMany({
      where: { projectId: req.params.projectId },
      include: { _count: { select: { messages: true } } }
    });
    res.json(channels);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch channels' });
  }
});

app.get('/channels/:channelId/messages', authenticate, async (req, res) => {
  try {
    const messages = await prisma.message.findMany({
      where: { channelId: req.params.channelId },
      include: { user: true, attachments: true },
      orderBy: { createdAt: 'desc' },
      take: 50
    });
    res.json(messages);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch messages' });
  }
});

const httpServer = createServer(app);
const io = new Server(httpServer, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"]
  }
});

io.on('connection', (socket) => {
  console.log('User connected:', socket.id);

  socket.on('join-channel', (channelId) => {
    socket.join(`channel:${channelId}`);
    console.log(`User ${socket.id} joined channel ${channelId}`);
  });

  socket.on('send-message', async (data) => {
    const { channelId, userId, content, type, tempId } = data;

    try {
      const message = await prisma.message.create({
        data: {
          content,
          type: type === 'PHOTO' ? 'PHOTO' : 'TEXT',
          channelId,
          userId,
        },
        include: { user: true }
      });

      io.to(`channel:${channelId}`).emit('new-message', {
        ...message,
        tempId 
      });
    } catch (error) {
      console.error('Failed to save message:', error);
      socket.emit('message-error', { tempId, error: 'Failed to save' });
    }
  });

  socket.on('disconnect', () => {
    console.log('User disconnected');
  });
});

const PORT = process.env.PORT || 3001;

httpServer.listen(PORT, () => {
  console.log(`SiteLine API & Messaging server is running on port ${PORT}`);
});
