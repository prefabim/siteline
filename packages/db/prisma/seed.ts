import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
  // Czyścimy bazę (opcjonalnie)
  await prisma.readReceipt.deleteMany({});
  await prisma.message.deleteMany({});
  await prisma.channel.deleteMany({});
  await prisma.projectMember.deleteMany({});
  await prisma.project.deleteMany({});
  await prisma.organizationMember.deleteMany({});
  await prisma.organization.deleteMany({});
  await prisma.user.deleteMany({});

  const org = await prisma.organization.create({
    data: {
      name: 'Prefabim Construction',
      projects: {
        create: {
          name: 'Osiedle Toruńskie',
          description: 'Budowa bloku mieszkalnego',
          channels: {
            create: [
              { name: 'general', type: 'GENERAL' },
              { name: 'safety', type: 'SAFETY' },
              { name: 'concrete', type: 'TRADE' }
            ]
          }
        }
      }
    }
  });

  const user = await prisma.user.create({
    data: {
      phone: '+48123456789',
      name: 'Jakub Test',
      orgMemberships: {
        create: {
          organizationId: org.id,
          role: 'ADMIN'
        }
      }
    }
  });

  console.log('Seed data created successfully!');
  console.log('Test User Phone: +48123456789');
}

main()
  .catch((e) => { console.error(e); process.exit(1); })
  .finally(async () => { await prisma.$disconnect(); });
