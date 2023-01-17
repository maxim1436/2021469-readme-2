import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function fillDb() {
  await prisma.post.upsert({
      where: { id: 2 },
      update: {},
      create: {
        type: 'text_post',
        textPosts: {
          create: {
            title: 'Худеющи!!!!!й123',
            userId: '15',
            text: 'Недавно прочитал страшный роман «Худеющий».',
            announceText: 'На мой взгляд, это один из самых страшных романов Стивена Кинга.',
            tags: 'Реакция на книгу',
            status: 'Опубликована',
          }
        },
      },
  });
  console.info('🤘️ Database was filled')
}

fillDb()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (err) => {
    console.error(err);
    await prisma.$disconnect()

    process.exit(1);
  })


