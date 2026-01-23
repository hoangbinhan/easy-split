import Link from "next/link";
import { Bangers } from "next/font/google";
import { ArrowLeft, Zap, Sun, Moon, Circle } from "lucide-react";
import { Metadata } from "next";
import { Language } from "@/lib/i18n";
import { blogPosts } from "../blog-data";

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
    blogPosts[lang as Language]?.find((p) => p.slug === "tools-guide") ||
    blogPosts["en"].find((p) => p.slug === "tools-guide");

  const languages: Record<string, string> = {};
  (Object.keys(content) as Language[]).forEach((l) => {
    languages[l] = `https://easysplit.click/${l}/blog/tools-guide`;
  });

  return {
    title: `${post?.title} - Easy Split`,
    description: post?.excerpt,
    alternates: {
      canonical: `https://easysplit.click/${lang}/blog/tools-guide`,
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
  section1_step1: string;
  section1_step2: string;
  section2_title: string;
  section2_desc: string;
  section2_step1: string;
  section2_step2: string;
  section3_title: string;
  section3_desc: string;
  section3_step1: string;
  section3_step2: string;
  section4_title: string;
  section4_desc: string;
  section4_step1: string;
  section4_step2: string;
  cta_title: string;
  cta_desc: string;
  cta_btn: string;
};

const content: Record<string, GuideContent> = {
  en: {
    back: "Back to Blog",
    title_part_1: "Master Your",
    title_part_2: "Photos",
    title_part_3: "with Easy Split Tools",
    tags: ["Photo Editing", "5 min read", "Guide"],
    intro:
      "Easy Split is famous for splitting photos for TikTok, but did you know we offer a full suite of powerful photo editing tools? Discover how to sharpen, adjust brightness, and convert photos to black & white instantly.",
    section1_title: "Sharpen Image: Fix Blurry Photos",
    section1_desc:
      "Captured a great moment but it's slightly out of focus? Our AI-powered Sharpen tool enhances edges and details to make your photo crisp.",
    section1_step1:
      "Upload your blurry photo. The tool automatically analyzes and sharpens the details.",
    section1_step2:
      "Use the slider to adjust intensity. Real-time preview lets you see the perfect balance before downloading.",
    section2_title: "Brightness Adjustment: Perfect Lighting",
    section2_desc:
      "Too dark? Too bright? Fix exposure problems in seconds without complex software like Photoshop.",
    section2_step1:
      "Drag and drop your photo. It works locally in your browser for privacy.",
    section2_step2:
      "Slide right to brighten, left to darken. The result is instant!",
    section3_title: "Black & White: Timeless Elegance",
    section3_desc:
      "Turn ordinary color photos into dramatic, professional grayscale masterpieces.",
    section3_step1:
      "Simply upload your image. Our tool applies a professional grayscale filter immediately.",
    section3_step2:
      "Download the high-quality result instantly. Perfect for artistic profiles.",
    section4_title: "Circle Crop: Perfect Profile Pictures",
    section4_desc:
      "Need a perfectly round image for your avatar? Stop guessing and use our Circle Crop tool.",
    section4_step1: "Upload any image. We automatically apply a circular mask.",
    section4_step2:
      "Adjust the zoom and position to frame your face perfectly, then download a transparent PNG.",
    cta_title: "Ready to edit?",
    cta_desc: "All these tools are free and require no login!",
    cta_btn: "Try Tools Now",
  },
  vi: {
    back: "Quay lại Blog",
    title_part_1: "Làm Chủ",
    title_part_2: "Hình Ảnh",
    title_part_3: "với Bộ Công Cụ Easy Split",
    tags: ["Chỉnh sửa ảnh", "5 phút đọc", "Hướng dẫn"],
    intro:
      "Easy Split nổi tiếng với tính năng cắt ảnh cho TikTok, nhưng bạn có biết chúng tôi cung cấp trọn bộ công cụ chỉnh sửa ảnh mạnh mẽ? Khám phá cách làm nét, chỉnh độ sáng và chuyển ảnh sang đen trắng ngay lập tức.",
    section1_title: "Làm Nét Ảnh: Cứu Ảnh Mờ",
    section1_desc:
      "Chụp được khoảnh khắc đẹp nhưng lại bị out nét? Công cụ Làm Nét thông minh của chúng tôi sẽ tăng cường các cạnh và chi tiết để bức ảnh trở nên sắc sảo.",
    section1_step1:
      "Tải lên bức ảnh bị mờ. Công cụ tự động phân tích và làm rõ các chi tiết.",
    section1_step2:
      "Sử dụng thanh trượt để điều chỉnh cường độ. Xem trước thời gian thực giúp bạn tìm ra sự cân bằng hoàn hảo trước khi tải xuống.",
    section2_title: "Chỉnh Độ Sáng: Ánh Sáng Hoàn Hảo",
    section2_desc:
      "Quá tối? Quá sáng? Sửa lỗi phơi sáng trong vài giây mà không cần phần mềm phức tạp như Photoshop.",
    section2_step1:
      "Kéo và thả ảnh của bạn. Mọi thứ hoạt động cục bộ trên trình duyệt để bảo mật.",
    section2_step2:
      "Kéo sang phải để làm sáng, sang trái để làm tối. Kết quả hiển thị ngay lập tức!",
    section3_title: "Đen Trắng: Vẻ Đẹp Vượt Thời Gian",
    section3_desc:
      "Biến những bức ảnh màu bình thường thành những kiệt tác thang độ xám đầy nghệ thuật và chuyên nghiệp.",
    section3_step1:
      "Chỉ cần tải ảnh lên. Công cụ của chúng tôi áp dụng bộ lọc thang độ xám chuyên nghiệp ngay lập tức.",
    section3_step2:
      "Tải xuống kết quả chất lượng cao ngay lập tức. Hoàn hảo cho các profile nghệ thuật.",
    section4_title: "Cắt Ảnh Tròn: Ảnh Đại Diện Hoàn Hảo",
    section4_desc:
      "Cần một bức ảnh tròn hoàn hảo cho avatar? Đừng đoán mò nữa, hãy dùng công cụ Cắt Ảnh Tròn của chúng tôi.",
    section4_step1:
      "Tải lên bất kỳ ảnh nào. Chúng tôi tự động áp dụng khung tròn.",
    section4_step2:
      "Điều chỉnh thu phóng và vị trí để căn chỉnh khuôn mặt hoàn hảo, sau đó tải xuống file PNG trong suốt.",
    cta_title: "Sẵn sàng chỉnh sửa?",
    cta_desc: "Tất cả công cụ đều miễn phí và không cần đăng nhập!",
    cta_btn: "Thử Ngay",
  },
  ko: {
    back: "블로그로 돌아가기",
    title_part_1: "Easy Split 도구로",
    title_part_2: "사진",
    title_part_3: "마스터하기",
    tags: ["사진 편집", "5분 읽기", "가이드"],
    intro:
      "Easy Split은 틱톡용 사진 분할로 유명하지만, 강력한 사진 편집 도구 모음을 제공한다는 사실을 알고 계셨나요? 사진을 선명하게 하고, 밝기를 조절하고, 흑백으로 변환하는 방법을 알아보세요.",
    section1_title: "이미지 선명하게: 흐릿한 사진 수정",
    section1_desc:
      "좋은 순간을 포착했지만 초점이 약간 나갔나요? AI 기반 선명도 도구가 가장자리와 세부 사항을 향상시켜 사진을 선명하게 만듭니다.",
    section1_step1:
      "흐릿한 사진을 업로드하세요. 도구가 자동으로 세부 사항을 분석하고 선명하게 합니다.",
    section1_step2:
      "슬라이더를 사용하여 강도를 조절하세요. 실시간 미리보기를 통해 다운로드하기 전에 완벽한 균형을 찾을 수 있습니다.",
    section2_title: "밝기 조절: 완벽한 조명",
    section2_desc:
      "너무 어둡나요? 너무 밝나요? 포토샵 같은 복잡한 소프트웨어 없이 몇 초 만에 노출 문제를 해결하세요.",
    section2_step1:
      "사진을 드래그 앤 드롭하세요. 개인 정보 보호를 위해 브라우저에서 로컬로 작동합니다.",
    section2_step2:
      "오른쪽으로 밀면 밝아지고, 왼쪽으로 밀면 어두워집니다. 결과는 즉시 나타납니다!",
    section3_title: "흑백: 시대를 초월한 우아함",
    section3_desc:
      "평범한 컬러 사진을 드라마틱하고 전문적인 회색조 걸작으로 변환하세요.",
    section3_step1:
      "이미지를 업로드하기만 하면 됩니다. 저희 도구가 즉시 전문적인 회색조 필터를 적용합니다.",
    section3_step2:
      "고품질 결과를 즉시 다운로드하세요. 예술적인 프로필에 적합합니다.",
    section4_title: "Circle Crop: Perfect Profile Pictures",
    section4_desc:
      "Need a perfectly round image for your avatar? Stop guessing and use our Circle Crop tool.",
    section4_step1: "Upload any image. We automatically apply a circular mask.",
    section4_step2:
      "Adjust the zoom and position to frame your face perfectly, then download a transparent PNG.",
    cta_title: "편집할 준비가 되셨나요?",
    cta_desc: "모든 도구는 무료이며 로그인이 필요하지 않습니다!",
    cta_btn: "지금 도구 사용해보기",
  },
  jp: {
    back: "ブログに戻る",
    title_part_1: "Easy Splitツールで",
    title_part_2: "写真",
    title_part_3: "をマスターする",
    tags: ["写真編集", "5分", "ガイド"],
    intro:
      "Easy SplitはTikTok用の写真分割で有名ですが、強力な写真編集ツール一式を提供していることをご存知ですか？写真を鮮明にし、明るさを調整し、瞬時に白黒に変換する方法を発見してください。",
    section1_title: "画像を鮮明化：ぼやけた写真を修正",
    section1_desc:
      "素晴らしい瞬間を撮ったのに、少しピントがずれていませんか？当社のAI搭載シャープツールは、エッジと詳細を強化して写真をくっきりとさせます。",
    section1_step1:
      "ぼやけた写真をアップロードします。ツールが自動的に詳細を分析して鮮明にします。",
    section1_step2:
      "スライダーを使用して強度を調整します。リアルタイムプレビューにより、ダウンロードする前に完璧なバランスを確認できます。",
    section2_title: "明るさ調整：完璧な照明",
    section2_desc:
      "暗すぎますか？明るすぎますか？Photoshopのような複雑なソフトウェアなしで、数秒で露出の問題を修正します。",
    section2_step1:
      "写真をドラッグ＆ドロップします。プライバシーのためにブラウザ内でローカルに動作します。",
    section2_step2:
      "右にスライドすると明るくなり、左にスライドすると暗くなります。結果は瞬時に表示されます！",
    section3_title: "白黒：タイムレスなエレガンス",
    section3_desc:
      "普通のカラー写真を、ドラマチックでプロフェッショナルなグレースケールの傑作に変えます。",
    section3_step1:
      "画像をアップロードするだけです。当社のツールが即座にプロフェッショナルなグレースケールフィルターを適用します。",
    section3_step2:
      "高品質の結果を即座にダウンロードします。アーティスティックなプロフィールに最適です。",
    section4_title: "Circle Crop: Perfect Profile Pictures",
    section4_desc:
      "Need a perfectly round image for your avatar? Stop guessing and use our Circle Crop tool.",
    section4_step1: "Upload any image. We automatically apply a circular mask.",
    section4_step2:
      "Adjust the zoom and position to frame your face perfectly, then download a transparent PNG.",
    cta_title: "編集する準備はできましたか？",
    cta_desc: "これらのツールはすべて無料で、ログインは不要です！",
    cta_btn: "今すぐツールを試す",
  },
  th: {
    back: "กลับไปที่บล็อก",
    title_part_1: "เชี่ยวชาญ",
    title_part_2: "รูปถ่าย",
    title_part_3: "ด้วยเครื่องมือ Easy Split",
    tags: ["การแก้ไขภาพ", "อ่าน 5 นาที", "คู่มือ"],
    intro:
      "Easy Split มีชื่อเสียงในด้านการแยกภาพสำหรับ TikTok แต่คุณรู้หรือไม่ว่าเรามีชุดเครื่องมือแก้ไขภาพที่มีประสิทธิภาพ? ค้นพบวิธีทำให้ภาพคมชัด ปรับความสว่าง และแปลงภาพเป็นขาวดำได้ทันที",
    section1_title: "ทำให้ภาพคมชัด: แก้ไขภาพเบลอ",
    section1_desc:
      "ถ่ายภาพช่วงเวลาที่ดีแต่โฟกัสหลุดเล็กน้อยใช่ไหม? เครื่องมือทำให้คมชัดด้วย AI ของเราจะเน้นขอบและรายละเอียดเพื่อให้ภาพของคุณชัดเจน",
    section1_step1:
      "อัปโหลดภาพเบลอของคุณ เครื่องมือจะวิเคราะห์และทำให้รายละเอียดคมชัดขึ้นโดยอัตโนมัติ",
    section1_step2:
      "ใช้แถบเลื่อนเพื่อปรับความเข้ม ตัวอย่างแบบเรียลไทม์ช่วยให้คุณเห็นความสมดุลที่สมบูรณ์แบบก่อนดาวน์โหลด",
    section2_title: "ปรับความสว่าง: แสงที่สมบูรณ์แบบ",
    section2_desc:
      "มืดเกินไป? สว่างเกินไป? แก้ไขปัญหาการเปิดรับแสงในไม่กี่วินาทีโดยไม่ต้องใช้ซอฟต์แวร์ที่ซับซ้อนเช่น Photoshop",
    section2_step1:
      "ลากและวางภาพของคุณ มันทำงานในเบราว์เซอร์ของคุณเพื่อความเป็นส่วนตัว",
    section2_step2:
      "เลื่อนไปทางขวาเพื่อเพิ่มความสว่าง ซ้ายเพื่อทำให้มืดลง ผลลัพธ์จะปรากฏทันที!",
    section3_title: "ขาวดำ: ความสง่างามเหนือกาลเวลา",
    section3_desc:
      "เปลี่ยนภาพสีธรรมดาให้เป็นผลงานชิ้นเอกระดับสีเทาที่น่าทึ่งและเป็นมืออาชีพ",
    section3_step1:
      "เพียงอัปโหลดภาพของคุณ เครื่องมือของเราจะใช้ฟิลเตอร์โทนสีเทาแบบมืออาชีพทันที",
    section3_step2: "ดาวน์โหลดผลลัพธ์คุณภาพสูงได้ทันที เหมาะสำหรับโปรไฟล์ศิลปะ",
    section4_title: "Circle Crop: Perfect Profile Pictures",
    section4_desc:
      "Need a perfectly round image for your avatar? Stop guessing and use our Circle Crop tool.",
    section4_step1: "Upload any image. We automatically apply a circular mask.",
    section4_step2:
      "Adjust the zoom and position to frame your face perfectly, then download a transparent PNG.",
    cta_title: "พร้อมที่จะแก้ไขหรือยัง?",
    cta_desc: "เครื่องมือทั้งหมดนี้ฟรีและไม่ต้องเข้าสู่ระบบ!",
    cta_btn: "ลองใช้เครื่องมือทันที",
  },
  id: {
    back: "Kembali ke Blog",
    title_part_1: "Kuasai",
    title_part_2: "Foto",
    title_part_3: "dengan Alat Easy Split",
    tags: ["Pengeditan Foto", "Baca 5 menit", "Panduan"],
    intro:
      "Easy Split terkenal karena memecah foto untuk TikTok, tetapi tahukah Anda bahwa kami menawarkan rangkaian lengkap alat pengeditan foto yang canggih? Temukan cara menajamkan, menyesuaikan kecerahan, dan mengubah foto menjadi hitam putih secara instan.",
    section1_title: "Pertajam Gambar: Perbaiki Foto Buram",
    section1_desc:
      "Menangkap momen hebat tetapi sedikit tidak fokus? Alat Sharpen bertenaga AI kami meningkatkan tepi dan detail agar foto Anda tajam.",
    section1_step1:
      "Unggah foto buram Anda. Alat ini secara otomatis menganalisis dan menajamkan detail.",
    section1_step2:
      "Gunakan penggeser untuk menyesuaikan intensitas. Pratinjau waktu nyata memungkinkan Anda melihat keseimbangan sempurna sebelum mengunduh.",
    section2_title: "Penyesuaian Kecerahan: Pencahayaan Sempurna",
    section2_desc:
      "Terlalu gelap? Terlalu terang? Perbaiki masalah pencahayaan dalam hitungan detik tanpa perangkat lunak rumit seperti Photoshop.",
    section2_step1:
      "Seret dan lepas foto Anda. Ini bekerja secara lokal di browser Anda untuk privasi.",
    section2_step2:
      "Geser ke kanan untuk mencerahkan, ke kiri untuk menggelapkan. Hasilnya instan!",
    section3_title: "Hitam & Putih: Keanggunan Abadi",
    section3_desc:
      "Ubah foto berwarna biasa menjadi mahakarya skala abu-abu yang dramatis dan profesional.",
    section3_step1:
      "Cukup unggah gambar Anda. Alat kami menerapkan filter skala abu-abu profesional dengan segera.",
    section3_step2:
      "Unduh hasil berkualitas tinggi secara instan. Sempurna untuk profil artistik.",
    section4_title: "Circle Crop: Perfect Profile Pictures",
    section4_desc:
      "Need a perfectly round image for your avatar? Stop guessing and use our Circle Crop tool.",
    section4_step1: "Upload any image. We automatically apply a circular mask.",
    section4_step2:
      "Adjust the zoom and position to frame your face perfectly, then download a transparent PNG.",
    cta_title: "Siap mengedit?",
    cta_desc: "Semua alat ini gratis dan tidak memerlukan login!",
    cta_btn: "Coba Alat Sekarang",
  },
  es: {
    back: "Volver al Blog",
    title_part_1: "Domina tus",
    title_part_2: "Fotos",
    title_part_3: "con las Herramientas de Easy Split",
    tags: ["Edición de Fotos", "5 min de lectura", "Guía"],
    intro:
      "Easy Split es famoso por dividir fotos para TikTok, pero ¿sabías que ofrecemos un conjunto completo de potentes herramientas de edición de fotos? Descubre cómo enfocar, ajustar el brillo y convertir fotos a blanco y negro al instante.",
    section1_title: "Enfocar Imagen: Arreglar Fotos Borrosas",
    section1_desc:
      "¿Capturaste un gran momento pero está un poco desenfocado? Nuestra herramienta de Enfoque con IA mejora los bordes y detalles para que tu foto sea nítida.",
    section1_step1:
      "Sube tu foto borrosa. La herramienta analiza y enfoca automáticamente los detalles.",
    section1_step2:
      "Usa el control deslizante para ajustar la intensidad. La vista previa en tiempo real te permite ver el equilibrio perfecto antes de descargar.",
    section2_title: "Ajuste de Brillo: Iluminación Perfecta",
    section2_desc:
      "¿Demasiado oscuro? ¿Demasiado brillante? Soluciona problemas de exposición en segundos sin software complejo como Photoshop.",
    section2_step1:
      "Arrastra y suelta tu foto. Funciona localmente en tu navegador para mayor privacidad.",
    section2_step2:
      "Desliza hacia la derecha para aclarar, hacia la izquierda para oscurecer. ¡El resultado es instantáneo!",
    section3_title: "Blanco y Negro: Elegancia Atemporal",
    section3_desc:
      "Convierte fotos en color ordinarias en dramáticas obras maestras profesionales en escala de grises.",
    section3_step1:
      "Simplemente sube tu imagen. Nuestra herramienta aplica un filtro de escala de grises profesional de inmediato.",
    section3_step2:
      "Descarga el resultado de alta calidad al instante. Perfecto para perfiles artísticos.",
    section4_title: "Circle Crop: Perfect Profile Pictures",
    section4_desc:
      "Need a perfectly round image for your avatar? Stop guessing and use our Circle Crop tool.",
    section4_step1: "Upload any image. We automatically apply a circular mask.",
    section4_step2:
      "Adjust the zoom and position to frame your face perfectly, then download a transparent PNG.",
    cta_title: "¿Listo para editar?",
    cta_desc:
      "¡Todas estas herramientas son gratuitas y no requieren inicio de sesión!",
    cta_btn: "Probar Herramientas Ahora",
  },
  "zh-CN": {
    back: "返回博客",
    title_part_1: "掌握您的",
    title_part_2: "照片",
    title_part_3: "使用 Easy Split 工具",
    tags: ["照片编辑", "5 分钟阅读", "指南"],
    intro:
      "Easy Split 以分割 TikTok 照片而闻名，但您知道我们提供全套强大的照片编辑工具吗？了解如何立即锐化、调整亮度和将照片转换为黑白。",
    section1_title: "锐化图片：修复模糊照片",
    section1_desc:
      "拍到了精彩瞬间但稍微有点失焦？我们的 AI 驱动锐化工具增强边缘和细节，使您的照片清晰。",
    section1_step1: "上传您的模糊照片。该工具自动分析并锐化细节。",
    section1_step2: "使用滑块调整强度。实时预览让您在下载前看到完美的平衡。",
    section2_title: "亮度调整：完美光线",
    section2_desc:
      "太暗？太亮？无需 Photoshop 等复杂软件，几秒钟内解决曝光问题。",
    section2_step1: "拖放您的照片。为了隐私，它在您的浏览器中本地运行。",
    section2_step2: "向右滑动变亮，向左滑动变暗。结果是即时的！",
    section3_title: "黑白：永恒的优雅",
    section3_desc: "将普通的彩色照片变成充满戏剧性的专业灰度杰作。",
    section3_step1: "只需上传您的图片。我们的工具立即应用专业灰度滤镜。",
    section3_step2: "立即下载高质量结果。非常适合艺术个人资料。",
    section4_title: "Circle Crop: Perfect Profile Pictures",
    section4_desc:
      "Need a perfectly round image for your avatar? Stop guessing and use our Circle Crop tool.",
    section4_step1: "Upload any image. We automatically apply a circular mask.",
    section4_step2:
      "Adjust the zoom and position to frame your face perfectly, then download a transparent PNG.",
    cta_title: "准备好编辑了吗？",
    cta_desc: "所有这些工具都是免费的，无需登录！",
    cta_btn: "立即试用工具",
  },
  "zh-TW": {
    back: "返回博客",
    title_part_1: "掌握您的",
    title_part_2: "照片",
    title_part_3: "使用 Easy Split 工具",
    tags: ["照片編輯", "5 分鐘閱讀", "指南"],
    intro:
      "Easy Split 以分割 TikTok 照片而聞名，但您知道我們提供全套強大的照片編輯工具嗎？了解如何立即銳化、調整亮度和將照片轉換為黑白。",
    section1_title: "銳化圖片：修復模糊照片",
    section1_desc:
      "拍到了精彩瞬間但稍微有點失焦？我們的 AI 驅動銳化工具增強邊緣和細節，使您的照片清晰。",
    section1_step1: "上傳您的模糊照片。該工具自動分析並銳化細節。",
    section1_step2: "使用滑塊調整強度。實時預覽讓您在下載前看到完美的平衡。",
    section2_title: "亮度調整：完美光線",
    section2_desc:
      "太暗？太亮？無需 Photoshop 等複雜軟件，幾秒鐘內解決曝光問題。",
    section2_step1: "拖放您的照片。為了隱私，它在您的瀏覽器中本地運行。",
    section2_step2: "向右滑動變亮，向左滑動變暗。結果是即時的！",
    section3_title: "黑白：永恆的優雅",
    section3_desc: "將普通的彩色照片變成充滿戲劇性的專業灰階傑作。",
    section3_step1: "只需上傳您的圖片。我們的工具立即應用專業灰階濾鏡。",
    section3_step2: "立即下載高質量結果。非常適合藝術個人資料。",
    section4_title: "Circle Crop: Perfect Profile Pictures",
    section4_desc:
      "Need a perfectly round image for your avatar? Stop guessing and use our Circle Crop tool.",
    section4_step1: "Upload any image. We automatically apply a circular mask.",
    section4_step2:
      "Adjust the zoom and position to frame your face perfectly, then download a transparent PNG.",
    cta_title: "準備好編輯了嗎？",
    cta_desc: "所有這些工具都是免費的，無需登錄！",
    cta_btn: "立即試用工具",
  },
  de: {
    back: "Zurück zum Blog",
    title_part_1: "Meistern Sie Ihre",
    title_part_2: "Fotos",
    title_part_3: "mit Easy Split Tools",
    tags: ["Fotobearbeitung", "5 Min Lesezeit", "Anleitung"],
    intro:
      "Easy Split ist bekannt für das Teilen von Fotos für TikTok, aber wussten Sie, dass wir eine komplette Suite leistungsstarker Fotobearbeitungstools anbieten? Entdecken Sie, wie Sie Fotos schärfen, die Helligkeit anpassen und sofort in Schwarzweiß umwandeln können.",
    section1_title: "Bild schärfen: Unscharfe Fotos korrigieren",
    section1_desc:
      "Einen tollen Moment eingefangen, aber er ist leicht unscharf? Unser KI-gestütztes Schärfe-Tool verbessert Kanten und Details, um Ihr Foto gestochen scharf zu machen.",
    section1_step1:
      "Laden Sie Ihr unscharfes Foto hoch. Das Tool analysiert und schärft die Details automatisch.",
    section1_step2:
      "Verwenden Sie den Schieberegler, um die Intensität anzupassen. Die Echtzeitvorschau lässt Sie die perfekte Balance vor dem Herunterladen sehen.",
    section2_title: "Helligkeitsanpassung: Perfekte Beleuchtung",
    section2_desc:
      "Zu dunkel? Zu hell? Beheben Sie Belichtungsprobleme in Sekunden ohne komplexe Software wie Photoshop.",
    section2_step1:
      "Ziehen Sie Ihr Foto. Es funktioniert aus Datenschutzgründen lokal in Ihrem Browser.",
    section2_step2:
      "Schieben Sie nach rechts, um aufzuhellen, nach links, um abzudunkeln. Das Ergebnis ist sofort sichtbar!",
    section3_title: "Schwarz & Weiß: Zeitlose Eleganz",
    section3_desc:
      "Verwandeln Sie gewöhnliche Farbfotos in dramatische, professionelle Graustufen-Meisterwerke.",
    section3_step1:
      "Laden Sie einfach Ihr Bild hoch. Unser Tool wendet sofort einen professionellen Graustufenfilter an.",
    section3_step2:
      "Laden Sie das hochwertige Ergebnis sofort herunter. Perfekt für künstlerische Profile.",
    section4_title: "Circle Crop: Perfect Profile Pictures",
    section4_desc:
      "Need a perfectly round image for your avatar? Stop guessing and use our Circle Crop tool.",
    section4_step1: "Upload any image. We automatically apply a circular mask.",
    section4_step2:
      "Adjust the zoom and position to frame your face perfectly, then download a transparent PNG.",
    cta_title: "Bereit zum Bearbeiten?",
    cta_desc: "Alle diese Tools sind kostenlos und erfordern keine Anmeldung!",
    cta_btn: "Tools jetzt ausprobieren",
  },
  ru: {
    back: "Назад в блог",
    title_part_1: "Освойте свои",
    title_part_2: "фото",
    title_part_3: "с инструментами Easy Split",
    tags: ["Редактирование фото", "5 мин чтения", "Гайд"],
    intro:
      "Easy Split известен разделением фото для TikTok, но знаете ли вы, что мы предлагаем полный набор мощных инструментов для редактирования фото? Узнайте, как повысить резкость, настроить яркость и мгновенно конвертировать фото в черно-белые.",
    section1_title: "Резкость: исправление размытых фото",
    section1_desc:
      "Поймали отличный момент, но он немного не в фокусе? Наш инструмент резкости на базе ИИ улучшает края и детали, делая фото четким.",
    section1_step1:
      "Загрузите размытое фото. Инструмент автоматически анализирует и повышает резкость деталей.",
    section1_step2:
      "Используйте ползунок для настройки интенсивности. Просмотр в реальном времени позволяет увидеть идеальный баланс перед скачиванием.",
    section2_title: "Настройка яркости: идеальное освещение",
    section2_desc:
      "Слишком темно? Слишком светло? Исправьте проблемы с экспозицией за секунды без сложного ПО, такого как Photoshop.",
    section2_step1:
      "Перетащите ваше фото. Для конфиденциальности оно обрабатывается локально в вашем браузере.",
    section2_step2:
      "Сдвиньте вправо, чтобы осветлить, влево — чтобы затемнить. Результат мгновенный!",
    section3_title: "Черно-белое: вечная элегантность",
    section3_desc:
      "Превратите обычные цветные фото в драматичные, профессиональные черно-белые шедевры.",
    section3_step1:
      "Просто загрузите изображение. Наш инструмент немедленно применяет профессиональный черно-белый фильтр.",
    section3_step2:
      "Мгновенно скачайте результат высокого качества. Идеально для художественных профилей.",
    section4_title: "Circle Crop: Perfect Profile Pictures",
    section4_desc:
      "Need a perfectly round image for your avatar? Stop guessing and use our Circle Crop tool.",
    section4_step1: "Upload any image. We automatically apply a circular mask.",
    section4_step2:
      "Adjust the zoom and position to frame your face perfectly, then download a transparent PNG.",
    cta_title: "Готовы редактировать?",
    cta_desc: "Все эти инструменты бесплатны и не требуют входа!",
    cta_btn: "Попробовать инструменты",
  },
  hi: {
    back: "ब्लॉग पर वापस जाएं",
    title_part_1: "Easy Split टूल के साथ",
    title_part_2: "तस्वीरों",
    title_part_3: "में महारत हासिल करें",
    tags: ["फोटो संपादन", "5 मिनट पढ़ें", "गाइड"],
    intro:
      "Easy Split टिकटोक के लिए तस्वीरें विभाजित करने के लिए प्रसिद्ध है, लेकिन क्या आप जानते हैं कि हम शक्तिशाली फोटो संपादन टूल का एक पूरा सूट प्रदान करते हैं? जानें कि कैसे तेज करें, चमक समायोजित करें, और तस्वीरों को तुरंत ब्लैक एंड व्हाइट में बदलें।",
    section1_title: "इमेज शार्पन: धुंधली तस्वीरों को ठीक करें",
    section1_desc:
      "एक शानदार पल कैद किया लेकिन यह थोड़ा फोकस से बाहर है? हमारा एआई-संचालित शार्पन टूल आपकी तस्वीर को कुरकुरा बनाने के लिए किनारों और विवरणों को बढ़ाता है।",
    section1_step1:
      "अपनी धुंधली तस्वीर अपलोड करें। टूल स्वचालित रूप से विवरणों का विश्लेषण करता है और तेज करता है।",
    section1_step2:
      "तीव्रता समायोजित करने के लिए स्लाइडर का उपयोग करें। रीयल-टाइम पूर्वावलोकन आपको डाउनलोड करने से पहले सही संतुलन देखने देता है।",
    section2_title: "ब्राइटनेस समायोजन: सही रोशनी",
    section2_desc:
      "बहुत अंधेरा? बहुत उज्ज्वल? फोटोशॉप जैसे जटिल सॉफ्टवेयर के बिना सेकंड में एक्सपोज़र समस्याओं को ठीक करें।",
    section2_step1:
      "अपनी तस्वीर खींचें और छोड़ें। यह गोपनीयता के लिए आपके ब्राउज़र में स्थानीय रूप से काम करता है।",
    section2_step2:
      "हल्का करने के लिए दाएं स्लाइड करें, गहरा करने के लिए बाएं। परिणाम तत्काल है!",
    section3_title: "ब्लैक एंड व्हाइट: कालातीत लालित्य",
    section3_desc:
      "साधारण रंगीन तस्वीरों को नाटकीय, पेशेवर ग्रेस्केल उत्कृष्ट कृतियों में बदलें।",
    section3_step1:
      "बस अपनी छवि अपलोड करें। हमारा टूल तुरंत एक पेशेवर ग्रेस्केल फ़िल्टर लागू करता है।",
    section3_step2:
      "उच्च गुणवत्ता वाला परिणाम तुरंत डाउनलोड करें। कलात्मक प्रोफाइल के लिए बिल्कुल सही।",
    section4_title: "Circle Crop: Perfect Profile Pictures",
    section4_desc:
      "Need a perfectly round image for your avatar? Stop guessing and use our Circle Crop tool.",
    section4_step1: "Upload any image. We automatically apply a circular mask.",
    section4_step2:
      "Adjust the zoom and position to frame your face perfectly, then download a transparent PNG.",
    cta_title: "संपादित करने के लिए तैयार हैं?",
    cta_desc: "ये सभी टूल मुफ्त हैं और इनमें लॉगिन की आवश्यकता नहीं है!",
    cta_btn: "अभी टूल आज़माएं",
  },
  "pt-BR": {
    back: "Voltar ao Blog",
    title_part_1: "Domine suas",
    title_part_2: "Fotos",
    title_part_3: "com as Ferramentas Easy Split",
    tags: ["Edição de Fotos", "5 min de leitura", "Guia"],
    intro:
      "O Easy Split é famoso por dividir fotos para o TikTok, mas você sabia que oferecemos um conjunto completo de ferramentas poderosas de edição de fotos? Descubra como aumentar a nitidez, ajustar o brilho e converter fotos em preto e branco instantaneamente.",
    section1_title: "Nitidez de Imagem: Corrigir Fotos Desfocadas",
    section1_desc:
      "Capturou um ótimo momento, mas está um pouco fora de foco? Nossa ferramenta de Nitidez com IA realça bordas e detalhes para deixar sua foto nítida.",
    section1_step1:
      "Envie sua foto desfocada. A ferramenta analisa e nitidifica automaticamente os detalhes.",
    section1_step2:
      "Use o controle deslizante para ajustar a intensidade. A visualização em tempo real permite ver o equilíbrio perfeito antes de baixar.",
    section2_title: "Ajuste de Brilho: Iluminação Perfeita",
    section2_desc:
      "Muito escuro? Muito claro? Corrija problemas de exposição em segundos sem software complexo como Photoshop.",
    section2_step1:
      "Arraste e solte sua foto. Funciona localmente em seu navegador para privacidade.",
    section2_step2:
      "Deslize para a direita para clarear, para a esquerda para escurecer. O resultado é instantâneo!",
    section3_title: "Preto e Branco: Elegância Atemporal",
    section3_desc:
      "Transforme fotos coloridas comuns em obras-primas dramáticas e profissionais em escala de cinza.",
    section3_step1:
      "Basta enviar sua imagem. Nossa ferramenta aplica um filtro de escala de cinza profissional imediatamente.",
    section3_step2:
      "Baixe o resultado de alta qualidade instantaneamente. Perfeito para perfis artísticos.",
    section4_title: "Circle Crop: Perfect Profile Pictures",
    section4_desc:
      "Need a perfectly round image for your avatar? Stop guessing and use our Circle Crop tool.",
    section4_step1: "Upload any image. We automatically apply a circular mask.",
    section4_step2:
      "Adjust the zoom and position to frame your face perfectly, then download a transparent PNG.",
    cta_title: "Pronto para editar?",
    cta_desc: "Todas essas ferramentas são gratuitas e não exigem login!",
    cta_btn: "Testar Ferramentas Agora",
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

        {/* Section 1: Sharpen */}
        <h2 className="flex items-center gap-3 mt-12 text-pink-500">
          <Zap className="w-8 h-8" />
          {t.section1_title}
        </h2>
        <p>{t.section1_desc}</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>{t.section1_step1}</li>
          <li>{t.section1_step2}</li>
        </ul>
        <div className="my-6">
          <Link
            href="/tools/sharpen-image"
            className="inline-block bg-pink-400 text-black px-6 py-2 border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 transition-transform font-bold uppercase no-underline"
          >
            Go to Sharpen Tool
          </Link>
        </div>

        {/* Section 2: Brightness */}
        <h2 className="flex items-center gap-3 mt-12 text-orange-500">
          <Sun className="w-8 h-8" />
          {t.section2_title}
        </h2>
        <p>{t.section2_desc}</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>{t.section2_step1}</li>
          <li>{t.section2_step2}</li>
        </ul>
        <div className="my-6">
          <Link
            href="/tools/brightness"
            className="inline-block bg-orange-400 text-black px-6 py-2 border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 transition-transform font-bold uppercase no-underline"
          >
            Go to Brightness Tool
          </Link>
        </div>

        {/* Section 3: B&W */}
        <h2 className="flex items-center gap-3 mt-12 text-zinc-600">
          <Moon className="w-8 h-8" />
          {t.section3_title}
        </h2>
        <p>{t.section3_desc}</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>{t.section3_step1}</li>
          <li>{t.section3_step2}</li>
        </ul>
        <div className="my-6">
          <Link
            href="/tools/black-and-white"
            className="inline-block bg-zinc-300 text-black px-6 py-2 border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 transition-transform font-bold uppercase no-underline"
          >
            Go to B&W Tool
          </Link>
        </div>

        {/* Section 4: Circle Crop */}
        <h2 className="flex items-center gap-3 mt-12 text-blue-500">
          <Circle className="w-8 h-8" />
          {t.section4_title}
        </h2>
        <p>{t.section4_desc}</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>{t.section4_step1}</li>
          <li>{t.section4_step2}</li>
        </ul>
        <div className="my-6">
          <Link
            href="/tools/circle-crop"
            className="inline-block bg-blue-400 text-black px-6 py-2 border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 transition-transform font-bold uppercase no-underline"
          >
            Go to Circle Crop Tool
          </Link>
        </div>

        <div className="mt-12 p-8 bg-yellow-300 border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] text-center transform rotate-1">
          <h2 className="text-3xl font-black uppercase mb-4 m-0 p-0 text-black">
            {t.cta_title}
          </h2>
          <p className="text-xl font-bold mb-6 text-slate-800">{t.cta_desc}</p>
          <Link
            href="/tools"
            className="inline-block bg-black text-white px-8 py-4 border-2 border-white shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] hover:-translate-y-1 transition-transform font-black uppercase text-xl no-underline"
          >
            {t.cta_btn}
          </Link>
        </div>
      </div>
    </article>
  );
}
