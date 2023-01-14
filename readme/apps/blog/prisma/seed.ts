import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function fillDb() {
  await prisma.text_Post.upsert({
    where: { id: 1 },
    update: {},
    create: {

                  title: 'Худеющи!!!!!й',
                  userId: '15',
                  text: 'Недавно прочитал страшный роман «Худеющий».',
                  announceText: 'На мой взгляд, это один из самых страшных романов Стивена Кинга.',
                  tags: 'Реакция на книгу',
                  status: 'Опубликована',
                  comments: {
                    create: [
                      {
                        text: 'Вау! Отличная книга.',
                        userId: '14',
                      }
                    ]
                  }
    }
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
