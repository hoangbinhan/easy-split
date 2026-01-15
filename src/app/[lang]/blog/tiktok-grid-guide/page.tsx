import Link from "next/link";
import { Bangers } from "next/font/google";
import { ArrowLeft, CheckCircle, AlertTriangle } from "lucide-react";
import { Metadata } from "next";
import { Language } from "@/lib/i18n";

const bangers = Bangers({
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Guide: Create 'Giant Grid' TikTok Profile - Easy Split",
  description:
    "Step-by-step secret to posting huge grid images on your TikTok Profile for a seamless look.",
};

const content: Record<string, any> = {
  en: {
    back: "Back to Blog",
    title_part_1: "Create a Stunning",
    title_part_2: "TikTok Profile",
    title_part_3: "with 'Giant Grid'",
    tags: ["TikTok Tips", "5 min read", "Tips"],
    intro:
      "Have you seen those celebrity TikTok profiles with giant images made of 9 or 12 small videos? Today I'll show you how to do it in seconds with Easy Split.",
    step1_title: "Access Easy Split & Upload",
    step1_desc_1: "First, go to our free image splitting tool",
    step1_desc_2: "EasySplit.click",
    step1_desc_3:
      "On the main screen, drag and drop the image you want to make into a grid.",
    step1_tip:
      "Tip: Choose high-quality images, vertical rectangles or squares work best.",
    step2_title: "Set TikTok Standard Parameters",
    step2_desc: "This is the most crucial step so images don't get misaligned:",
    step2_check1: "Select crop ratio: TIKTOK INSTA (Or 3:4)",
    step2_check2:
      "Columns (Vertical): Select 3 (Mandatory as TikTok shows 3 columns).",
    step2_check3:
      "Rows (Horizontal): Custom based on your image length (3, 6, 9...).",
    step2_action: "After setting, click SPLIT IMAGE.",
    step3_title: "The 'Reverse Posting' Rule (Crucial!)",
    warning_title: "IMPORTANT WARNING",
    warning_desc:
      "TikTok places the newest video at the top (Top Left). Therefore, you must post images in REVERSE order compared to reading a book.",
    step3_desc:
      "Look at the list of split images. You need to download and post them in this order:",
    step3_rule1:
      "1. Start posting from the image at the Bottom Right Corner of the full picture.",
    step3_rule2: "2. Continue posting images in the same row, moving Left.",
    step3_rule3:
      "3. Finish the bottom row, move up to the next row and post Right to Left again.",
    step3_rule4:
      "4. The very last image you post must be the Top Left Corner one.",
    step3_summary: "Simply put: Right to Left, Bottom to Top.",
    step4_title: "Post to TikTok",
    step4_desc: "Open TikTok and post each image (or video) one by one.",
    step4_li1: "If posting as Photo Mode: Post normally.",
    step4_li2:
      "If posting as Video: Remember to select the split image as the Cover for that video.",
    cta_title: "Ready to create your Grid?",
    cta_desc: "Try our completely free tool now!",
    cta_btn: "Start Splitting Now",
  },
  vi: {
    back: "Quay lại Blog",
    title_part_1: "Cách tạo",
    title_part_2: "Profile TikTok",
    title_part_3: "ấn tượng với ảnh lưới 'Giant Grid'",
    tags: ["TikTok Tips", "5 phút đọc", "Mẹo"],
    intro:
      "Bạn thấy những profile TikTok của người nổi tiếng có những bức ảnh khổng lồ ghép từ 9, 12 video/ảnh nhỏ cực ngầu? Hôm nay mình sẽ chỉ bạn cách làm điều đó trong 1 nốt nhạc với Easy Split.",
    step1_title: "Truy cập Easy Split & Upload",
    step1_desc_1: "Đầu tiên, hãy truy cập vào công cụ cắt ảnh miễn phí",
    step1_desc_2: "EasySplit.click",
    step1_desc_3:
      "Tại màn hình chính, bạn kéo thả tấm ảnh bạn muốn làm Grid vào khu vực upload.",
    step1_tip:
      "Mẹo: Nên chọn ảnh chất lượng cao, hình chữ nhật đứng hoặc vuông để có kết quả tốt nhất.",
    step2_title: "Cài đặt thông số chuẩn TikTok",
    step2_desc:
      "Đây là bước quan trọng nhất để ảnh không bị lệch khi lên TikTok:",
    step2_check1: "Chọn tỷ lệ crop: TIKTOK INSTA (Hoặc 3:4)",
    step2_check2:
      "Số cột (Vertical): Chọn 3 (Bắt buộc vì TikTok hiển thị 3 cột).",
    step2_check3:
      "Số hàng (Horizontal): Tùy chọn theo độ dài ảnh của bạn (3, 6, 9...).",
    step2_action: "Sau khi chỉnh xong, nhấn nút SPLIT IMAGE.",
    step3_title: 'Quy tắc "Đăng Ngược" (Quan trọng!)',
    warning_title: "Lưu ý cực mạnh",
    warning_desc:
      "TikTok xếp video mới nhất lên đầu (Góc trên bên trái). Do đó, bạn phải đăng ảnh theo thứ tự NGƯỢC so với khi đọc sách.",
    step3_desc:
      "Hãy nhìn vào danh sách ảnh vừa cắt xong. Bạn cần tải về và đăng theo thứ tự sau:",
    step3_rule1:
      "1. Bắt đầu đăng từ tấm ảnh ở Góc Dưới Cùng Bên Phải của bức tranh tổng thể.",
    step3_rule2: "2. Tiếp tục đăng các ảnh cùng hàng, lần lượt sang Trái.",
    step3_rule3:
      "3. Hết hàng dưới cùng, chuyển lên hàng trên và lại đăng từ Phải sang Trái.",
    step3_rule4:
      "4. Tấm ảnh cuối cùng bạn đăng phải là tấm ở Góc Trên Cùng Bên Trái.",
    step3_summary: "Nói đơn giản: Phải sang Trái, Dưới lên Trên.",
    step4_title: "Đăng lên TikTok",
    step4_desc: "Mở TikTok và đăng từng ảnh một (hoặc video).",
    step4_li1: "Nếu đăng dạng Photo Mode: Đăng bình thường.",
    step4_li2: "Nhớ chọn tấm ảnh vừa cắt làm Ảnh Bìa (Cover) cho video đó.",
    cta_title: "Đã sẵn sàng tạo Grid chưa?",
    cta_desc: "Thử ngay công cụ hoàn toàn miễn phí của chúng tôi!",
    cta_btn: "Bắt đầu Cắt Ảnh Ngay",
  },
  ko: {
    back: "블로그로 돌아가기",
    title_part_1: "멋진",
    title_part_2: "틱톡 프로필",
    title_part_3: "'자이언트 그리드'로 만들기",
    tags: ["틱톡 팁", "5분 읽기", "팁"],
    intro:
      "9개 또는 12개의 작은 비디오로 만든 거대한 이미지로 된 유명인 틱톡 프로필을 보셨나요? Easy Split으로 몇 초 만에 만드는 방법을 알려드립니다.",
    step1_title: "Easy Split 접속 및 업로드",
    step1_desc_1: "먼저 무료 이미지 분할 도구인",
    step1_desc_2: "EasySplit.click",
    step1_desc_3:
      "으로 이동하여 그리드로 만들고 싶은 이미지를 드래그 앤 드롭하세요.",
    step1_tip:
      "팁: 고화질 이미지, 세로 직사각형 또는 정사각형이 가장 좋습니다.",
    step2_title: "틱톡 표준 매개변수 설정",
    step2_desc: "이미지가 어긋나지 않도록 하는 가장 중요한 단계입니다:",
    step2_check1: "크롭 비율 선택: TIKTOK INSTA (또는 3:4)",
    step2_check2: "열 (세로): 3 선택 (틱톡이 3열로 표시하므로 필수).",
    step2_check3: "행 (가로): 이미지 길이에 따라 사용자 지정 (3, 6, 9...).",
    step2_action: "설정 후 SPLIT IMAGE를 클릭하세요.",
    step3_title: "'역순 게시' 규칙 (중요!)",
    warning_title: "중요 경고",
    warning_desc:
      "틱톡은 최신 비디오를 맨 위(왼쪽 상단)에 배치합니다. 따라서 책을 읽는 순서와 반대로 이미지를 게시해야 합니다.",
    step3_desc:
      "분할된 이미지 목록을 보세요. 다음 순서로 다운로드하여 게시해야 합니다:",
    step3_rule1:
      "1. 전체 그림의 오른쪽 하단 모서리에 있는 이미지부터 게시를 시작하세요.",
    step3_rule2: "2. 같은 행의 이미지를 계속해서 왼쪽으로 이동하며 게시하세요.",
    step3_rule3:
      "3. 맨 아래 행을 마치면 다음 행으로 이동하여 다시 오른쪽에서 왼쪽으로 게시하세요.",
    step3_rule4:
      "4. 마지막으로 게시하는 이미지는 왼쪽 상단 모서리에 있어야 합니다.",
    step3_summary: "간단히 말해서: 오른쪽에서 왼쪽으로, 아래에서 위로.",
    step4_title: "틱톡에 게시",
    step4_desc: "틱톡을 열고 각 이미지(또는 비디오)를 하나씩 게시하세요.",
    step4_li1: "사진 모드로 게시하는 경우: 평소처럼 게시하세요.",
    step4_li2:
      "비디오로 게시하는 경우: 분할된 이미지를 해당 비디오의 커버로 선택하는 것을 잊지 마세요.",
    cta_title: "그리드를 만들 준비가 되셨나요?",
    cta_desc: "지금 완전 무료 도구를 사용해보세요!",
    cta_btn: "지금 분할 시작하기",
  },
  jp: {
    back: "ブログに戻る",
    title_part_1: "印象的な",
    title_part_2: "TikTokプロフィール",
    title_part_3: "「ジャイアントグリッド」を作成",
    tags: ["TikTokのヒント", "5分", "ヒント"],
    intro:
      "9個または12個の小さな動画で作られた巨大な画像を持つ有名人のTikTokプロフィールを見たことがありますか？Easy Splitを使って数秒でそれを行う方法を紹介します。",
    step1_title: "Easy Splitにアクセスしてアップロード",
    step1_desc_1: "まず、無料の画像分割ツール",
    step1_desc_2: "EasySplit.click",
    step1_desc_3:
      "にアクセスし、グリッドにしたい画像をドラッグ＆ドロップします。",
    step1_tip: "ヒント：高品質の画像、縦長の長方形または正方形が最適です。",
    step2_title: "TikTok標準パラメータの設定",
    step2_desc: "画像がずれないようにするための最も重要なステップです：",
    step2_check1: "クロップ比を選択：TIKTOK INSTA（または3:4）",
    step2_check2: "列（垂直）：3を選択（TikTokは3列表示のため必須）。",
    step2_check3: "行（水平）：画像の長さに応じてカスタム（3、6、9...）。",
    step2_action: "設定後、SPLIT IMAGEをクリックします。",
    step3_title: "「逆順投稿」ルール（重要！）",
    warning_title: "重要な警告",
    warning_desc:
      "TikTokは最新の動画を一番上（左上）に配置します。したがって、本を読む順序とは逆に画像を投稿する必要があります。",
    step3_desc:
      "分割された画像リストを見てください。次の順序でダウンロードして投稿する必要があります：",
    step3_rule1: "1. 全体の画像の右下の隅にある画像から投稿を開始します。",
    step3_rule2: "2. 同じ行の画像を左に向かって投稿し続けます。",
    step3_rule3:
      "3. 一番下の行が終わったら、次の行に上がり、再び右から左へ投稿します。",
    step3_rule4: "4. 最後に投稿する画像は左上の隅にあるものにしてください。",
    step3_summary: "簡単に言えば：右から左へ、下から上へ。",
    step4_title: "TikTokに投稿",
    step4_desc: "TikTokを開き、各画像（または動画）を1つずつ投稿します。",
    step4_li1: "フォトモードとして投稿する場合：通常通り投稿します。",
    step4_li2:
      "動画として投稿する場合：その動画のカバーとして分割した画像を選択することを忘れないでください。",
    cta_title: "グリッドを作成する準備はできましたか？",
    cta_desc: "今すぐ完全無料のツールをお試しください！",
    cta_btn: "今すぐ分割を開始",
  },
  th: {
    back: "กลับไปที่บล็อก",
    title_part_1: "สร้าง",
    title_part_2: "โปรไฟล์ TikTok",
    title_part_3: "ที่น่าทึ่งด้วย 'Giant Grid'",
    tags: ["เคล็ดลับ TikTok", "อ่าน 5 นาที", "เคล็ดลับ"],
    intro:
      "คุณเคยเห็นโปรไฟล์ TikTok ของคนดังที่มีภาพขนาดใหญ่ที่สร้างจากวิดีโอขนาดเล็ก 9 หรือ 12 รายการหรือไม่? วันนี้ฉันจะแสดงวิธีทำในไม่กี่วินาทีด้วย Easy Split",
    step1_title: "เข้าถึง Easy Split & อัปโหลด",
    step1_desc_1: "ก่อนอื่น ไปที่เครื่องมือแยกภาพฟรีของเรา",
    step1_desc_2: "EasySplit.click",
    step1_desc_3: "บนหน้าจอหลัก ลากและวางภาพที่คุณต้องการทำเป็นตาราง",
    step1_tip:
      "เคล็ดลับ: เลือกภาพคุณภาพสูง สี่เหลี่ยมผืนผ้าแนวตั้งหรือสี่เหลี่ยมจัตุรัสจะดีที่สุด",
    step2_title: "ตั้งค่าพารามิเตอร์มาตรฐาน TikTok",
    step2_desc: "นี่คือขั้นตอนที่สำคัญที่สุดเพื่อให้ภาพไม่ตรงแนว:",
    step2_check1: "เลือกอัตราส่วนการตัด: TIKTOK INSTA (หรือ 3:4)",
    step2_check2:
      "คอลัมน์ (แนวตั้ง): เลือก 3 (บังคับเนื่องจาก TikTok แสดง 3 คอลัมน์)",
    step2_check3: "แถว (แนวนอน): กำหนดเองตามความยาวของภาพของคุณ (3, 6, 9...)",
    step2_action: "หลังจากตั้งค่าแล้ว คลิก SPLIT IMAGE",
    step3_title: "กฎ 'โพสต์ย้อนกลับ' (สำคัญมาก!)",
    warning_title: "คำเตือนสำคัญ",
    warning_desc:
      "TikTok จะวางวิดีโอใหม่ล่าสุดไว้ด้านบน (ซ้ายบน) ดังนั้น คุณต้องโพสต์ภาพในลำดับย้อนกลับเมื่อเทียบกับการอ่านหนังสือ",
    step3_desc: "ดูรายการภาพที่แยกออกมา คุณต้องดาวน์โหลดและโพสต์ตามลำดับนี้:",
    step3_rule1: "1. เริ่มโพสต์จากภาพที่มุมขวาล่างของภาพเต็ม",
    step3_rule2: "2. โพสต์ภาพในแถวเดียวกันต่อไป โดยย้ายไปทางซ้าย",
    step3_rule3:
      "3. เสร็จสิ้นแถวล่างสุด เลื่อนขึ้นไปแถวถัดไปและโพสต์จากขวาไปซ้ายอีกครั้ง",
    step3_rule4: "4. ภาพสุดท้ายที่คุณโพสต์จะต้องเป็นภาพที่มุมซ้ายบน",
    step3_summary: "พูดง่ายๆ: ขวาไปซ้าย ล่างขึ้นบน",
    step4_title: "โพสต์ลง TikTok",
    step4_desc: "เปิด TikTok และโพสต์แต่ละภาพ (หรือวิดีโอ) ทีละรายการ",
    step4_li1: "หากโพสต์เป็นโหมดภาพถ่าย: โพสต์ตามปกติ",
    step4_li2:
      "หากโพสต์เป็นวิดีโอ: อย่าลืมเลือกภาพที่แยกแล้วเป็นหน้าปกสำหรับวิดีโอนั้น",
    cta_title: "พร้อมที่จะสร้าง Grid ของคุณหรือยัง?",
    cta_desc: "ลองใช้เครื่องมือฟรีของเราตอนนี้!",
    cta_btn: "เริ่มแยกภาพตอนนี้",
  },
  id: {
    back: "Kembali ke Blog",
    title_part_1: "Buat Profil",
    title_part_2: "TikTok",
    title_part_3: "yang Menakjubkan dengan 'Giant Grid'",
    tags: ["Tips TikTok", "Baca 5 menit", "Tips"],
    intro:
      "Pernahkah Anda melihat profil TikTok selebriti dengan gambar raksasa yang terbuat dari 9 atau 12 video kecil? Hari ini saya akan menunjukkan cara melakukannya dalam hitungan detik dengan Easy Split.",
    step1_title: "Akses Easy Split & Unggah",
    step1_desc_1: "Pertama, buka alat pemecah gambar gratis kami",
    step1_desc_2: "EasySplit.click",
    step1_desc_3:
      "Di layar utama, seret dan lepas gambar yang ingin Anda jadikan grid.",
    step1_tip:
      "Tips: Pilih gambar berkualitas tinggi, persegi panjang vertikal atau persegi paling baik.",
    step2_title: "Atur Parameter Standar TikTok",
    step2_desc:
      "Ini adalah langkah paling krusial agar gambar tidak berantakan:",
    step2_check1: "Pilih rasio potong: TIKTOK INSTA (Atau 3:4)",
    step2_check2:
      "Kolom (Vertikal): Pilih 3 (Wajib karena TikTok menampilkan 3 kolom).",
    step2_check3:
      "Baris (Horizontal): Kustom berdasarkan panjang gambar Anda (3, 6, 9...).",
    step2_action: "Setelah pengaturan, klik SPLIT IMAGE.",
    step3_title: "Aturan 'Posting Terbalik' (Penting!)",
    warning_title: "PERINGATAN PENTING",
    warning_desc:
      "TikTok menempatkan video terbaru di bagian atas (Kiri Atas). Oleh karena itu, Anda harus memposting gambar dalam urutan TERBALIK dibandingkan membaca buku.",
    step3_desc:
      "Lihat daftar gambar yang dipecah. Anda perlu mengunduh dan mempostingnya dalam urutan ini:",
    step3_rule1:
      "1. Mulai posting dari gambar di Sudut Kanan Bawah gambar penuh.",
    step3_rule2:
      "2. Lanjutkan memposting gambar di baris yang sama, bergerak ke Kiri.",
    step3_rule3:
      "3. Selesaikan baris bawah, naik ke baris berikutnya dan posting Kanan ke Kiri lagi.",
    step3_rule4:
      "4. Gambar terakhir yang Anda posting harus yang ada di Sudut Kiri Atas.",
    step3_summary: "Singkatnya: Kanan ke Kiri, Bawah ke Atas.",
    step4_title: "Posting ke TikTok",
    step4_desc:
      "Buka TikTok dan posting setiap gambar (atau video) satu per satu.",
    step4_li1: "Jika memposting sebagai Mode Foto: Posting seperti biasa.",
    step4_li2:
      "Jika memposting sebagai Video: Ingatlah untuk memilih gambar yang dipecah sebagai Sampul untuk video itu.",
    cta_title: "Siap membuat Grid Anda?",
    cta_desc: "Coba alat gratis kami sekarang!",
    cta_btn: "Mulai Memecah Sekarang",
  },
  es: {
    back: "Volver al Blog",
    title_part_1: "Crea un Perfil",
    title_part_2: "de TikTok",
    title_part_3: "Impresionante con 'Giant Grid'",
    tags: ["Consejos de TikTok", "5 min de lectura", "Consejos"],
    intro:
      "¿Has visto esos perfiles de TikTok de celebridades con imágenes gigantes hechas de 9 o 12 videos pequeños? Hoy te mostraré cómo hacerlo en segundos con Easy Split.",
    step1_title: "Accede a Easy Split y Sube",
    step1_desc_1:
      "Primero, ve a nuestra herramienta gratuita de división de imágenes",
    step1_desc_2: "EasySplit.click",
    step1_desc_3:
      "En la pantalla principal, arrastra y suelta la imagen que quieres convertir en una cuadrícula.",
    step1_tip:
      "Consejo: Elige imágenes de alta calidad, rectángulos verticales o cuadrados funcionan mejor.",
    step2_title: "Establecer Parámetros Estándar de TikTok",
    step2_desc:
      "Este es el paso más crucial para que las imágenes no se desalineen:",
    step2_check1: "Selecciona relación de recorte: TIKTOK INSTA (O 3:4)",
    step2_check2:
      "Columnas (Vertical): Selecciona 3 (Obligatorio ya que TikTok muestra 3 columnas).",
    step2_check3:
      "Filas (Horizontal): Personalizado según la longitud de tu imagen (3, 6, 9...).",
    step2_action: "Después de configurar, haz clic en SPLIT IMAGE.",
    step3_title: "La Regla de 'Publicación Inversa' (¡Crucial!)",
    warning_title: "ADVERTENCIA IMPORTANTE",
    warning_desc:
      "TikTok coloca el video más nuevo en la parte superior (Arriba a la Izquierda). Por lo tanto, debes publicar imágenes en orden INVERSO en comparación con leer un libro.",
    step3_desc:
      "Mira la lista de imágenes divididas. Necesitas descargarlas y publicarlas en este orden:",
    step3_rule1:
      "1. Comienza a publicar desde la imagen en la Esquina Inferior Derecha de la imagen completa.",
    step3_rule2:
      "2. Continúa publicando imágenes en la misma fila, moviéndote a la Izquierda.",
    step3_rule3:
      "3. Termina la fila inferior, sube a la siguiente fila y publica de Derecha a Izquierda nuevamente.",
    step3_rule4:
      "4. La última imagen que publiques debe ser la de la Esquina Superior Izquierda.",
    step3_summary:
      "En pocas palabras: Derecha a Izquierda, Abajo hacia Arriba.",
    step4_title: "Publicar en TikTok",
    step4_desc: "Abre TikTok y publica cada imagen (o video) una por una.",
    step4_li1: "Si publicas como Modo Foto: Publica normalmente.",
    step4_li2:
      "Si publicas como Video: Recuerda seleccionar la imagen dividida como Portada para ese video.",
    cta_title: "¿Listo para crear tu Grid?",
    cta_desc: "¡Prueba nuestra herramienta completamente gratis ahora!",
    cta_btn: "Empezar a Dividir Ahora",
  },
  "zh-CN": {
    back: "返回博客",
    title_part_1: "创建令人惊叹的",
    title_part_2: "TikTok 个人资料",
    title_part_3: "使用“巨大的网格”",
    tags: ["TikTok 技巧", "5 分钟阅读", "技巧"],
    intro:
      "您见过那些由 9 或 12 个小视频组成的巨大图片的名人 TikTok 个人资料吗？今天我将向您展示如何使用 Easy Split 在几秒钟内完成。",
    step1_title: "访问 Easy Split 并上传",
    step1_desc_1: "首先，通过我们的免费图片分割工具",
    step1_desc_2: "EasySplit.click",
    step1_desc_3: "在主屏幕上，拖放您想要制作成网格的图片。",
    step1_tip: "提示：选择高质量图片，垂直矩形或正方形效果最好。",
    step2_title: "设置 TikTok 标准参数",
    step2_desc: "这是最关键的一步，以确保图片不会错位：",
    step2_check1: "选择裁剪比例：TIKTOK INSTA（或 3:4）",
    step2_check2: "列（垂直）：选择 3（因为 TikTok 显示 3 列，所以必须选 3）。",
    step2_check3: "行（水平）：根据您的图片长度自定义（3, 6, 9...）。",
    step2_action: "设置后，点击 SPLIT IMAGE。",
    step3_title: "“反向发布”规则（关键！）",
    warning_title: "重要警告",
    warning_desc:
      "TikTok 将最新视频放在顶部（左上角）。因此，您必须按与读书相反的顺序发布图片。",
    step3_desc: "查看分割后的图片列表。您需要按以下顺序下载并发布它们：",
    step3_rule1: "1. 从完整图片的右下角图片开始发布。",
    step3_rule2: "2. 继续发布同一行的图片，向左移动。",
    step3_rule3: "3. 完成底行，向上移动到下一行，再次从右向左发布。",
    step3_rule4: "4. 您发布的最后一张图片必须是左上角的那张。",
    step3_summary: "简单来说：从右到左，从下到上。",
    step4_title: "发布到 TikTok",
    step4_desc: "打开 TikTok 并逐一发布每张图片（或视频）。",
    step4_li1: "如果以照片模式发布：正常发布。",
    step4_li2: "如果以视频发布：记得选择分割后的图片作为该视频的封面。",
    cta_title: "准备好创建您的网格了吗？",
    cta_desc: "立即试用我们的完全免费工具！",
    cta_btn: "立即开始分割",
  },
  "zh-TW": {
    back: "返回博客",
    title_part_1: "創建令人驚嘆的",
    title_part_2: "TikTok 個人資料",
    title_part_3: "使用「巨大的網格」",
    tags: ["TikTok 技巧", "5 分鐘閱讀", "技巧"],
    intro:
      "您見過那些由 9 或 12 個小視頻組成的巨大圖片的名人 TikTok 個人資料嗎？今天我將向您展示如何使用 Easy Split 在幾秒鐘內完成。",
    step1_title: "訪問 Easy Split 並上傳",
    step1_desc_1: "首先，通過我們的免費圖片分割工具",
    step1_desc_2: "EasySplit.click",
    step1_desc_3: "在主屏幕上，拖放您想要製作成網格的圖片。",
    step1_tip: "提示：選擇高質量圖片，垂直矩形或正方形效果最好。",
    step2_title: "設置 TikTok 標準參數",
    step2_desc: "這是最關鍵的一步，以確保圖片不會錯位：",
    step2_check1: "選擇裁剪比例：TIKTOK INSTA（或 3:4）",
    step2_check2: "列（垂直）：選擇 3（因為 TikTok 顯示 3 列，所以必須選 3）。",
    step2_check3: "行（水平）：根據您的圖片長度自定義（3, 6, 9...）。",
    step2_action: "設置後，點擊 SPLIT IMAGE。",
    step3_title: "「反向發布」規則（關鍵！）",
    warning_title: "重要警告",
    warning_desc:
      "TikTok 將最新視頻放在頂部（左上角）。因此，您必須按與讀書相反的順序發布圖片。",
    step3_desc: "查看分割後的圖片列表。您需要按以下順序下載並發布它們：",
    step3_rule1: "1. 從完整圖片的右下角圖片開始發布。",
    step3_rule2: "2. 繼續發布同一行的圖片，向左移動。",
    step3_rule3: "3. 完成底行，向上移動到下一行，再次從右向左發布。",
    step3_rule4: "4. 您發布的最後一張圖片必須是左上角的那張。",
    step3_summary: "簡單來說：從右到左，從下到上。",
    step4_title: "發布到 TikTok",
    step4_desc: "打開 TikTok 並逐一發布每張圖片（或視頻）。",
    step4_li1: "如果以照片模式發布：正常發布。",
    step4_li2: "如果以視頻發布：記得選擇分割後的圖片作為該視頻的封面。",
    cta_title: "準備好創建您的網格了嗎？",
    cta_desc: "立即試用我們的完全免費工具！",
    cta_btn: "立即開始分割",
  },
  de: {
    back: "Zurück zum Blog",
    title_part_1: "Erstellen Sie ein",
    title_part_2: "atemberaubendes TikTok-Profil",
    title_part_3: "mit 'Giant Grid'",
    tags: ["TikTok Tipps", "5 Min Lesezeit", "Tipps"],
    intro:
      "Haben Sie diese Promi-TikTok-Profile mit riesigen Bildern gesehen, die aus 9 oder 12 kleinen Videos bestehen? Heute zeige ich Ihnen, wie Sie das in Sekunden mit Easy Split machen.",
    step1_title: "Easy Split aufrufen & Hochladen",
    step1_desc_1: "Gehen Sie zuerst zu unserem kostenlosen Bildteilungstool",
    step1_desc_2: "EasySplit.click",
    step1_desc_3:
      "Ziehen Sie auf dem Hauptbildschirm das Bild, das Sie in ein Raster verwandeln möchten.",
    step1_tip:
      "Tipp: Wählen Sie hochwertige Bilder, vertikale Rechtecke oder Quadrate funktionieren am besten.",
    step2_title: "TikTok-Standardparameter einstellen",
    step2_desc:
      "Dies ist der wichtigste Schritt, damit die Bilder nicht verschoben sind:",
    step2_check1: "Schnittverhältnis wählen: TIKTOK INSTA (Oder 3:4)",
    step2_check2:
      "Spalten (Vertikal): Wählen Sie 3 (Pflicht, da TikTok 3 Spalten anzeigt).",
    step2_check3:
      "Zeilen (Horizontal): Individuell basierend auf Ihrer Bildlänge (3, 6, 9...).",
    step2_action: "Klicken Sie nach dem Einstellen auf SPLIT IMAGE.",
    step3_title: "Die 'Rückwärts-Posten'-Regel (Wichtig!)",
    warning_title: "WICHTIGE WARNUNG",
    warning_desc:
      "TikTok platziert das neueste Video oben (oben links). Daher müssen Sie Bilder in UMGEKEHRTER Reihenfolge posten, verglichen mit dem Lesen eines Buches.",
    step3_desc:
      "Schauen Sie sich die Liste der geteilten Bilder an. Sie müssen sie in dieser Reihenfolge herunterladen und posten:",
    step3_rule1:
      "1. Beginnen Sie mit dem Posten des Bildes in der unteren rechten Ecke des Gesamtbildes.",
    step3_rule2:
      "2. Posten Sie weiter Bilder in derselben Zeile und bewegen Sie sich nach links.",
    step3_rule3:
      "3. Beenden Sie die unterste Zeile, gehen Sie eine Zeile nach oben und posten Sie wieder von rechts nach links.",
    step3_rule4:
      "4. Das allerletzte Bild, das Sie posten, muss das in der oberen linken Ecke sein.",
    step3_summary:
      "Einfach ausgedrückt: Von rechts nach links, von unten nach oben.",
    step4_title: "Auf TikTok posten",
    step4_desc:
      "Öffnen Sie TikTok und posten Sie jedes Bild (oder Video) nacheinander.",
    step4_li1: "Wenn Sie als Fotomodus posten: Posten Sie wie gewohnt.",
    step4_li2:
      "Wenn Sie als Video posten: Denken Sie daran, das geteilte Bild als Cover für dieses Video auszuwählen.",
    cta_title: "Bereit, Ihr Grid zu erstellen?",
    cta_desc: "Probieren Sie unser völlig kostenloses Tool jetzt aus!",
    cta_btn: "Jetzt mit dem Teilen beginnen",
  },
  ru: {
    back: "Назад в блог",
    title_part_1: "Создайте потрясающий",
    title_part_2: "профиль TikTok",
    title_part_3: "с 'Giant Grid'",
    tags: ["Советы TikTok", "5 мин чтения", "Советы"],
    intro:
      "Вы видели те профили знаменитостей в TikTok с гигантскими изображениями, состоящими из 9 или 12 маленьких видео? Сегодня я покажу вам, как сделать это за секунды с Easy Split.",
    step1_title: "Зайдите в Easy Split и загрузите",
    step1_desc_1:
      "Сначала перейдите к нашему бесплатному инструменту разделения изображений",
    step1_desc_2: "EasySplit.click",
    step1_desc_3:
      "На главном экране перетащите изображение, которое вы хотите превратить в сетку.",
    step1_tip:
      "Совет: Выбирайте изображения высокого качества, вертикальные прямоугольники или квадраты подходят лучше всего.",
    step2_title: "Установите стандартные параметры TikTok",
    step2_desc: "Это самый важный шаг, чтобы изображения не смещались:",
    step2_check1: "Выберите соотношение обрезки: TIKTOK INSTA (Или 3:4)",
    step2_check2:
      "Столбцы (Вертикаль): Выберите 3 (Обязательно, так как TikTok показывает 3 столбца).",
    step2_check3:
      "Строки (Горизонталь): Настраивается в зависимости от длины изображения (3, 6, 9...).",
    step2_action: "После настройки нажмите SPLIT IMAGE.",
    step3_title: "Правило 'Обратной публикации' (Важно!)",
    warning_title: "ВАЖНОЕ ПРЕДУПРЕЖДЕНИЕ",
    warning_desc:
      "TikTok размещает самое новое видео вверху (слева вверху). Поэтому вы должны публиковать изображения в ОБРАТНОМ порядке по сравнению с чтением книги.",
    step3_desc:
      "Посмотрите на список разделенных изображений. Вам нужно скачать и опубликовать их в этом порядке:",
    step3_rule1:
      "1. Начните публикацию с изображения в правом нижнем углу полной картинки.",
    step3_rule2:
      "2. Продолжайте публиковать изображения в той же строке, двигаясь влево.",
    step3_rule3:
      "3. Закончив нижнюю строку, перейдите на следующую строку вверх и снова публикуйте справа налево.",
    step3_rule4:
      "4. Самое последнее изображение, которое вы опубликуете, должно быть в верхнем левом углу.",
    step3_summary: "Проще говоря: справа налево, снизу вверх.",
    step4_title: "Опубликовать в TikTok",
    step4_desc:
      "Откройте TikTok и публикуйте каждое изображение (или видео) по одному.",
    step4_li1: "Если публикуете в фоторежиме: публикуйте как обычно.",
    step4_li2:
      "Если публикуете как видео: не забудьте выбрать разделенное изображение в качестве обложки для видео.",
    cta_title: "Готовы создать свою сетку?",
    cta_desc: "Попробуйте наш полностью бесплатный инструмент прямо сейчас!",
    cta_btn: "Начать разделение сейчас",
  },
  hi: {
    back: "ब्लॉग पर वापस जाएं",
    title_part_1: "एक शानदार",
    title_part_2: "टिकटोक प्रोफाइल",
    title_part_3: "'जाइंट ग्रिड' के साथ बनाएं",
    tags: ["टिकटोक टिप्स", "5 मिनट पढ़ें", "टिप्स"],
    intro:
      "क्या आपने उन सेलिब्रिटी टिकटोक प्रोफाइल को देखा है जिसमें 9 या 12 छोटे वीडियो से बनी विशाल छवियां होती हैं? आज मैं आपको दिखाऊंगा कि Easy Split के साथ सेकंडों में इसे कैसे किया जाए।",
    step1_title: "Easy Split पर जाएं और अपलोड करें",
    step1_desc_1: "सबसे पहले, हमारे मुफ्त छवि विभाजन टूल पर जाएं",
    step1_desc_2: "EasySplit.click",
    step1_desc_3:
      "मुख्य स्क्रीन पर, उस छवि को खींचें और छोड़ें जिसे आप ग्रिड में बनाना चाहते हैं।",
    step1_tip:
      "सुझाव: उच्च गुणवत्ता वाली छवियां चुनें, ऊर्ध्वाधर आयत या वर्ग सबसे अच्छा काम करते हैं।",
    step2_title: "टिकटोक मानक पैरामीटर सेट करें",
    step2_desc: "यह सबसे महत्वपूर्ण कदम है ताकि छवियां गलत संरेखित न हों:",
    step2_check1: "फसल अनुपात चुनें: TIKTOK INSTA (या 3:4)",
    step2_check2:
      "कॉलम (लंबवत): 3 चुनें (अनिवार्य क्योंकि टिकटोक 3 कॉलम दिखाता है)।",
    step2_check3:
      "पंक्तियाँ (क्षैतिज): आपकी छवि लंबाई के आधार पर कस्टम (3, 6, 9...)।",
    step2_action: "सेट करने के बाद, SPLIT IMAGE पर क्लिक करें।",
    step3_title: "'उल्टा पोस्टिंग' नियम (महत्वपूर्ण!)",
    warning_title: "महत्वपूर्ण चेतावनी",
    warning_desc:
      "टिकटोक सबसे नए वीडियो को सबसे ऊपर (ऊपर बाईं ओर) रखता है। इसलिए, आपको किताब पढ़ने की तुलना में उल्टे क्रम में छवियों को पोस्ट करना होगा।",
    step3_desc:
      "विभाजित छवियों की सूची देखें। आपको उन्हें इस क्रम में डाउनलोड और पोस्ट करना होगा:",
    step3_rule1:
      "1. पूरी तस्वीर के नीचे दाएं कोने वाली छवि से पोस्ट करना शुरू करें।",
    step3_rule2:
      "2. उसी पंक्ति में छवियों को पोस्ट करना जारी रखें, बाईं ओर बढ़ते हुए।",
    step3_rule3:
      "3. नीचे की पंक्ति समाप्त करें, अगली पंक्ति तक जाएं और फिर से दाएं से बाएं पोस्ट करें।",
    step3_rule4:
      "4. आपके द्वारा पोस्ट की जाने वाली सबसे अंतिम छवि ऊपर बाईं कोने वाली होनी चाहिए।",
    step3_summary: "सरल शब्दों में: दाएं से बाएं, नीचे से ऊपर।",
    step4_title: "टिकटोक पर पोस्ट करें",
    step4_desc:
      "टिकटोक खोलें और प्रत्येक छवि (या वीडियो) को एक-एक करके पोस्ट करें।",
    step4_li1:
      "यदि फोटो मोड के रूप में पोस्ट कर रहे हैं: सामान्य रूप से पोस्ट करें।",
    step4_li2:
      "यदि वीडियो के रूप में पोस्ट कर रहे हैं: उस वीडियो के लिए कवर के रूप में विभाजित छवि का चयन करना याद रखें।",
    cta_title: "क्या आप अपना ग्रिड बनाने के लिए तैयार हैं?",
    cta_desc: "अब हमारे पूरी तरह से मुफ्त टूल का प्रयास करें!",
    cta_btn: "अब विभाजित करना शुरू करें",
  },
  "pt-BR": {
    back: "Voltar ao Blog",
    title_part_1: "Crie um Perfil",
    title_part_2: "do TikTok",
    title_part_3: "Impressionante com 'Grade Gigante'",
    tags: ["Dicas do TikTok", "5 min de leitura", "Dicas"],
    intro:
      "Você já viu aqueles perfis de celebridades no TikTok com imagens gigantes feitas de 9 ou 12 vídeos pequenos? Hoje vou mostrar como fazer isso em segundos com o Easy Split.",
    step1_title: "Acesse o Easy Split e Carregue",
    step1_desc_1:
      "Primeiro, vá para nossa ferramenta gratuita de divisão de imagens",
    step1_desc_2: "EasySplit.click",
    step1_desc_3:
      "Na tela principal, arraste e solte a imagem que você deseja transformar em uma grade.",
    step1_tip:
      "Dica: Escolha imagens de alta qualidade, retângulos verticais ou quadrados funcionam melhor.",
    step2_title: "Definir Parâmetros Padrão do TikTok",
    step2_desc:
      "Este é o passo mais crucial para que as imagens não fiquem desalinhadas:",
    step2_check1: "Selecione a proporção de corte: TIKTOK INSTA (Ou 3:4)",
    step2_check2:
      "Colunas (Vertical): Selecione 3 (Obrigatório, pois o TikTok mostra 3 colunas).",
    step2_check3:
      "Linhas (Horizontal): Personalizado com base no comprimento da sua imagem (3, 6, 9...).",
    step2_action: "Após configurar, clique em SPLIT IMAGE.",
    step3_title: "A Regra de 'Postagem Inversa' (Crucial!)",
    warning_title: "AVISO IMPORTANTE",
    warning_desc:
      "O TikTok coloca o vídeo mais novo no topo (Canto Superior Esquerdo). Portanto, você deve postar imagens na ordem INVERSA em comparação com a leitura de um livro.",
    step3_desc:
      "Olhe para a lista de imagens divididas. Você precisa baixá-las e postá-las nesta ordem:",
    step3_rule1:
      "1. Comece a postar a partir da imagem no Canto Inferior Direito da imagem completa.",
    step3_rule2:
      "2. Continue postando imagens na mesma linha, movendo-se para a Esquerda.",
    step3_rule3:
      "3. Termine a linha inferior, suba para a próxima linha e poste da Direita para a Esquerda novamente.",
    step3_rule4:
      "4. A última imagem que você postar deve ser a do Canto Superior Esquerdo.",
    step3_summary: "Resumindo: Direita para Esquerda, Baixo para Cima.",
    step4_title: "Postar no TikTok",
    step4_desc: "Abra o TikTok e poste cada imagem (ou vídeo) uma por uma.",
    step4_li1: "Se postar como Modo Foto: Poste normalmente.",
    step4_li2:
      "Se postar como Vídeo: Lembre-se de selecionar a imagem dividida como Capa para esse vídeo.",
    cta_title: "Pronto para criar sua Grade?",
    cta_desc: "Experimente nossa ferramenta totalmente gratuita agora!",
    cta_btn: "Começar a Dividir Agora",
  },
};

export default async function GuidePost({
  params,
}: {
  params: Promise<{ lang: Language }>;
}) {
  const { lang } = await params;
  const t = content[lang] || content["en"];

  return (
    <article className="max-w-4xl mx-auto bg-white border-4 border-black p-6 sm:p-12 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]">
      {/* Header */}
      <header className="mb-10 pb-8 border-b-4 border-black border-dashed">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 font-bold uppercase text-sm mb-6 hover:bg-yellow-200 px-2 py-1 transition-colors border-2 border-transparent hover:border-black"
        >
          <ArrowLeft className="w-4 h-4" /> {t.back}
        </Link>

        <h1
          className={`text-4xl sm:text-6xl font-black uppercase leading-none mb-6 ${bangers.className}`}
        >
          {t.title_part_1}{" "}
          <span className="text-cyan-500 layer-text stroke-black">
            {t.title_part_2}
          </span>{" "}
          {t.title_part_3}
        </h1>

        <div className="flex flex-wrap gap-4 text-sm font-bold uppercase text-slate-500">
          <span className="bg-pink-200 text-black px-3 py-1 border-2 border-black">
            {t.tags[0]}
          </span>
          <span className="bg-green-200 text-black px-3 py-1 border-2 border-black">
            {t.tags[1]}
          </span>
          <span>Update: 16/01/2026</span>
        </div>
      </header>

      {/* Content */}
      <div className="prose prose-lg prose-slate prose-headings:font-black prose-headings:uppercase prose-p:font-medium prose-strong:bg-yellow-200 prose-strong:px-1 prose-strong:border prose-strong:border-black/20 max-w-none">
        <p className="lead text-xl font-bold border-l-8 border-cyan-400 pl-6 bg-slate-50 py-4 italic">
          {t.intro}
        </p>

        <h2 className="flex items-center gap-3 mt-12">
          <span className="bg-black text-white w-10 h-10 flex items-center justify-center rounded-full text-xl shadow-[4px_4px_0px_0px_rgba(255,204,0,1)]">
            1
          </span>
          {t.step1_title}
        </h2>
        <p>
          {t.step1_desc_1}{" "}
          <Link href="/" className="text-blue-600 hover:underline font-bold">
            {t.step1_desc_2}
          </Link>
          .
        </p>
        <p>
          {t.step1_desc_3}
          <br />
          <em>{t.step1_tip}</em>
        </p>

        <h2 className="flex items-center gap-3 mt-12">
          <span className="bg-black text-white w-10 h-10 flex items-center justify-center rounded-full text-xl shadow-[4px_4px_0px_0px_rgba(255,204,0,1)]">
            2
          </span>
          {t.step2_title}
        </h2>
        <p>{t.step2_desc}</p>
        <ul className="list-none pl-0 space-y-2">
          <li className="flex items-start gap-2 bg-green-50 p-3 border-2 border-black/10">
            <CheckCircle className="w-6 h-6 text-green-500 shrink-0" />
            <span>
              <strong>{t.step2_check1}</strong>
            </span>
          </li>
          <li className="flex items-start gap-2 bg-green-50 p-3 border-2 border-black/10">
            <CheckCircle className="w-6 h-6 text-green-500 shrink-0" />
            <span>
              <strong>{t.step2_check2}</strong>
            </span>
          </li>
          <li className="flex items-start gap-2 bg-green-50 p-3 border-2 border-black/10">
            <CheckCircle className="w-6 h-6 text-green-500 shrink-0" />
            <span>
              <strong>{t.step2_check3}</strong>
            </span>
          </li>
        </ul>
        <p>
          <strong>{t.step2_action}</strong>
        </p>

        <h2 className="flex items-center gap-3 mt-12">
          <span className="bg-black text-white w-10 h-10 flex items-center justify-center rounded-full text-xl shadow-[4px_4px_0px_0px_rgba(255,204,0,1)]">
            3
          </span>
          {t.step3_title}
        </h2>

        <div className="bg-orange-100 border-l-8 border-orange-500 p-6 my-6">
          <h3 className="flex items-center gap-2 text-orange-700 m-0 mb-2 uppercase text-base">
            <AlertTriangle className="w-6 h-6" /> {t.warning_title}
          </h3>
          <p className="m-0 text-orange-900 font-medium">{t.warning_desc}</p>
        </div>

        <p>{t.step3_desc}</p>

        <ol className="font-bold space-y-4">
          <li>{t.step3_rule1}</li>
          <li>{t.step3_rule2}</li>
          <li>{t.step3_rule3}</li>
          <li>{t.step3_rule4}</li>
        </ol>

        <p>
          <strong>{t.step3_summary}</strong>
        </p>

        <h2 className="flex items-center gap-3 mt-12">
          <span className="bg-black text-white w-10 h-10 flex items-center justify-center rounded-full text-xl shadow-[4px_4px_0px_0px_rgba(255,204,0,1)]">
            4
          </span>
          {t.step4_title}
        </h2>
        <p>{t.step4_desc}</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>{t.step4_li1}</li>
          <li>{t.step4_li2}</li>
        </ul>

        <div className="mt-12 p-8 bg-yellow-300 border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] text-center transform rotate-1">
          <h3 className="text-2xl font-black uppercase mb-4 m-0">
            {t.cta_title}
          </h3>
          <p className="font-bold mb-6">{t.cta_desc}</p>
          <Link
            href="/"
            className="inline-block bg-white text-black font-black uppercase text-xl px-8 py-4 border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all"
          >
            {t.cta_btn}
          </Link>
        </div>
      </div>
    </article>
  );
}
