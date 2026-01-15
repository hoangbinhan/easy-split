import { Language } from "@/lib/i18n";

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  banner: string;
}

const enPosts: BlogPost[] = [
  {
    slug: "tiktok-grid-guide",
    title: "Create Impressive 'Giant Grid' TikTok Profiles",
    excerpt:
      "Step-by-step guide to splitting and posting images on TikTok to create a cool, seamless profile grid.",
    date: "2026-01-16",
    readTime: "5 min read",
    category: "TikTok Tips",
    banner: "/blog/tiktok-grid-guide.png",
  },
  {
    slug: "seamless-slide-guide",
    title: "How to Create 'Infinite' Seamless Slides on TikTok",
    excerpt:
      "The secret to splitting Panorama photos into multiple small images to create a super attractive seamless sliding effect.",
    date: "2026-01-16",
    readTime: "3 min read",
    category: "Carousel Mode",
    banner: "/blog/seamless-slide-guide-banner.png",
  },
];

export const blogPosts: Record<Language, BlogPost[]> = {
  en: enPosts,
  vi: [
    {
      slug: "tiktok-grid-guide",
      title: "Cách tạo Profile TikTok ấn tượng với ảnh lưới 'Giant Grid'",
      excerpt:
        "Hướng dẫn chi tiết cách cắt ảnh và đăng lên TikTok để tạo giao diện profile liền mạch cực ngầu.",
      date: "16-01-2026",
      readTime: "5 phút đọc",
      category: "Mẹo TikTok",
      banner: "/blog/tiktok-grid-guide.png",
    },
    {
      slug: "seamless-slide-guide",
      title:
        "Cách tạo ảnh Slide trượt 'Vô Tận' (Seamless Carousel) trên TikTok",
      excerpt:
        "Bí kíp cắt ảnh Panorama thành nhiều tấm nhỏ để tạo hiệu ứng trượt ảnh liền mạch siêu cuốn hút.",
      date: "16-01-2026",
      readTime: "3 phút đọc",
      category: "Chế độ Slide",
      banner: "/blog/seamless-slide-guide-banner.png",
    },
  ],
  ko: [
    {
      slug: "tiktok-grid-guide",
      title: "인상적인 '자이언트 그리드' 틱톡 프로필 만들기",
      excerpt:
        "이미지를 분할하여 틱톡에 게시하고 멋진 프로필 그리드를 만드는 단계별 가이드.",
      date: "2026-01-16",
      readTime: "5분 읽기",
      category: "틱톡 팁",
      banner: "/blog/tiktok-grid-guide.png",
    },
    {
      slug: "seamless-slide-guide",
      title: "틱톡에서 '무한' 슬라이드 만드는 법",
      excerpt:
        "파노라마 사진을 여러 장의 작은 이미지로 분할하여 매끄러운 슬라이딩 효과를 만드는 비결.",
      date: "2026-01-16",
      readTime: "3분 읽기",
      category: "캐러셀 모드",
      banner: "/blog/seamless-slide-guide-banner.png",
    },
  ],
  jp: [
    {
      slug: "tiktok-grid-guide",
      title: "印象的な「ジャイアントグリッド」TikTokプロフィールの作り方",
      excerpt:
        "画像を分割してTikTokに投稿し、クールでシームレスなプロフィールグリッドを作成するためのステップバイステップガイド。",
      date: "2026-01-16",
      readTime: "5分",
      category: "TikTokのヒント",
      banner: "/blog/tiktok-grid-guide.png",
    },
    {
      slug: "seamless-slide-guide",
      title: "TikTokで「無限」シームレススライドを作成する方法",
      excerpt:
        "パノラマ写真を複数の小さな画像に分割して、魅力的なシームレススライド効果を作成する秘訣。",
      date: "2026-01-16",
      readTime: "3分",
      category: "カルーセルモード",
      banner: "/blog/seamless-slide-guide-banner.png",
    },
  ],
  th: [
    {
      slug: "tiktok-grid-guide",
      title: "สร้างโปรไฟล์ TikTok 'Giant Grid' ที่น่าประทับใจ",
      excerpt:
        "คู่มือทีละขั้นตอนในการแยกและโพสต์ภาพบน TikTok เพื่อสร้างตารางโปรไฟล์ที่เท่และต่อเนื่อง",
      date: "2026-01-16",
      readTime: "อ่าน 5 นาที",
      category: "เคล็ดลับ TikTok",
      banner: "/blog/tiktok-grid-guide.png",
    },
    {
      slug: "seamless-slide-guide",
      title: "วิธีสร้างสไลด์ 'ไร้รอยต่อ' บน TikTok",
      excerpt:
        "เคล็ดลับในการแยกภาพพาโนรามาเป็นภาพเล็กๆ หลายภาพเพื่อสร้างเอฟเฟกต์การเลื่อนที่น่าดึงดูดใจ",
      date: "2026-01-16",
      readTime: "อ่าน 3 นาที",
      category: "โหมดคารูเซล",
      banner: "/blog/seamless-slide-guide-banner.png",
    },
  ],
  id: [
    {
      slug: "tiktok-grid-guide",
      title: "Cara Membuat Profil TikTok 'Giant Grid' yang Mengesankan",
      excerpt:
        "Panduan langkah demi langkah untuk memecah dan memposting gambar di TikTok untuk membuat grid profil yang keren dan mulus.",
      date: "16-01-2026",
      readTime: "5 menit baca",
      category: "Tips TikTok",
      banner: "/blog/tiktok-grid-guide.png",
    },
    {
      slug: "seamless-slide-guide",
      title: "Cara Membuat Slide 'Tak Terbatas' yang Mulus di TikTok",
      excerpt:
        "Rahasia memecah foto panorama menjadi beberapa gambar kecil untuk membuat efek geser yang sangat menarik.",
      date: "16-01-2026",
      readTime: "3 menit baca",
      category: "Mode Carousel",
      banner: "/blog/seamless-slide-guide-banner.png",
    },
  ],
  es: [
    {
      slug: "tiktok-grid-guide",
      title: "Crea Perfiles de TikTok con 'Giant Grid' Impresionantes",
      excerpt:
        "Guía paso a paso para dividir y publicar imágenes en TikTok para crear una cuadrícula de perfil genial y fluida.",
      date: "16-01-2026",
      readTime: "5 min de lectura",
      category: "Consejos de TikTok",
      banner: "/blog/tiktok-grid-guide.png",
    },
    {
      slug: "seamless-slide-guide",
      title: "Cómo Crear Diapositivas 'Infinitas' en TikTok",
      excerpt:
        "El secreto para dividir fotos panorámicas en múltiples imágenes pequeñas para crear un efecto de deslizamiento súper atractivo.",
      date: "16-01-2026",
      readTime: "3 min de lectura",
      category: "Modo Carrusel",
      banner: "/blog/seamless-slide-guide-banner.png",
    },
  ],
  "zh-CN": [
    {
      slug: "tiktok-grid-guide",
      title: "创建令人印象深刻的“巨大的网格”TikTok 个人资料",
      excerpt:
        "分步指南，教您如何在 TikTok 上分割和发布图片，打造酷炫、无缝的个人资料网格。",
      date: "2026-01-16",
      readTime: "5 分钟阅读",
      category: "TikTok 技巧",
      banner: "/blog/tiktok-grid-guide.png",
    },
    {
      slug: "seamless-slide-guide",
      title: "如何在 TikTok 上创建“无限”无缝幻灯片",
      excerpt: "将全景照片分割成多张小图，创造超吸引人的无缝滑动效果的秘诀。",
      date: "2026-01-16",
      readTime: "3 分钟阅读",
      category: "轮播模式",
      banner: "/blog/seamless-slide-guide-banner.png",
    },
  ],
  "zh-TW": [
    {
      slug: "tiktok-grid-guide",
      title: "創建令人印象深刻的「巨大的網格」TikTok 個人資料",
      excerpt:
        "分步指南，教您如何在 TikTok 上分割並發布圖片，打造酷炫、無縫的個人資料網格。",
      date: "2026-01-16",
      readTime: "5 分鐘閱讀",
      category: "TikTok 技巧",
      banner: "/blog/tiktok-grid-guide.png",
    },
    {
      slug: "seamless-slide-guide",
      title: "如何在 TikTok 上創建「無限」無縫幻燈片",
      excerpt: "將全景照片分割成多張小圖，創造超吸引人的無縫滑動效果的秘訣。",
      date: "2026-01-16",
      readTime: "3 分鐘閱讀",
      category: "輪播模式",
      banner: "/blog/seamless-slide-guide-banner.png",
    },
  ],
  de: [
    {
      slug: "tiktok-grid-guide",
      title: "Erstellen Sie beeindruckende 'Giant Grid' TikTok-Profile",
      excerpt:
        "Schritt-für-Schritt-Anleitung zum Teilen und Posten von Bildern auf TikTok, um ein nahtloses Profil-Raster zu erstellen.",
      date: "16.01.2026",
      readTime: "5 Min. Lesezeit",
      category: "TikTok Tipps",
      banner: "/blog/tiktok-grid-guide.png",
    },
    {
      slug: "seamless-slide-guide",
      title: "So erstellen Sie 'unendliche' nahtlose Slides auf TikTok",
      excerpt:
        "Das Geheimnis, Panoramafotos in mehrere kleine Bilder zu teilen, um einen super attraktiven Gleiteffekt zu erzeugen.",
      date: "16.01.2026",
      readTime: "3 Min. Lesezeit",
      category: "Karussell-Modus",
      banner: "/blog/seamless-slide-guide-banner.png",
    },
  ],
  ru: [
    {
      slug: "tiktok-grid-guide",
      title: "Создайте впечатляющий профиль TikTok с 'Гигантской сеткой'",
      excerpt:
        "Пошаговое руководство по разделению и публикации изображений в TikTok для создания стильной бесшовной сетки профиля.",
      date: "16.01.2026",
      readTime: "5 мин чтения",
      category: "Советы TikTok",
      banner: "/blog/tiktok-grid-guide.png",
    },
    {
      slug: "seamless-slide-guide",
      title: "Как создать 'Бесконечные' бесшовные слайды в TikTok",
      excerpt:
        "Секрет разделения панорамных фотографий на несколько маленьких изображений для создания супер привлекательного эффекта скольжения.",
      date: "16.01.2026",
      readTime: "3 мин чтения",
      category: "Режим карусели",
      banner: "/blog/seamless-slide-guide-banner.png",
    },
  ],
  hi: [
    {
      slug: "tiktok-grid-guide",
      title: "प्रभावशाली 'विशाल ग्रिड' टिकटोक प्रोफाइल बनाएं",
      excerpt:
        "टिकटोक पर एक शानदार, सीमलेस प्रोफाइल ग्रिड बनाने के लिए छवियों को विभाजित करने और पोस्ट करने के लिए चरण-दर-चरण मार्गदर्शिका।",
      date: "2026-01-16",
      readTime: "5 मिनट पढ़ें",
      category: "टिकटोक टिप्स",
      banner: "/blog/tiktok-grid-guide.png",
    },
    {
      slug: "seamless-slide-guide",
      title: "टिकटोक पर 'अनंत' सीमलेस स्लाइड कैसे बनाएं",
      excerpt:
        "पैनोरमा तस्वीरों को कई छोटी छवियों में विभाजित करने का रहस्य ताकि एक सुपर आकर्षक स्लाइडिंग प्रभाव बनाया जा सके।",
      date: "2026-01-16",
      readTime: "3 मिनट पढ़ें",
      category: "हिंडोला मोड",
      banner: "/blog/seamless-slide-guide-banner.png",
    },
  ],
  "pt-BR": [
    {
      slug: "tiktok-grid-guide",
      title: "Crie Perfis do TikTok com 'Grade Gigante' Impressionantes",
      excerpt:
        "Guia passo a paso para dividir e postar imagens no TikTok para criar uma grade de perfil legal e perfeita.",
      date: "16-01-2026",
      readTime: "5 min de leitura",
      category: "Dicas do TikTok",
      banner: "/blog/tiktok-grid-guide.png",
    },
    {
      slug: "seamless-slide-guide",
      title: "Como Criar Slides 'Infinitos' no TikTok",
      excerpt:
        "O segredo para dividir fotos panorâmicas em várias imagens pequenas para criar um efeito de deslizamento super atraente.",
      date: "16-01-2026",
      readTime: "3 min de leitura",
      category: "Modo Carrossel",
      banner: "/blog/seamless-slide-guide-banner.png",
    },
  ],
};

(Object.keys(blogPosts) as Language[]).forEach((lang) => {
  if (lang !== "en" && (!blogPosts[lang] || blogPosts[lang].length === 0)) {
    blogPosts[lang] = blogPosts["en"];
  }
});
