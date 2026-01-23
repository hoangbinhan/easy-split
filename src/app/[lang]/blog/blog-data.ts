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

/* ======================
 * EN (MASTER)
 * ====================== */

export const enPosts: BlogPost[] = [
  {
    slug: "profile-mockups-guide",
    title: "Create Realistic Profile Mockups for Instagram & TikTok",
    excerpt:
      "Visualize your feed and create stunning marketing assets with our free Profile Mockup generators.",
    date: "2026-01-22",
    readTime: "5 min read",
    category: "Growth Tips",
    banner: "/blog/profile-mockups-guide-banner.png",
  },
  {
    slug: "tools-guide",
    title: "Master Your Photos with Easy Split Tools",
    excerpt:
      "Discover how to sharpen, adjust brightness, and convert photos to black & white instantly with our new tools.",
    date: "2026-01-22",
    readTime: "5 min read",
    category: "Photo Editing",
    banner: "/blog/tools-guide-banner.png",
  },
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

/* ======================
 * VI
 * ====================== */

export const viPosts: BlogPost[] = [
  {
    slug: "profile-mockups-guide",
    title: "Tạo Mockup Profile Chân Thực cho Instagram & TikTok",
    excerpt:
      "Hình dung feed của bạn và tạo ra các ấn phẩm marketing ấn tượng với công cụ Profile Mockup miễn phí.",
    date: "22-01-2026",
    readTime: "5 phút đọc",
    category: "Mẹo Tăng Trưởng",
    banner: "/blog/profile-mockups-guide-banner.png",
  },
  {
    slug: "tools-guide",
    title: "Làm Chủ Ảnh Của Bạn với Bộ Công Cụ Easy Split",
    excerpt:
      "Khám phá cách làm nét, chỉnh sáng và chuyển ảnh sang đen trắng chỉ trong vài giây.",
    date: "22-01-2026",
    readTime: "5 phút đọc",
    category: "Chỉnh Sửa Ảnh",
    banner: "/blog/tools-guide-banner.png",
  },
  {
    slug: "tiktok-grid-guide",
    title: "Tạo Profile TikTok Ấn Tượng với Ảnh Lưới 'Giant Grid'",
    excerpt:
      "Hướng dẫn chi tiết cách cắt và đăng ảnh để tạo profile TikTok dạng lưới liền mạch cực ngầu.",
    date: "16-01-2026",
    readTime: "5 phút đọc",
    category: "Mẹo TikTok",
    banner: "/blog/tiktok-grid-guide.png",
  },
  {
    slug: "seamless-slide-guide",
    title: "Cách Tạo Slide Ảnh Trượt 'Vô Tận' trên TikTok",
    excerpt:
      "Bí quyết cắt ảnh panorama thành nhiều phần nhỏ để tạo hiệu ứng trượt liền mạch siêu cuốn hút.",
    date: "16-01-2026",
    readTime: "3 phút đọc",
    category: "Chế Độ Slide",
    banner: "/blog/seamless-slide-guide-banner.png",
  },
];

/* ======================
 * KO
 * ====================== */

export const koPosts: BlogPost[] = [
  {
    slug: "profile-mockups-guide",
    title: "인스타그램 & 틱톡을 위한 현실적인 프로필 목업 만들기",
    excerpt:
      "무료 프로필 목업 생성기로 피드를 미리 보고 멋진 마케팅 이미지를 만들어보세요.",
    date: "2026-01-22",
    readTime: "5분 읽기",
    category: "성장 팁",
    banner: "/blog/profile-mockups-guide-banner.png",
  },
  {
    slug: "tools-guide",
    title: "Easy Split 도구로 사진 편집 완전 정복",
    excerpt:
      "선명도, 밝기 조절, 흑백 변환을 즉시 할 수 있는 새로운 도구를 사용해보세요.",
    date: "2026-01-22",
    readTime: "5분 읽기",
    category: "사진 편집",
    banner: "/blog/tools-guide-banner.png",
  },
  {
    slug: "tiktok-grid-guide",
    title: "인상적인 '자이언트 그리드' 틱톡 프로필 만들기",
    excerpt:
      "이미지를 분할해 틱톡에 게시하여 멋진 프로필 그리드를 만드는 단계별 가이드.",
    date: "2026-01-16",
    readTime: "5분 읽기",
    category: "틱톡 팁",
    banner: "/blog/tiktok-grid-guide.png",
  },
  {
    slug: "seamless-slide-guide",
    title: "틱톡에서 '무한' 슬라이드 만드는 방법",
    excerpt:
      "파노라마 사진을 여러 장으로 나누어 매끄러운 슬라이드 효과를 만드는 비법.",
    date: "2026-01-16",
    readTime: "3분 읽기",
    category: "캐러셀 모드",
    banner: "/blog/seamless-slide-guide-banner.png",
  },
];

/* ======================
 * JP
 * ====================== */

export const jpPosts: BlogPost[] = [
  {
    slug: "profile-mockups-guide",
    title: "Instagram & TikTok 用のリアルなプロフィールモックアップ作成",
    excerpt:
      "無料ツールでフィードを可視化し、魅力的なマーケティング素材を作成しましょう。",
    date: "2026-01-22",
    readTime: "5分",
    category: "成長のヒント",
    banner: "/blog/profile-mockups-guide-banner.png",
  },
  {
    slug: "tools-guide",
    title: "Easy Split ツールで写真編集を極める",
    excerpt: "シャープ化、明るさ調整、白黒変換を数秒で実行できます。",
    date: "2026-01-22",
    readTime: "5分",
    category: "写真編集",
    banner: "/blog/tools-guide-banner.png",
  },
  {
    slug: "tiktok-grid-guide",
    title: "印象的な「ジャイアントグリッド」TikTokプロフィールの作り方",
    excerpt:
      "画像を分割してTikTokに投稿し、クールでシームレスなプロフィールを作成。",
    date: "2026-01-16",
    readTime: "5分",
    category: "TikTokのヒント",
    banner: "/blog/tiktok-grid-guide.png",
  },
  {
    slug: "seamless-slide-guide",
    title: "TikTokで「無限」シームレススライドを作成する方法",
    excerpt: "パノラマ写真を分割して、魅力的なスライド効果を作る秘訣。",
    date: "2026-01-16",
    readTime: "3分",
    category: "カルーセルモード",
    banner: "/blog/seamless-slide-guide-banner.png",
  },
];

/* ======================
 * TH
 * ====================== */

export const thPosts: BlogPost[] = [
  {
    slug: "profile-mockups-guide",
    title: "สร้าง Mockup โปรไฟล์สมจริงสำหรับ Instagram & TikTok",
    excerpt:
      "มองเห็นฟีดของคุณล่วงหน้าและสร้างสื่อการตลาดที่น่าประทับใจด้วยเครื่องมือฟรีของเรา",
    date: "2026-01-22",
    readTime: "อ่าน 5 นาที",
    category: "เคล็ดลับการเติบโต",
    banner: "/blog/profile-mockups-guide-banner.png",
  },
  {
    slug: "tools-guide",
    title: "ปรับแต่งรูปภาพของคุณด้วยเครื่องมือ Easy Split",
    excerpt: "เพิ่มความคม ปรับแสง และแปลงเป็นขาวดำได้ทันทีด้วยเครื่องมือใหม่",
    date: "2026-01-22",
    readTime: "อ่าน 5 นาที",
    category: "แต่งรูป",
    banner: "/blog/tools-guide-banner.png",
  },
  {
    slug: "tiktok-grid-guide",
    title: "สร้างโปรไฟล์ TikTok แบบ 'Giant Grid' ที่น่าประทับใจ",
    excerpt:
      "คู่มือทีละขั้นตอนในการแยกและโพสต์รูปภาพเพื่อสร้างตารางโปรไฟล์ที่สวยงาม",
    date: "2026-01-16",
    readTime: "อ่าน 5 นาที",
    category: "เคล็ดลับ TikTok",
    banner: "/blog/tiktok-grid-guide.png",
  },
  {
    slug: "seamless-slide-guide",
    title: "วิธีสร้างสไลด์ 'ไร้รอยต่อ' บน TikTok",
    excerpt: "เคล็ดลับการแยกรูปพาโนรามาเพื่อสร้างเอฟเฟกต์การเลื่อนที่น่าดึงดูด",
    date: "2026-01-16",
    readTime: "อ่าน 3 นาที",
    category: "โหมดสไลด์",
    banner: "/blog/seamless-slide-guide-banner.png",
  },
];

/* ======================
 * ID
 * ====================== */

export const idPosts: BlogPost[] = [
  {
    slug: "profile-mockups-guide",
    title: "Buat Mockup Profil Realistis untuk Instagram & TikTok",
    excerpt:
      "Visualisasikan feed Anda dan buat aset pemasaran yang memukau dengan generator mockup gratis.",
    date: "2026-01-22",
    readTime: "5 menit baca",
    category: "Tips Pertumbuhan",
    banner: "/blog/profile-mockups-guide-banner.png",
  },
  {
    slug: "tools-guide",
    title: "Kuasai Foto Anda dengan Alat Easy Split",
    excerpt:
      "Pertajam, atur kecerahan, dan ubah ke hitam putih dalam hitungan detik.",
    date: "2026-01-22",
    readTime: "5 menit baca",
    category: "Edit Foto",
    banner: "/blog/tools-guide-banner.png",
  },
  {
    slug: "tiktok-grid-guide",
    title: "Buat Profil TikTok 'Giant Grid' yang Mengesankan",
    excerpt:
      "Panduan langkah demi langkah untuk memecah dan memposting gambar agar tampilan profil makin keren.",
    date: "2026-01-16",
    readTime: "5 menit baca",
    category: "Tips TikTok",
    banner: "/blog/tiktok-grid-guide.png",
  },
  {
    slug: "seamless-slide-guide",
    title: "Cara Membuat Slide 'Tak Terbatas' di TikTok",
    excerpt:
      "Rahasia memecah foto panorama untuk menciptakan efek geser yang memikat.",
    date: "2026-01-16",
    readTime: "3 menit baca",
    category: "Mode Slide",
    banner: "/blog/seamless-slide-guide-banner.png",
  },
];

/* ======================
 * ES
 * ====================== */

export const esPosts: BlogPost[] = [
  {
    slug: "profile-mockups-guide",
    title: "Crea Mockups de Perfil Realistas para Instagram y TikTok",
    excerpt:
      "Visualiza tu feed y crea increíbles recursos de marketing con nuestro generador gratuito.",
    date: "2026-01-22",
    readTime: "5 min de lectura",
    category: "Consejos de Crecimiento",
    banner: "/blog/profile-mockups-guide-banner.png",
  },
  {
    slug: "tools-guide",
    title: "Domina tus Fotos con Easy Split",
    excerpt:
      "Mejora la nitidez, ajusta el brillo y convierte a blanco y negro al instante.",
    date: "2026-01-22",
    readTime: "5 min de lectura",
    category: "Edición de Fotos",
    banner: "/blog/tools-guide-banner.png",
  },
  {
    slug: "tiktok-grid-guide",
    title: "Crea Perfiles TikTok con 'Giant Grid' Impresionantes",
    excerpt:
      "Guía paso a paso para dividir y publicar imágenes creando un perfil espectacular.",
    date: "2026-01-16",
    readTime: "5 min de lectura",
    category: "Consejos TikTok",
    banner: "/blog/tiktok-grid-guide.png",
  },
  {
    slug: "seamless-slide-guide",
    title: "Cómo Crear Diapositivas 'Infinitas' en TikTok",
    excerpt:
      "El secreto para dividir fotos panorámicas y lograr un efecto de deslizamiento perfecto.",
    date: "2026-01-16",
    readTime: "3 min de lectura",
    category: "Modo Carrusel",
    banner: "/blog/seamless-slide-guide-banner.png",
  },
];

/* ======================
 * ZH-CN
 * ====================== */

export const zhCNPosts: BlogPost[] = [
  {
    slug: "profile-mockups-guide",
    title: "为 Instagram 和 TikTok 创建逼真的个人资料模型",
    excerpt: "使用我们的免费工具可视化您的动态，并创建令人惊艳的营销素材。",
    date: "2026-01-22",
    readTime: "5 分钟阅读",
    category: "增长技巧",
    banner: "/blog/profile-mockups-guide-banner.png",
  },
  {
    slug: "tools-guide",
    title: "使用 Easy Split 工具轻松掌控照片",
    excerpt: "快速锐化、调节亮度并一键转换为黑白效果。",
    date: "2026-01-22",
    readTime: "5 分钟阅读",
    category: "图片编辑",
    banner: "/blog/tools-guide-banner.png",
  },
  {
    slug: "tiktok-grid-guide",
    title: "创建令人惊艳的“巨型网格”TikTok 个人主页",
    excerpt: "分步指南，教您如何分割并发布图片，打造无缝酷炫的个人主页。",
    date: "2026-01-16",
    readTime: "5 分钟阅读",
    category: "TikTok 技巧",
    banner: "/blog/tiktok-grid-guide.png",
  },
  {
    slug: "seamless-slide-guide",
    title: "如何在 TikTok 上创建“无限”无缝幻灯片",
    excerpt: "将全景照片拆分成多张图片，打造超吸引人的滑动效果。",
    date: "2026-01-16",
    readTime: "3 分钟阅读",
    category: "轮播模式",
    banner: "/blog/seamless-slide-guide-banner.png",
  },
];

/* ======================
 * ZH-TW
 * ====================== */

export const zhTWPosts: BlogPost[] = [
  {
    slug: "profile-mockups-guide",
    title: "為 Instagram 和 TikTok 打造逼真的個人檔案樣板",
    excerpt: "使用我們的免費工具預覽動態牆，輕鬆製作精美的行銷素材。",
    date: "2026-01-22",
    readTime: "5 分鐘閱讀",
    category: "成長技巧",
    banner: "/blog/profile-mockups-guide-banner.png",
  },
  {
    slug: "tools-guide",
    title: "用 Easy Split 工具輕鬆編輯照片",
    excerpt: "快速銳化、調整亮度並一鍵轉換黑白效果。",
    date: "2026-01-22",
    readTime: "5 分鐘閱讀",
    category: "圖片編輯",
    banner: "/blog/tools-guide-banner.png",
  },
  {
    slug: "tiktok-grid-guide",
    title: "打造令人驚艷的「巨型網格」TikTok 個人檔案",
    excerpt: "完整教學，教你如何分割並發布圖片，打造無縫炫酷的個人檔案。",
    date: "2026-01-16",
    readTime: "5 分鐘閱讀",
    category: "TikTok 技巧",
    banner: "/blog/tiktok-grid-guide.png",
  },
  {
    slug: "seamless-slide-guide",
    title: "如何在 TikTok 上製作「無限」無縫幻燈片",
    excerpt: "將全景照片拆分為多張小圖，打造吸睛滑動效果。",
    date: "2026-01-16",
    readTime: "3 分鐘閱讀",
    category: "輪播模式",
    banner: "/blog/seamless-slide-guide-banner.png",
  },
];

/* ======================
 * DE
 * ====================== */

export const dePosts: BlogPost[] = [
  {
    slug: "profile-mockups-guide",
    title: "Erstellen Sie realistische Profil-Mockups für Instagram & TikTok",
    excerpt:
      "Visualisieren Sie Ihren Feed und erstellen Sie beeindruckende Marketingmaterialien mit unserem kostenlosen Tool.",
    date: "2026-01-22",
    readTime: "5 Min. Lesezeit",
    category: "Wachstumstipps",
    banner: "/blog/profile-mockups-guide-banner.png",
  },
  {
    slug: "tools-guide",
    title: "Meistern Sie Ihre Fotos mit Easy Split Tools",
    excerpt:
      "Schärfen, Helligkeit anpassen und in Schwarz-Weiß umwandeln – alles in Sekunden.",
    date: "2026-01-22",
    readTime: "5 Min. Lesezeit",
    category: "Fotobearbeitung",
    banner: "/blog/tools-guide-banner.png",
  },
  {
    slug: "tiktok-grid-guide",
    title: "Erstellen Sie beeindruckende 'Giant Grid' TikTok-Profile",
    excerpt:
      "Schritt-für-Schritt-Anleitung zum Teilen und Posten von Bildern für ein nahtloses Profil.",
    date: "2026-01-16",
    readTime: "5 Min. Lesezeit",
    category: "TikTok Tipps",
    banner: "/blog/tiktok-grid-guide.png",
  },
  {
    slug: "seamless-slide-guide",
    title: "So erstellen Sie 'unendliche' nahtlose Slides auf TikTok",
    excerpt:
      "Das Geheimnis, Panoramafotos zu teilen, um einen perfekten Gleiteffekt zu erzeugen.",
    date: "2026-01-16",
    readTime: "3 Min. Lesezeit",
    category: "Karussell-Modus",
    banner: "/blog/seamless-slide-guide-banner.png",
  },
];

/* ======================
 * RU
 * ====================== */

export const ruPosts: BlogPost[] = [
  {
    slug: "profile-mockups-guide",
    title: "Создавайте реалистичные макеты профиля для Instagram и TikTok",
    excerpt:
      "Визуализируйте свою ленту и создавайте впечатляющие маркетинговые материалы с помощью бесплатного инструмента.",
    date: "2026-01-22",
    readTime: "5 мин чтения",
    category: "Советы по росту",
    banner: "/blog/profile-mockups-guide-banner.png",
  },
  {
    slug: "tools-guide",
    title: "Освойте редактирование фото с Easy Split",
    excerpt:
      "Резкость, яркость и черно-белый эффект — всего за несколько секунд.",
    date: "2026-01-22",
    readTime: "5 мин чтения",
    category: "Редактирование фото",
    banner: "/blog/tools-guide-banner.png",
  },
  {
    slug: "tiktok-grid-guide",
    title: "Создайте впечатляющий профиль TikTok с 'гигантской сеткой'",
    excerpt:
      "Пошаговое руководство по созданию стильного и бесшовного профиля.",
    date: "2026-01-16",
    readTime: "5 мин чтения",
    category: "Советы TikTok",
    banner: "/blog/tiktok-grid-guide.png",
  },
  {
    slug: "seamless-slide-guide",
    title: "Как создать 'бесконечные' слайды в TikTok",
    excerpt:
      "Разделите панорамные фото для создания привлекательного эффекта прокрутки.",
    date: "2026-01-16",
    readTime: "3 мин чтения",
    category: "Режим слайдов",
    banner: "/blog/seamless-slide-guide-banner.png",
  },
];

/* ======================
 * HI
 * ====================== */

export const hiPosts: BlogPost[] = [
  {
    slug: "profile-mockups-guide",
    title: "Instagram और TikTok के लिए यथार्थवादी प्रोफ़ाइल मॉकअप बनाएं",
    excerpt:
      "अपने फ़ीड को विज़ुअलाइज़ करें और मुफ्त टूल से शानदार मार्केटिंग एसेट तैयार करें।",
    date: "2026-01-22",
    readTime: "5 मिनट पढ़ें",
    category: "विकास सुझाव",
    banner: "/blog/profile-mockups-guide-banner.png",
  },
  {
    slug: "tools-guide",
    title: "Easy Split टूल से फोटो एडिटिंग में महारत हासिल करें",
    excerpt:
      "कुछ ही सेकंड में शार्प करें, ब्राइटनेस एडजस्ट करें और ब्लैक एंड व्हाइट बनाएं।",
    date: "2026-01-22",
    readTime: "5 मिनट पढ़ें",
    category: "फोटो संपादन",
    banner: "/blog/tools-guide-banner.png",
  },
  {
    slug: "tiktok-grid-guide",
    title: "प्रभावशाली 'जायंट ग्रिड' TikTok प्रोफ़ाइल बनाएं",
    excerpt: "स्टेप-बाय-स्टेप गाइड से शानदार और सीमलेस प्रोफ़ाइल ग्रिड बनाएं।",
    date: "2026-01-16",
    readTime: "5 मिनट पढ़ें",
    category: "TikTok टिप्स",
    banner: "/blog/tiktok-grid-guide.png",
  },
  {
    slug: "seamless-slide-guide",
    title: "TikTok पर 'अनंत' सीमलेस स्लाइड कैसे बनाएं",
    excerpt: "पैनोरमा फोटो को विभाजित करके आकर्षक स्लाइडिंग इफेक्ट बनाएं।",
    date: "2026-01-16",
    readTime: "3 मिनट पढ़ें",
    category: "स्लाइड मोड",
    banner: "/blog/seamless-slide-guide-banner.png",
  },
];

/* ======================
 * PT-BR
 * ====================== */

export const ptBRPosts: BlogPost[] = [
  {
    slug: "profile-mockups-guide",
    title: "Crie Mockups de Perfil Realistas para Instagram e TikTok",
    excerpt:
      "Visualize seu feed e crie materiais de marketing incríveis com nossa ferramenta gratuita.",
    date: "2026-01-22",
    readTime: "5 min de leitura",
    category: "Dicas de Crescimento",
    banner: "/blog/profile-mockups-guide-banner.png",
  },
  {
    slug: "tools-guide",
    title: "Domine suas Fotos com as Ferramentas Easy Split",
    excerpt:
      "Ajuste nitidez, brilho e converta para preto e branco em segundos.",
    date: "2026-01-22",
    readTime: "5 min de leitura",
    category: "Edição de Fotos",
    banner: "/blog/tools-guide-banner.png",
  },
  {
    slug: "tiktok-grid-guide",
    title: "Crie Perfis TikTok com 'Grade Gigante' Impressionantes",
    excerpt:
      "Guia passo a passo para dividir e postar imagens criando um perfil incrível.",
    date: "2026-01-16",
    readTime: "5 min de leitura",
    category: "Dicas TikTok",
    banner: "/blog/tiktok-grid-guide.png",
  },
  {
    slug: "seamless-slide-guide",
    title: "Como Criar Slides 'Infinitos' no TikTok",
    excerpt:
      "Divida fotos panorâmicas para criar um efeito de deslizamento perfeito.",
    date: "2026-01-16",
    readTime: "3 min de leitura",
    category: "Modo Carrossel",
    banner: "/blog/seamless-slide-guide-banner.png",
  },
];

/* ======================
 * UTILS
 * ====================== */

function normalizePosts(source: BlogPost[], master: BlogPost[]): BlogPost[] {
  const map = new Map(source.map((p) => [p.slug, p]));
  return master.map((enPost) => map.get(enPost.slug) ?? enPost);
}

/* ======================
 * FINAL EXPORT
 * ====================== */

export const blogPosts: Record<Language, BlogPost[]> = {
  en: enPosts,
  vi: normalizePosts(viPosts, enPosts),
  ko: normalizePosts(koPosts, enPosts),
  jp: normalizePosts(jpPosts, enPosts),
  th: normalizePosts(thPosts, enPosts),
  id: normalizePosts(idPosts, enPosts),
  es: normalizePosts(esPosts, enPosts),
  "zh-CN": normalizePosts(zhCNPosts, enPosts),
  "zh-TW": normalizePosts(zhTWPosts, enPosts),
  de: normalizePosts(dePosts, enPosts),
  ru: normalizePosts(ruPosts, enPosts),
  hi: normalizePosts(hiPosts, enPosts),
  "pt-BR": normalizePosts(ptBRPosts, enPosts),
};
