import { notFound } from 'next/navigation';
import db from '@/lib/db'; // Your Prisma/Drizzle instance

interface PageProps {
  params: { magazineSlug: string; articleSlug: string };
}

export default async function ArticlePage({ params }: PageProps) {
  const article = await db.article.findFirst({
    where: { 
      slug: params.articleSlug,
      magazine: { slug: params.magazineSlug }
    },
    include: { magazine: true }
  });

  if (!article) notFound();

  return (
    <article className="max-w-3xl mx-auto py-12 px-4">
      {/* Render header, image, and content */}
    </article>
  );
}
