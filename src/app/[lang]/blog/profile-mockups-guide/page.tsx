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
    back: "블로그로 돌아가기",
    title_part_1: "현실적인",
    title_part_2: "프로필 목업",
    title_part_3: "인스타그램 & 틱톡용 만들기",
    tags: ["목업", "5분 읽기", "성장 팁"],
    intro:
      "게시하기 전 피드가 어떻게 보일지 시각화하고 싶으신가요? 아니면 미디어 키트를 위한 멋진 스크린샷을 만들고 싶으신가요? 저희 프로필 목업 도구가 도와드립니다.",
    section1_title: "왜 프로필 목업을 사용해야 할까요?",
    section1_desc:
      "프로필 목업을 사용하면 인스타그램이나 틱톡 프로필이 방문자에게 어떻게 보일지 정확하게 시뮬레이션할 수 있습니다. 이는 다음과 같은 경우에 필수적입니다:",
    section1_points: [
      "그리드 미학 계획하기",
      "프로필 사진과 소개글 조합 테스트하기",
      "브랜드를 위한 마케팅 자료 만들기",
      "스폰서에게 잠재력 보여주기",
    ],
    section2_title: "목업 만드는 방법",
    section2_desc:
      "Easy Split을 사용하면 전문적인 목업을 만드는 데 몇 초밖에 걸리지 않습니다.",
    section2_step1:
      "플랫폼 선택: 도구 메뉴에서 틱톡 프로필 목업 또는 인스타그램 프로필 목업을 선택하세요.",
    section2_step2:
      "세부 정보 사용자 지정: 프로필 사진을 업로드하고 사용자 이름, 소개글, 팔로워 수를 입력하세요. '인증됨' 배지를 켤 수도 있습니다!",
    section2_step3:
      "고해상도 다운로드: 룩이 마음에 들면 고해상도 이미지를 다운로드하여 어디서나 사용하세요.",
    tip_title: "전문가 팁",
    tip_desc:
      "목업을 사용하여 브랜드에 제안하세요! 게시하기 전에 피드에 그들의 제품이 소개된 스크린샷을 보내세요. 거래 성사 확률이 크게 높아집니다.",
    cta_title: "피드 디자인 시작하기",
    cta_desc: "무료로 목업 생성기를 체험해 보세요!",
    cta_btn: "목업 도구로 이동",
  },
  jp: {
    back: "ブログに戻る",
    title_part_1: "リアルな",
    title_part_2: "プロファイルモックアップ",
    title_part_3: "Instagram & TikTok用を作成",
    tags: ["モックアップ", "5分で読める", "成長のヒント"],
    intro:
      "投稿する前にフィードがどのように見えるか視覚化したいですか？それともメディアキット用に素晴らしいスクリーンショットを作成したいですか？当社のプロファイルモックアップツールがお手伝いします。",
    section1_title: "なぜプロファイルモックアップを使うのか？",
    section1_desc:
      "プロファイルモックアップを使用すると、InstagramやTikTokのプロファイルが訪問者にどのように表示されるかを正確にシミュレーションできます。これは以下の場合に不可欠です：",
    section1_points: [
      "グリッドの美学を計画する",
      "プロフィール写真と自己紹介の組み合わせをテストする",
      "ブランド向けのマーケティング資料を作成する",
      "スポンサーに自分の可能性をアピールする",
    ],
    section2_title: "モックアップの作成方法",
    section2_desc:
      "Easy Splitを使えば、プロフェッショナルなモックアップを数秒で作成できます。",
    section2_step1:
      "プラットフォームを選択：ツールメニューからTikTokプロファイルモックアップまたはInstagramプロファイルモックアップを選択します。",
    section2_step2:
      "詳細をカスタマイズ：プロフィール写真をアップロードし、ユーザー名、自己紹介、フォロワー数を入力します。「認証済み」バッジを切り替えることもできます！",
    section2_step3:
      "高解像度でダウンロード：見た目に満足したら、高解像度の画像をダウンロードしてどこでも使用できます。",
    tip_title: "プロのヒント",
    tip_desc:
      "モックアップを使ってブランドに売り込みましょう！投稿する前に、彼らの製品があなたのフィードで紹介されているスクリーンショットを送ってください。取引が成立する可能性が大幅に高まります。",
    cta_title: "フィードのデザインを開始",
    cta_desc: "今すぐ無料でモックアップジェネレーターをお試しください！",
    cta_btn: "モックアップツールへ",
  },
  th: {
    back: "กลับไปที่บล็อก",
    title_part_1: "สร้าง",
    title_part_2: "ม็อคอัพโปรไฟล์",
    title_part_3: "ที่สมจริงสำหรับ Instagram & TikTok",
    tags: ["ม็อคอัพ", "อ่าน 5 นาที", "เคล็ดลับการเติบโต"],
    intro:
      "ต้องการเห็นภาพว่าฟีดของคุณจะเป็นอย่างไรก่อนโพสต์หรือไม่? หรืออาจจะสร้างภาพหน้าจอที่สวยงามสำหรับชุดสื่อของคุณ? เครื่องมือม็อคอัพโปรไฟล์ของเราช่วยคุณได้",
    section1_title: "ทำไมต้องใช้ม็อคอัพโปรไฟล์?",
    section1_desc:
      "ม็อคอัพโปรไฟล์ช่วยให้คุณจำลองว่าโปรไฟล์ Instagram หรือ TikTok ของคุณจะปรากฏต่อผู้เยี่ยมชมอย่างไรได้อย่างแม่นยำ สิ่งนี้จำเป็นสำหรับ:",
    section1_points: [
      "วางแผนความสวยงามของกริด",
      "ทดสอบการรวมรูปโปรไฟล์และประวัติ",
      "สร้างสื่อการตลาดสำหรับแบรนด์",
      "แสดงศักยภาพของคุณต่อสปอนเซอร์",
    ],
    section2_title: "วิธีการสร้างม็อคอัพ",
    section2_desc:
      "การสร้างม็อคอัพแบบมืออาชีพใช้เวลาเพียงไม่กี่วินาทีด้วย Easy Split",
    section2_step1:
      "เลือกแพลตฟอร์ม: เลือก TikTok Profile Mockup หรือ Instagram Profile Mockup จากเมนูเครื่องมือของเรา",
    section2_step2:
      "ปรับแต่งรายละเอียด: อัปโหลดรูปโปรไฟล์ของคุณ ใส่ชื่อผู้ใช้ ประวัติ และจำนวนผู้ติดตาม คุณสามารถเปิดป้าย 'ยืนยันแล้ว' ได้ด้วย!",
    section2_step3:
      "ดาวน์โหลดความละเอียดสูง: เมื่อคุณพอใจกับรูปลักษณ์แล้ว ให้ดาวน์โหลดภาพความละเอียดสูงเพื่อใช้ได้ทุกที่",
    tip_title: "เคล็ดลับมือโปร",
    tip_desc:
      "ใช้ม็อคอัพของเราเพื่อเสนอขายแบรนด์! ส่งภาพหน้าจอผลิตภัณฑ์ของพวกเขาที่แสดงบนฟีดของคุณก่อนที่คุณจะโพสต์เสียอีก มันช่วยเพิ่มโอกาสในการปิดดีลได้อย่างมาก",
    cta_title: "เริ่มออกแบบฟีดของคุณ",
    cta_desc: "ลองใช้เครื่องสร้างม็อคอัพของเราฟรี!",
    cta_btn: "ไปที่เครื่องมือม็อคอัพ",
  },
  id: {
    back: "Kembali ke Blog",
    title_part_1: "Buat",
    title_part_2: "Mockup Profil",
    title_part_3: "Realistis untuk Instagram & TikTok",
    tags: ["Mockup", "Baca 5 menit", "Tips Pertumbuhan"],
    intro:
      "Ingin memvisualisasikan bagaimana feed Anda akan terlihat sebelum memposting? Atau mungkin membuat tangkapan layar yang menakjubkan untuk media kit Anda? Alat Mockup Profil kami siap membantu.",
    section1_title: "Mengapa Menggunakan Mockup Profil?",
    section1_desc:
      "Mockup profil memungkinkan Anda mensimulasikan dengan tepat bagaimana profil Instagram atau TikTok Anda akan terlihat oleh pengunjung. Ini penting untuk:",
    section1_points: [
      "Merencanakan estetika grid Anda",
      "Menguji kombinasi foto profil dan bio",
      "Membuat materi pemasaran untuk merek",
      "Menunjukkan potensi Anda kepada sponsor",
    ],
    section2_title: "Cara Membuat Mockup",
    section2_desc:
      "Membuat mockup profesional hanya butuh beberapa detik dengan Easy Split.",
    section2_step1:
      "Pilih platform Anda: Pilih TikTok Profile Mockup atau Instagram Profile Mockup dari menu alat kami.",
    section2_step2:
      "Sesuaikan detail: Unggah foto profil Anda, masukkan nama pengguna, bio, dan jumlah pengikut. Anda bahkan dapat mengaktifkan lencana 'Terverifikasi'!",
    section2_step3:
      "Unduh resolusi tinggi: Setelah Anda puas dengan tampilannya, unduh gambar resolusi tinggi untuk digunakan di mana saja.",
    tip_title: "Tip Pro",
    tip_desc:
      "Gunakan mockup kami untuk menawarkan ke merek! Kirimkan tangkapan layar produk mereka yang ditampilkan di feed Anda bahkan sebelum Anda memposting. Ini meningkatkan peluang Anda mendapatkan kesepakatan secara signifikan.",
    cta_title: "Mulai Desain Feed Anda",
    cta_desc: "Coba pembuat Mockup kami secara gratis!",
    cta_btn: "Ke Alat Mockup",
  },
  es: {
    back: "Volver al Blog",
    title_part_1: "Crear Mockups",
    title_part_2: "de Perfil Realistas",
    title_part_3: "para Instagram y TikTok",
    tags: ["Mockups", "5 min lectura", "Consejos de Crecimiento"],
    intro:
      "¿Quieres visualizar cómo se verá tu feed antes de publicar? ¿O tal vez crear impresionantes capturas de pantalla para tu kit de medios? Nuestras herramientas de Mockup de Perfil están aquí para ayudar.",
    section1_title: "¿Por qué usar Mockups de Perfil?",
    section1_desc:
      "Un mockup de perfil te permite simular exactamente cómo aparecerá tu perfil de Instagram o TikTok ante los visitantes. Esto es esencial para:",
    section1_points: [
      "Planificar la estética de tu cuadrícula",
      "Probar combinaciones de foto de perfil y biografía",
      "Crear materiales de marketing para marcas",
      "Mostrar tu potencial a los patrocinadores",
    ],
    section2_title: "Cómo crear un Mockup",
    section2_desc:
      "Crear un mockup profesional toma solo unos segundos con Easy Split.",
    section2_step1:
      "Elige tu plataforma: Selecciona TikTok Profile Mockup o Instagram Profile Mockup desde nuestro menú de herramientas.",
    section2_step2:
      "Personaliza detalles: Sube tu foto de perfil, ingresa tu usuario, biografía y conteo de seguidores. ¡Incluso puedes activar la insignia de 'Verificado'!",
    section2_step3:
      "Descarga en alta resolución: Una vez que estés feliz con el aspecto, descarga la imagen en alta resolución para usarla donde quieras.",
    tip_title: "Consejo Pro",
    tip_desc:
      "¡Usa nuestros mockups para presentarte a marcas! Envíales una captura de pantalla de su producto destacado en tu feed antes de publicar. Aumenta significativamente tus posibilidades de conseguir un trato.",
    cta_title: "Empieza a Diseñar tu Feed",
    cta_desc: "¡Prueba nuestros generadores de Mockup gratis!",
    cta_btn: "Ir a Herramientas de Mockup",
  },
  "zh-CN": {
    back: "返回博客",
    title_part_1: "创建逼真的",
    title_part_2: "个人资料模型",
    title_part_3: "用于 Instagram 和 TikTok",
    tags: ["模型", "5分钟阅读", "增长技巧"],
    intro:
      "想在发布前预览你的动态外观吗？或者为你的媒体工具包制作精美的截图？我们的个人资料模型工具随时为你提供帮助。",
    section1_title: "为什么要使用个人资料模型？",
    section1_desc:
      "个人资料模型允许你精确模拟你的 Instagram 或 TikTok 个人资料在访问者眼中的样子。这对以下方面至关重要：",
    section1_points: [
      "规划网格美学",
      "测试头像和简介的组合",
      "为品牌制作营销材料",
      "向赞助商展示你的潜力",
    ],
    section2_title: "如何创建模型",
    section2_desc: "使用 Easy Split 创建专业模型只需几秒钟。",
    section2_step1:
      "选择平台：从我们的工具菜单中选择 TikTok 个人资料模型或 Instagram 个人资料模型。",
    section2_step2:
      "自定义详细信息：上传你的头像，输入你的用户名、简介和粉丝数。你甚至可以切换“已验证”徽章！",
    section2_step3:
      "下载高清图片：一旦你对外观感到满意，就下载高清图片以便随处使用。",
    tip_title: "专业提示",
    tip_desc:
      "使用我们的模型向品牌进行推介！在发布之前，先把他们的产品出现在你的动态中的截图发给他们。这会大大增加你达成交易的机会。",
    cta_title: "开始设计您的动态",
    cta_desc: "免费试用我们的模型生成器！",
    cta_btn: "前往模型工具",
  },
  "zh-TW": {
    back: "返回博客",
    title_part_1: "創建逼真的",
    title_part_2: "個人資料模型",
    title_part_3: "用於 Instagram 和 TikTok",
    tags: ["模型", "5分鐘閱讀", "成長技巧"],
    intro:
      "想在發布前預覽您的動態外觀嗎？或者為您的媒體工具包製作精美的截圖？我們的個人資料模型工具隨時為您提供幫助。",
    section1_title: "為什麼要使用個人資料模型？",
    section1_desc:
      "個人資料模型允許您精確模擬您的 Instagram 或 TikTok 個人資料在訪客眼中的樣子。這對以下方面至關重要：",
    section1_points: [
      "規劃網格美學",
      "測試頭像和簡介的組合",
      "為品牌製作營銷材料",
      "向贊助商展示您的潛力",
    ],
    section2_title: "如何創建模型",
    section2_desc: "使用 Easy Split 創建專業模型只需幾秒鐘。",
    section2_step1:
      "選擇平台：從我們的工具菜單中選擇 TikTok 個人資料模型或 Instagram 個人資料模型。",
    section2_step2:
      "自定義詳細信息：上傳您的頭像，輸入您的用戶名、簡介和粉絲數。您甚至可以切換「已驗證」徽章！",
    section2_step3:
      "下載高清圖片：一旦您對外觀感到滿意，就下載高清圖片以便隨處使用。",
    tip_title: "專業提示",
    tip_desc:
      "使用我們的模型向品牌進行推介！在發布之前，先把他們的產品出現在您的動態中的截圖發給他們。這會大大增加您達成交易的機會。",
    cta_title: "開始設計您的動態",
    cta_desc: "免費試用我們的模型生成器！",
    cta_btn: "前往模型工具",
  },
  de: {
    back: "Zurück zum Blog",
    title_part_1: "Erstellen Sie realistische",
    title_part_2: "Profil-Mockups",
    title_part_3: "für Instagram & TikTok",
    tags: ["Mockups", "5 Min. Lesezeit", "Wachstumstipps"],
    intro:
      "Möchten Sie vor dem Posten visualisieren, wie Ihr Feed aussehen wird? Oder vielleicht atemberaubende Screenshots für Ihr Media Kit erstellen? Unsere Profil-Mockup-Tools sind hier, um zu helfen.",
    section1_title: "Warum Profil-Mockups verwenden?",
    section1_desc:
      "Ein Profil-Mockup ermöglicht es Ihnen, genau zu simulieren, wie Ihr Instagram- oder TikTok-Profil für Besucher erscheinen wird. Dies ist unerlässlich für:",
    section1_points: [
      "Planung Ihrer Grid-Ästhetik",
      "Testen von Profilbild- und Bio-Kombinationen",
      "Erstellung von Marketingmaterialien für Marken",
      "Präsentation Ihres Potenzials für Sponsoren",
    ],
    section2_title: "So erstellen Sie ein Mockup",
    section2_desc:
      "Die Erstellung eines professionellen Mockups dauert mit Easy Split nur wenige Sekunden.",
    section2_step1:
      "Wählen Sie Ihre Plattform: Wählen Sie entweder TikTok Profil Mockup oder Instagram Profil Mockup aus unserem Tools-Menü.",
    section2_step2:
      "Details anpassen: Laden Sie Ihr Profilbild hoch, geben Sie Ihren Benutzernamen, Ihre Biografie und die Anzahl der Follower ein. Sie können sogar 'Verifiziert'-Abzeichen umschalten!",
    section2_step3:
      "High-Res herunterladen: Wenn Sie mit dem Aussehen zufrieden sind, laden Sie das hochauflösende Bild herunter, um es überall zu verwenden.",
    tip_title: "Profi-Tipp",
    tip_desc:
      "Nutzen Sie unsere Mockups, um Marken zu pitchen! Senden Sie ihnen einen Screenshot ihres Produkts in Ihrem Feed, noch bevor Sie posten. Das erhöht Ihre Chancen auf einen Deal erheblich.",
    cta_title: "Beginnen Sie mit dem Design Ihres Feeds",
    cta_desc: "Testen Sie unsere Mockup-Generatoren kostenlos!",
    cta_btn: "Zu den Mockup-Tools",
  },
  ru: {
    back: "Назад в блог",
    title_part_1: "Создавайте реалистичные",
    title_part_2: "Мокапы профилей",
    title_part_3: "для Instagram и TikTok",
    tags: ["Мокапы", "5 мин чтения", "Советы по росту"],
    intro:
      "Хотите визуализировать, как будет выглядеть ваша лента перед публикацией? Или, может быть, создать потрясающие скриншоты для вашего медиа-кита? Наши инструменты для создания мокапов профилей здесь, чтобы помочь.",
    section1_title: "Зачем использовать мокапы профилей?",
    section1_desc:
      "Мокап профиля позволяет точно смоделировать, как ваш профиль в Instagram или TikTok будет выглядеть для посетителей. Это необходимо для:",
    section1_points: [
      "Планирования эстетики вашей сетки",
      "Тестирования сочетаний фото профиля и био",
      "Создания маркетинговых материалов для брендов",
      "Демонстрации вашего потенциала спонсорам",
    ],
    section2_title: "Как создать мокап",
    section2_desc:
      "Создание профессионального мокапа занимает всего несколько секунд с Easy Split.",
    section2_step1:
      "Выберите платформу: Выберите TikTok Profile Mockup или Instagram Profile Mockup из меню наших инструментов.",
    section2_step2:
      "Настройте детали: Загрузите фото профиля, введите имя пользователя, био и количество подписчиков. Вы даже можете включить значок «Верифицирован»!",
    section2_step3:
      "Скачайте в высоком разрешении: Как только вы будете довольны результатом, скачайте изображение в высоком разрешении для использования где угодно.",
    tip_title: "Совет профи",
    tip_desc:
      "Используйте наши мокапы для предложений брендам! Отправьте им скриншот их продукта в вашей ленте еще до того, как вы его опубликуете. Это значительно увеличивает ваши шансы на сделку.",
    cta_title: "Начните дизайн вашей ленты",
    cta_desc: "Попробуйте наши генераторы мокапов бесплатно!",
    cta_btn: "К инструментам мокапов",
  },
  hi: {
    back: "ब्लॉग पर वापस जाएं",
    title_part_1: "यथार्थवादी",
    title_part_2: "प्रोफाइल मॉकअप",
    title_part_3: "Instagram और TikTok के लिए बनाएं",
    tags: ["मॉकअप", "5 मिनट पढ़ना", "विकास के सुझाव"],
    intro:
      "क्या आप पोस्ट करने से पहले देखना चाहते हैं कि आपकी फ़ीड कैसी दिखेगी? या शायद अपनी मीडिया किट के लिए शानदार स्क्रीनशॉट बनाना चाहते हैं? हमारे प्रोफाइल मॉकअप टूल आपकी मदद के लिए यहां हैं।",
    section1_title: "प्रोफाइल मॉकअप का उपयोग क्यों करें?",
    section1_desc:
      "एक प्रोफाइल मॉकअप आपको यह अनुकरण करने की अनुमति देता है कि आपका इंस्टाग्राम या टिकटॉक प्रोफाइल आगंतुकों को कैसा दिखाई देगा। यह इसके लिए आवश्यक है:",
    section1_points: [
      "अपनी ग्रिड सौंदर्यशास्त्र की योजना बनाना",
      "प्रोफ़ाइल चित्र और बायो संयोजनों का परीक्षण करना",
      "ब्रांडों के लिए विपणन सामग्री बनाना",
      "प्रायोजकों को अपनी क्षमता दिखाना",
    ],
    section2_title: "मॉकअप कैसे बनाएं",
    section2_desc:
      "Easy Split के साथ एक पेशेवर मॉकअप बनाने में बस कुछ ही सेकंड लगते हैं。",
    section2_step1:
      "अपना प्लेटफ़ॉर्म चुनें: हमारे टूल मेनू से टिकटॉक प्रोफ़ाइल मॉकअप या इंस्टाग्राम प्रोफ़ाइल मॉकअप चुनें।",
    section2_step2:
      "विवरण कस्टमाइज़ करें: अपनी प्रोफ़ाइल तस्वीर अपलोड करें, अपना उपयोगकर्ता नाम, बायो और फ़ॉलोअर की संख्या दर्ज करें। आप 'सत्यापित' बैज भी टॉगल कर सकते हैं!",
    section2_step3:
      "हाई-रिज़ॉल्यूशन डाउनलोड करें: एक बार जब आप लुक से खुश हो जाएं, तो कहीं भी उपयोग करने के लिए उच्च-रिज़ॉल्यूशन वाली छवि डाउनलोड करें。",
    tip_title: "प्रो टिप",
    tip_desc:
      "ब्रांडों को पिच करने के लिए हमारे मॉकअप का उपयोग करें! पोस्ट करने से पहले ही उन्हें अपनी फ़ीड पर दिखाए गए उनके उत्पाद का स्क्रीनशॉट भेजें। इससे सौदे को पूरा करने की आपकी संभावना काफी बढ़ जाती है。",
    cta_title: "अपनी फ़ीड डिजाइन करना शुरू करें",
    cta_desc: "हमारे मॉकअप जनरेटर मुफ़्त में आज़माएं!",
    cta_btn: "मॉकअप टूल्स पर जाएं",
  },
  "pt-BR": {
    back: "Voltar ao Blog",
    title_part_1: "Crie Mockups",
    title_part_2: "de Perfil Realistas",
    title_part_3: "para Instagram e TikTok",
    tags: ["Mockups", "5 min de leitura", "Dicas de Crescimento"],
    intro:
      "Quer visualizar como seu feed ficará antes de postar? Ou talvez criar capturas de tela impressionantes para seu kit de mídia? Nossas ferramentas de Mockup de Perfil estão aqui para ajudar.",
    section1_title: "Por que usar Mockups de Perfil?",
    section1_desc:
      "Um mockup de perfil permite simular exatamente como seu perfil do Instagram ou TikTok aparecerá para os visitantes. Isso é essencial para:",
    section1_points: [
      "Planejar a estética do seu grid",
      "Testar combinações de foto de perfil e bio",
      "Criar materiais de marketing para marcas",
      "Mostrar seu potencial para patrocinadores",
    ],
    section2_title: "Como criar um Mockup",
    section2_desc:
      "Criar um mockup profissional leva apenas alguns segundos com o Easy Split.",
    section2_step1:
      "Escolha sua plataforma: Selecione TikTok Profile Mockup ou Instagram Profile Mockup no menu de ferramentas.",
    section2_step2:
      "Personalize os detalhes: Carregue sua foto de perfil, insira seu nome de usuário, bio e contagem de seguidores. Você pode até alternar selos de 'Verificado'!",
    section2_step3:
      "Baixe em alta resolução: Quando estiver satisfeito com o visual, baixe a imagem em alta resolução para usar em qualquer lugar.",
    tip_title: "Dica Pro",
    tip_desc:
      "Use nossos mockups para apresentar a marcas! Envie a elas uma captura de tela do produto delas em destaque no seu feed antes mesmo de postar. Isso aumenta significativamente suas chances de fechar um negócio.",
    cta_title: "Comece a Projetar seu Feed",
    cta_desc: "Experimente nossos geradores de Mockup gratuitamente!",
    cta_btn: "Ir para Ferramentas de Mockup",
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
          href={`/${lang}/blog`}
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
            href={`/${lang}/tools/profile-mockups`}
            className="inline-block bg-black text-white px-8 py-4 border-2 border-white shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] hover:-translate-y-1 transition-transform font-black uppercase text-xl no-underline"
          >
            {t.cta_btn}
          </Link>
        </div>
      </div>
    </article>
  );
}
