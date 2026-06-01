// src/app/[magazineSlug]/[articleSlug]/page.tsx
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import db from '@/lib/db';

interface PageProps {
  params: Promise<{ magazineSlug: string; articleSlug: string }>;
}

export default async function ArticlePage({ params }: PageProps) {
  // Await the params object (Next.js 15+ requirement)
  const { articleSlug, magazineSlug } = await params;
  
  const article = await db.article.findFirst({
    where: { 
      slug: articleSlug,
      magazine: { slug: magazineSlug }
    },
    include: { magazine: true }
  });

  if (!article) notFound();

  // Format the date to Persian
  const formattedDate = new Intl.DateTimeFormat('fa-IR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(new Date(article.publishedAt));

  return (
    <main className="min-h-screen pb-24 overflow-x-hidden bg-background">
      <article className="max-w-3xl mx-auto pt-12 md:pt-20 px-4 sm:px-6">
        
        {/* HEADER SECTION */}
        <header className="mb-10 text-center md:text-right">
          {/* Magazine Brand & Meta */}
          <div className="flex flex-col md:flex-row md:items-center gap-4 text-sm font-medium mb-6">
            <Link 
              href={`/${article.magazine.slug}`}
              className="inline-flex items-center gap-3 transition-opacity hover:opacity-80"
            >
              {article.magazine.logoUrl && (
                <Image 
                  src={article.magazine.logoUrl} 
                  alt={article.magazine.name} 
                  width={120} 
                  height={40} 
                  className="object-contain h-8 w-auto"
                />
              )}
            </Link>
            
            <div className="hidden md:block w-1 h-1 rounded-full bg-border" />
            
            <div className="flex items-center justify-center md:justify-start gap-4 text-muted-foreground">
              <time dateTime={new Date(article.publishedAt).toISOString()}>
                {formattedDate}
              </time>
              <div className="w-1 h-1 rounded-full bg-border" />
              <span>{article.readTime} دقیقه مطالعه</span>
            </div>
          </div>

          {/* Titles */}
          <h1 className="text-3xl md:text-5xl font-bold leading-[1.4] text-foreground mb-4">
            {article.titleFa}
          </h1>
          
          {article.titleOriginal && (
            <p className="text-lg md:text-xl text-muted-foreground font-serif dir-ltr text-left md:text-right opacity-80">
              {article.titleOriginal}
            </p>
          )}

          {/* Dynamic Brand Accent Line */}
          <div 
            className="w-24 h-1 mt-8 mb-4 rounded-full mx-auto md:mx-0"
            style={{ backgroundColor: article.magazine.brandColor }}
          />
        </header>

        {/* HERO IMAGE */}
        {article.imageUrl && (
          <figure className="mb-12 relative w-full aspect-[16/9] md:aspect-[2/1] rounded-2xl overflow-hidden border border-border shadow-sm">
            <Image
              src={article.imageUrl}
              alt={article.titleFa}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 800px"
              priority
            />
          </figure>
        )}

        {/* EXCERPT (Lead Paragraph) */}
        {article.excerptFa && (
          <div className="text-xl leading-relaxed font-medium text-foreground/90 mb-10 border-r-4 pr-4 py-1"
               style={{ borderColor: article.magazine.brandColor }}>
            {article.excerptFa}
          </div>
        )}

        {/* MAIN CONTENT */}
        {/* Using Tailwind Typography (prose) for beautiful article rendering */}
        <div className="prose prose-lg dark:prose-invert prose-headings:font-bold prose-a:text-primary max-w-none prose-p:leading-loose">
          {/* 
            Assuming contentFa is plain text based on your seed. 
            If it's HTML in the future, use dangerouslySetInnerHTML.
          */}
          <p>{article.contentFa}</p>
        </div>

        {/* FOOTER / ORIGINAL SOURCE */}
        {article.originalLink && (
          <footer className="mt-16 pt-8 border-t border-border flex justify-between items-center">
            <a 
              href={article.originalLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-semibold transition-colors hover:opacity-80 px-5 py-2.5 rounded-full border border-border"
              style={{ color: article.magazine.brandColor }}
            >
              مشاهده مقاله اصلی به زبان انگلیسی
              <span className="text-lg leading-none">↗</span>
            </a>
          </footer>
        )}
      </article>
    </main>
  );
}
