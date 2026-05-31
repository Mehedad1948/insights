import CurlyDivider from "@/components/illustrations/CurlyDivider";
import Container from "@/components/layouts/container";
import Image from "next/image";
import Link from "next/link";

// --- TYPES ---
interface Article {
  id: string;
  title: string;
  excerpt: string;
  slug: string;
  author?: string;
  date?: string;
  category?: string;
  imageUrl?: string;
  readTime?: string;
  source?: string;
  originalLink?: string;
}

interface MagazineSection {
  name: string;
  slug: string;
  logo: string;
  brandColor: string; // <--- ویژگی رنگ برند اضافه شد
  articles: Article[];
}

interface FeaturedArticle extends Article {
  magazine: string;
  magazineSlug: string;
}

// --- MOCK DATA ---
const featuredArticle: FeaturedArticle = {
  id: "f1",
  title: "پایان نظم جهانی: چرا هژمونی آمریکا در حال افول است؟",
  excerpt: "بررسی جامع تغییرات ژئوپلیتیک در دهه آینده و ظهور قدرت‌های منطقه‌ای که معادلات بین‌المللی را بازتعریف می‌کنند.",
  author: "فرید زکریا",
  date: "۱۰ خرداد ۱۴۰۵",
  magazine: "Foreign Affairs",
  magazineSlug: "foreign-affairs",
  slug: "end-of-world-order",
  imageUrl: "https://cdn-live.foreignaffairs.com/sites/default/files/styles/_webp_large_1x/public/images/2026/05/28/2026-05-22T142923Z_709989095_RC2BELA7QLIR_RTRMADP_3_CUBA-CRISIS-PROTEST.JPG.webp?itok=f4Im8iBJ",
};

const magazineSections: MagazineSection[] = [
  {
    name: "Foreign Affairs",
    slug: "foreign-affairs",
    logo: '/Foreign_Affairs_Logo.svg',
    brandColor: "#003b73", // آبی تیره و زنده برای فارین افرز
    articles: [
      {
        id: "fa1",
        title: "هوش مصنوعی و آینده جنگ‌های سایبری",
        excerpt: "چگونه الگوریتم‌های یادگیری ماشین در حال تغییر دکترین‌های نظامی در سراسر جهان هستند.",
        author: "اریک اشمیت",
        date: "۸ خرداد ۱۴۰۵",
        slug: "ai-and-cyber-warfare",
        imageUrl: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1470&auto=format&fit=crop",
      },
      {
        id: "fa2",
        title: "خاورمیانه جدید: عبور از بحران‌های سنتی",
        excerpt: "نگاهی به ائتلاف‌های اقتصادی نوظهور در منطقه و تاثیر آن بر سیاست خارجی قدرت‌های بزرگ.",
        author: "ولی نصر",
        date: "۵ خرداد ۱۴۰۵",
        slug: "the-new-middle-east",
        imageUrl: "https://images.unsplash.com/photo-1578356976695-1f91b72e5192?q=80&w=1472&auto=format&fit=crop",
      },
      {
        id: "fa3",
        title: "اقتصاد چین در تله رشد منفی",
        excerpt: "آیا پکن می‌تواند با تغییر سیاست‌های جمعیتی و اقتصادی از رکود پیش رو جلوگیری کند؟",
        author: "مایکل پتیس",
        date: "۲ خرداد ۱۴۰۵",
        slug: "china-economic-slowdown",
        imageUrl: "https://images.unsplash.com/photo-1549285098-b8089408bf7c?q=80&w=1506&auto=format&fit=crop",
      },
    ],
  },
  {
    name: "The Economist",
    slug: "the-economist",
    logo: '/economist.svg',
    brandColor: "#e3120b", // قرمز معروف و بولد اکونومیست
    articles: [
      {
        id: "eco-1",
        source: "The Economist",
        category: "تجارت",
        title: "رؤسای شرکت‌ها چگونه باید درباره هوش مصنوعی صحبت کنند؟",
        slug: "how-should-bosses-talk-about-ai",
        excerpt: "از کارمندان خواسته می‌شود تا فناوری‌ای را بپذیرند که باعث ترس می‌شود.",
        imageUrl: "https://www.economist.com/cdn-cgi/image/width=1424,quality=80,format=auto/content-assets/images/20260530_WBD001.jpg",
        readTime: "4 دقیقه",
        originalLink: "/business/2026/05/28/how-should-bosses-talk-about-ai",
        date: "۸ خرداد ۱۴۰۵",
      },
      {
        id: "eco-2",
        source: "The Economist",
        category: "اروپا",
        title: "اولین بخشنامه پاپ لئو به ناجی‌گرایی فناورانه حمله می‌کند",
        slug: "leos-first-encyclical-attacks-technological-messianism",
        excerpt: "پاپ نسبت به جایگزینی انسان با هوش مصنوعی هشدار می‌دهد، اگرچه به نظر می‌رسد خودش از آن استفاده می‌کند.",
        imageUrl: "https://www.economist.com/cdn-cgi/image/width=1424,quality=80,format=auto/content-assets/images/20260530_EUD001.jpg",
        readTime: "3 min read",
        originalLink: "/europe/2026/05/28/leos-first-encyclical-attacks-technological-messianism",
        date: "۸ خرداد ۱۴۰۵",
      },
      {
        id: "eco-3",
        source: "The Economist",
        category: "مالی و اقتصاد",
        title: "ژاپن، کره جنوبی و تایوان از زوال صنعتی رنج می‌برند",
        slug: "japan-south-korea-and-taiwan-are-suffering-industrial-rot",
        excerpt: "هوش مصنوعی در حال پنهان کردن یک شوک چینی است.",
        imageUrl: "https://www.economist.com/cdn-cgi/image/width=1424,quality=80,format=auto/content-assets/images/20260523_FBD001.jpg",
        readTime: "10 min read",
        originalLink: "/finance-and-economics/2026/05/27/japan-south-korea-and-taiwan-are-suffering-industrial-rot",
        date: "۷ خرداد ۱۴۰۵",
      },
      {
        id: "eco-4",
        source: "The Economist",
        category: "مقاله مهمان",
        title: "موج عرضه‌های اولیه (IPO) کنترل خدایان هوش مصنوعی بر آینده را تثبیت خواهد کرد",
        slug: "the-ipo-wave-will-enshrine-the-ai-gods-control-over-the-future",
        excerpt: "جیل وایتهد می‌نویسد: عرضه‌های قریب‌الوقوع اسپیس‌ایکس، اوپن‌ای‌آی و آنتروپیک، آزمایش‌هایی بالقوه خطرناک در حاکمیت شرکتی هستند.",
        imageUrl: "https://www.economist.com/cdn-cgi/image/width=1424,quality=80,format=auto/content-assets/images/20260523_BID003.jpg",
        readTime: "4 دقیقه",
        originalLink: "/by-invitation/2026/05/21/the-ipo-wave-will-enshrine-the-ai-gods-control-over-the-future",
        date: "۱ خرداد ۱۴۰۵",
      },
      {
        id: "eco-5",
        source: "The Economist",
        category: "تجارت",
        title: "گوگل در حال خلع جایگاه اوپن‌ای‌آی به عنوان پادشاه هوش مصنوعی مصرف‌کننده است",
        slug: "google-is-dethroning-openai-as-the-king-of-consumer-ai",
        excerpt: "اما کاربران آن ماهانه کوادریلیون‌ها توکن مصرف می‌کنند.",
        imageUrl: "https://www.economist.com/cdn-cgi/image/width=1424,quality=80,format=auto/content-assets/images/20260523_WBP502.jpg",
        readTime: "4 دقیقه",
        originalLink: "/business/2026/05/20/google-is-dethroning-openai-as-the-king-of-consumer-ai",
        date: "۳۱ اردیبهشت ۱۴۰۵",
      },
      {
        id: "eco-6",
        source: "The Economist",
        category: "تجارت",
        title: "سوپراپلیکیشن‌های هوش مصنوعی در حال بازسازی اینترنت چین هستند",
        slug: "ai-super-apps-are-remaking-chinas-internet",
        excerpt: "به عصر عامل‌محور (Agentic) خوش آمدید.",
        imageUrl: "https://www.economist.com/cdn-cgi/image/width=1424,quality=80,format=auto/content-assets/images/20260523_WBD003.jpg",
        readTime: "4 دقیقه",
        originalLink: "/business/2026/05/17/ai-super-apps-are-remaking-chinas-internet",
        date: "۲۸ اردیبهشت ۱۴۰۵",
      },
    ],
  },
];

export default function HomePage() {
  return (
    <main className="min-h-screen pb-20 overflow-x-hidden">
      {/* HERO SECTION */}
      <section className="border-b border-border py-16 px-4 sm:px-6 lg:px-8">
        <Image
          className="w-24 mb-8"
          src={'/Foreign_Affairs_Logo.svg'}
          width={150}
          height={50}
          alt="Foreign Affairs Logo"
        />
        <Container className="flex flex-col md:flex-row gap-10 items-center">
          <div className="md:w-2/3 space-y-6">
            <div className="flex items-center gap-3 text-sm font-medium">
              <span className="text-primary uppercase tracking-wider">مقاله ویژه</span>
              <span className="text-muted-foreground">|</span>
              <span className="text-muted-foreground">{featuredArticle.magazine}</span>
            </div>
            
            <Link href={`/${featuredArticle.magazineSlug}/${featuredArticle.slug}`} className="block group">
              <h1 className="text-4xl md:text-5xl font-bold leading-tight text-foreground group-hover:text-primary transition-colors duration-200">
                {featuredArticle.title}
              </h1>
            </Link>
            
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl">
              {featuredArticle.excerpt}
            </p>
            
            <div className="flex items-center gap-4 pt-2 text-sm text-muted-foreground">
              {featuredArticle.author && (
                <>
                  <span className="font-semibold text-foreground">{featuredArticle.author}</span>
                  <span>•</span>
                </>
              )}
              <span>{featuredArticle.date}</span>
            </div>
          </div>
          
          {featuredArticle.imageUrl && (
            <div className="md:w-1/3 w-full aspect-[4/3] bg-muted border border-border rounded-lg flex items-center justify-center overflow-hidden relative">
              <Image 
                src={featuredArticle.imageUrl}
                className="object-cover"
                alt={featuredArticle.title}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>
          )}
        </Container>
      </section>

      {/* MAGAZINE SECTIONS */}
      <div className="pt-16 space-y-24">
        {magazineSections.map((section) => (
          <section key={section.slug} className="relative">
            
            {/* LOGO POSITIONING WITH DYNAMIC BRAND COLOR */}
            <div 
              className="flex p-4 justify-center mb-6 w-full gap-6 transition-colors duration-300"
            >
              <CurlyDivider className="w-36 text-gray-600" />
              <Image
                src={section.logo}
                alt={`${section.name} Logo`}
                width={200}
                height={100}
                className="object-contain w-32 lg:w-28 hover:opacity-100 transition-all duration-300"
              />
              <CurlyDivider className="w-36 text-gray-600 -scale-x-100" />
            </div>

            {/* Section Header WITH DYNAMIC BORDER COLOR */}
            <Container 
              className="flex items-baseline justify-between border-b-2 pb-4 mb-8 transition-colors duration-300"
            >
              <h2 className="text-2xl font-bold text-foreground">
                تازه‌های <span className="font-serif">{section.name}</span>
              </h2>
              <Link 
                href={`/${section.slug}`} 
                className="text-sm font-medium hover:opacity-80 transition-opacity"
                style={{ color: section.brandColor }}
              >
                مشاهده همه ←
              </Link>
            </Container>

            {/* Articles Grid */}
            <Container className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
              {section.articles.map((article) => (
                <article key={article.id} className="group flex flex-col">
                  {/* Article Image */}
                  {article.imageUrl && (
                    <Link 
                      href={`/${section.slug}/${article.slug}`} 
                      className="block relative w-full aspect-[3/2] mb-4 rounded-lg overflow-hidden border-2 border-transparent transition-colors duration-300 group-hover:border-current"
                      style={{ color: section.brandColor }}
                    >
                      <Image
                        src={article.imageUrl}
                        alt={article.title}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                    </Link>
                  )}
                  
                  {/* Meta (Category / Date) */}
                  <div className="flex items-center gap-2 text-xs text-muted-foreground mb-2 mt-2">
                    <span 
                      className="uppercase tracking-wide font-medium"
                      style={{ color: section.brandColor }}
                    >
                      {article.category || section.name}
                    </span>
                    <span>•</span>
                    <time>{article.date}</time>
                  </div>
                  
                  {/* Title */}
                  <Link href={`/${section.slug}/${article.slug}`} className="block mb-2">
                    <h3 
                      className="text-xl font-bold leading-snug text-foreground transition-colors duration-200"
                      style={{ '--hover-color': section.brandColor } as React.CSSProperties}
                    >
                      <span className="hover:text-[var(--hover-color)]">{article.title}</span>
                    </h3>
                  </Link>
                  
                  {/* Excerpt */}
                  <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3 mb-4">
                    {article.excerpt}
                  </p>
                  
                  {/* Footer (Author / Read Time) */}
                  <div className="mt-auto pt-2 text-sm font-medium text-foreground flex items-center justify-between">
                    <span>{article.author || ""}</span>
                    {article.readTime && (
                      <span className="text-xs text-muted-foreground font-normal">{article.readTime}</span>
                    )}
                  </div>
                </article>
              ))}
            </Container>
          </section>
        ))}
      </div>
    </main>
  );
}
