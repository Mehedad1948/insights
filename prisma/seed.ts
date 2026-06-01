import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  console.log('Seeding database...')

  // Clear existing data (optional, but good for starting fresh)
  await prisma.article.deleteMany()
  await prisma.magazine.deleteMany()

  // 1. Create Foreign Affairs Magazine & Articles
  const foreignAffairs = await prisma.magazine.create({
    data: {
      name: 'Foreign Affairs',
      slug: 'foreign-affairs',
      brandColor: '#003b73',
      logoUrl: '/logos/foreign-affairs.png', // Update with your actual path
      articles: {
        create: [
          {
            slug: 'future-of-ai-diplomacy',
            titleOriginal: 'The Future of AI in Global Diplomacy',
            titleFa: 'آینده هوش مصنوعی در دیپلماسی جهانی',
            excerptFa: 'چگونه ابزارهای هوش مصنوعی در حال تغییر نحوه مذاکره کشورها هستند.',
            contentFa: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است...',
            imageUrl: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1000',
            originalLink: 'https://foreignaffairs.com/example-1',
            readTime: 6,
            publishedAt: new Date(),
          }
        ]
      }
    }
  })

  // 2. Create The Economist Magazine & Articles
  const economist = await prisma.magazine.create({
    data: {
      name: 'The Economist',
      slug: 'the-economist',
      brandColor: '#e3120b',
      logoUrl: '/logos/economist.png', // Update with your actual path
      articles: {
        create: [
          {
            slug: 'economic-outlook-2024',
            titleOriginal: 'Global Economic Outlook 2024',
            titleFa: 'چشم‌انداز اقتصاد جهانی در سال ۲۰۲۴',
            excerptFa: 'تحلیل جامع از تورم، رشد اقتصادی و چالش‌های پیش‌رو در سال آینده.',
            contentFa: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است...',
            imageUrl: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=1000',
            originalLink: 'https://economist.com/example-1',
            readTime: 8,
            publishedAt: new Date(),
          }
        ]
      }
    }
  })

  console.log({ foreignAffairs, economist })
  console.log('Database seeded successfully!')
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
