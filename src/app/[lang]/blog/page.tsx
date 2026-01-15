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

export const metadata: Metadata = {
  title: "Easy Split Blog - Tips & Tricks for TikTok Creators",
  description:
    "Learn how to make your TikTok and Instagram profile standout with our tutorials and guides.",
};

export default async function BlogIndex({
  params,
}: {
  params: Promise<{ lang: Language }>;
}) {
  const { lang } = await params;
  const locale = lang || "en";
  // Fallback to EN if specific locale has no posts
  const posts =
    blogPosts[locale] && blogPosts[locale].length > 0
      ? blogPosts[locale]
      : blogPosts["en"];

  return (
    <div className="max-w-4xl mx-auto space-y-12">
      <section className="text-center space-y-6 pt-8">
        <h1
          className={`text-5xl md:text-7xl font-black uppercase text-black ${bangers.className} tracking-widest`}
        >
          Blog & Tutorials
        </h1>
        <p className="text-xl font-bold text-slate-600 max-w-2xl mx-auto">
          {locale === "vi"
            ? "Mẹo hay giúp bạn xây dựng kênh TikTok triệu view với giao diện độc đáo."
            : "Tips and tricks to help you build a million-view TikTok channel with unique visuals."}
        </p>
      </section>

      <div className="grid gap-8">
        {posts.map((post) => (
          <article
            key={post.slug}
            className="group bg-white border-4 border-black p-6 sm:p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 transition-all"
          >
            <div className="flex flex-col md:flex-row gap-6 items-start md:items-center justify-between mb-4">
              <div className="flex items-center gap-4 text-sm font-bold uppercase tracking-wider text-slate-500">
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
              <h2 className="text-2xl sm:text-4xl font-black uppercase mb-4 group-hover:underline decoration-4 underline-offset-4 decoration-cyan-400">
                {post.title}
              </h2>
            </Link>

            <p className="text-lg font-medium text-slate-700 mb-6 leading-relaxed">
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
                className="w-auto h-[200px] mb-6"
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
