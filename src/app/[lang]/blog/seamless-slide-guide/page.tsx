import Link from "next/link";
import { Bangers } from "next/font/google";
import { ArrowLeft, CheckCircle, Image as ImageIcon } from "lucide-react";
import { Metadata } from "next";
import { Language } from "@/lib/i18n";

const bangers = Bangers({
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Guide: Create Seamless Carousel Slides on TikTok",
  description:
    "Secrets to splitting Panorama photos into multiple small images for a super attractive seamless sliding effect.",
};

const content: Record<string, any> = {
  en: {
    back: "Back to Blog",
    title_part_1: "Create a",
    title_part_2: "'Infinite' Seamless",
    title_part_3: "Slide on TikTok",
    tags: ["Carousel Mode", "3 min read"],
    intro:
      "Do you have wide panoramic photos or beautiful landscapes? Don't let them shrink! Use TikTok's Photo Mode to create an 'infinite scroll' effect that looks amazing.",
    step1_title: "Prepare & Upload",
    step1_desc: "Visit EasySplit.click and upload your wide image.",
    step1_tip:
      "Tip: The wider the image (Panorama), the better the slide effect.",
    step2_title: "Configure Splitting",
    step2_desc:
      "To create a horizontal slide effect, we need to split the original image vertically into equal parts.",
    step2_check1:
      "Columns (Vertical): Choose 2 (split in half) or 3 (split in thirds) depending on length.",
    step2_check2: "Rows (Horizontal): Choose 1 (Default).",
    step2_action: "Then click the green SPLIT IMAGE button.",
    step3_title: "Download Images",
    step3_desc: "The result will appear below. Download each part one by one:",
    step3_part1: "Part 1 (Left Image)",
    step3_part2: "Part 2 (Right Image)",
    step4_title: "Post to TikTok (Photo Mode)",
    step4_desc: "Open TikTok and select Photo Mode:",
    step4_li1: "Select images in correct order: Part 1 first, Part 2 second.",
    step4_li2:
      "When previewing, swipe left. You'll see the two images seamlessly connected like one long painting!",
    cta_title: "Create Sliding Images Now!",
    cta_desc: "Free tool, no watermark, high quality.",
    cta_btn: "Start Splitting",
  },
  vi: {
    back: "Quay lại Blog",
    title_part_1: "Cách tạo ảnh Slide trượt",
    title_part_2: "'Vô Tận'",
    title_part_3: "trên TikTok",
    tags: ["Carousel Mode", "3 phút đọc"],
    intro:
      "Bạn có những bức ảnh phong cảnh rộng (Panorama) hoặc những bức tranh ngang cực đẹp? Đừng để nó bị thu nhỏ lại! Hãy dùng tính năng Photo Mode của TikTok để tạo hiệu ứng 'trượt vô tận' xem cực đã mắt.",
    step1_title: "Chuẩn bị ảnh & Upload",
    step1_desc: "Truy cập EasySplit.click và tải lên bức ảnh ngang của bạn.",
    step1_tip: "Mẹo: Ảnh càng dài (Panorama) thì hiệu ứng trượt càng đẹp.",
    step2_title: "Cấu hình cắt ảnh",
    step2_desc:
      "Để tạo hiệu ứng slide trượt ngang, chúng ta cần cắt ảnh gốc thành nhiều phần bằng nhau theo chiều dọc.",
    step2_check1:
      "Số cột (Vertical): Chọn 2 (để cắt làm đôi) hoặc 3 (cắt làm ba) tùy độ dài ảnh.",
    step2_check2: "Số hàng (Horizontal): Chọn 1 (Mặc định).",
    step2_action: "Sau đó bấm nút SPLIT IMAGE màu xanh lá.",
    step3_title: "Tải ảnh về",
    step3_desc:
      "Kết quả sẽ hiện ra bên dưới. Bạn hãy tải lần lượt từng phần về máy tính/điện thoại:",
    step3_part1: "Part 1 (Ảnh bên Trái)",
    step3_part2: "Part 2 (Ảnh bên Phải)",
    step4_title: "Đăng TikTok (Photo Mode)",
    step4_desc: "Mở TikTok lên và chọn chế độ đăng ảnh (Photo Mode):",
    step4_li1: "Chọn ảnh theo đúng thứ tự: Part 1 trước, Part 2 sau.",
    step4_li2:
      "Khi xem thử, hãy vuốt sang trái. Bạn sẽ thấy 2 tấm ảnh nối liền với nhau một cách hoàn hảo như một bức tranh dài!",
    cta_title: "Tạo ảnh trượt ngay bây giờ!",
    cta_desc: "Công cụ miễn phí, không watermark, chất lượng cao.",
    cta_btn: "Start Splitting",
  },
  ko: {
    back: "블로그로 돌아가기",
    title_part_1: "틱톡에서",
    title_part_2: "'무한' 슬라이드",
    title_part_3: "만들기",
    tags: ["캐러셀 모드", "3분 읽기"],
    intro:
      "넓은 파노라마 사진이나 아름다운 풍경 사진이 있나요? 작게 줄이지 마세요! 틱톡의 사진 모드를 사용하여 놀라워 보이는 '무한 스크롤' 효과를 만드세요.",
    step1_title: "준비 및 업로드",
    step1_desc: "EasySplit.click을 방문하여 넓은 이미지를 업로드하세요.",
    step1_tip: "팁: 이미지(파노라마)가 넓을수록 슬라이드 효과가 더 좋습니다.",
    step2_title: "분할 구성",
    step2_desc:
      "수평 슬라이드 효과를 만들려면 원본 이미지를 세로로 등분해야 합니다.",
    step2_check1:
      "열 (세로): 길이에 따라 2(반으로 분할) 또는 3(3등분)을 선택하세요.",
    step2_check2: "행 (가로): 1 (기본값)을 선택하세요.",
    step2_action: "그런 다음 녹색 SPLIT IMAGE 버튼을 클릭하세요.",
    step3_title: "이미지 다운로드",
    step3_desc: "결과가 아래에 나타납니다. 각 부분을 하나씩 다운로드하세요:",
    step3_part1: "파트 1 (왼쪽 이미지)",
    step3_part2: "파트 2 (오른쪽 이미지)",
    step4_title: "틱톡에 게시 (사진 모드)",
    step4_desc: "틱톡을 열고 사진 모드를 선택하세요:",
    step4_li1:
      "올바른 순서로 이미지를 선택하세요: 파트 1 먼저, 그 다음 파트 2.",
    step4_li2:
      "미리보기 할 때 왼쪽으로 스와이프하세요. 두 이미지가 하나의 긴 그림처럼 매끄럽게 연결되는 것을 볼 수 있습니다!",
    cta_title: "지금 슬라이딩 이미지 만들기!",
    cta_desc: "무료 도구, 워터마크 없음, 고품질.",
    cta_btn: "분할 시작",
  },
  jp: {
    back: "ブログに戻る",
    title_part_1: "作成する",
    title_part_2: "TikTokで「無限」",
    title_part_3: "シームレススライド",
    tags: ["カルーセルモード", "3分"],
    intro:
      "広いパノラマ写真や美しい風景写真はありますか？小さくしないでください！TikTokのフォトモードを使用して、驚くほどに見える「無限スクロール」効果を作成します。",
    step1_title: "準備とアップロード",
    step1_desc: "EasySplit.clickにアクセスして、広い画像をアップロードします。",
    step1_tip: "ヒント：画像（パノラマ）が広いほど、スライド効果が向上します。",
    step2_title: "分割の設定",
    step2_desc:
      "水平スライド効果を作成するには、元の画像を垂直に等分割する必要があります。",
    step2_check1:
      "列（垂直）：長さに応じて2（半分に分割）または3（3等分）を選択します。",
    step2_check2: "行（水平）：1（デフォルト）を選択します。",
    step2_action: "次に、緑色のSPLIT IMAGEボタンをクリックします。",
    step3_title: "画像のダウンロード",
    step3_desc:
      "結果が下に表示されます。各部分を1つずつダウンロードしてください：",
    step3_part1: "パート1（左の画像）",
    step3_part2: "パート2（右の画像）",
    step4_title: "TikTokに投稿（フォトモード）",
    step4_desc: "TikTokを開き、フォトモードを選択します：",
    step4_li1: "正しい順序で画像を選択します：パート1が先、パート2が次。",
    step4_li2:
      "プレビュー時に左にスワイプします。2つの画像が1つの長い絵のようにシームレスにつながっているのがわかります！",
    cta_title: "今すぐスライド画像を作成！",
    cta_desc: "無料ツール、透かしなし、高品質。",
    cta_btn: "分割を開始",
  },
  th: {
    back: "กลับไปที่บล็อก",
    title_part_1: "สร้าง",
    title_part_2: "สไลด์ 'ไร้รอยต่อ'",
    title_part_3: "บน TikTok",
    tags: ["โหมดคารูเซล", "อ่าน 3 นาที"],
    intro:
      "คุณมีภาพถ่ายพาโนรามากว้างหรือทิวทัศน์ที่สวยงามหรือไม่? อย่าปล่อยให้มันหดตัว! ใช้โหมดภาพถ่ายของ TikTok เพื่อสร้างเอฟเฟกต์ 'เลื่อนไม่สิ้นสุด' ที่ดูน่าทึ่ง",
    step1_title: "เตรียมและอัปโหลด",
    step1_desc: "ไปที่ EasySplit.click และอัปโหลดภาพกว้างของคุณ",
    step1_tip: "เคล็ดลับ: ยิ่งภาพกว้าง (พาโนรามา) เอฟเฟกต์สไลด์ก็จะยิ่งดีขึ้น",
    step2_title: "กำหนดค่าการแยก",
    step2_desc:
      "ในการสร้างเอฟเฟกต์สไลด์แนวนอน เราต้องแยกภาพต้นฉบับในแนวตั้งออกเป็นส่วนเท่าๆ กัน",
    step2_check1:
      "คอลัมน์ (แนวตั้ง): เลือก 2 (แบ่งครึ่ง) หรือ 3 (แบ่งสามส่วน) ขึ้นอยู่กับความยาว",
    step2_check2: "แถว (แนวนอน): เลือก 1 (ค่าเริ่มต้น)",
    step2_action: "จากนั้นคลิกปุ่ม SPLIT IMAGE สีเขียว",
    step3_title: "ดาวน์โหลดภาพ",
    step3_desc: "ผลลัพธ์จะปรากฏด้านล่าง ดาวน์โหลดทีละส่วน:",
    step3_part1: "ส่วนที่ 1 (ภาพซ้าย)",
    step3_part2: "ส่วนที่ 2 (ภาพขวา)",
    step4_title: "โพสต์ลง TikTok (โหมดภาพถ่าย)",
    step4_desc: "เปิด TikTok และเลือกโหมดภาพถ่าย:",
    step4_li1: "เลือกภาพตามลำดับที่ถูกต้อง: ส่วนที่ 1 ก่อน ส่วนที่ 2 ตาม",
    step4_li2:
      "เมื่อดูตัวอย่างให้ปัดไปทางซ้าย คุณจะเห็นภาพทั้งสองเชื่อมต่อกันอย่างราบรื่นเหมือนภาพวาดยาวภาพเดียว!",
    cta_title: "สร้างภาพสไลด์ตอนนี้!",
    cta_desc: "เครื่องมือฟรี ไม่มีลายน้ำ คุณภาพสูง",
    cta_btn: "เริ่มแยกภาพ",
  },
  id: {
    back: "Kembali ke Blog",
    title_part_1: "Buat",
    title_part_2: "Slide Mulus",
    title_part_3: "'Tak Terbatas' di TikTok",
    tags: ["Mode Carousel", "Baca 3 menit"],
    intro:
      "Apakah Anda memiliki foto panorama lebar atau pemandangan indah? Jangan biarkan mengecil! Gunakan Mode Foto TikTok untuk membuat efek 'gulir tak terbatas' yang terlihat menakjubkan.",
    step1_title: "Persiapkan & Unggah",
    step1_desc: "Kunjungi EasySplit.click dan unggah gambar lebar Anda.",
    step1_tip:
      "Tips: Semakin lebar gambar (Panorama), semakin baik efek slide-nya.",
    step2_title: "Konfigurasi Pemecahan",
    step2_desc:
      "Untuk membuat efek slide horizontal, kita perlu memecah gambar asli secara vertikal menjadi bagian yang sama.",
    step2_check1:
      "Kolom (Vertikal): Pilih 2 (bagi dua) atau 3 (bagi tiga) tergantung panjangnya.",
    step2_check2: "Baris (Horizontal): Pilih 1 (Default).",
    step2_action: "Lalu klik tombol hijau SPLIT IMAGE.",
    step3_title: "Unduh Gambar",
    step3_desc:
      "Hasilnya akan muncul di bawah. Unduh setiap bagian satu per satu:",
    step3_part1: "Bagian 1 (Gambar Kiri)",
    step3_part2: "Bagian 2 (Gambar Kanan)",
    step4_title: "Posting ke TikTok (Mode Foto)",
    step4_desc: "Buka TikTok dan pilih Mode Foto:",
    step4_li1:
      "Pilih gambar dalam urutan yang benar: Bagian 1 pertama, Bagian 2 kedua.",
    step4_li2:
      "Saat pratinjau, geser ke kiri. Anda akan melihat dua gambar terhubung dengan mulus seperti satu lukisan panjang!",
    cta_title: "Buat Gambar Geser Sekarang!",
    cta_desc: "Alat gratis, tanpa watermark, kualitas tinggi.",
    cta_btn: "Mulai Memecah",
  },
  es: {
    back: "Volver al Blog",
    title_part_1: "Crear un",
    title_part_2: "Deslizamiento 'Infinito'",
    title_part_3: "y Continuo en TikTok",
    tags: ["Modo Carrusel", "3 min de lectura"],
    intro:
      "¿Tienes fotos panorámicas amplias o hermosos paisajes? ¡No dejes que se encojan! Usa el Modo Foto de TikTok para crear un efecto de 'desplazamiento infinito' que se ve increíble.",
    step1_title: "Preparar y Subir",
    step1_desc: "Visita EasySplit.click y sube tu imagen amplia.",
    step1_tip:
      "Consejo: Cuanto más ancha sea la imagen (Panorámica), mejor será el efecto de deslizamiento.",
    step2_title: "Configurar División",
    step2_desc:
      "Para crear un efecto de deslizamiento horizontal, necesitamos dividir la imagen original verticalmente en partes iguales.",
    step2_check1:
      "Columnas (Vertical): Elige 2 (dividir por la mitad) o 3 (dividir en tercios) según la longitud.",
    step2_check2: "Filas (Horizontal): Elige 1 (Predeterminado).",
    step2_action: "Luego haz clic en el botón verde SPLIT IMAGE.",
    step3_title: "Descargar Imágenes",
    step3_desc:
      "El resultado aparecerá a continuación. Descarga cada parte una por una:",
    step3_part1: "Parte 1 (Imagen Izquierda)",
    step3_part2: "Parte 2 (Imagen Derecha)",
    step4_title: "Publicar en TikTok (Modo Foto)",
    step4_desc: "Abre TikTok y selecciona Modo Foto:",
    step4_li1:
      "Selecciona las imágenes en el orden correcto: Parte 1 primero, Parte 2 segundo.",
    step4_li2:
      "Al previsualizar, desliza hacia la izquierda. ¡Verás las dos imágenes conectadas perfectamente como una pintura larga!",
    cta_title: "¡Crea Imágenes Deslizantes Ahora!",
    cta_desc: "Herramienta gratis, sin marca de agua, alta calidad.",
    cta_btn: "Empezar a Dividir",
  },
  "zh-CN": {
    back: "返回博客",
    title_part_1: "在 TikTok 上",
    title_part_2: "创建“无限”",
    title_part_3: "无缝幻灯片",
    tags: ["轮播模式", "3 分钟阅读"],
    intro:
      "您有宽幅全景照片或美丽的风景照吗？别让它们缩水！使用 TikTok 的照片模式创建令人惊叹的“无限滚动”效果。",
    step1_title: "准备并上传",
    step1_desc: "访问 EasySplit.click 并上传您的宽幅图片。",
    step1_tip: "提示：图片（全景）越宽，滑动效果越好。",
    step2_title: "配置分割",
    step2_desc: "要创建水平滑动效果，我们需要将原始图片垂直分割成相等的部分。",
    step2_check1: "列（垂直）：根据长度选择 2（减半）或 3（三分之一）。",
    step2_check2: "行（水平）：选择 1（默认）。",
    step2_action: "然后点击绿色的 SPLIT IMAGE 按钮。",
    step3_title: "下载图片",
    step3_desc: "结果将显示在下方。逐一下载每个部分：",
    step3_part1: "第 1 部分（左图）",
    step3_part2: "第 2 部分（右图）",
    step4_title: "发布到 TikTok（照片模式）",
    step4_desc: "打开 TikTok 并选择照片模式：",
    step4_li1: "按正确顺序选择图片：先选第 1 部分，再选第 2 部分。",
    step4_li2: "预览时向左滑动。您会看到两张图片无缝连接，就像一幅长画！",
    cta_title: "立即创建滑动图片！",
    cta_desc: "免费工具，无水印，高质量。",
    cta_btn: "开始分割",
  },
  "zh-TW": {
    back: "返回部落格",
    title_part_1: "製作一個",
    title_part_2: "「無限」無縫",
    title_part_3: "TikTok 滑動圖片",
    tags: ["輪播模式", "閱讀時間 3 分鐘"],
    intro:
      "你有寬幅全景照片或漂亮的風景照嗎？別讓它們被縮小！使用 TikTok 的照片模式，打造看起來超驚豔的「無限滑動」效果。",
    step1_title: "準備並上傳",
    step1_desc: "前往 EasySplit.click 並上傳你的寬幅圖片。",
    step1_tip: "小技巧：圖片越寬（全景圖），滑動效果就越好。",
    step2_title: "設定切割方式",
    step2_desc:
      "為了建立水平滑動效果，我們需要將原始圖片垂直切割成相同大小的區塊。",
    step2_check1: "欄（垂直）：依圖片長度選擇 2（對半切）或 3（三等分）。",
    step2_check2: "列（水平）：選擇 1（預設）。",
    step2_action: "接著點擊綠色的「切割圖片」按鈕。",
    step3_title: "下載圖片",
    step3_desc: "結果會顯示在下方，請依序下載每一張圖片：",
    step3_part1: "第 1 張（左側圖片）",
    step3_part2: "第 2 張（右側圖片）",
    step4_title: "發佈到 TikTok（照片模式）",
    step4_desc: "打開 TikTok 並選擇照片模式：",
    step4_li1: "依正確順序選擇圖片：先選第 1 張，再選第 2 張。",
    step4_li2: "預覽時向左滑動，你會看到兩張圖片無縫銜接，就像一幅長畫一樣！",
    cta_title: "立即製作滑動圖片！",
    cta_desc: "免費工具，無浮水印，高畫質。",
    cta_btn: "開始切割",
  },
  de: {
    back: "Zurück zum Blog",
    title_part_1: "Erstellen Sie einen",
    title_part_2: "nahtlosen",
    title_part_3: "TikTok-Slide-Effekt",
    tags: ["Karussell-Modus", "3 Minuten Lesezeit"],
    intro:
      "Haben Sie breite Panoramafotos oder schöne Landschaftsbilder? Lassen Sie sie nicht schrumpfen! Verwenden Sie den Foto-Modus von TikTok, um einen erstaunlichen „Endlos-Scroll“-Effekt zu erzielen.",
    step1_title: "Vorbereiten und Hochladen",
    step1_desc:
      "Besuchen Sie EasySplit.click und laden Sie Ihr breites Bild hoch.",
    step1_tip:
      "Tipp: Je breiter das Bild (Panorama), desto besser der Slide-Effekt.",
    step2_title: "Aufteilung konfigurieren",
    step2_desc:
      "Um einen horizontalen Slide-Effekt zu erzeugen, müssen wir das Originalbild vertikal in gleiche Teile teilen.",
    step2_check1:
      "Spalten (Vertikal): Wählen Sie 2 (halbieren) oder 3 (in Drittel teilen) je nach Länge.",
    step2_check2: "Reihen (Horizontal): Wählen Sie 1 (Standard).",
    step2_action: "Klicken Sie dann auf den grünen Button SPLIT IMAGE.",
    step3_title: "Bilder herunterladen",
    step3_desc:
      "Das Ergebnis wird unten angezeigt. Laden Sie jeden Teil einzeln herunter:",
    step3_part1: "Teil 1 (Linkes Bild)",
    step3_part2: "Teil 2 (Rechtes Bild)",
    step4_title: "Auf TikTok posten (Foto-Modus)",
    step4_desc: "Öffnen Sie TikTok und wählen Sie den Foto-Modus:",
    step4_li1:
      "Wählen Sie die Bilder in der richtigen Reihenfolge: Teil 1 zuerst, Teil 2 danach.",
    step4_li2:
      "Wischen Sie in der Vorschau nach links. Sie sehen die beiden Bilder nahtlos verbunden wie ein langes Gemälde!",
    cta_title: "Erstellen Sie jetzt Slide-Bilder!",
    cta_desc: "Kostenloses Tool, kein Wasserzeichen, hohe Qualität.",
    cta_btn: "Teilen starten",
  },
  ru: {
    back: "Вернуться в блог",
    title_part_1: "Создать",
    title_part_2: "Бесконечная бесконечность",
    title_part_3: "Слайд в TikTok",
    tags: ["Режим карусели", "3 мин чтения"],
    intro:
      "У вас есть широкие панорамные фотографии или красивые пейзажи? Не позволяйте им уменьшаться! Используйте фоторежим TikTok, чтобы создать потрясающий эффект бесконечной прокрутки.",
    step1_title: "Подготовка и загрузка",
    step1_desc:
      "Перейдите на EasySplit.click и загрузите свое широкое изображение.",
    step1_tip:
      "Совет: Чем шире изображение (панорама), тем лучше эффект слайда.",
    step2_title: "Настройка разделения",
    step2_desc:
      "Чтобы создать эффект горизонтального слайда, нам нужно разделить исходное изображение вертикально на равные части.",
    step2_check1:
      "Столбцы (Вертикально): Выберите 2 (разделить пополам) или 3 (разделить на три части) в зависимости от длины.",
    step2_check2: "Строки (Горизонтально): Выберите 1 (По умолчанию).",
    step2_action: "Затем нажмите зеленую кнопку РАЗДЕЛИТЬ ИЗОБРАЖЕНИЕ.",
    step3_title: "Скачать изображения",
    step3_desc: "Результат появится ниже. Скачивайте каждую часть по очереди:",
    step3_part1: "Часть 1 (левое изображение)",
    step3_part2: "Часть 2 (правое изображение)",
    step4_title: "Опубликовать в TikTok (Режим фото)",
    step4_desc: "Открыть TikTok и выбрать режим фото:",
    step4_li1:
      "Выберите изображения в правильном порядке: сначала Часть 1, затем Часть 2.",
    step4_li2:
      "При предварительном просмотре проведите пальцем влево. Вы увидите два изображения, плавно соединенных, как одна длинная картина!",
    cta_title: "Создавайте скользящие изображения прямо сейчас!",
    cta_desc: "Бесплатный инструмент, без водяных знаков, высокое качество.",
    cta_btn: "Начать разделение",
  },
  hi: {
    back: "Back to Blog",
    title_part_1: "Create a",
    title_part_2: "'Infinite' Seamless",
    title_part_3: "Slide on TikTok",
    tags: ["Carousel Mode", "3 min read"],
    intro:
      "क्या आपके पास वाइड पैनोरमिक फ़ोटो या सुंदर लैंडस्केप हैं? उन्हें छोटा न होने दें! TikTok के फ़ोटो मोड का इस्तेमाल करके एक 'इनफ़िनिट स्क्रॉल' इफ़ेक्ट बनाएं जो शानदार दिखे।",
    step1_title: "Prepare & Upload",
    step1_desc: "EasySplit.click पर जाएं और अपनी वाइड इमेज अपलोड करें।",
    step1_tip:
      "टिप: इमेज (पैनोरमा) जितनी वाइड होगी, स्लाइड इफ़ेक्ट उतना ही बेहतर होगा।",
    step2_title: "Configure Splitting",
    step2_desc:
      "हॉरिजॉन्टल स्लाइड इफ़ेक्ट बनाने के लिए, हमें ओरिजिनल इमेज को वर्टिकली बराबर हिस्सों में स्प्लिट करना होगा।",
    step2_check1:
      "कॉलम (वर्टिकल): लंबाई के हिसाब से 2 (आधे में बंटे हुए) या 3 (तिहाई में बंटे हुए) चुनें।",
    step2_check2: "पंक्तियाँ (हॉरिजॉन्टल): 1 (डिफ़ॉल्ट) चुनें।",
    step2_action: "फिर हरे SPLIT IMAGE बटन पर क्लिक करें।",
    step3_title: "इमेज डाउनलोड करें",
    step3_desc: "रिजल्ट नीचे दिखेगा। हर पार्ट को एक-एक करके डाउनलोड करें:",
    step3_part1: "पार्ट 1 (लेफ्ट इमेज)",
    step3_part2: "पार्ट 2 (राइट इमेज)",
    step4_title: "TikTok पर पोस्ट करें (फोटो मोड)",
    step4_desc: "TikTok खोलें और फोटो मोड चुनें:",
    step4_li1:
      "इमेज को सही क्रम में चुनें: पार्ट 1 पहले, पार्ट 2 दूसरे नंबर पर।",
    step4_li2:
      "प्रीव्यू करते समय, लेफ्ट स्वाइप करें। आपको दो इमेज एक लंबी पेंटिंग की तरह आसानी से जुड़ी हुई दिखेंगी!",
    cta_title: "स्लाइडिंग इमेज बनाएँ अभी!",
    cta_desc: "फ़्री टूल, कोई वॉटरमार्क नहीं, हाई क्वालिटी.",
    cta_btn: "स्प्लिटिंग शुरू करें",
  },
  "pt-BR": {
    back: "Voltar para o Blog",
    title_part_1: "Crie um",
    title_part_2: "Slide Contínuo",
    title_part_3: "'Infinito' no TikTok",
    tags: ["Modo Carrossel", "3 min de leitura"],
    intro:
      "Você tem fotos panorâmicas largas ou paisagens bonitas? Não deixe que elas fiquem pequenas! Use o Modo Foto do TikTok para criar um efeito de 'rolagem infinita' que fica incrível.",
    step1_title: "Preparar e Enviar",
    step1_desc: "Acesse EasySplit.click e envie sua imagem larga.",
    step1_tip:
      "Dica: Quanto mais larga a imagem (Panorama), melhor será o efeito de deslizamento.",
    step2_title: "Configurar a Divisão",
    step2_desc:
      "Para criar um efeito de deslizamento horizontal, precisamos dividir a imagem original verticalmente em partes iguais.",
    step2_check1:
      "Colunas (Vertical): Escolha 2 (dividir ao meio) ou 3 (dividir em três) dependendo do comprimento.",
    step2_check2: "Linhas (Horizontal): Escolha 1 (Padrão).",
    step2_action: "Depois, clique no botão verde DIVIDIR IMAGEM.",
    step3_title: "Baixar Imagens",
    step3_desc: "O resultado aparecerá abaixo. Baixe cada parte uma por uma:",
    step3_part1: "Parte 1 (Imagem da Esquerda)",
    step3_part2: "Parte 2 (Imagem da Direita)",
    step4_title: "Postar no TikTok (Modo Foto)",
    step4_desc: "Abra o TikTok e selecione o Modo Foto:",
    step4_li1:
      "Selecione as imagens na ordem correta: Parte 1 primeiro, Parte 2 depois.",
    step4_li2:
      "Ao visualizar, deslize para a esquerda. Você verá as duas imagens conectadas perfeitamente como uma pintura longa!",
    cta_title: "Crie Imagens Deslizantes Agora!",
    cta_desc: "Ferramenta gratuita, sem marca d’água, alta qualidade.",
    cta_btn: "Começar a Dividir",
  },
};

export default async function SeamlessSlideGuide({
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
          <span className="text-pink-500 layer-text stroke-black">
            {t.title_part_2}
          </span>{" "}
          {t.title_part_3}
        </h1>

        <div className="flex flex-wrap gap-4 text-sm font-bold uppercase text-slate-500">
          <span className="bg-cyan-200 text-black px-3 py-1 border-2 border-black">
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
        <p className="lead text-xl font-bold border-l-8 border-pink-400 pl-6 bg-slate-50 py-4 italic">
          {t.intro}
        </p>

        <h2 className="flex items-center gap-3 mt-12">
          <span className="bg-black text-white w-10 h-10 flex items-center justify-center rounded-full text-xl shadow-[4px_4px_0px_0px_rgba(255,204,0,1)]">
            1
          </span>
          {t.step1_title}
        </h2>
        <p>
          {t.step1_desc}{" "}
          <Link href="/" className="text-blue-600 hover:underline font-bold">
            EasySplit.click
          </Link>
        </p>
        <p>
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
          <li className="flex items-start gap-2 bg-pink-50 p-3 border-2 border-black/10">
            <CheckCircle className="w-6 h-6 text-pink-500 shrink-0" />
            <span>
              <strong>{t.step2_check1}</strong>
            </span>
          </li>
          <li className="flex items-start gap-2 bg-pink-50 p-3 border-2 border-black/10">
            <CheckCircle className="w-6 h-6 text-pink-500 shrink-0" />
            <span>
              <strong>{t.step2_check2}</strong>
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

        <p>{t.step3_desc}</p>
        <div className="grid grid-cols-2 gap-4 not-prose mb-6">
          <div className="bg-slate-100 border-2 border-black p-4 text-center font-bold">
            {t.step3_part1}
          </div>
          <div className="bg-slate-100 border-2 border-black p-4 text-center font-bold">
            {t.step3_part2}
          </div>
        </div>

        <h2 className="flex items-center gap-3 mt-12">
          <span className="bg-black text-white w-10 h-10 flex items-center justify-center rounded-full text-xl shadow-[4px_4px_0px_0px_rgba(255,204,0,1)]">
            4
          </span>
          {t.step4_title}
        </h2>
        <p>{t.step4_desc}</p>
        <ol className="font-bold space-y-4">
          <li className="flex items-center gap-3">
            <ImageIcon className="w-6 h-6" /> {t.step4_li1}
          </li>
          <li>{t.step4_li2}</li>
        </ol>

        <div className="mt-12 p-8 bg-cyan-300 border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] text-center transform -rotate-1">
          <h3 className="text-2xl font-black uppercase mb-4 m-0">
            {t.cta_title}
          </h3>
          <p className="font-bold mb-6">{t.cta_desc}</p>
          <Link
            href="/"
            className="inline-block bg-white text-black font-black uppercase text-xl px-8 py-4 border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-y-1 hover:shadow-none transition-all"
          >
            {t.cta_btn}
          </Link>
        </div>
      </div>
    </article>
  );
}
