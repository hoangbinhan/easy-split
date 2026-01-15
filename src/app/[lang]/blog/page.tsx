import Link from "next/link";
import { Bangers } from "next/font/google";
import { ArrowRight, Calendar, Clock } from "lucide-react";
import { Metadata } from "next";
import Image from "next/image";
import { Language } from "@/lib/i18n";
import { blogPosts } from "./blog-data";

const bangers = Bangers({
  weight: "400",
  subsets: ["latin"],
});

const blogMeta = {
  en: {
    title: "Easy Split Blog - Tips & Tricks for TikTok Creators",
    description:
      "Learn how to make your TikTok and Instagram profile standout with our tutorials and guides.",
    heading: "Blog & Tutorials",
    sub: "Tips and tricks to help you build a million-view TikTok channel with unique visuals.",
  },
  vi: {
    title: "Blog Easy Split - Mẹo & Thủ thuật cho TikTok",
    description:
      "Học cách làm nổi bật hồ sơ TikTok và Instagram của bạn với các hướng dẫn của chúng tôi.",
    heading: "Blog & Hướng dẫn",
    sub: "Mẹo hay giúp bạn xây dựng kênh TikTok triệu view với giao diện độc đáo.",
  },
  ko: {
    title: "Easy Split 블로그 - 팁 & 요령",
    description:
      "TikTok 및 Instagram 프로필을 돋보이게 만드는 방법을 알아보세요.",
    heading: "블로그 & 튜토리얼",
    sub: "독특한 비주얼로 백만 뷰 TikTok 채널을 구축하는 데 도움이 되는 팁과 요령.",
  },
  jp: {
    title: "Easy Split ブログ - ヒントとコツ",
    description:
      "TikTokやInstagramのプロフィールを目立たせる方法を学びましょう。",
    heading: "ブログとチュートリアル",
    sub: "ユニークなビジュアルで100万ビューのTikTokチャンネルを構築するのに役立つヒントとコツ。",
  },
  th: {
    title: "บล็อก Easy Split - เคล็ดลับและเทคนิค",
    description: "เรียนรู้วิธีทำให้โปรไฟล์ TikTok และ Instagram ของคุณโดดเด่น",
    heading: "บล็อก & บทช่วยสอน",
    sub: "เคล็ดลับและเทคนิคที่จะช่วยให้คุณสร้างช่อง TikTok ยอดวิวล้านวิว",
  },
  id: {
    title: "Blog Easy Split - Tips & Trik",
    description:
      "Pelajari cara membuat profil TikTok dan Instagram Anda menonjol.",
    heading: "Blog & Tutorial",
    sub: "Tips dan trik untuk membantu Anda membangun saluran TikTok jutaan tayangan.",
  },
  es: {
    title: "Blog de Easy Split - Consejos y Trucos",
    description: "Aprende a destacar tu perfil de TikTok e Instagram.",
    heading: "Blog y Tutoriales",
    sub: "Consejos y trucos para ayudarte a construir un canal de TikTok de un millón de visitas.",
  },
  "zh-CN": {
    title: "Easy Split 博客 - 提示与技巧",
    description: "了解如何让您的 TikTok 和 Instagram 个人资料脱颖而出。",
    heading: "博客与教程",
    sub: "帮助您通过独特的视觉效果建立百万观看 TikTok 频道的提示和技巧。",
  },
  "zh-TW": {
    title: "Easy Split 部落格 - 提示與技巧",
    description: "了解如何讓您的 TikTok 和 Instagram 個人資料脫穎而出。",
    heading: "部落格與教程",
    sub: "幫助您透過獨特的視覺效果建立百萬觀看 TikTok 頻道的提示和技巧。",
  },
  de: {
    title: "Easy Split Blog - Tipps & Tricks",
    description:
      "Lernen Sie, wie Sie Ihr TikTok- und Instagram-Profil hervorheben.",
    heading: "Blog & Tutorials",
    sub: "Tipps und Tricks für einen TikTok-Kanal mit Millionen Aufrufen.",
  },
  ru: {
    title: "Блог Easy Split - Советы и хитрости",
    description: "Узнайте, как выделить свой профиль в TikTok и Instagram.",
    heading: "Блог и уроки",
    sub: "Советы и хитрости для создания канала TikTok с миллионами просмотров.",
  },
  hi: {
    title: "Easy Split ब्लॉग - टिप्स और ट्रिक्स",
    description:
      "अपने TikTok और Instagram प्रोफ़ाइल को अलग बनाने का तरीका जानें।",
    heading: "ब्लॉग और ट्यूटोरियल्स",
    sub: "आपको अद्वितीय दृश्यों के साथ मिलियन-व्यू TikTok चैनल बनाने में मदद करने के लिए टिप्स और ट्रिक्स।",
  },
  "pt-BR": {
    title: "Blog Easy Split - Dicas e Truques",
    description: "Aprenda a destacar seu perfil do TikTok e Instagram.",
    heading: "Blog e Tutoriais",
    sub: "Dicas e truques para ajudá-lo a construir um canal do TikTok com milhões de visualizações.",
  },
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const meta = blogMeta[lang as Language] || blogMeta["en"];
  return {
    title: meta.title,
    description: meta.description,
  };
}

export default async function BlogIndex({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const locale = (lang as Language) || "en";
  // Fallback to EN if specific locale has no posts
  const posts =
    blogPosts[locale] && blogPosts[locale].length > 0
      ? blogPosts[locale]
      : blogPosts["en"];

  const meta = blogMeta[locale] || blogMeta["en"];

  return (
    <div className="max-w-4xl mx-auto space-y-12">
      <section className="text-center space-y-6 pt-8">
        <h1
          className={`text-4xl sm:text-5xl md:text-7xl font-black uppercase text-black ${bangers.className} tracking-widest`}
        >
          {meta.heading}
        </h1>
        <p className="text-lg sm:text-xl font-bold text-slate-600 max-w-2xl mx-auto px-4">
          {meta.sub}
        </p>
      </section>

      <div className="grid gap-6 sm:gap-8">
        {posts.map((post) => (
          <article
            key={post.slug}
            className="group bg-white border-4 border-black p-4 sm:p-6 md:p-8 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] sm:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 transition-all"
          >
            <div className="flex flex-col md:flex-row gap-4 sm:gap-6 items-start md:items-center justify-between mb-4">
              <div className="flex flex-wrap items-center gap-2 sm:gap-4 text-xs sm:text-sm font-bold uppercase tracking-wider text-slate-500">
                <span className="bg-yellow-300 text-black px-2 py-1 border-2 border-black">
                  {post.category}
                </span>
                <div className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" /> {post.date}
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="w-4 h-4" /> {post.readTime}
                </div>
              </div>
            </div>

            <Link href={`/blog/${post.slug}`} className="block">
              <h2 className="text-xl sm:text-2xl md:text-4xl font-black uppercase mb-4 group-hover:underline decoration-4 underline-offset-4 decoration-cyan-400 break-words">
                {post.title}
              </h2>
            </Link>

            <p className="text-base sm:text-lg font-medium text-slate-700 mb-6 leading-relaxed">
              {post.excerpt}
            </p>

            <Link
              href={`/blog/${post.slug}`}
              className="w-full h-auto flex justify-center"
            >
              <Image
                src={post.banner}
                alt={post.title}
                width={1000}
                height={1000}
                className="w-full max-w-[500px] h-auto mb-6 border-2 border-black"
              />
            </Link>

            <Link
              href={`/blog/${post.slug}`}
              className="inline-flex items-center gap-2 font-black uppercase bg-black text-white px-6 py-3 hover:bg-cyan-400 hover:text-black transition-colors"
            >
              {locale === "vi" ? "Đọc ngay" : "Read Post"}{" "}
              <ArrowRight className="w-5 h-5" />
            </Link>
          </article>
        ))}
      </div>
    </div>
  );
}
