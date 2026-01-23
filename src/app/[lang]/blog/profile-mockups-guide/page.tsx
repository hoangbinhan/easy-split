import Link from "next/link";
import { Bangers } from "next/font/google";
import { ArrowLeft, CheckCircle, Smartphone, Layers } from "lucide-react";
import { Metadata } from "next";
import { Language } from "@/lib/i18n";
import { blogPosts } from "../blog-data";
import Image from "next/image";

const bangers = Bangers({
  weight: "400",
  subsets: ["latin"],
});

export async function generateMetadata(props: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const params = await props.params;
  const { lang } = params;
  const post =
    blogPosts[lang as Language]?.find(
      (p) => p.slug === "profile-mockups-guide",
    ) || blogPosts["en"].find((p) => p.slug === "profile-mockups-guide");

  const languages: Record<string, string> = {};
  (Object.keys(content) as Language[]).forEach((l) => {
    languages[l] = `https://easysplit.click/${l}/blog/profile-mockups-guide`;
  });

  return {
    title: `${post?.title} - Easy Split`,
    description: post?.excerpt,
    alternates: {
      canonical: `https://easysplit.click/${lang}/blog/profile-mockups-guide`,
      languages: languages,
    },
  };
}

type GuideContent = {
  back: string;
  title_part_1: string;
  title_part_2: string;
  title_part_3: string;
  tags: string[];
  intro: string;
  section1_title: string;
  section1_desc: string;
  section1_points: string[];
  section2_title: string;
  section2_desc: string;
  section2_step1: string;
  section2_step2: string;
  section2_step3: string;
  tip_title: string;
  tip_desc: string;
  cta_title: string;
  cta_desc: string;
  cta_btn: string;
};

const content: Record<string, GuideContent> = {
  en: {
    back: "Back to Blog",
    title_part_1: "Create Realistic",
    title_part_2: "Profile Mockups",
    title_part_3: "for Instagram & TikTok",
    tags: ["Mockups", "5 min read", "Growth Tips"],
    intro:
      "Want to visualize how your feed will look before posting? Or maybe create stunning screenshots for your media kit? Our Profile Mockup tools are here to help.",
    section1_title: "Why Use Profile Mockups?",
    section1_desc:
      "A profile mockup allows you to simulate exactly how your Instagram or TikTok profile will appear to visitors. This is essential for:",
    section1_points: [
      "Planning your grid aesthetic",
      "Testing profile picture and bio combinations",
      "Creating marketing materials for brands",
      "Showcasing your potential to sponsors",
    ],
    section2_title: "How to Create a Mockup",
    section2_desc:
      "Creating a professional mockup takes just a few seconds with Easy Split.",
    section2_step1:
      "Choose your platform: Select either TikTok Profile Mockup or Instagram Profile Mockup from our tools menu.",
    section2_step2:
      "Customize details: Upload your profile picture, enter your username, bio, and follower counts. You can even toggle 'Verified' badges!",
    section2_step3:
      "Download high-res: Once you're happy with the look, download the high-resolution image to use anywhere.",
    tip_title: "Pro Tip",
    tip_desc:
      "Use our mockups to pitch to brands! Send them a screenshot of their product featured on your feed before you even post. It increases your chances of landing a deal significantly.",
    cta_title: "Start Designing Your Feed",
    cta_desc: "Try our Mockup generators for free!",
    cta_btn: "Go to Mockup Tools",
  },
  vi: {
    back: "Quay lại Blog",
    title_part_1: "Tạo Mockup",
    title_part_2: "Profile Giả Lập",
    title_part_3: "cho Instagram & TikTok",
    tags: ["Mockups", "5 phút đọc", "Mẹo Tăng Trưởng"],
    intro:
      "Bạn muốn xem trước luồng tin (feed) của mình trông như thế nào trước khi đăng? Hoặc tạo những bức ảnh chụp màn hình tuyệt đẹp cho bộ kit truyền thông? Các công cụ Profile Mockup của chúng tôi sẵn sàng hỗ trợ bạn.",
    section1_title: "Tại Sao Nên Dùng Profile Mockup?",
    section1_desc:
      "Mockup profile cho phép bạn mô phỏng chính xác giao diện Instagram hoặc TikTok của bạn trong mắt người xem. Điều này rất cần thiết để:",
    section1_points: [
      "Lên kế hoạch thẩm mỹ cho grid (lưới ảnh)",
      "Thử nghiệm kết hợp ảnh đại diện và tiểu sử (bio)",
      "Tạo tài liệu marketing cho thương hiệu",
      "Trình bày tiềm năng của bạn với các nhà tài trợ",
    ],
    section2_title: "Cách Tạo Mockup",
    section2_desc:
      "Tạo một mockup chuyên nghiệp chỉ mất vài giây với Easy Split.",
    section2_step1:
      "Chọn nền tảng: Chọn TikTok Profile Mockup hoặc Instagram Profile Mockup từ menu công cụ.",
    section2_step2:
      "Tùy chỉnh chi tiết: Tải lên ảnh đại diện, nhập tên người dùng, bio, và số lượng follower. Bạn thậm chí có thể bật tích xanh (Verified)!",
    section2_step3:
      "Tải ảnh chất lượng cao: Khi ưng ý, hãy tải ảnh độ phân giải cao về để sử dụng ở bất cứ đâu.",
    tip_title: "Mẹo Chuyên Nghiệp",
    tip_desc:
      "Sử dụng mockup để chào hàng các thương hiệu! Gửi cho họ ảnh chụp màn hình sản phẩm của họ xuất hiện trên feed của bạn trước cả khi bạn đăng. Điều này tăng khả năng chốt deal đáng kể.",
    cta_title: "Bắt Đầu Thiết Kế Feed Của Bạn",
    cta_desc: "Thử trình tạo Mockup miễn phí ngay!",
    cta_btn: "Đến Công Cụ Mockup",
  },
  // Adding placeholders for other languages to ensure functionality
  ko: {
    back: "Back to Blog",
    title_part_1: "Create Realistic",
    title_part_2: "Profile Mockups",
    title_part_3: "for Instagram & TikTok",
    tags: ["Mockups", "5 min read", "Growth Tips"],
    intro:
      "Want to visualize how your feed will look before posting? Or maybe create stunning screenshots for your media kit? Our Profile Mockup tools are here to help.",
    section1_title: "Why Use Profile Mockups?",
    section1_desc:
      "A profile mockup allows you to simulate exactly how your Instagram or TikTok profile will appear to visitors. This is essential for:",
    section1_points: [
      "Planning your grid aesthetic",
      "Testing profile picture and bio combinations",
      "Creating marketing materials for brands",
      "Showcasing your potential to sponsors",
    ],
    section2_title: "How to Create a Mockup",
    section2_desc:
      "Creating a professional mockup takes just a few seconds with Easy Split.",
    section2_step1:
      "Choose your platform: Select either TikTok Profile Mockup or Instagram Profile Mockup from our tools menu.",
    section2_step2:
      "Customize details: Upload your profile picture, enter your username, bio, and follower counts. You can even toggle 'Verified' badges!",
    section2_step3:
      "Download high-res: Once you're happy with the look, download the high-resolution image to use anywhere.",
    tip_title: "Pro Tip",
    tip_desc:
      "Use our mockups to pitch to brands! Send them a screenshot of their product featured on your feed before you even post. It increases your chances of landing a deal significantly.",
    cta_title: "Start Designing Your Feed",
    cta_desc: "Try our Mockup generators for free!",
    cta_btn: "Go to Mockup Tools",
  },
  jp: {
    back: "Back to Blog",
    title_part_1: "Create Realistic",
    title_part_2: "Profile Mockups",
    title_part_3: "for Instagram & TikTok",
    tags: ["Mockups", "5 min read", "Growth Tips"],
    intro:
      "Want to visualize how your feed will look before posting? Or maybe create stunning screenshots for your media kit? Our Profile Mockup tools are here to help.",
    section1_title: "Why Use Profile Mockups?",
    section1_desc:
      "A profile mockup allows you to simulate exactly how your Instagram or TikTok profile will appear to visitors. This is essential for:",
    section1_points: [
      "Planning your grid aesthetic",
      "Testing profile picture and bio combinations",
      "Creating marketing materials for brands",
      "Showcasing your potential to sponsors",
    ],
    section2_title: "How to Create a Mockup",
    section2_desc:
      "Creating a professional mockup takes just a few seconds with Easy Split.",
    section2_step1:
      "Choose your platform: Select either TikTok Profile Mockup or Instagram Profile Mockup from our tools menu.",
    section2_step2:
      "Customize details: Upload your profile picture, enter your username, bio, and follower counts. You can even toggle 'Verified' badges!",
    section2_step3:
      "Download high-res: Once you're happy with the look, download the high-resolution image to use anywhere.",
    tip_title: "Pro Tip",
    tip_desc:
      "Use our mockups to pitch to brands! Send them a screenshot of their product featured on your feed before you even post. It increases your chances of landing a deal significantly.",
    cta_title: "Start Designing Your Feed",
    cta_desc: "Try our Mockup generators for free!",
    cta_btn: "Go to Mockup Tools",
  },
  th: {
    back: "Back to Blog",
    title_part_1: "Create Realistic",
    title_part_2: "Profile Mockups",
    title_part_3: "for Instagram & TikTok",
    tags: ["Mockups", "5 min read", "Growth Tips"],
    intro:
      "Want to visualize how your feed will look before posting? Or maybe create stunning screenshots for your media kit? Our Profile Mockup tools are here to help.",
    section1_title: "Why Use Profile Mockups?",
    section1_desc:
      "A profile mockup allows you to simulate exactly how your Instagram or TikTok profile will appear to visitors. This is essential for:",
    section1_points: [
      "Planning your grid aesthetic",
      "Testing profile picture and bio combinations",
      "Creating marketing materials for brands",
      "Showcasing your potential to sponsors",
    ],
    section2_title: "How to Create a Mockup",
    section2_desc:
      "Creating a professional mockup takes just a few seconds with Easy Split.",
    section2_step1:
      "Choose your platform: Select either TikTok Profile Mockup or Instagram Profile Mockup from our tools menu.",
    section2_step2:
      "Customize details: Upload your profile picture, enter your username, bio, and follower counts. You can even toggle 'Verified' badges!",
    section2_step3:
      "Download high-res: Once you're happy with the look, download the high-resolution image to use anywhere.",
    tip_title: "Pro Tip",
    tip_desc:
      "Use our mockups to pitch to brands! Send them a screenshot of their product featured on your feed before you even post. It increases your chances of landing a deal significantly.",
    cta_title: "Start Designing Your Feed",
    cta_desc: "Try our Mockup generators for free!",
    cta_btn: "Go to Mockup Tools",
  },
  id: {
    back: "Back to Blog",
    title_part_1: "Create Realistic",
    title_part_2: "Profile Mockups",
    title_part_3: "for Instagram & TikTok",
    tags: ["Mockups", "5 min read", "Growth Tips"],
    intro:
      "Want to visualize how your feed will look before posting? Or maybe create stunning screenshots for your media kit? Our Profile Mockup tools are here to help.",
    section1_title: "Why Use Profile Mockups?",
    section1_desc:
      "A profile mockup allows you to simulate exactly how your Instagram or TikTok profile will appear to visitors. This is essential for:",
    section1_points: [
      "Planning your grid aesthetic",
      "Testing profile picture and bio combinations",
      "Creating marketing materials for brands",
      "Showcasing your potential to sponsors",
    ],
    section2_title: "How to Create a Mockup",
    section2_desc:
      "Creating a professional mockup takes just a few seconds with Easy Split.",
    section2_step1:
      "Choose your platform: Select either TikTok Profile Mockup or Instagram Profile Mockup from our tools menu.",
    section2_step2:
      "Customize details: Upload your profile picture, enter your username, bio, and follower counts. You can even toggle 'Verified' badges!",
    section2_step3:
      "Download high-res: Once you're happy with the look, download the high-resolution image to use anywhere.",
    tip_title: "Pro Tip",
    tip_desc:
      "Use our mockups to pitch to brands! Send them a screenshot of their product featured on your feed before you even post. It increases your chances of landing a deal significantly.",
    cta_title: "Start Designing Your Feed",
    cta_desc: "Try our Mockup generators for free!",
    cta_btn: "Go to Mockup Tools",
  },
  es: {
    back: "Back to Blog",
    title_part_1: "Create Realistic",
    title_part_2: "Profile Mockups",
    title_part_3: "for Instagram & TikTok",
    tags: ["Mockups", "5 min read", "Growth Tips"],
    intro:
      "Want to visualize how your feed will look before posting? Or maybe create stunning screenshots for your media kit? Our Profile Mockup tools are here to help.",
    section1_title: "Why Use Profile Mockups?",
    section1_desc:
      "A profile mockup allows you to simulate exactly how your Instagram or TikTok profile will appear to visitors. This is essential for:",
    section1_points: [
      "Planning your grid aesthetic",
      "Testing profile picture and bio combinations",
      "Creating marketing materials for brands",
      "Showcasing your potential to sponsors",
    ],
    section2_title: "How to Create a Mockup",
    section2_desc:
      "Creating a professional mockup takes just a few seconds with Easy Split.",
    section2_step1:
      "Choose your platform: Select either TikTok Profile Mockup or Instagram Profile Mockup from our tools menu.",
    section2_step2:
      "Customize details: Upload your profile picture, enter your username, bio, and follower counts. You can even toggle 'Verified' badges!",
    section2_step3:
      "Download high-res: Once you're happy with the look, download the high-resolution image to use anywhere.",
    tip_title: "Pro Tip",
    tip_desc:
      "Use our mockups to pitch to brands! Send them a screenshot of their product featured on your feed before you even post. It increases your chances of landing a deal significantly.",
    cta_title: "Start Designing Your Feed",
    cta_desc: "Try our Mockup generators for free!",
    cta_btn: "Go to Mockup Tools",
  },
  "zh-CN": {
    back: "Back to Blog",
    title_part_1: "Create Realistic",
    title_part_2: "Profile Mockups",
    title_part_3: "for Instagram & TikTok",
    tags: ["Mockups", "5 min read", "Growth Tips"],
    intro:
      "Want to visualize how your feed will look before posting? Or maybe create stunning screenshots for your media kit? Our Profile Mockup tools are here to help.",
    section1_title: "Why Use Profile Mockups?",
    section1_desc:
      "A profile mockup allows you to simulate exactly how your Instagram or TikTok profile will appear to visitors. This is essential for:",
    section1_points: [
      "Planning your grid aesthetic",
      "Testing profile picture and bio combinations",
      "Creating marketing materials for brands",
      "Showcasing your potential to sponsors",
    ],
    section2_title: "How to Create a Mockup",
    section2_desc:
      "Creating a professional mockup takes just a few seconds with Easy Split.",
    section2_step1:
      "Choose your platform: Select either TikTok Profile Mockup or Instagram Profile Mockup from our tools menu.",
    section2_step2:
      "Customize details: Upload your profile picture, enter your username, bio, and follower counts. You can even toggle 'Verified' badges!",
    section2_step3:
      "Download high-res: Once you're happy with the look, download the high-resolution image to use anywhere.",
    tip_title: "Pro Tip",
    tip_desc:
      "Use our mockups to pitch to brands! Send them a screenshot of their product featured on your feed before you even post. It increases your chances of landing a deal significantly.",
    cta_title: "Start Designing Your Feed",
    cta_desc: "Try our Mockup generators for free!",
    cta_btn: "Go to Mockup Tools",
  },
  "zh-TW": {
    back: "Back to Blog",
    title_part_1: "Create Realistic",
    title_part_2: "Profile Mockups",
    title_part_3: "for Instagram & TikTok",
    tags: ["Mockups", "5 min read", "Growth Tips"],
    intro:
      "Want to visualize how your feed will look before posting? Or maybe create stunning screenshots for your media kit? Our Profile Mockup tools are here to help.",
    section1_title: "Why Use Profile Mockups?",
    section1_desc:
      "A profile mockup allows you to simulate exactly how your Instagram or TikTok profile will appear to visitors. This is essential for:",
    section1_points: [
      "Planning your grid aesthetic",
      "Testing profile picture and bio combinations",
      "Creating marketing materials for brands",
      "Showcasing your potential to sponsors",
    ],
    section2_title: "How to Create a Mockup",
    section2_desc:
      "Creating a professional mockup takes just a few seconds with Easy Split.",
    section2_step1:
      "Choose your platform: Select either TikTok Profile Mockup or Instagram Profile Mockup from our tools menu.",
    section2_step2:
      "Customize details: Upload your profile picture, enter your username, bio, and follower counts. You can even toggle 'Verified' badges!",
    section2_step3:
      "Download high-res: Once you're happy with the look, download the high-resolution image to use anywhere.",
    tip_title: "Pro Tip",
    tip_desc:
      "Use our mockups to pitch to brands! Send them a screenshot of their product featured on your feed before you even post. It increases your chances of landing a deal significantly.",
    cta_title: "Start Designing Your Feed",
    cta_desc: "Try our Mockup generators for free!",
    cta_btn: "Go to Mockup Tools",
  },
  de: {
    back: "Back to Blog",
    title_part_1: "Create Realistic",
    title_part_2: "Profile Mockups",
    title_part_3: "for Instagram & TikTok",
    tags: ["Mockups", "5 min read", "Growth Tips"],
    intro:
      "Want to visualize how your feed will look before posting? Or maybe create stunning screenshots for your media kit? Our Profile Mockup tools are here to help.",
    section1_title: "Why Use Profile Mockups?",
    section1_desc:
      "A profile mockup allows you to simulate exactly how your Instagram or TikTok profile will appear to visitors. This is essential for:",
    section1_points: [
      "Planning your grid aesthetic",
      "Testing profile picture and bio combinations",
      "Creating marketing materials for brands",
      "Showcasing your potential to sponsors",
    ],
    section2_title: "How to Create a Mockup",
    section2_desc:
      "Creating a professional mockup takes just a few seconds with Easy Split.",
    section2_step1:
      "Choose your platform: Select either TikTok Profile Mockup or Instagram Profile Mockup from our tools menu.",
    section2_step2:
      "Customize details: Upload your profile picture, enter your username, bio, and follower counts. You can even toggle 'Verified' badges!",
    section2_step3:
      "Download high-res: Once you're happy with the look, download the high-resolution image to use anywhere.",
    tip_title: "Pro Tip",
    tip_desc:
      "Use our mockups to pitch to brands! Send them a screenshot of their product featured on your feed before you even post. It increases your chances of landing a deal significantly.",
    cta_title: "Start Designing Your Feed",
    cta_desc: "Try our Mockup generators for free!",
    cta_btn: "Go to Mockup Tools",
  },
  ru: {
    back: "Back to Blog",
    title_part_1: "Create Realistic",
    title_part_2: "Profile Mockups",
    title_part_3: "for Instagram & TikTok",
    tags: ["Mockups", "5 min read", "Growth Tips"],
    intro:
      "Want to visualize how your feed will look before posting? Or maybe create stunning screenshots for your media kit? Our Profile Mockup tools are here to help.",
    section1_title: "Why Use Profile Mockups?",
    section1_desc:
      "A profile mockup allows you to simulate exactly how your Instagram or TikTok profile will appear to visitors. This is essential for:",
    section1_points: [
      "Planning your grid aesthetic",
      "Testing profile picture and bio combinations",
      "Creating marketing materials for brands",
      "Showcasing your potential to sponsors",
    ],
    section2_title: "How to Create a Mockup",
    section2_desc:
      "Creating a professional mockup takes just a few seconds with Easy Split.",
    section2_step1:
      "Choose your platform: Select either TikTok Profile Mockup or Instagram Profile Mockup from our tools menu.",
    section2_step2:
      "Customize details: Upload your profile picture, enter your username, bio, and follower counts. You can even toggle 'Verified' badges!",
    section2_step3:
      "Download high-res: Once you're happy with the look, download the high-resolution image to use anywhere.",
    tip_title: "Pro Tip",
    tip_desc:
      "Use our mockups to pitch to brands! Send them a screenshot of their product featured on your feed before you even post. It increases your chances of landing a deal significantly.",
    cta_title: "Start Designing Your Feed",
    cta_desc: "Try our Mockup generators for free!",
    cta_btn: "Go to Mockup Tools",
  },
  hi: {
    back: "Back to Blog",
    title_part_1: "Create Realistic",
    title_part_2: "Profile Mockups",
    title_part_3: "for Instagram & TikTok",
    tags: ["Mockups", "5 min read", "Growth Tips"],
    intro:
      "Want to visualize how your feed will look before posting? Or maybe create stunning screenshots for your media kit? Our Profile Mockup tools are here to help.",
    section1_title: "Why Use Profile Mockups?",
    section1_desc:
      "A profile mockup allows you to simulate exactly how your Instagram or TikTok profile will appear to visitors. This is essential for:",
    section1_points: [
      "Planning your grid aesthetic",
      "Testing profile picture and bio combinations",
      "Creating marketing materials for brands",
      "Showcasing your potential to sponsors",
    ],
    section2_title: "How to Create a Mockup",
    section2_desc:
      "Creating a professional mockup takes just a few seconds with Easy Split.",
    section2_step1:
      "Choose your platform: Select either TikTok Profile Mockup or Instagram Profile Mockup from our tools menu.",
    section2_step2:
      "Customize details: Upload your profile picture, enter your username, bio, and follower counts. You can even toggle 'Verified' badges!",
    section2_step3:
      "Download high-res: Once you're happy with the look, download the high-resolution image to use anywhere.",
    tip_title: "Pro Tip",
    tip_desc:
      "Use our mockups to pitch to brands! Send them a screenshot of their product featured on your feed before you even post. It increases your chances of landing a deal significantly.",
    cta_title: "Start Designing Your Feed",
    cta_desc: "Try our Mockup generators for free!",
    cta_btn: "Go to Mockup Tools",
  },
  "pt-BR": {
    back: "Back to Blog",
    title_part_1: "Create Realistic",
    title_part_2: "Profile Mockups",
    title_part_3: "for Instagram & TikTok",
    tags: ["Mockups", "5 min read", "Growth Tips"],
    intro:
      "Want to visualize how your feed will look before posting? Or maybe create stunning screenshots for your media kit? Our Profile Mockup tools are here to help.",
    section1_title: "Why Use Profile Mockups?",
    section1_desc:
      "A profile mockup allows you to simulate exactly how your Instagram or TikTok profile will appear to visitors. This is essential for:",
    section1_points: [
      "Planning your grid aesthetic",
      "Testing profile picture and bio combinations",
      "Creating marketing materials for brands",
      "Showcasing your potential to sponsors",
    ],
    section2_title: "How to Create a Mockup",
    section2_desc:
      "Creating a professional mockup takes just a few seconds with Easy Split.",
    section2_step1:
      "Choose your platform: Select either TikTok Profile Mockup or Instagram Profile Mockup from our tools menu.",
    section2_step2:
      "Customize details: Upload your profile picture, enter your username, bio, and follower counts. You can even toggle 'Verified' badges!",
    section2_step3:
      "Download high-res: Once you're happy with the look, download the high-resolution image to use anywhere.",
    tip_title: "Pro Tip",
    tip_desc:
      "Use our mockups to pitch to brands! Send them a screenshot of their product featured on your feed before you even post. It increases your chances of landing a deal significantly.",
    cta_title: "Start Designing Your Feed",
    cta_desc: "Try our Mockup generators for free!",
    cta_btn: "Go to Mockup Tools",
  },
};

export default async function GuidePost({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const t = content[lang as Language] || content["en"];

  return (
    <article className="max-w-4xl mx-auto bg-white border-4 border-black p-4 sm:p-8 md:p-12 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] sm:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]">
      {/* Header */}
      <header className="mb-6 sm:mb-10 pb-6 sm:pb-8 border-b-4 border-black border-dashed">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 font-bold uppercase text-xs sm:text-sm mb-4 sm:mb-6 hover:bg-yellow-200 px-2 py-1 transition-colors border-2 border-transparent hover:border-black"
        >
          <ArrowLeft className="w-4 h-4" /> {t.back}
        </Link>

        <h1
          className={`text-3xl sm:text-4xl md:text-6xl font-black uppercase leading-none mb-4 sm:mb-6 ${bangers.className}`}
        >
          {t.title_part_1}{" "}
          <span className="text-cyan-500 layer-text-sm stroke-black inline ">
            {t.title_part_2}
          </span>{" "}
          {t.title_part_3}
        </h1>

        <div className="flex flex-wrap gap-2 sm:gap-4 text-xs sm:text-sm font-bold uppercase text-slate-500">
          <span className="bg-pink-200 text-black px-2 sm:px-3 py-1 border-2 border-black">
            {t.tags[0]}
          </span>
          <span className="bg-green-200 text-black px-2 sm:px-3 py-1 border-2 border-black">
            {t.tags[1]}
          </span>
          <span className="py-1">Update: 22/01/2026</span>
        </div>
      </header>

      {/* Content */}
      <div className="prose prose-lg prose-slate prose-headings:font-black prose-headings:uppercase prose-p:font-medium prose-strong:bg-yellow-200 prose-strong:px-1 prose-strong:border prose-strong:border-black/20 max-w-none">
        <p className="lead text-xl font-bold border-l-8 border-cyan-400 pl-6 bg-slate-50 py-4 italic">
          {t.intro}
        </p>

        {/* Section 1 */}
        <h2 className="flex items-center gap-3 mt-12 text-purple-600">
          <Layers className="w-8 h-8" />
          {t.section1_title}
        </h2>
        <p>{t.section1_desc}</p>
        <ul className="list-disc pl-6 space-y-2">
          {t.section1_points.map((p, i) => (
            <li key={i}>{p}</li>
          ))}
        </ul>

        <div className="flex min-h-[250px]">
          <div>
            <Image
              src="/blog/blog_mockup_tiktok.png"
              alt="blog_mockup_tiktok"
              width={1000}
              height={1000}
              className="w-full h-auto m-0"
              style={{ margin: 0 }}
            />
          </div>
          <div>
            <Image
              src="/blog/blog_mockup_insta.png"
              alt="blog_mockup_insta"
              width={1000}
              height={1000}
              className="w-full h-auto m-0"
              style={{ margin: 0 }}
            />
          </div>
        </div>
        {/* Section 2 */}
        <h2 className="flex items-center gap-3 mt-12 text-pink-600">
          <Smartphone className="w-8 h-8" />
          {t.section2_title}
        </h2>
        <p>{t.section2_desc}</p>
        <ol className="list-decimal pl-6 space-y-4 font-bold text-slate-800">
          <li>
            <span className="font-normal">{t.section2_step1}</span>
          </li>
          <li>
            <span className="font-normal">{t.section2_step2}</span>
          </li>
          <li>
            <span className="font-normal">{t.section2_step3}</span>
          </li>
        </ol>

        <div className="bg-green-50 border-4 border-green-400 p-6 my-8 shadow-[4px_4px_0px_0px_rgba(34,197,94,1)]">
          <h3 className="text-green-800 uppercase font-black text-xl mb-2 flex items-center gap-2">
            <CheckCircle className="w-6 h-6" /> {t.tip_title}
          </h3>
          <p className="text-green-900 m-0 font-medium">{t.tip_desc}</p>
        </div>

        <div className="mt-12 p-8 bg-yellow-300 border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] text-center transform rotate-1">
          <h2 className="text-3xl font-black uppercase mb-4 m-0 p-0 text-black">
            {t.cta_title}
          </h2>
          <p className="text-xl font-bold mb-6 text-slate-800">{t.cta_desc}</p>
          <Link
            href="/tools/profile-mockups"
            className="inline-block bg-black text-white px-8 py-4 border-2 border-white shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] hover:-translate-y-1 transition-transform font-black uppercase text-xl no-underline"
          >
            {t.cta_btn}
          </Link>
        </div>
      </div>
    </article>
  );
}
