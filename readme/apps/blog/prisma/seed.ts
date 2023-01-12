import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function fillDb() {
  await prisma.status.upsert({
    where: { id: 1 },
    update: {},
    create: {
      title: 'Опубликована',
      posts: {
        create: [
          {
            textPosts:{
              create:[
                {
                  title: 'Худеющий',
                  userId: '13',
                  text: 'Недавно прочитал страшный роман «Худеющий».',
                  announceText: 'На мой взгляд, это один из самых страшных романов Стивена Кинга.',
                  tags: 'Реакция на книгу',
                }
              ]
            }
          },
        ]
      },
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

  // title: 'Худеющий',
  //           userId: '13',
  //           text: 'Недавно прочитал страшный роман «Худеющий».',
  //           announceText: 'На мой взгляд, это один из самых страшных романов Стивена Кинга.',
  //           tags: 'Реакция на книгу',
