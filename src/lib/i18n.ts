import { profileTranslations } from "./i18n-profile";
export type Language =
  | "en"
  | "vi"
  | "ko"
  | "jp"
  | "th"
  | "id"
  | "es"
  | "zh-CN"
  | "zh-TW"
  | "de"
  | "ru"
  | "hi"
  | "pt-BR";

export const translations = {
  en: {
    ...profileTranslations.en,
    title: "Easy Split",
    subtitle:
      "Split your photos into seamless grids or vertical slides. Perfect for TikTok, Instagram, and more.",
    upload_title: "Change Image",
    upload_placeholder: "Click or Drag Image Here",
    upload_desc: "Supports JPG, PNG, WEBP, AVIF, BMP. Recommended 16:9 format",
    ready_msg: "Ready to Download",
    download_all: "Download All (ZIP)",
    download_part: "Save Image",
    download_image: "Download Image",
    download_zip_mobile: "Download ZIP",
    part: "Part",
    article_title: "How to split photos for seamless carousel slides",
    article_intro:
      "Posting giant panoramas or wide images often results in quality loss or awkward cropping. EASY SPLIT solves this by slicing your image into perfectly aligned segments for TikTok, Instagram Carousels, and more.",
    article_why_title: "Why split your images?",
    article_why_1:
      "Increased Engagement: Viewers swipe to see the full picture.",
    article_why_2:
      "Better Storytelling: Create panoramic experiences on social media.",
    article_why_3: "High Quality: Client-side processing ensures sharp output.",
    how_to_title: "User Guide",
    how_to_1: "Upload any image (panoramas work best).",
    how_to_2: "Choose how many segments you want (2 to 10).",
    how_to_3: "Adjust the crop area if needed, then click Split.",
    how_to_4:
      "Download your segments and upload them to your favorite platform.",
    nav_home: "Easy Split",
    nav_splitter: "Image Splitter",
    privacy: "Privacy Policy",
    cookie_policy: "Cookie Policy",
    terms: "Terms of Service",
    footer_rights: "EASY SPLIT. All rights reserved.",
    about: "About",
    tab_edit: "Edit",
    tab_split: "Split",
    transform_label: "Transform",
    rotate_btn: "Rotate",
    flip_h_btn: "Flip H",
    open_crop: "Open Crop Tool",
    cancel_crop: "Cancel Crop",
    actions_label: "Actions",
    apply_crop: "Apply Crop",
    overwrite_warning: "* Overwrites current image",
    segments_label: "Segments",
    crop_ratio_label: "Crop Ratio",
    custom_ratio: "Custom",
    split_direction_label: "Split Direction",
    split_cols: "Columns (Vertical)",
    split_rows: "Rows (Horizontal)",
    width_label: "Width",
    height_label: "Height",
    split_image_btn: "Split Image",
    processing: "Processing...",
    change_img: "Change Img",
    reset_all: "Reset All",
    reset_image: "Reset Image",
    edit_mode: "Edit Mode",
    interactive_preview: "Interactive Preview",
    results_label: "Results",
    feature_client_side_title: "100% Client-Side",
    feature_client_side_desc:
      "Your photos never leave your device. All processing happens right in your browser for maximum privacy.",
    feature_instant_title: "Instant Split",
    feature_instant_desc:
      "No upload wait times. Splitting happens instantly thanks to optimized browser-based canvas technology.",
    feature_quality_title: "No Quality Loss",
    feature_quality_desc:
      "We prioritize high-fidelity export settings to ensure your TikTok carousel looks crisp and professional.",
    feature_free_title: "100% Free",
    feature_free_desc:
      "No subscriptions, no watermarks, no hidden fees. Just a simple tool for creators.",
    ratio_free: "Free",
    faq_title: "Frequently Asked Questions",
    faq_1_q: "How do I make a seamless carousel for TikTok?",
    faq_1_a:
      "Upload your panoramic image, select '3 Segments' (or more), and use our tool to split it. When posting to TikTok, select 'Photo Mode' and upload the images in order. The result will be a swipeable, seamless panorama.",
    faq_2_q: "Is it safe to upload my photos here?",
    faq_2_a:
      "Yes! In fact, you aren't 'uploading' them anywhere. This tool runs entirely in your browser. Your images are never sent to a server, ensuring 100% privacy.",
    faq_3_q: "What is the best size for TikTok slides?",
    faq_3_a:
      "TikTok recommends a 9:16 aspect ratio (1080x1920 pixels). Our tool automatically sets this ratio for you when using standard settings.",
    faq_4_q: "Can I split images for Instagram too?",
    faq_4_a:
      "Absolutely! While designed for TikTok, the split images work perfectly for Instagram Carousels (Swipeable Posts). Just choose the 4:5 or 1:1 ratio option.",
    about_tool_title: "About This Tool",
    about_tool_desc:
      "Easy Split is a suite of creative utilities designed for modern content creators. We believe in building tools that are fast, free, and respect user privacy.",
    privacy_commitment_title: "Privacy Commitment",
    privacy_commitment_desc:
      "This Image Splitter operates strictly client-side. We do not store, view, or transmit your images. The 'Download' logic simply saves the processed canvas data directly from your browser's memory to your disk.",
    created_by: "Created By",
    contact: "Contact",
    new_dynamic_split: "New: Dynamic Split",
    privacy_title: "Privacy Policy",
    last_updated: "Last Updated: January 11, 2026",
    privacy_intro:
      "At <strong class='font-black'>Easy Split</strong>, we believe in privacy by design. Our tools are built to run <strong class='font-black'>client-side</strong>, meaning your data (images, files) stays on your device and is never uploaded to our servers.",
    privacy_info_collect_title: "1. Information We Collect",
    privacy_info_collect_desc:
      "Since we do not require user accounts and process files locally, we collect minimal data:",
    privacy_usage_data:
      "<strong>Usage Data:</strong> We may use third-party analytics (like Google Analytics) to understand how users navigate our site. This data is anonymized and does not include personal files.",
    privacy_cookies:
      "<strong>Cookies:</strong> We use essential cookies to remember your preferences (like language settings).",
    privacy_process_files_title: "2. How We Process Your Files",
    privacy_process_files_desc:
      "When you use tools like our <strong>Image Splitter</strong>, all image manipulation happens inside your web browser using HTML5 Canvas technology. <strong>We do not see, store, or transmit your images.</strong>",
    privacy_ads_title: "3. Advertising (Google AdSense)",
    privacy_ads_desc:
      "We use third-party vendors, including Google, to serve ads based on a user's prior visits to our website or other websites.",
    privacy_ads_point1:
      "Google's use of advertising cookies enables it and its partners to serve ads to your users based on their visit to your sites and/or other sites on the Internet.",
    privacy_ads_point2:
      "Users may opt out of personalized advertising by visiting <a href='https://www.google.com/settings/ads' target='_blank' rel='nofollow noreferrer'>Google Ads Settings</a>.",
    privacy_links_title: "4. Third-Party Links",
    privacy_links_desc:
      "Our website may contain links to restricted other websites. If you click on a third-party link, you will be directed to that site. Note that these external sites are not operated by us. Therefore, we strongly advise you to review the Privacy Policy of these websites.",
    privacy_contact_title: "5. Contact Us",
    privacy_contact_desc:
      "If you have any questions or suggestions about our Privacy Policy, do not hesitate to contact us.",
    owner_label: "Owner",
    terms_title: "Terms of Service",
    terms_last_updated: "Last Updated: January 11, 2026",
    terms_intro:
      "Please read these terms of service ('Terms', 'Terms of Service') carefully before using the <strong class='font-black'>Easy Split</strong> website operated by <strong class='font-black'>hba-dev</strong> ('us', 'we', or 'our').",
    terms_conditions_title: "1. Conditions of Use",
    terms_conditions_desc:
      "By using this website, you certify that you have read and reviewed this Agreement and that you agree to comply with its terms. If you do not want to be bound by the terms of this Agreement, you are advised to stop using the website accordingly.",
    terms_ip_title: "2. Intellectual Property",
    terms_ip_desc:
      "You agree that all materials, products, and services provided on this website are the property of the website owner, its affiliates, directors, officers, employees, agents, suppliers, or licensors including all copyrights, trade secrets, trademarks, patents, and other intellectual property. You also agree that you will not reproduce or redistribute the intellectual property in any way, including electronic, digital, or new trademark registrations.",
    terms_ugc_label: "User Generated Content",
    terms_ugc_desc:
      "You retain full ownership of any images or content you process using our tools. Since we do not store your files, you are solely responsible for your own content.",
    terms_acceptable_use_title: "3. Acceptable Use",
    terms_acceptable_use_desc:
      "You agree not to use our specific tools for any unlawful purpose or any purpose prohibited under this clause. You agree not to use our services to:",
    terms_use_1: "Harass, abuse, or threaten others.",
    terms_use_2: "Violate the rights of others.",
    terms_use_3: "Perpetrate any fraud or distribute malware or viruses.",
    terms_indemnification_title: "4. Indemnification",
    terms_indemnification_desc:
      "You agree to indemnify the website owner and its affiliates and hold us harmless against legal claims and demands that may arise from your use or misuse of our services.",
    terms_liability_title: "5. Limitation on Liability",
    terms_liability_desc:
      "We are not liable for any damages that may occur to you as a result of your misuse of our website. We reserve the right to edit, modify, and change this Agreement at any time.",
    terms_contact_title: "6. Contact",
    terms_contact_desc:
      "For any questions regarding these Terms, please contact us at:",
    about_us_title: "About Us",
    about_us_tagline: "Empowering Creators Since 2026",
    about_us_intro:
      "Welcome to <strong class='font-black'>EASY SPLIT</strong>, the simplest and fastest way to slice your images for social media.",
    about_mission_title: "Our Mission",
    about_mission_desc:
      "We started Easy Split with a simple goal: to help creators, photographers, and storytellers present their work without limits. Whether it's a seamless carousel on Instagram or a photo slide on TikTok, we believe your panoramic shots deserve to be seen in full glory, not cropped into a tiny square.",
    about_why_title: "Why We Built This",
    about_why_desc:
      "Existing tools were either too expensive, ridden with ads, or required uploading your private photos to a slow server. We wanted to build something:",
    about_why_fast_title: "Fast:",
    about_why_fast_desc:
      "Zero upload time. Everything happens in your browser.",
    about_why_private_title: "Private:",
    about_why_private_desc: "Your photos never leave your device.",
    about_why_free_title: "Free:",
    about_why_free_desc: "Professional tools should be accessible to everyone.",
    about_meet_creator_title: "Meet the Creator",
    about_creator_role: "Fullstack Developer & Creator",
    about_creator_bio:
      "Passionate about building 'neo-brutalist' web apps that are fun, fast, and functional.",
    about_say_hello: "Say Hello →",
    contact_title: "Contact Us",
    contact_subtitle: "We'd love to hear from you!",
    contact_email_title: "Email Us",
    contact_email_desc: "For any inquiries, feedback, or support requests.",
    contact_response_time: "We usually respond within 24 hours.",
    contact_social_title: "Follow Us",
    contact_form_name: "Name",
    contact_form_email: "Email",
    contact_form_message: "Message",
    contact_form_submit: "Send Message",
    cookie_banner_msg:
      "We use cookies to improve your experience. By using our site, you agree to our use of cookies.",
    cookie_accept_btn: "Accept",
    cookie_decline_btn: "Decline",
    // New Pro Tips Content
    tips_title: "Pro Tips: Go Viral",
    tips_1_title: "Tell a Story",
    tips_1_desc:
      "Don't just split random photos. Use the seamless slide to reveal a surprise or tell a progressive story from left to right.",
    tips_2_title: "High Res Only",
    tips_2_desc:
      "TikTok compresses images heavily. Always start with the highest resolution possible to ensure your split slides stay crisp.",
    tips_3_title: "The Hook",
    tips_3_desc:
      "Make your first slide (the left-most one) the most captivating to stop the scroll. Use the second slide to deliver the payoff.",
    not_found_title: "404 - Page Not Found",
    not_found_desc: "The page you are looking for does not exist.",
    not_found_home: "Return Home",
  },
  vi: {
    ...profileTranslations.vi,
    title: "Easy Split - Chia Ảnh",
    subtitle:
      "Chia nhỏ ảnh của bạn thành các tấm ảnh dọc hoặc lưới liền mạch. Tuyệt vời cho TikTok, Instagram và hơn thế nữa.",
    upload_title: "Đổi Ảnh Khác",
    upload_placeholder: "Nhấn hoặc Kéo thả Ảnh vào đây",
    upload_desc: "Hỗ trợ JPG, PNG, WEBP. Khuyên dùng tỉ lệ 16:9",
    ready_msg: "Đã sẵn sàng tải xuống",
    download_all: "Tải tất cả (ZIP)",
    download_part: "Lưu Ảnh",
    download_image: "Tải Ảnh",
    download_zip_mobile: "Tải file ZIP",
    part: "Phần",
    article_title: "Cách cắt ảnh để tạo slide carousel liền mạch",
    article_intro:
      "Đăng ảnh panorama lớn thường bị giảm chất lượng hoặc cắt xén không đúng ý. EASY SPLIT giải quyết vấn đề này bằng cách chia ảnh của bạn thành các phần được căn chỉnh hoàn hảo cho TikTok, Instagram Carousel.",
    article_why_title: "Tại sao nên chia nhỏ ảnh?",
    article_why_1:
      "Tăng tương tác: Người xem có xu hướng vuốt để xem trọn vẹn bức ảnh.",
    article_why_2:
      "Kể chuyện tốt hơn: Tạo trải nghiệm panorama thú vị trên mạng xã hội.",
    article_why_3:
      "Chất lượng cao: Xử lý ngay trên trình duyệt, đảm bảo ảnh sắc nét.",
    how_to_title: "Hướng dẫn sử dụng",
    how_to_1: "Tải lên bất kỳ ảnh nào (ảnh panorama là tốt nhất).",
    how_to_2: "Chọn số lượng phần muốn chia (từ 2 đến 10).",
    how_to_3: "Điều chỉnh vùng cắt nếu cần, sau đó bấm Split.",
    how_to_4: "Tải xuống các phần đã cắt và đăng lên nền tảng yêu thích.",
    nav_home: "Easy Split",
    nav_splitter: "Chia Ảnh",
    privacy: "Chính sách bảo mật",
    cookie_policy: "Chính sách Cookie",
    terms: "Điều khoản dịch vụ",
    footer_rights: "EASY SPLIT. Bảo lưu mọi quyền.",
    about: "Giới thiệu",
    tab_edit: "Chỉnh sửa",
    tab_split: "Cắt ảnh",
    transform_label: "Biến đổi",
    rotate_btn: "Xoay",
    flip_h_btn: "Lật Ngang",
    open_crop: "Mở công cụ cắt",
    cancel_crop: "Hủy cắt",
    actions_label: "Đang thực hiện",
    apply_crop: "Áp dụng cắt",
    overwrite_warning: "* Ghi đè ảnh hiện tại",
    segments_label: "Số phần",
    crop_ratio_label: "Tỉ lệ cắt",
    custom_ratio: "Tùy chỉnh",
    split_direction_label: "Hướng cắt",
    split_cols: "Cột (Dọc)",
    split_rows: "Hàng (Ngang)",
    width_label: "Rộng",
    height_label: "Cao",
    split_image_btn: "Cắt ảnh",
    processing: "Đang xử lý...",
    change_img: "Đổi ảnh",
    reset_all: "Làm lại",
    reset_image: "Khôi phục ảnh",
    edit_mode: "Chế độ sửa",
    interactive_preview: "Xem trước tương tác",
    results_label: "Kết quả",
    feature_client_side_title: "100% Client-Side",
    feature_client_side_desc:
      "Ảnh của bạn không bao giờ rời khỏi thiết bị. Mọi xử lý đều diễn ra ngay trên trình duyệt để đảm bảo quyền riêng tư tối đa.",
    feature_instant_title: "Cắt Ngay Lập Tức",
    feature_instant_desc:
      "Không cần chờ tải lên. Việc cắt ảnh diễn ra ngay tức thì nhờ công nghệ canvas tối ưu hóa trên trình duyệt.",
    feature_quality_title: "Không Giảm Chất Lượng",
    feature_quality_desc:
      "Chúng tôi ưu tiên các cài đặt xuất khẩu độ trung thực cao để đảm bảo carousel TikTok của bạn trông sắc nét và chuyên nghiệp.",
    feature_free_title: "Miễn phí 100%",
    feature_free_desc:
      "Không đăng ký, không hình mờ, không phí ẩn. Chỉ là một công cụ đơn giản cho người sáng tạo.",
    ratio_free: "Tự do",
    faq_title: "Câu Hỏi Thường Gặp",
    faq_1_q: "Làm thế nào để tạo carousel liền mạch cho TikTok?",
    faq_1_a:
      "Tải lên ảnh panorama của bạn, chọn '3 Phần' (hoặc hơn), và dùng công cụ của chúng tôi để cắt. Khi đăng lên TikTok, chọn 'Chế độ Ảnh' và tải ảnh lên theo thứ tự. Kết quả sẽ là một panorama vuốt liền mạch.",
    faq_2_q: "Tải ảnh lên đây có an toàn không?",
    faq_2_a:
      "Có! Thực tế, bạn không hề 'tải lên' đâu cả. Công cụ này chạy hoàn toàn trên trình duyệt của bạn. Ảnh của bạn không bao giờ được gửi đến máy chủ, đảm bảo 100% quyền riêng tư.",
    faq_3_q: "Kích thước tốt nhất cho slide TikTok là gì?",
    faq_3_a:
      "TikTok khuyến nghị tỷ lệ khung hình 9:16 (1080x1920 pixel). Công cụ của chúng tôi tự động đặt tỷ lệ này cho bạn khi sử dụng cài đặt chuẩn.",
    faq_4_q: "Tôi có thể cắt ảnh cho Instagram không?",
    faq_4_a:
      "Chắc chắn rồi! Mặc dù được thiết kế cho TikTok, ảnh cắt hoạt động hoàn hảo cho Instagram Carousels (Bài đăng vuốt). Chỉ cần chọn tùy chọn tỷ lệ 4:5 hoặc 1:1.",
    about_tool_title: "Về Công Cụ Này",
    about_tool_desc:
      "Easy Split là bộ tiện ích sáng tạo được thiết kế cho người sáng tạo nội dung hiện đại. Chúng tôi tin vào việc xây dựng các công cụ nhanh, miễn phí và tôn trọng quyền riêng tư người dùng.",
    privacy_commitment_title: "Cam Kết Bảo Mật",
    privacy_commitment_desc:
      "Công cụ Cắt Ảnh này hoạt động hoàn toàn ở phía máy khách (client-side). Chúng tôi không lưu trữ, xem hoặc truyền tải ảnh của bạn. Logic 'Tải xuống' chỉ đơn giản là lưu dữ liệu canvas đã xử lý trực tiếp từ bộ nhớ trình duyệt vào đĩa của bạn.",
    created_by: "Được Tạo Bởi",
    contact: "Liên Hệ",
    new_dynamic_split: "Mới: Cắt Động",
    privacy_title: "Chính sách bảo mật",
    last_updated: "Cập nhật lần cuối: 11 Tháng 1, 2026",
    privacy_intro:
      "Tại <strong class='font-black'>Easy Split</strong>, chúng tôi tin vào quyền riêng tư ngay từ thiết kế. Các công cụ của chúng tôi được xây dựng để chạy <strong class='font-black'>phía người dùng (client-side)</strong>, nghĩa là dữ liệu của bạn (ảnh, tệp) luôn ở trên thiết bị của bạn và không bao giờ được tải lên máy chủ của chúng tôi.",
    privacy_info_collect_title: "1. Thông tin chúng tôi thu thập",
    privacy_info_collect_desc:
      "Vì chúng tôi không yêu cầu tài khoản người dùng và xử lý tệp cục bộ, chúng tôi thu thập dữ liệu tối thiểu:",
    privacy_usage_data:
      "<strong>Dữ liệu sử dụng:</strong> Chúng tôi có thể sử dụng phân tích của bên thứ ba (như Google Analytics) để hiểu cách người dùng điều hướng trang web của chúng tôi. Dữ liệu này được ẩn danh và không bao gồm tệp cá nhân.",
    privacy_cookies:
      "<strong>Cookie:</strong> Chúng tôi sử dụng cookie thiết yếu để ghi nhớ các tùy chọn của bạn (như cài đặt ngôn ngữ).",
    privacy_process_files_title: "2. Cách chúng tôi xử lý tệp của bạn",
    privacy_process_files_desc:
      "Khi bạn sử dụng các công cụ như <strong>Cắt Ảnh (Image Splitter)</strong> của chúng tôi, mọi thao tác xử lý ảnh đều diễn ra bên trong trình duyệt web của bạn bằng công nghệ HTML5 Canvas. <strong>Chúng tôi không xem, lưu trữ hoặc truyền tải ảnh của bạn.</strong>",
    privacy_ads_title: "3. Quảng cáo (Google AdSense)",
    privacy_ads_desc:
      "Chúng tôi sử dụng các nhà cung cấp bên thứ ba, bao gồm Google, để phân phối quảng cáo dựa trên các lượt truy cập trước đó của người dùng vào trang web của chúng tôi hoặc các trang web khác.",
    privacy_ads_point1:
      "Việc Google sử dụng cookie quảng cáo cho phép Google và các đối tác phân phối quảng cáo đến người dùng của bạn dựa trên lượt truy cập của họ vào trang web của bạn và/hoặc các trang web khác trên Internet.",
    privacy_ads_point2:
      "Người dùng có thể chọn không tham gia quảng cáo được cá nhân hóa bằng cách truy cập <a href='https://www.google.com/settings/ads' target='_blank' rel='nofollow noreferrer'>Cài đặt quảng cáo Google</a>.",
    privacy_links_title: "4. Liên kết bên thứ ba",
    privacy_links_desc:
      "Trang web của chúng tôi có thể chứa các liên kết đến các trang web khác. Nếu bạn nhấp vào liên kết của bên thứ ba, bạn sẽ được chuyển hướng đến trang web đó. Lưu ý rằng các trang web bên ngoài này không do chúng tôi vận hành. Do đó, chúng tôi đặc biệt khuyên bạn nên xem qua Chính sách bảo mật của các trang web này.",
    privacy_contact_title: "5. Liên hệ với chúng tôi",
    privacy_contact_desc:
      "Nếu bạn có bất kỳ câu hỏi hoặc đề xuất nào về Chính sách bảo mật của chúng tôi, đừng ngần ngại liên hệ với chúng tôi.",
    owner_label: "Chủ sở hữu",
    terms_title: "Điều khoản dịch vụ",
    terms_last_updated: "Cập nhật lần cuối: 11 Tháng 1, 2026",
    terms_intro:
      "Vui lòng đọc kỹ các điều khoản dịch vụ này ('Điều khoản', 'Điều khoản dịch vụ') trước khi sử dụng trang web <strong class='font-black'>Easy Split</strong> do <strong class='font-black'>hba-dev</strong> điều hành ('chúng tôi').",
    terms_conditions_title: "1. Điều kiện sử dụng",
    terms_conditions_desc:
      "Bằng cách sử dụng trang web này, bạn xác nhận rằng bạn đã đọc và xem xét Thỏa thuận này và bạn đồng ý tuân thủ các điều khoản của nó. Nếu bạn không muốn bị ràng buộc bởi các điều khoản của Thỏa thuận này, bạn nên ngừng sử dụng trang web.",
    terms_ip_title: "2. Sở hữu trí tuệ",
    terms_ip_desc:
      "Bạn đồng ý rằng tất cả các tài liệu, sản phẩm và dịch vụ được cung cấp trên trang web này là tài sản của chủ sở hữu trang web, các chi nhánh, giám đốc, cán bộ, nhân viên, đại lý, nhà cung cấp hoặc bên cấp phép bao gồm tất cả bản quyền, bí mật thương mại, thương hiệu, bằng sáng chế và sở hữu trí tuệ khác.",
    terms_ugc_label: "Nội dung do người dùng tạo",
    terms_ugc_desc:
      "Bạn giữ toàn quyền sở hữu đối với bất kỳ hình ảnh hoặc nội dung nào bạn xử lý bằng các công cụ của chúng tôi. Vì chúng tôi không lưu trữ tệp của bạn, bạn hoàn toàn chịu trách nhiệm về nội dung của mình.",
    terms_acceptable_use_title: "3. Sử dụng chấp nhận được",
    terms_acceptable_use_desc:
      "Bạn đồng ý không sử dụng các công cụ cụ thể của chúng tôi cho bất kỳ mục đích bất hợp pháp nào hoặc bất kỳ mục đích nào bị cấm theo điều khoản này. Bạn đồng ý không sử dụng dịch vụ của chúng tôi để:",
    terms_use_1: "Quấy rối, lạm dụng hoặc đe dọa người khác.",
    terms_use_2: "Vi phạm quyền của người khác.",
    terms_use_3:
      "Thực hiện bất kỳ hành vi gian lận nào hoặc phân phối phần mềm độc hại hoặc vi rút.",
    terms_indemnification_title: "4. Bồi thường",
    terms_indemnification_desc:
      "Bạn đồng ý bồi thường cho chủ sở hữu trang web và các chi nhánh của nó và giữ cho chúng tôi vô hại trước các khiếu nại và yêu cầu pháp lý có thể phát sinh từ việc bạn sử dụng hoặc lạm dụng dịch vụ của chúng tôi.",
    terms_liability_title: "5. Giới hạn trách nhiệm",
    terms_liability_desc:
      "Chúng tôi không chịu trách nhiệm cho bất kỳ thiệt hại nào có thể xảy ra với bạn do việc bạn lạm dụng trang web của chúng tôi. Chúng tôi bảo lưu quyền chỉnh sửa, sửa đổi và thay đổi Thỏa thuận này bất cứ lúc nào.",
    terms_contact_title: "6. Liên hệ",
    terms_contact_desc:
      "Đối với bất kỳ câu hỏi nào liên quan đến các Điều khoản này, vui lòng liên hệ với chúng tôi tại:",
    about_us_title: "Về chúng tôi",
    about_us_tagline: "Trao quyền cho người sáng tạo từ năm 2026",
    about_us_intro:
      "Chào mừng bạn đến với <strong class='font-black'>EASY SPLIT</strong>, cách đơn giản nhất và nhanh nhất để cắt ảnh của bạn cho mạng xã hội.",
    about_mission_title: "Sứ mệnh của chúng tôi",
    about_mission_desc:
      "Chúng tôi bắt đầu Easy Split với một mục tiêu đơn giản: giúp những người sáng tạo, nhiếp ảnh gia và người kể chuyện trình bày tác phẩm của họ không giới hạn. Cho dù đó là băng chuyền liền mạch trên Instagram hay slide ảnh trên TikTok, chúng tôi tin rằng những bức ảnh toàn cảnh của bạn xứng đáng được chiêm ngưỡng trọn vẹn, không bị cắt thành hình vuông nhỏ bé.",
    about_why_title: "Tại sao chúng tôi xây dựng công cụ này",
    about_why_desc:
      "Các công cụ hiện có quá đắt, chứa đầy quảng cáo hoặc yêu cầu tải ảnh riêng tư của bạn lên máy chủ chậm chạp. Chúng tôi muốn xây dựng một thứ gì đó:",
    about_why_fast_title: "Nhanh chóng:",
    about_why_fast_desc:
      "Không tốn thời gian tải lên. Mọi thứ diễn ra trong trình duyệt của bạn.",
    about_why_private_title: "Riêng tư:",
    about_why_private_desc: "Ảnh của bạn không bao giờ rời khỏi thiết bị.",
    about_why_free_title: "Miễn phí:",
    about_why_free_desc:
      "Các công cụ chuyên nghiệp nên tiếp cận được với mọi người.",
    about_meet_creator_title: "Gặp gỡ người sáng tạo",
    about_creator_role: "Nhà phát triển Fullstack & Người sáng tạo",
    about_creator_bio:
      "Đam mê xây dựng các ứng dụng web 'neo-brutalist' thú vị, nhanh chóng và hoạt động tốt.",
    about_say_hello: "Nói xin chào →",
    contact_title: "Liên Hệ",
    contact_subtitle: "Chúng tôi rất muốn nghe từ bạn!",
    contact_email_title: "Gửi Email",
    contact_email_desc:
      "Cho bất kỳ thắc mắc, phản hồi hoặc yêu cầu hỗ trợ nào.",
    contact_response_time: "Chúng tôi thường phản hồi trong vòng 24 giờ.",
    contact_social_title: "Theo dõi chúng tôi",
    contact_form_name: "Tên",
    contact_form_email: "Email",
    contact_form_message: "Tin nhắn",
    contact_form_submit: "Gửi tin nhắn",
    cookie_banner_msg:
      "Chúng tôi sử dụng cookie để cải thiện trải nghiệm của bạn. Bằng cách sử dụng trang web của chúng tôi, bạn đồng ý với việc sử dụng cookie của chúng tôi.",
    cookie_accept_btn: "Chấp nhận",
    cookie_decline_btn: "Từ chối",
    tips_title: "Mẹo Pro: Để Viral",
    tips_1_title: "Kể Chuyện",
    tips_1_desc:
      "Đừng chỉ cắt ảnh ngẫu nhiên. Hãy dùng sự liền mạch để hé lộ bất ngờ hoặc kể một câu chuyện tiến triển từ trái sang phải.",
    tips_2_title: "Chất Lượng Cao",
    tips_2_desc:
      "TikTok nén ảnh rất mạnh. Luôn bắt đầu với ảnh gốc sắc nét nhất để khi cắt nhỏ ảnh vẫn giữ được chi tiết.",
    tips_3_title: "Điểm Nhấn",
    tips_3_desc:
      "Hãy làm cho tấm ảnh đầu tiên (ngoài cùng bên trái) thật hấp dẫn để người xem dừng lại. Dùng các tấm tiếp theo để dẫn dắt họ.",
    not_found_title: "404 - Không tìm thấy trang",
    not_found_desc: "Trang bạn đang tìm kiếm không tồn tại.",
    not_found_home: "Trở về trang chủ",
  },
  ko: {
    ...profileTranslations.ko,
    title: "Easy Split - 이미지 분할",
    subtitle:
      "사진을 매끄러운 그리드나 세로 슬라이드로 나누세요. TikTok, Instagram 등에 완벽합니다.",
    upload_title: "이미지 변경",
    upload_placeholder: "이미지를 클릭하거나 드래그하세요",
    upload_desc: "JPG, PNG, WEBP 지원. 16:9 비율 권장",
    ready_msg: "다운로드 준비 완료",
    download_all: "모두 다운로드 (ZIP)",
    download_part: "이미지 저장",
    download_image: "이미지 다운로드",
    download_zip_mobile: "ZIP 다운로드",
    part: "파트",
    article_title: "매끄러운 캐러셀 슬라이드를 위해 사진 자르는 법",
    article_intro:
      "거대한 파노라마나 넓은 이미지를 게시하면 품질이 저하되거나 어색하게 잘릴 수 있습니다. EASY SPLIT은 이미지를 완벽하게 정렬된 조각으로 잘라 TikTok 및 Instagram 캐러셀을 위한 솔루션을 제공합니다.",
    article_why_title: "왜 이미지를 분할해야 하나요?",
    article_why_1: "참여도 증가: 시청자는 전체 그림을 보기 위해 넘깁니다.",
    article_why_2:
      "더 나은 스토리텔링: 소셜 미디어에서 파노라마 경험을 만드세요.",
    article_why_3: "고품질: 클라이언트 측 처리로 선명한 결과물을 보장합니다.",
    how_to_title: "사용 가이드",
    how_to_1: "이미지를 업로드하세요 (파노라마가 가장 좋습니다).",
    how_to_2: "원하는 조각 수를 선택하세요 (2~10개).",
    how_to_3: "필요한 경우 자르기 영역을 조정한 다음 Split을 클릭하세요.",
    how_to_4: "조각을 다운로드하여 좋아하는 플랫폼에 업로드하세요.",
    nav_home: "Easy Split",
    nav_splitter: "이미지 분할",
    privacy: "개인정보 처리방침",
    cookie_policy: "쿠키 정책",
    terms: "이용 약관",
    footer_rights: "EASY SPLIT. All rights reserved.",
    about: "소개",
    tab_edit: "편집",
    tab_split: "자르기",
    transform_label: "변형",
    rotate_btn: "회전",
    flip_h_btn: "좌우 반전",
    open_crop: "자르기 도구 열기",
    cancel_crop: "자르기 취소",
    actions_label: "동작",
    apply_crop: "자르기 적용",
    overwrite_warning: "* 현재 이미지를 덮어씁니다",
    segments_label: "세그먼트",
    crop_ratio_label: "자르기 비율",
    custom_ratio: "사용자 정의",
    split_direction_label: "분할 방향",
    split_cols: "열 (수직)",
    split_rows: "행 (수평)",
    width_label: "너비",
    height_label: "높이",
    split_image_btn: "이미지 자르기",
    processing: "처리 중...",
    change_img: "이미지 변경",
    reset_all: "모두 재설정",
    reset_image: "이미지 초기화",
    edit_mode: "편집 모드",
    interactive_preview: "대화형 미리보기",
    results_label: "결과",
    feature_client_side_title: "100% 클라이언트 사이드",
    feature_client_side_desc:
      "사진은 기기를 떠나지 않습니다. 모든 처리는 최대의 개인 정보 보호를 위해 브라우저에서 바로 이루어집니다.",
    feature_instant_title: "즉시 자르기",
    feature_instant_desc:
      "업로드 대기 시간이 없습니다. 최적화된 브라우저 기반 캔버스 기술 덕분에 자르기가 즉시 이루어집니다.",
    feature_quality_title: "품질 손실 없음",
    feature_quality_desc:
      "TikTok 캐러셀이 선명하고 전문적으로 보이도록 고화질 내보내기 설정을 우선시합니다.",
    feature_free_title: "완전 무료",
    feature_free_desc:
      "구독 없음, 워터마크 없음, 숨겨진 수수료 없음. 창작자를 위한 간단한 도구입니다.",
    ratio_free: "자유 비율",
    faq_title: "자주 묻는 질문",
    faq_1_q: "TikTok을 위한 매끄러운 캐러셀은 어떻게 만드나요?",
    faq_1_a:
      "파노라마 이미지를 업로드하고 '3 세그먼트'(또는 그 이상)를 선택한 다음 도구를 사용하여 자릅니다. TikTok에 게시할 때 '사진 모드'를 선택하고 순서대로 이미지를 업로드하세요. 결과는 스와이프 가능한 매끄러운 파노라마가 됩니다.",
    faq_2_q: "여기에 사진을 업로드해도 안전한가요?",
    faq_2_a:
      "네! 사실 어디에도 '업로드'하지 않습니다. 이 도구는 전적으로 브라우저에서 실행됩니다. 이미지는 서버로 전송되지 않아 100% 개인 정보 보호를 보장합니다.",
    faq_3_q: "TikTok 슬라이드에 가장 좋은 크기는 무엇인가요?",
    faq_3_a:
      "TikTok은 9:16 비율(1080x1920 픽셀)을 권장합니다. 저희 도구는 표준 설정을 사용할 때 자동으로 이 비율을 설정합니다.",
    faq_4_q: "Instagram용으로도 이미지를 자를 수 있나요?",
    faq_4_a:
      "물론입니다! TikTok용으로 설계되었지만 잘라낸 이미지는 Instagram 캐러셀(스와이프 게시물)에서도 완벽하게 작동합니다. 4:5 또는 1:1 비율 옵션을 선택하기만 하면 됩니다.",
    about_tool_title: "이 도구에 대하여",
    about_tool_desc:
      "Easy Split은 현대 콘텐츠 크리에이터를 위해 설계된 창의적인 유틸리티 모음입니다. 우리는 빠르고 무료이며 사용자 개인 정보를 존중하는 도구를 만드는 것을 믿습니다.",
    privacy_commitment_title: "개인 정보 보호 약속",
    privacy_commitment_desc:
      "이 이미지 분할기는 엄격하게 클라이언트 사이드에서 작동합니다. 귀하의 이미지를 저장, 조회 또는 전송하지 않습니다. '다운로드' 로직은 단순히 처리된 캔버스 데이터를 브라우저 메모리에서 디스크로 저장할 뿐입니다.",
    created_by: "제작자",
    contact: "연락처",
    new_dynamic_split: "신규: 다이내믹 스플릿",
    privacy_title: "개인정보 처리방침",
    last_updated: "최종 업데이트: 2026년 1월 11일",
    privacy_intro:
      "<strong class='font-black'>Easy Split</strong>은 설계 단계부터 개인 정보 보호를 최우선으로 생각합니다. 저희 도구는 <strong class='font-black'>클라이언트 사이드</strong>에서 실행되도록 구축되어, 귀하의 데이터(이미지, 파일)는 기기에만 머무르며 절대 서버로 업로드되지 않습니다.",
    privacy_info_collect_title: "1. 수집하는 정보",
    privacy_info_collect_desc:
      "사용자 계정이 필요하지 않고 파일을 로컬에서 처리하므로, 수집하는 데이터는 최소한입니다:",
    privacy_usage_data:
      "<strong>사용 데이터:</strong> 사용자가 사이트를 탐색하는 방식을 이해하기 위해 타사 분석(Google Analytics 등)을 사용할 수 있습니다. 이 데이터는 익명화되며 개인 파일은 포함되지 않습니다.",
    privacy_cookies:
      "<strong>쿠키:</strong> 언어 설정과 같은 기본 설정을 기억하기 위해 필수 쿠키를 사용합니다.",
    privacy_process_files_title: "2. 파일 처리 방식",
    privacy_process_files_desc:
      "<strong>이미지 분할기</strong>와 같은 도구를 사용할 때, 모든 이미지 조작은 HTML5 Canvas 기술을 사용하여 웹 브라우저 내부에서 이루어집니다. <strong>저희는 귀하의 이미지를 보거나 저장하거나 전송하지 않습니다.</strong>",
    privacy_ads_title: "3. 광고 (Google AdSense)",
    privacy_ads_desc:
      "Google을 포함한 타사 공급업체를 사용하여 사용자의 이전 웹사이트 방문 기록을 기반으로 광고를 게재합니다.",
    privacy_ads_point1:
      "Google은 광고 쿠키를 사용하여 사용자가 귀하의 사이트나 인터넷의 다른 사이트를 방문한 기록을 바탕으로 광고를 게재할 수 있습니다.",
    privacy_ads_point2:
      "사용자는 <a href='https://www.google.com/settings/ads' target='_blank' rel='nofollow noreferrer'>Google 광고 설정</a>을 방문하여 개인 맞춤 광고를 거부할 수 있습니다.",
    privacy_links_title: "4. 타사 링크",
    privacy_links_desc:
      "저희 웹사이트에는 다른 웹사이트로 연결되는 링크가 포함될 수 있습니다. 타사 링크를 클릭하면 해당 사이트로 이동합니다. 이러한 외부 사이트는 당사가 운영하지 않습니다. 따라서 해당 웹사이트의 개인정보 처리방침을 검토하는 것을 강력히 권장합니다.",
    privacy_contact_title: "5. 문의하기",
    privacy_contact_desc:
      "개인정보 처리방침에 대해 질문이나 제안 사항이 있으시면 주저하지 말고 문의해 주세요.",
    owner_label: "소유자",
    terms_title: "이용 약관",
    terms_last_updated: "최종 업데이트: 2026년 1월 11일",
    terms_intro:
      "<strong class='font-black'>hba-dev</strong>('우리' 또는 '저희')가 운영하는 <strong class='font-black'>Easy Split</strong> 웹사이트를 사용하기 전에 본 이용 약관('약관', '이용 약관')을 주의 깊게 읽어주시기 바랍니다.",
    terms_conditions_title: "1. 사용 조건",
    terms_conditions_desc:
      "본 웹사이트를 사용함으로써, 귀하는 본 계약을 읽고 검토했으며 그 조건에 따를 것에 동의함을 증명합니다. 본 계약의 조건에 구속받기를 원하지 않는 경우, 웹사이트 사용을 중단하는 것이 좋습니다.",
    terms_ip_title: "2. 지적 재산권",
    terms_ip_desc:
      "귀하는 본 웹사이트에서 제공되는 모든 자료, 제품 및 서비스가 웹사이트 소유자, 제휴사, 이사, 임원, 직원, 대리인, 공급업체 또는 라이선스 제공자의 재산이며 모든 저작권, 영업 비밀, 상표, 특허 및 기타 지적 재산권을 포함한다는 데 동의합니다.",
    terms_ugc_label: "사용자 생성 콘텐츠",
    terms_ugc_desc:
      "귀하는 당사 도구를 사용하여 처리하는 모든 이미지 또는 콘텐츠에 대한 전체 소유권을 보유합니다. 당사 도구를 사용하여 처리하는 모든 이미지 또는 콘텐츠에 대한 전체 소유권을 보유합니다. 당사는 귀하의 파일을 저장하지 않으므로 귀하의 콘텐츠에 대한 전적인 책임은 귀하에게 있습니다.",
    terms_acceptable_use_title: "3. 허용되는 사용",
    terms_acceptable_use_desc:
      "귀하는 불법적인 목적이나 본 조항에 따라 금지된 목적을 위해 당사의 특정 도구를 사용하지 않을 것에 동의합니다. 귀하는 다음을 위해 당사 서비스를 사용하지 않을 것에 동의합니다:",
    terms_use_1: "타인을 괴롭히거나, 학대하거나, 위협하는 행위.",
    terms_use_2: "타인의 권리를 침해하는 행위.",
    terms_use_3: "사기를 저지르거나 악성 코드 또는 바이러스를 배포하는 행위.",
    terms_indemnification_title: "4.면책",
    terms_indemnification_desc:
      "귀하는 웹사이트 소유자와 그 제휴사를 면책하고 당사 서비스의 사용 또는 오용으로 인해 발생할 수 있는 법적 청구 및 요구로부터 당사를 보호하는 데 동의합니다.",
    terms_liability_title: "5. 책임의 제한",
    terms_liability_desc:
      "당사는 귀하의 웹사이트 오용으로 인해 발생할 수 있는 어떠한 손해에 대해서도 책임을 지지 않습니다. 당사는 언제든지 본 계약을 편집, 수정 및 변경할 권리를 보유합니다.",
    terms_contact_title: "6. 연락처",
    terms_contact_desc:
      "본 약관에 관한 질문이 있으시면 다음으로 문의해 주십시오:",
    about_us_title: "회사 소개",
    about_us_tagline: "2026년부터 크리에이터 지원",
    about_us_intro:
      "<strong class='font-black'>EASY SPLIT</strong>에 오신 것을 환영합니다. 소셜 미디어를 위해 이미지를 자르는 가장 간단하고 빠른 방법입니다.",
    about_mission_title: "우리의 미션",
    about_mission_desc:
      "저희는 크리에이터, 사진작가, 스토리텔러가 제한 없이 작품을 선보일 수 있도록 돕는다는 간단한 목표로 Easy Split을 시작했습니다. Instagram의 매끄러운 캐러셀이든 TikTok의 사진 슬라이드이든, 파노라마 사진은 작은 정사각형으로 잘리는 것이 아니라 온전한 영광 속에서 보여져야 한다고 믿습니다.",
    about_why_title: "우리가 이것을 만든 이유",
    about_why_desc:
      "기존 도구는 너무 비싸거나, 광고가 많거나, 개인 사진을 느린 서버에 업로드해야 했습니다. 저희는 다음과 같은 것을 만들고 싶었습니다:",
    about_why_fast_title: "빠름:",
    about_why_fast_desc:
      "업로드 시간 제로. 모든 것이 브라우저에서 이루어집니다.",
    about_why_private_title: "비공개:",
    about_why_private_desc: "사진은 기기를 벗어나지 않습니다.",
    about_why_free_title: "무료:",
    about_why_free_desc: "전문 도구는 누구나 사용할 수 있어야 합니다.",
    about_meet_creator_title: "제작자 소개",
    about_creator_role: "풀스택 개발자 & 크리에이터",
    about_creator_bio:
      "재미있고 빠르며 기능적인 '네오 브루탈리즘' 웹 앱을 만드는 데 열정적입니다.",
    about_say_hello: "인사하기 →",
    contact_title: "문의하기",
    contact_subtitle: "여러분의 의견을 듣고 싶습니다!",
    contact_email_title: "이메일 보내기",
    contact_email_desc: "문의사항, 피드백 또는 지원 요청.",
    contact_response_time: "보통 24시간 이내에 응답합니다.",
    contact_social_title: "팔로우하기",
    contact_form_name: "이름",
    contact_form_email: "이메일",
    contact_form_message: "메시지",
    contact_form_submit: "메시지 보내기",
    cookie_banner_msg:
      "We use cookies to improve your experience. By using our site, you agree to our use of cookies.",
    cookie_accept_btn: "수락",
    cookie_decline_btn: "거절",
    tips_title: "프로 팁: 바이럴 되기",
    tips_1_title: "이야기를 들려주세요",
    tips_1_desc:
      "단순히 무작위 사진을 나누지 마세요. 부드러운 슬라이드를 사용하여 놀라움을 드러내거나 왼쪽에서 오른쪽으로 진행되는 이야기를 만드세요.",
    tips_2_title: "고해상도만 사용",
    tips_2_desc:
      "TikTok은 이미지를 많이 압축합니다. 분할된 슬라이드가 선명하게 유지되도록 항상 가능한 가장 높은 해상도로 시작하세요.",
    tips_3_title: "후크 (The Hook)",
    tips_3_desc:
      "첫 번째 슬라이드(가장 왼쪽)를 가장 매력적으로 만들어 스크롤을 멈추게 하세요. 두 번째 슬라이드로 보상을 제공하세요.",
    not_found_title: "404 - 페이지를 찾을 수 없습니다",
    not_found_desc: "찾으시는 페이지가 존재하지 않습니다.",
    not_found_home: "홈으로 돌아가기",
  },
  jp: {
    ...profileTranslations.jp,
    title: "Easy Split - 画像分割",
    subtitle:
      "写真をシームレスなグリッドや縦型スライドに分割します。TikTokやInstagramなどに最適です。",
    upload_title: "画像を変更",
    upload_placeholder: "クリックまたは画像をドラッグ",
    upload_desc: "JPG, PNG, WEBP対応。16:9形式を推奨",
    ready_msg: "ダウンロード準備完了",
    download_all: "すべてダウンロード (ZIP)",
    download_part: "画像を保存",
    download_image: "画像をダウンロード",
    download_zip_mobile: "ZIPをダウンロード",
    part: "パート",
    article_title: "シームレスなカルーセルスライド用に写真を分割する方法",
    article_intro:
      "巨大なパノラマやワイドな画像を投稿すると、画質が低下したり不自然に切り取られたりすることがよくあります。EASY SPLITは、画像を完全に整列されたセグメントにスライスすることでこれを解決します。",
    article_why_title: "なぜ画像を分割するのですか？",
    article_why_1: "エンゲージメント向上：視聴者はスワイプして全体像を見ます。",
    article_why_2:
      "ストーリーテリング：ソーシャルメディアでパノラマ体験を作成します。",
    article_why_3:
      "高品質：クライアント側の処理により、鮮明な出力が保証されます。",
    how_to_title: "ユーザーガイド",
    how_to_1: "画像をアップロードします（パノラマが最適です）。",
    how_to_2: "必要なセグメント数を選択します（2〜10）。",
    how_to_3: "必要に応じて切り取り領域を調整し、Splitをクリックします。",
    how_to_4:
      "セグメントをダウンロードして、お気に入りのプラットフォームにアップロードします。",
    nav_home: "Easy Split",
    nav_splitter: "画像分割",
    privacy: "プライバシーポリシー",
    cookie_policy: "クッキーポリシー",
    terms: "利用規約",
    footer_rights: "EASY SPLIT. All rights reserved.",
    about: "概要",
    tab_edit: "編集",
    tab_split: "分割",
    transform_label: "変形",
    rotate_btn: "回転",
    flip_h_btn: "左右反転",
    open_crop: "切り取りツールを開く",
    cancel_crop: "切り取りをキャンセル",
    actions_label: "アクション",
    apply_crop: "切り取りを適用",
    overwrite_warning: "* 現在の画像を上書きします",
    segments_label: "セグメント",
    crop_ratio_label: "切り取り比率",
    custom_ratio: "カスタム",
    split_direction_label: "分割方向",
    split_cols: "列 (垂直)",
    split_rows: "行 (水平)",
    width_label: "幅",
    height_label: "高さ",
    split_image_btn: "画像を分割",
    processing: "処理中...",
    change_img: "画像を変更",
    reset_all: "すべてリセット",
    reset_image: "画像をリセット",
    edit_mode: "編集モード",
    interactive_preview: "インタラクティブプレビュー",
    results_label: "結果",
    feature_client_side_title: "100% クライアントサイド",
    feature_client_side_desc:
      "写真がデバイスから離れることはありません。すべての処理はブラウザ内で行われ、プライバシーが最大限に保護されます。",
    feature_instant_title: "瞬時に分割",
    feature_instant_desc:
      "アップロードの待ち時間はありません。最適化されたブラウザベースのキャンバス技術により、分割は瞬時に行われます。",
    feature_quality_title: "画質劣化なし",
    feature_quality_desc:
      "TikTokカルーセルが鮮明でプロフェッショナルに見えるよう、高忠実度のエクスポート設定を優先しています。",
    feature_free_title: "完全無料",
    feature_free_desc:
      "サブスクリプションなし、透かしなし、隠れた料金なし。クリエイターのためのシンプルなツールです。",
    ratio_free: "フリー",
    faq_title: "よくある質問",
    faq_1_q: "TikTok用のシームレスなカルーセルを作成するには？",
    faq_1_a:
      "パノラマ画像をアップロードし、「3セグメント」（またはそれ以上）を選択してツールで分割します。TikTokに投稿する際は、「フォトモード」を選択して画像を順番にアップロードしてください。スワイプ可能なシームレスなパノラマになります。",
    faq_2_q: "ここに写真をアップロードしても安全ですか？",
    faq_2_a:
      "はい！実際にはどこにも「アップロード」していません。このツールは完全にブラウザ内で動作します。画像がサーバーに送信されることはなく、100%のプライバシーが保証されます。",
    faq_3_q: "TikTokスライドに最適なサイズは？",
    faq_3_a:
      "TikTokは9:16の比率（1080x1920ピクセル）を推奨しています。当ツールでは標準設定を使用する場合、自動的にこの比率に設定します。",
    faq_4_q: "Instagram用にも画像を分割できますか？",
    faq_4_a:
      "もちろんです！TikTok用に設計されていますが、分割された画像はInstagramカルーセル（スワイプ投稿）でも完璧に機能します。4:5または1:1の比率オプションを選択するだけです。",
    about_tool_title: "このツールについて",
    about_tool_desc:
      "Easy Splitは、現代のコンテンツクリエイター向けに設計されたクリエイティブユーティリティスイートです。高速で無料、そしてユーザーのプライバシーを尊重するツールを構築することを信条としています.",
    privacy_commitment_title: "プライバシーへの取り組み",
    privacy_commitment_desc:
      "この画像分割ツールは厳密にクライアントサイドで動作します。画像を保存、閲覧、送信することはありません。「ダウンロード」ロジックは、処理されたキャンバスデータをブラウザのメモリからディスクに保存するだけです。",
    created_by: "作成者",
    contact: "連絡先",
    new_dynamic_split: "新機能：ダイナミックスプリット",
    privacy_title: "プライバシーポリシー",
    last_updated: "最終更新日：2026年1月11日",
    privacy_intro:
      "<strong class='font-black'>Easy Split</strong>では、設計段階からプライバシーを重視しています。当社のツールは<strong class='font-black'>クライアントサイド</strong>で実行されるように構築されており、データ（画像、ファイル）はデバイス上に留まり、サーバーにアップロードされることはありません。",
    privacy_info_collect_title: "1. 収集する情報",
    privacy_info_collect_desc:
      "ユーザーアカウントを必要とせず、ファイルをローカルで処理するため、収集するデータは最小限です。",
    privacy_usage_data:
      "<strong>利用データ：</strong>ユーザーがサイトをどのように利用しているかを理解するために、サードパーティの分析（Google Analyticsなど）を使用する場合があります。このデータは匿名化されており、個人のファイルは含まれていません。",
    privacy_cookies:
      "<strong>Cookie：</strong>設定（言語設定など）を記憶するために必須のCookieを使用しています。",
    privacy_process_files_title: "2. ファイルの処理方法",
    privacy_process_files_desc:
      "<strong>画像分割ツール</strong>などを利用する場合、すべての画像操作はHTML5 Canvas技術を使用してWebブラウザ内で行われます。<strong>当社が画像を見たり、保存したり、送信したりすることはありません。</strong>",
    privacy_ads_title: "3. 広告 (Google AdSense)",
    privacy_ads_desc:
      "Googleを含む第三者配信事業者は、ユーザーの過去のウェブサイトへのアクセス情報に基づいて広告を配信します。",
    privacy_ads_point1:
      "Googleが広告Cookieを使用することにより、ユーザーがお客様のサイトや他のサイトにアクセスした情報に基づいて、Googleやそのパートナーが適切な広告をユーザーに表示できます。",
    privacy_ads_point2:
      "ユーザーは<a href='https://www.google.com/settings/ads' target='_blank' rel='nofollow noreferrer'>Google広告設定</a>で、パーソナライズ広告を無効にできます。",
    privacy_links_title: "4. サードパーティへのリンク",
    privacy_links_desc:
      "当サイトには、他のウェブサイトへのリンクが含まれている場合があります。サードパーティのリンクをクリックすると、そのサイトに移動します。これらの外部サイトは当社が運営しているものではありません。したがって、これらのウェブサイトのプライバシーポリシーを確認することを強くお勧めします。",
    privacy_contact_title: "5. お問い合わせ",
    privacy_contact_desc:
      "当社のプライバシーポリシーについてご質問やご提案がございましたら、お気軽にお問い合わせください。",
    owner_label: "所有者",
    terms_title: "利用規約",
    terms_last_updated: "最終更新日：2026年1月11日",
    terms_intro:
      "<strong class='font-black'>hba-dev</strong>（「私たち」、「我々」、または「当方」）が運営する<strong class='font-black'>Easy Split</strong>ウェブサイトを使用する前に、これらの利用規約（「規約」、「利用規約」）をよくお読みください。",
    terms_conditions_title: "1. 利用条件",
    terms_conditions_desc:
      "本ウェブサイトを利用することにより、利用者は本契約を読み、検討し、その条件に従うことに同意したことを証明するものとします。本契約の条件に拘束されることを望まない場合は、それに応じてウェブサイトの使用を中止することをお勧めします。",
    terms_ip_title: "2. 知的財産権",
    terms_ip_desc:
      "利用者は、本ウェブサイトで提供されるすべての資料、製品およびサービスが、すべての著作権、企業秘密、商標、特許、およびその他の知的財産権を含め、ウェブサイト所有者、その関連会社、取締役、役員、従業員、代理人、サプライヤー、またはライセンサーの財産であることに同意するものとします。",
    terms_ugc_label: "ユーザー生成コンテンツ",
    terms_ugc_desc:
      "利用者は、当社のツールを使用して処理する画像またはコンテンツの完全な所有権を保持します。当社は利用者のファイルを保存しないため、利用者自身のコンテンツについて単独で責任を負います。",
    terms_acceptable_use_title: "3. 許容される利用",
    terms_acceptable_use_desc:
      "利用者は、違法な目的または本条項に基づいて禁止されている目的のために特定のツールを使用しないことに同意するものとします。利用者は、以下のために当社のサービスを使用しないことに同意するものとします：",
    terms_use_1: "他人への嫌がらせ、虐待、または脅迫。",
    terms_use_2: "他人の権利の侵害。",
    terms_use_3: "詐欺の実行、またはマルウェアやウイルスの配布。",
    terms_indemnification_title: "4. 免責",
    terms_indemnification_desc:
      "利用者は、ウェブサイト所有者およびその関連会社を補償し、当社のサービスの利用または誤用から生じる可能性のある法的請求および要求から当社を免責することに同意するものとします。",
    terms_liability_title: "5. 責任の制限",
    terms_liability_desc:
      "当社は、利用者が当社のウェブサイトを誤用した結果として利用者に生じる可能性のあるいかなる損害についても責任を負いません。当社は、いつでも本契約を編集、修正、および変更する権利を留保します。",
    terms_contact_title: "6. 連絡先",
    terms_contact_desc:
      "本規約に関するご質問は、以下までお問い合わせください：",
    about_us_title: "私たちについて",
    about_us_tagline: "2026年からクリエイターを支援",
    about_us_intro:
      "<strong class='font-black'>EASY SPLIT</strong>へようこそ。ソーシャルメディア用に画像を分割する最もシンプルで最速の方法です。",
    about_mission_title: "私たちの使命",
    about_mission_desc:
      "私たちは、クリエイター、写真家、ストーリーテラーが制限なく作品を発表できるようにするというシンプルな目標を掲げてEasy Splitを立ち上げました。Instagramのシームレスなカルーセルであれ、TikTokの写真スライドであれ、パノラマ写真は小さな正方形に切り取られるのではなく、完全に表示されるべきだと考えています。",
    about_why_title: "これを作った理由",
    about_why_desc:
      "既存のツールは高価すぎるか、広告だらけか、プライベートな写真を低速なサーバーにアップロードする必要がありました。私たちは次のようなものを作りたかったのです：",
    about_why_fast_title: "高速：",
    about_why_fast_desc:
      "アップロード時間ゼロ。すべてがブラウザ内で行われます。",
    about_why_private_title: "プライベート：",
    about_why_private_desc: "写真がデバイスから離れることはありません。",
    about_why_free_title: "無料：",
    about_why_free_desc:
      "プロフェッショナルなツールは誰もが利用できるべきです。",
    about_meet_creator_title: "作成者に会う",
    about_creator_role: "フルスタック開発者＆クリエイター",
    about_creator_bio:
      "楽しく、速く、機能的な「ネオ・ブルータリズム」ウェブアプリの構築に情熱を注いでいます。",
    about_say_hello: "挨拶する →",
    contact_title: "お問い合わせ",
    contact_subtitle: "ご意見をお聞かせください！",
    contact_email_title: "メールを送る",
    contact_email_desc:
      "お問い合わせ、フィードバック、またはサポートについて。",
    contact_response_time: "通常24時間以内に返信します。",
    contact_social_title: "フォローする",
    contact_form_name: "名前",
    contact_form_email: "メール",
    contact_form_message: "メッセージ",
    contact_form_submit: "メッセージを送信",
    cookie_banner_msg:
      "We use cookies to improve your experience. By using our site, you agree to our use of cookies.",
    cookie_accept_btn: "同意する",
    cookie_decline_btn: "拒否する",
    tips_title: "プロのヒント：バズるために",
    tips_1_title: "ストーリーを語る",
    tips_1_desc:
      "単にランダムな写真を分割しないでください。シームレスなスライドを使って驚きを明らかにしたり、左から右へと進行するストーリーを作りましょう。",
    tips_2_title: "高解像度のみ",
    tips_2_desc:
      "TikTokは画像を大幅に圧縮します。分割されたスライドが鮮明に保たれるよう、常に可能な限り高い解像度で始めてください。",
    tips_3_title: "フック (The Hook)",
    tips_3_desc:
      "最初のスライド（一番左）を最も魅力的にして、スクロールを止めさせましょう。2枚目のスライドで答え合わせをしましょう。",
    not_found_title: "404 - ページが見つかりません",
    not_found_desc: "お探しのページは存在しません。",
    not_found_home: "ホームに戻る",
  },
  th: {
    ...profileTranslations.th,
    title: "Easy Split - ตัดภาพ",
    subtitle:
      "ตัดภาพของคุณเป็นตารางหรือสไลด์แนวตั้งที่ไร้รอยต่อ เหมาะสำหรับ TikTok, Instagram และอื่นๆ",
    upload_title: "เปลี่ยนรูปภาพ",
    upload_placeholder: "คลิกหรือลากรูปภาพมาที่นี่",
    upload_desc: "รองรับ JPG, PNG, WEBP แนะนำขนาด 16:9",
    ready_msg: "พร้อมดาวน์โหลด",
    download_all: "ดาวน์โหลดทั้งหมด (ZIP)",
    download_part: "บันทึกภาพ",
    download_zip_mobile: "ดาวน์โหลด ZIP",
    download_image: "ดาวน์โหลดรูปภาพ",
    part: "ส่วน",
    article_title: "วิธีตัดภาพสำหรับสไลด์แบบต่อเนื่อง",
    article_intro:
      "การโพสต์ภาพพาโนรามาขนาดใหญ่มักทำให้คุณภาพลดลงหรือถูกตัดภาพอย่างไม่เหมาะสม EASY SPLIT ช่วยแก้ปัญหานี้โดยการตัดภาพของคุณเป็นส่วนๆ ที่จัดเรียงอย่างสมบูรณ์แบบ",
    article_why_title: "ทำไมต้องตัดภาพของคุณ?",
    article_why_1: "เพิ่มการมีส่วนร่วม: ผู้ชมจะปัดเพื่อดูภาพทั้งหมด",
    article_why_2:
      "เล่าเรื่องราวได้ดีขึ้น: สร้างประสบการณ์พาโนรามาบนโซเชียลมีเดีย",
    article_why_3: "คุณภาพสูง: การประมวลผลฝั่งไคลเอนต์รับประกันผลลัพธ์ที่คมชัด",
    how_to_title: "คู่มือการใช้งาน",
    how_to_1: "อัปโหลดภาพใดก็ได้ (ภาพพาโนรามาจะดีที่สุด)",
    how_to_2: "เลือกจำนวนส่วนที่คุณต้องการ (2 ถึง 10)",
    how_to_3: "ปรับพื้นที่ตัดถ้าจำเป็น แล้วคลิก Split",
    how_to_4: "ดาวน์โหลดส่วนของคุณและอัปโหลดไปยังแพลตฟอร์มที่คุณชื่นชอบ",
    nav_home: "Easy Split",
    nav_splitter: "ตัดภาพ",
    privacy: "นโยบายความเป็นส่วนตัว",
    cookie_policy: "นโยบายคุกกี้",
    terms: "เงื่อนไขการให้บริการ",
    footer_rights: "EASY SPLIT. สงวนลิขสิทธิ์",
    about: "เกี่ยวกับเรา",
    tab_edit: "แก้ไข",
    tab_split: "ตัดแบ่ง",
    transform_label: "แปลง",
    rotate_btn: "หมุน",
    flip_h_btn: "กลับแนวนอน",
    open_crop: "เปิดเครื่องมือตัด",
    cancel_crop: "ยกเลิกการตัด",
    actions_label: "การกระทำ",
    apply_crop: "ใช้การตัด",
    overwrite_warning: "* เขียนทับรูปภาพปัจจุบัน",
    segments_label: "ส่วน",
    crop_ratio_label: "อัตราส่วนการตัด",
    custom_ratio: "กำหนดเอง",
    split_direction_label: "ทิศทาง",
    split_cols: "คอลัมน์ (แนวตั้ง)",
    split_rows: "แถว (แนวนอน)",
    width_label: "ความกว้าง",
    height_label: "ความสูง",
    split_image_btn: "ตัดภาพ",
    processing: "กำลังประมวลผล...",
    change_img: "เปลี่ยนรูปภาพ",
    reset_all: "รีเซ็ตทั้งหมด",
    reset_image: "รีเซ็ตรูปภาพ",
    edit_mode: "โหมดแก้ไข",
    interactive_preview: "ตัวอย่างแบบโต้ตอบ",
    results_label: "ผลลัพธ์",
    feature_client_side_title: "ประมวลผลฝั่งไคลเอนต์ 100%",
    feature_client_side_desc:
      "รูปภาพของคุณจะไม่ออกจากอุปกรณ์ การประมวลผลทั้งหมดเกิดขึ้นในเบราว์เซอร์ของคุณเพื่อความเป็นส่วนตัวสูงสุด",
    feature_instant_title: "ตัดแบ่งทันที",
    feature_instant_desc:
      "ไม่ต้องรออัปโหลด การตัดแบ่งเกิดขึ้นทันทีด้วยเทคโนโลยี canvas บนเบราว์เซอร์ที่ได้รับการปรับปรุง",
    feature_quality_title: "คุณภาพไม่ลดลง",
    feature_quality_desc:
      "เราให้ความสำคัญกับการตั้งค่าการส่งออกที่มีความเที่ยงตรงสูงเพื่อให้แน่ใจว่า TikTok carousel ของคุณดูคมชัดและเป็นมืออาชีพ",
    feature_free_title: "ฟรี 100%",
    feature_free_desc:
      "ไม่มีการสมัครสมาชิก ไม่มีลายน้ำ ไม่มีค่าธรรมเนียมแอบแฝง เป็นเพียงเครื่องมือที่เรียบง่ายสำหรับผู้สร้าง",
    ratio_free: "อิสระ",
    faq_title: "คำถามที่พบบ่อย",
    faq_1_q: "ฉันจะสร้าง carousel แบบไร้รอยต่อสำหรับ TikTok ได้อย่างไร?",
    faq_1_a:
      "อัปโหลดภาพพาโนรามาของคุณ เลือก '3 ส่วน' (หรือมากกว่า) และใช้เครื่องมือของเราเพื่อตัดแบ่ง เมื่อโพสต์ลง TikTok ให้เลือก 'โหมดรูปภาพ' และอัปโหลดรูปภาพตามลำดับ ผลลัพธ์จะเป็นพาโนรามาที่ปัดได้อย่างราบรื่น",
    faq_2_q: "ปลอดภัยไหมที่จะอัปโหลดรูปภาพของฉันที่นี่?",
    faq_2_a:
      "ใช่! จริงๆ แล้วคุณไม่ได้ 'อัปโหลด' ไปที่ไหนเลย เครื่องมือนี้ทำงานทั้งหมดในเบราว์เซอร์ของคุณ รูปภาพของคุณจะไม่ถูกส่งไปยังเซิร์ฟเวอร์ รับประกันความเป็นส่วนตัว 100%",
    faq_3_q: "ขนาดที่ดีที่สุดสำหรับสไลด์ TikTok คือเท่าไร?",
    faq_3_a:
      "TikTok แนะนำอัตราส่วน 9:16 (1080x1920 พิกเซล) เครื่องมือของเราจะตั้งค่าอัตราส่วนนี้ให้คุณโดยอัตโนมัติเมื่อใช้การตั้งค่ามาตรฐาน",
    faq_4_q: "ฉันสามารถตัดภาพสำหรับ Instagram ได้ด้วยหรือไม่?",
    faq_4_a:
      "ได้แน่นอน! แม้ว่าจะออกแบบมาสำหรับ TikTok แต่ภาพที่ตัดก็ใช้งานได้ดีกับ Instagram Carousels (โพสต์แบบปัด) เพียงเลือกตัวเลือกอัตราส่วน 4:5 หรือ 1:1",
    about_tool_title: "เกี่ยวกับเครื่องมือนี้",
    about_tool_desc:
      "Easy Split เป็นชุดยูทิลิตี้สร้างสรรค์ที่ออกแบบมาเพื่อคอนเทนต์ครีเอเตอร์ยุคใหม่ เราเชื่อในการสร้างเครื่องมือที่รวดเร็ว ฟรี และเคารพความเป็นส่วนตัวของผู้ใช้",
    privacy_commitment_title: "ความมุ่งมั่นด้านความเป็นส่วนตัว",
    privacy_commitment_desc:
      "ตัวตัดภาพนี้ทำงานแบบ client-side อย่างเคร่งครัด เราไม่จัดเก็บ ดู หรือส่งรูปภาพของคุณ ตรรกะ 'ดาวน์โหลด' เพียงแค่บันทึกข้อมูล canvas ที่ประมวลผลแล้วจากหน่วยความจำเบราว์เซอร์ไปยังดิสก์ของคุณโดยตรง",
    created_by: "สร้างโดย",
    contact: "ติดต่อ",
    new_dynamic_split: "ใหม่: ตัดแบบไดนามิก",
    privacy_title: "นโยบายความเป็นส่วนตัว",
    last_updated: "อัปเดตล่าสุด: 11 มกราคม 2026",
    privacy_intro:
      "ที่ <strong class='font-black'>Easy Split</strong> เราเชื่อในความเป็นส่วนตัวตั้งแต่การออกแบบ เครื่องมือของเราสร้างขึ้นเพื่อทำงานแบบ <strong class='font-black'>side-client</strong> ซึ่งหมายความว่าข้อมูลของคุณ (รูปภาพ, ไฟล์) จะอยู่บนอุปกรณ์ของคุณและจะไม่อัปโหลดไปยังเซิร์ฟเวอร์ของเรา",
    privacy_info_collect_title: "1. ข้อมูลที่เราเก็บรวบรวม",
    privacy_info_collect_desc:
      "เนื่องจากเราไม่ต้องการบัญชีผู้ใช้และประมวลผลไฟล์ในเครื่อง เราจึงเก็บรวบรวมข้อมูลน้อยที่สุด:",
    privacy_usage_data:
      "<strong>ข้อมูลการใช้งาน:</strong> เราอาจใช้การวิเคราะห์ของบุคคลที่สาม (เช่น Google Analytics) เพื่อทำความเข้าใจว่าผู้ใช้ใช้งานเว็บไซต์ของเราอย่างไร ข้อมูลนี้จะไม่ระบุตัวตนและไม่รวมไฟล์ส่วนตัว",
    privacy_cookies:
      "<strong>คุ้กกี้:</strong> เราใช้คุกกี้ที่จำเป็นเพื่อจดจำการตั้งค่าของคุณ (เช่น การตั้งค่าภาษา)",
    privacy_process_files_title: "2. วิธีที่เราประมวลผลไฟล์ของคุณ",
    privacy_process_files_desc:
      "เมื่อคุณใช้เครื่องมือเช่น <strong>ตัวตัดแบ่งรูปภาพ</strong> การจัดการรูปภาพทั้งหมดจะเกิดขึ้นภายในเว็บเบราว์เซอร์ของคุณโดยใช้เทคโนโลยี HTML5 Canvas <strong>เราไม่เห็น จัดเก็บ หรือส่งรูปภาพของคุณ</strong>",
    privacy_ads_title: "3. การโฆษณา (Google AdSense)",
    privacy_ads_desc:
      "เราใช้ผู้ขายบุคคลที่สาม รวมถึง Google เพื่อแสดงโฆษณาตามการเยี่ยมชมเว็บไซต์ของเราหรือเว็บไซต์อื่น ๆ ก่อนหน้านี้ของผู้ใช้",
    privacy_ads_point1:
      "การใช้คุกกี้โฆษณาของ Google ช่วยให้ Google และพันธมิตรสามารถแสดงโฆษณาต่อผู้ใช้ของคุณตามการเยี่ยมชมเว็บไซต์ของคุณและ/หรือเว็บไซต์อื่น ๆ บนอินเทอร์เน็ต",
    privacy_ads_point2:
      "ผู้ใช้สามารถเลือกไม่รับโฆษณาที่ปรับให้เหมาะกับบุคคลโดยไปที่ <a href='https://www.google.com/settings/ads' target='_blank' rel='nofollow noreferrer'>การตั้งค่าโฆษณา Google</a>",
    privacy_links_title: "4. ลิงก์ของบุคคลที่สาม",
    privacy_links_desc:
      "เว็บไซต์ของเราอาจมีลิงก์ไปยังเว็บไซต์อื่น ๆ หากคุณคลิกที่ลิงก์ของบุคคลที่สาม คุณจะถูกนำไปยังไซต์นั้น โปรดทราบว่าไซต์ภายนอกเหล่านี้ไม่ได้ดำเนินการโดยเรา ดังนั้นเราขอแนะนำอย่างยิ่งให้คุณตรวจสอบนโยบายความเป็นส่วนตัวของเว็บไซต์เหล่านี้",
    privacy_contact_title: "5. ติดต่อเรา",
    privacy_contact_desc:
      "หากคุณมีคำถามหรือข้อเสนอแนะเกี่ยวกับนโยบายความเป็นส่วนตัวของเรา โปรดอย่าลังเลที่จะติดต่อเรา",
    owner_label: "เจ้าของ",
    terms_title: "เงื่อนไขการให้บริการ",
    terms_last_updated: "อัปเดตล่าสุด: 11 มกราคม 2026",
    terms_intro:
      "โปรดอ่านเงื่อนไขการให้บริการเหล่านี้ ('เงื่อนไข', 'เงื่อนไขการให้บริการ') อย่างละเอียดก่อนใช้เว็บไซต์ <strong class='font-black'>Easy Split</strong> ที่ดำเนินการโดย <strong class='font-black'>hba-dev</strong> ('เรา')",
    terms_conditions_title: "1. เงื่อนไขการใช้งาน",
    terms_conditions_desc:
      "การใช้เว็บไซต์นี้ คุณรับรองว่าคุณได้อ่านและทบทวนข้อตกลงนี้แล้วและตกลงที่จะปฏิบัติตามเงื่อนไข หากคุณไม่ต้องการผูกพันตามเงื่อนไขของข้อตกลงนี้ คุณควรหยุดใช้เว็บไซต์",
    terms_ip_title: "2. ทรัพย์สินทางปัญญา",
    terms_ip_desc:
      "คุณตกลงว่าวัสดุ ผลิตภัณฑ์ และบริการทั้งหมดที่ให้ไว้บนเว็บไซต์นี้เป็นทรัพย์สินของเจ้าของเว็บไซต์ บริษัทในเครือ กรรมการ เจ้าหน้าที่ พนักงาน ตัวแทน ซัพพลายเออร์ หรือผู้ออกใบอนุญาต รวมถึงลิขสิทธิ์ ความลับทางการค้า เครื่องหมายการค้า สิทธิบัตร และทรัพย์สินทางปัญญาอื่น ๆ ทั้งหมด",
    terms_ugc_label: "เนื้อหาที่ผู้ใช้สร้างขึ้น",
    terms_ugc_desc:
      "คุณยังคงเป็นเจ้าของภาพหรือเนื้อหาใด ๆ ที่คุณประมวลผลโดยใช้เครื่องมือของเรา เนื่องจากเราไม่จัดเก็บไฟล์ของคุณ คุณจึงต้องรับผิดชอบต่อเนื้อหาของคุณเองแต่เพียงผู้เดียว",
    terms_acceptable_use_title: "3. การใช้งานที่ยอมรับได้",
    terms_acceptable_use_desc:
      "คุณตกลงที่จะไม่ใช้เครื่องมือเฉพาะของเราเพื่อวัตถุประสงค์ที่ผิดกฎหมายหรือวัตถุประสงค์ใด ๆ ที่ห้ามไว้ภายใต้ข้อนี้ คุณตกลงที่จะไม่ใช้บริการของเราเพื่อ:",
    terms_use_1: "คุกคาม ล่วงละเมิด หรือข่มขู่ผู้อื่น",
    terms_use_2: "ละเมิดสิทธิ์ของผู้อื่น",
    terms_use_3: "กระทำการฉ้อโกงหรือเผยแพร่มัลแวร์หรือไวรัส",
    terms_indemnification_title: "4. การชดใช้ค่าเสียหาย",
    terms_indemnification_desc:
      "คุณตกลงที่จะชดใช้ค่าเสียหายให้กับเจ้าของเว็บไซต์และบริษัทในเครือ และปกป้องเราจากข้อเรียกร้องทางกฎหมายและความต้องการที่อาจเกิดขึ้นจากการใช้หรือการใช้บริการของเราในทางที่ผิด",
    terms_liability_title: "5. ข้อจำกัดความรับผิด",
    terms_liability_desc:
      "เราไม่รับผิดชอบต่อความเสียหายใด ๆ ที่อาจเกิดขึ้นกับคุณอันเป็นผลมาจากการใช้เว็บไซต์ของเราในทางที่ผิด เราขอสงวนสิทธิ์ในการแก้ไข ปรับปรุง และเปลี่ยนแปลงข้อตกลงนี้ได้ตลอดเวลา",
    terms_contact_title: "6. ติดต่อ",
    terms_contact_desc:
      "สำหรับคำถามใด ๆ เกี่ยวกับเงื่อนไขเหล่านี้ โปรดติดต่อเราที่:",
    about_us_title: "เกี่ยวกับเรา",
    about_us_tagline: "เสริมพลังให้ผู้สร้างตั้งแต่ปี 2026",
    about_us_intro:
      "ยินดีต้อนรับสู่ <strong class='font-black'>EASY SPLIT</strong> วิธีที่ง่ายที่สุดและเร็วที่สุดในการแบ่งภาพของคุณสำหรับโซเชียลมีเดีย",
    about_mission_title: "พันธกิจของเรา",
    about_mission_desc:
      "เราเริ่ม Easy Split ด้วยเป้าหมายง่ายๆ: เพื่อช่วยให้ผู้สร้าง ช่างภาพ และนักเล่าเรื่องนำเสนอผลงานของพวกเขาได้อย่างไร้ขีดจำกัด ไม่ว่าจะเป็นภาพต่อเนื่องบน Instagram หรือสไลด์ภาพบน TikTok เราเชื่อว่าภาพพาโนรามาของคุณสมควรได้รับการมองเห็นอย่างเต็มที่ ไม่ใช่ตัดเป็นสี่เหลี่ยมเล็กๆ",
    about_why_title: "ทำไมเราถึงสร้างสิ่งนี้",
    about_why_desc:
      "เครื่องมือที่มีอยู่มีราคาแพงเกินไป เต็มไปด้วยโฆษณา หรือต้องอัปโหลดภาพส่วนตัวของคุณไปยังเซิร์ฟเวอร์ที่ช้า เราต้องการสร้างบางสิ่งที่:",
    about_why_fast_title: "เร็ว:",
    about_why_fast_desc: "ไม่มีเวลาอัปโหลด ทุกอย่างเกิดขึ้นในเบราว์เซอร์ของคุณ",
    about_why_private_title: "ส่วนตัว:",
    about_why_private_desc: "รูปภาพของคุณจะไม่ออกจากอุปกรณ์ของคุณ",
    about_why_free_title: "ฟรี:",
    about_why_free_desc: "ทุกคนควรเข้าถึงเครื่องมือระดับมืออาชีพได้",
    about_meet_creator_title: "พบกับผู้สร้าง",
    about_creator_role: "นักพัฒนา Fullstack & ผู้สร้าง",
    about_creator_bio:
      "หลงใหลในการสร้างเว็บแอป 'neo-brutalist' ที่สนุก รวดเร็ว และใช้งานได้จริง",
    about_say_hello: "กล่าวสวัสดี →",
    contact_title: "ติดต่อเรา",
    contact_subtitle: "เราอยากได้ยินจากคุณ!",
    contact_email_title: "ส่งอีเมลหาเรา",
    contact_email_desc: "สำหรับคำถาม ข้อเสนอแนะ หรือคำขอรับการสนับสนุน",
    contact_response_time: "ปกติเราจะตอบกลับภายใน 24 ชั่วโมง",
    contact_social_title: "ติดตามเรา",
    contact_form_name: "ชื่อ",
    contact_form_email: "อีเมล",
    contact_form_message: "ข้อความ",
    contact_form_submit: "ส่งข้อความ",
    cookie_banner_msg:
      "We use cookies to improve your experience. By using our site, you agree to our use of cookies.",
    cookie_accept_btn: "ยอมรับ",
    cookie_decline_btn: "ปฏิเสธ",
    tips_title: "เคล็ดลับโปร: ให้เป็นไวรัล",
    tips_1_title: "เล่าเรื่องราว",
    tips_1_desc:
      "อย่าแค่ตัดภาพสุ่มๆ ใช้สไลด์ที่ต่อเนื่องเพื่อเปิดเผยความประหลาดใจหรือเล่าเรื่องราวจากซ้ายไปขวา",
    tips_2_title: "ความละเอียดสูงเท่านั้น",
    tips_2_desc:
      "TikTok บีบอัดภาพอย่างหนัก เริ่มต้นด้วยความละเอียดสูงสุดเสมอเพื่อให้สไลด์ของคุณคมชัด",
    tips_3_title: "จุดดึงดูด",
    tips_3_desc:
      "ทำให้สไลด์แรก (ซ้ายสุด) น่าสนใจที่สุดเพื่อหยุดการเลื่อนดู ใช้สไลด์ที่สองเพื่อส่งมอบสิ่งที่น่าสนใจ",
    not_found_title: "404 - ไม่พบหน้าที่ต้องการ",
    not_found_desc: "หน้าที่คุณกำลังค้นหาไม่มีอยู่",
    not_found_home: "กลับสู่หน้าหลัก",
  },
  id: {
    ...profileTranslations.id,
    title: "Easy Split - Pemecah Gambar",
    subtitle:
      "Pecah foto Anda menjadi slide vertikal atau grid yang mulus. Sempurna untuk TikTok, Instagram, dan lainnya.",
    upload_title: "Ganti Gambar",
    upload_placeholder: "Klik atau Tarik Gambar Di Sini",
    upload_desc: "Mendukung JPG, PNG, WEBP. Disarankan format 16:9",
    ready_msg: "Siap Mengunduh",
    download_all: "Unduh Semua (ZIP)",
    download_part: "Simpan Gambar",
    download_zip_mobile: "Unduh ZIP",
    download_image: "Unduh Gambar",
    part: "Bagian",
    article_title: "Cara memecah foto untuk slide carousel yang mulus",
    article_intro:
      "Memposting panorama raksasa seringkali mengakibatkan penurunan kualitas. EASY SPLIT memecahkan masalah ini dengan memotong gambar Anda menjadi segmen yang selaras sempurna.",
    article_why_title: "Mengapa memecah gambar Anda?",
    article_why_1:
      "Peningkatan Interaksi: Pemirsa menggeser untuk melihat gambar penuh.",
    article_why_2:
      "Bercerita Lebih Baik: Buat pengalaman panorama di media sosial.",
    article_why_3:
      "Kualitas Tinggi: Pemrosesan sisi klien memastikan hasil yang tajam.",
    how_to_title: "Panduan Pengguna",
    how_to_1: "Unggah gambar apa saja (panorama paling baik).",
    how_to_2: "Pilih berapa banyak segmen yang Anda inginkan (2 hingga 10).",
    how_to_3: "Sesuaikan area potong jika perlu, lalu klik Split.",
    how_to_4: "Unduh segmen Anda dan unggah ke platform favorit Anda.",
    nav_home: "Easy Split",
    nav_splitter: "Pemecah Gambar",
    privacy: "Kebijakan Privasi",
    cookie_policy: "Kebijakan Cookie",
    terms: "Ketentuan Layanan",
    footer_rights: "EASY SPLIT. Hak cipta dilindungi undang-undang.",
    about: "Tentang Kami",
    tab_edit: "Edit",
    tab_split: "Pisahkan",
    transform_label: "Transformasi",
    rotate_btn: "Putar",
    flip_h_btn: "Balik Horisontal",
    open_crop: "Buka Alat Potong",
    cancel_crop: "Batalkan Potong",
    actions_label: "Tindakan",
    apply_crop: "Terapkan Potong",
    overwrite_warning: "* Menimpa gambar saat ini",
    segments_label: "Segmen",
    crop_ratio_label: "Rasio Potong",
    custom_ratio: "Kustom",
    split_direction_label: "Arah Pemisahan",
    split_cols: "Kolom (Vertikal)",
    split_rows: "Baris (Horizontal)",
    width_label: "Lebar",
    height_label: "Tinggi",
    split_image_btn: "Pisahkan Gambar",
    processing: "Memproses...",
    change_img: "Ganti Gambar",
    reset_all: "Atur Ulang Semua",
    reset_image: "Atur Ulang Gambar",
    edit_mode: "Mode Edit",
    interactive_preview: "Pratinjau Interaktif",
    results_label: "Hasil",
    feature_client_side_title: "100% Sisi Klien",
    feature_client_side_desc:
      "Foto Anda tidak pernah meninggalkan perangkat Anda. Semua pemrosesan terjadi langsung di browser Anda untuk privasi maksimal.",
    feature_instant_title: "Pemisahan Instan",
    feature_instant_desc:
      "Tidak ada waktu tunggu unggahan. Pemisahan terjadi seketika berkat teknologi kanvas berbasis browser yang dioptimalkan.",
    feature_quality_title: "Tanpa Penurunan Kualitas",
    feature_quality_desc:
      "Kami memprioritaskan pengaturan ekspor fidelitas tinggi untuk memastikan carousel TikTok Anda terlihat tajam dan profesional.",
    feature_free_title: "100% Gratis",
    feature_free_desc:
      "Tidak ada langganan, tidak ada tanda air, tidak ada biaya tersembunyi. Hanya alat sederhana untuk pembuat konten.",
    ratio_free: "Bebas",
    faq_title: "Pertanyaan Umum",
    faq_1_q: "Bagaimana cara membuat carousel mulus untuk TikTok?",
    faq_1_a:
      "Unggah gambar panorama Anda, pilih '3 Segmen' (atau lebih), dan gunakan alat kami untuk memisahkannya. Saat memposting ke TikTok, pilih 'Mode Foto' dan unggah gambar secara berurutan. Hasilnya akan menjadi panorama yang dapat digeser dengan mulus.",
    faq_2_q: "Apakah aman mengunggah foto saya di sini?",
    faq_2_a:
      "Ya! Sebenarnya, Anda tidak 'mengunggah' mereka ke mana pun. Alat ini berjalan sepenuhnya di browser Anda. Gambar Anda tidak pernah dikirim ke server, memastikan privasi 100%.",
    faq_3_q: "Berapa ukuran terbaik untuk slide TikTok?",
    faq_3_a:
      "TikTok merekomendasikan rasio aspek 9:16 (1080x1920 piksel). Alat kami secara otomatis mengatur rasio ini untuk Anda saat menggunakan pengaturan standar.",
    faq_4_q: "Bisakah saya memotong gambar untuk Instagram juga?",
    faq_4_a:
      "Tentu saja! Meskipun dirancang untuk TikTok, gambar yang dipotong bekerja sempurna untuk Instagram Carousel (Postingan Geser). Cukup pilih opsi rasio 4:5 atau 1:1.",
    about_tool_title: "Tentang Alat Ini",
    about_tool_desc:
      "Easy Split adalah seperangkat utilitas kreatif yang dirancang untuk kreator konten modern. Kami percaya dalam membangun alat yang cepat, gratis, dan menghormati privasi pengguna.",
    privacy_commitment_title: "Komitmen Privasi",
    privacy_commitment_desc:
      "Pemisah Gambar ini beroperasi secara ketat di sisi klien. Kami tidak menyimpan, melihat, atau mengirimkan gambar Anda. Logika 'Unduh' hanya menyimpan data kanvas yang diproses langsung dari memori browser ke disk Anda.",
    created_by: "Dibuat Oleh",
    contact: "Kontak",
    new_dynamic_split: "Baru: Pemisahan Dinamis",
    privacy_title: "Kebijakan Privasi",
    last_updated: "Terakhir Diperbarui: 11 Januari 2026",
    privacy_intro:
      "Di <strong class='font-black'>Easy Split</strong>, kami percaya pada privasi sejak desain awal. Alat kami dibangun untuk berjalan di <strong class='font-black'>sisi klien</strong>, yang berarti data Anda (gambar, file) tetap berada di perangkat Anda dan tidak pernah diunggah ke server kami.",
    privacy_info_collect_title: "1. Informasi yang Kami Kumpulkan",
    privacy_info_collect_desc:
      "Karena kami tidak memerlukan akun pengguna dan memproses file secara lokal, kami mengumpulkan data minimal:",
    privacy_usage_data:
      "<strong>Data Penggunaan:</strong> Kami dapat menggunakan analitik pihak ketiga (seperti Google Analytics) untuk memahami bagaimana pengguna menavigasi situs kami. Data ini dianonimkan dan tidak termasuk file pribadi.",
    privacy_cookies:
      "<strong>Cookie:</strong> Kami menggunakan cookie penting untuk mengingat preferensi Anda (seperti pengaturan bahasa).",
    privacy_process_files_title: "2. Bagaimana Kami Memproses File Anda",
    privacy_process_files_desc:
      "Saat Anda menggunakan alat seperti <strong>Pemisah Gambar</strong> kami, semua manipulasi gambar terjadi di dalam browser web Anda menggunakan teknologi HTML5 Canvas. <strong>Kami tidak melihat, menyimpan, atau mengirimkan gambar Anda.</strong>",
    privacy_ads_title: "3. Periklanan (Google AdSense)",
    privacy_ads_desc:
      "Kami menggunakan vendor pihak ketiga, termasuk Google, untuk menayangkan iklan berdasarkan kunjungan pengguna sebelumnya ke situs web kami atau situs web lain.",
    privacy_ads_point1:
      "Penggunaan cookie periklanan oleh Google memungkinkannya dan mitranya untuk menayangkan iklan kepada pengguna Anda berdasarkan kunjungan mereka ke situs Anda dan/atau situs lain di Internet.",
    privacy_ads_point2:
      "Pengguna dapat memilih keluar dari iklan yang dipersonalisasi dengan mengunjungi <a href='https://www.google.com/settings/ads' target='_blank' rel='nofollow noreferrer'>Setelan Iklan Google</a>.",
    privacy_links_title: "4. Tautan Pihak Ketiga",
    privacy_links_desc:
      "Situs web kami mungkin berisi tautan ke situs web lain. Jika Anda mengklik tautan pihak ketiga, Anda akan diarahkan ke situs tersebut. Perhatikan bahwa situs eksternal ini tidak dioperasikan oleh kami. Oleh karena itu, kami sangat menyarankan Anda untuk meninjau Kebijakan Privasi situs web ini.",
    privacy_contact_title: "5. Hubungi Kami",
    privacy_contact_desc:
      "Jika Anda memiliki pertanyaan atau saran tentang Kebijakan Privasi kami, jangan ragu untuk menghubungi kami.",
    owner_label: "Pemilik",
    terms_title: "Ketentuan Layanan",
    terms_last_updated: "Terakhir Diperbarui: 11 Januari 2026",
    terms_intro:
      "Harap baca ketentuan layanan ini ('Ketentuan', 'Ketentuan Layanan') dengan cermat sebelum menggunakan situs web <strong class='font-black'>Easy Split</strong> yang dioperasikan oleh <strong class='font-black'>hba-dev</strong> ('kami').",
    terms_conditions_title: "1. Syarat Penggunaan",
    terms_conditions_desc:
      "Dengan menggunakan situs web ini, Anda menyatakan bahwa Anda telah membaca dan meninjau Perjanjian ini dan bahwa Anda setuju untuk mematuhi ketentuannya. Jika Anda tidak ingin terikat oleh ketentuan Perjanjian ini, Anda disarankan untuk berhenti menggunakan situs web ini.",
    terms_ip_title: "2. Kekayaan Intelektual",
    terms_ip_desc:
      "Anda setuju bahwa semua materi, produk, dan layanan yang disediakan di situs web ini adalah milik pemilik situs web, afiliasinya, direktur, pejabat, karyawan, agen, pemasok, atau pemberi lisensinya termasuk semua hak cipta, rahasia dagang, merek dagang, paten, dan kekayaan intelektual lainnya.",
    terms_ugc_label: "Konten Buatan Pengguna",
    terms_ugc_desc:
      "Anda memegang kepemilikan penuh atas gambar atau konten apa pun yang Anda proses menggunakan alat kami. Karena kami tidak menyimpan file Anda, Anda bertanggung jawab penuh atas konten Anda sendiri.",
    terms_acceptable_use_title: "3. Penggunaan yang Dapat Diterima",
    terms_acceptable_use_desc:
      "Anda setuju untuk tidak menggunakan alat khusus kami untuk tujuan apa pun yang melanggar hukum atau tujuan apa pun yang dilarang berdasarkan klausul ini. Anda setuju untuk tidak menggunakan layanan kami untuk:",
    terms_use_1: "Melecehkan, menyalahgunakan, atau mengancam orang lain.",
    terms_use_2: "Melanggar hak orang lain.",
    terms_use_3: "Melakukan penipuan atau menyebarkan malware atau virus.",
    terms_indemnification_title: "4. Ganti Rugi",
    terms_indemnification_desc:
      "Anda setuju untuk mengganti kerugian pemilik situs web dan afiliasinya dan membebaskan kami dari klaim hukum dan tuntutan yang mungkin timbul dari penggunaan atau penyalahgunaan layanan kami oleh Anda.",
    terms_liability_title: "5. Batasan Tanggung Jawab",
    terms_liability_desc:
      "Kami tidak bertanggung jawab atas segala kerusakan yang mungkin terjadi pada Anda sebagai akibat dari penyalahgunaan situs web kami oleh Anda. Kami berhak untuk mengedit, memodifikasi, dan mengubah Perjanjian ini kapan saja.",
    terms_contact_title: "6. Kontak",
    terms_contact_desc:
      "Untuk pertanyaan apa pun mengenai Ketentuan ini, silakan hubungi kami di:",
    about_us_title: "Tentang Kami",
    about_us_tagline: "Memberdayakan Kreator Sejak 2026",
    about_us_intro:
      "Selamat datang di <strong class='font-black'>EASY SPLIT</strong>, cara termudah dan tercepat untuk memotong gambar Anda untuk media sosial.",
    about_mission_title: "Misi Kami",
    about_mission_desc:
      "Kami memulai Easy Split dengan tujuan sederhana: membantu kreator, fotografer, dan pendongeng menyajikan karya mereka tanpa batas. Baik itu carousel mulus di Instagram atau slide foto di TikTok, kami percaya bidikan panorama Anda layak dilihat dalam kemuliaan penuh, bukan dipotong menjadi kotak kecil.",
    about_why_title: "Mengapa Kami Membangun Ini",
    about_why_desc:
      "Alat yang ada terlalu mahal, penuh dengan iklan, atau mengharuskan pengunggahan foto pribadi Anda ke server yang lambat. Kami ingin membangun sesuatu yang:",
    about_why_fast_title: "Cepat:",
    about_why_fast_desc: "Nol waktu unggah. Semuanya terjadi di browser Anda.",
    about_why_private_title: "Pribadi:",
    about_why_private_desc:
      "Foto Anda tidak pernah meninggalkan perangkat Anda.",
    about_why_free_title: "Gratis:",
    about_why_free_desc:
      "Alat profesional harus dapat diakses oleh semua orang.",
    about_meet_creator_title: "Temui Pembuatnya",
    about_creator_role: "Pengembang Fullstack & Kreator",
    about_creator_bio:
      "Bersemangat membangun aplikasi web 'neo-brutalist' yang menyenangkan, cepat, dan fungsional.",
    about_say_hello: "Katakan Halo →",
    contact_title: "Hubungi Kami",
    contact_subtitle: "Kami ingin mendengar pendapat Anda!",
    contact_email_title: "Email Kami",
    contact_email_desc:
      "Untuk pertanyaan, umpan balik, atau permintaan dukungan.",
    contact_response_time: "Kami biasanya merespons dalam waktu 24 jam.",
    contact_social_title: "Ikuti Kami",
    contact_form_name: "Nama",
    contact_form_email: "Email",
    contact_form_message: "Pesan",
    contact_form_submit: "Kirim Pesan",
    cookie_banner_msg:
      "Kami menggunakan cookie untuk meningkatkan pengalaman Anda. Dengan menggunakan situs kami, Anda menyetujui penggunaan cookie kami.",
    cookie_accept_btn: "Terima",
    cookie_decline_btn: "Tolak",
    tips_title: "Tips Pro: Jadi Viral",
    tips_1_title: "Ceritakan Sebuah Kisah",
    tips_1_desc:
      "Jangan hanya memecah foto secara acak. Gunakan slide yang mulus untuk mengungkapkan kejutan atau menceritakan kisah progresif dari kiri ke kanan.",
    tips_2_title: "Hanya Resolusi Tinggi",
    tips_2_desc:
      "TikTok mengompres gambar dengan kuat. Selalu mulai dengan resolusi tertinggi untuk memastikan slide yang dipecah tetap tajam.",
    tips_3_title: "Daya Tarik",
    tips_3_desc:
      "Buat slide pertama Anda (paling kiri) paling menawan untuk menghentikan scroll. Gunakan slide kedua untuk memberikan imbalan.",
    not_found_title: "404 - Halaman Tidak Ditemukan",
    not_found_desc: "Halaman yang Anda cari tidak ada.",
    not_found_home: "Kembali ke Beranda",
  },
  es: {
    ...profileTranslations.es,
    title: "Easy Split - Cortador de Fotos",
    subtitle:
      "Divide tus fotos en diapositivas verticales o cuadrículas perfectas. Ideal para TikTok, Instagram y más.",
    upload_title: "Cambiar Imagen",
    upload_placeholder: "Haz clic o arrastra la imagen aquí",
    upload_desc: "Soporta JPG, PNG, WEBP. Formato recomendado 16:9",
    ready_msg: "Listo para descargar",
    download_all: "Descargar todo (ZIP)",
    download_part: "Guardar Imagen",
    download_zip_mobile: "Descargar ZIP",
    download_image: "Descargar Imagen",
    part: "Parte",
    article_title: "Cómo dividir fotos para carruseles continuos",
    article_intro:
      "Publicar panoramas gigantes a menudo resulta en pérdida de calidad. EASY SPLIT resuelve esto cortando tu imagen en segmentos perfectamente alineados.",
    article_why_title: "¿Por qué dividir tus imágenes?",
    article_why_1:
      "Mayor participación: Los espectadores deslizan para ver la imagen completa.",
    article_why_2:
      "Mejor narración: Crea experiencias panorámicas en redes sociales.",
    article_why_3:
      "Alta calidad: El procesamiento del lado del cliente garantiza una salida nítida.",
    how_to_title: "Guía de usuario",
    how_to_1: "Sube cualquier imagen (los panoramas funcionan mejor).",
    how_to_2: "Elige cuántos segmentos quieres (de 2 a 10).",
    how_to_3:
      "Ajusta el área de recorte si es necesario, luego haz clic en Split.",
    how_to_4: "Descarga tus segmentos y súbelos a tu plataforma favorita.",
    nav_home: "Easy Split",
    nav_splitter: "Cortar Foto",
    privacy: "Política de Privacidad",
    cookie_policy: "Política de Cookies",
    terms: "Términos de Servicio",
    footer_rights: "EASY SPLIT. Todos los derechos reservados.",
    about: "Acerca de",
    tab_edit: "Editar",
    tab_split: "Dividir",
    transform_label: "Transformar",
    rotate_btn: "Rotar",
    flip_h_btn: "Voltear H",
    open_crop: "Abrir herramienta de recorte",
    cancel_crop: "Cancelar recorte",
    actions_label: "Acciones",
    apply_crop: "Aplicar recorte",
    overwrite_warning: "* Sobrescribe la imagen actual",
    segments_label: "Segmentos",
    crop_ratio_label: "Relación de recorte",
    custom_ratio: "Personalizado",
    split_direction_label: "Dirección",
    split_cols: "Columnas (Vertical)",
    split_rows: "Filas (Horizontal)",
    width_label: "Ancho",
    height_label: "Alto",
    split_image_btn: "Dividir imagen",
    processing: "Procesando...",
    change_img: "Cambiar imagen",
    reset_all: "Reiniciar todo",
    reset_image: "Restablecer Imagen",
    edit_mode: "Modo de edición",
    interactive_preview: "Vista previa interactiva",
    results_label: "Resultados",
    feature_client_side_title: "100% Del lado del cliente",
    feature_client_side_desc:
      "Tus fotos nunca salen de tu dispositivo. Todo el procesamiento ocurre directamente en tu navegador para una máxima privacidad.",
    feature_instant_title: "División instantánea",
    feature_instant_desc:
      "Sin tiempos de espera de carga. La división ocurre al instante gracias a la tecnología de lienzo optimizada basada en el navegador.",
    feature_quality_title: "Sin pérdida de calidad",
    feature_quality_desc:
      "Priorizamos configuraciones de exportación de alta fidelidad para asegurar que tu carrusel de TikTok se vea nítido y profesional.",
    feature_free_title: "100% Gratis",
    feature_free_desc:
      "Sin suscripciones, sin marcas de agua, sin tarifas ocultas. Solo una herramienta simple para creadores.",
    ratio_free: "Libre",
    faq_title: "Preguntas frecuentes",
    faq_1_q: "¿Cómo hago un carrusel continuo para TikTok?",
    faq_1_a:
      "Sube tu imagen panorámica, selecciona '3 Segmentos' (o más) y usa nuestra herramienta para dividirla. Al publicar en TikTok, selecciona 'Modo Foto' y sube las imágenes en orden. El resultado será un panorama deslizable y continuo.",
    faq_2_q: "¿Es seguro subir mis fotos aquí?",
    faq_2_a:
      "¡Sí! De hecho, no las estás 'subiendo' a ningún lado. Esta herramienta se ejecuta completamente en tu navegador. Tus imágenes nunca se envían a un servidor, garantizando 100% de privacidad.",
    faq_3_q: "¿Cuál es el mejor tamaño para las diapositivas de TikTok?",
    faq_3_a:
      "TikTok recomienda una relación de aspecto de 9:16 (1080x1920 píxeles). Nuestra herramienta establece automáticamente esta relación por ti al usar la configuración estándar.",
    faq_4_q: "¿Puedo dividir imágenes para Instagram también?",
    faq_4_a:
      "¡Absolutamente! Aunque diseñado para TikTok, las imágenes divididas funcionan perfectamente para Carruseles de Instagram (Publicaciones deslizables). Solo elige la opción de relación 4:5 o 1:1.",
    about_tool_title: "Acerca de esta herramienta",
    about_tool_desc:
      "Easy Split es un conjunto de utilidades creativas diseñadas para creadores de contenido modernos. Creemos en construir herramientas que sean rápidas, gratis y respeten la privacidad del usuario.",
    privacy_commitment_title: "Compromiso de privacidad",
    privacy_commitment_desc:
      "Este Cortador de Imágenes opera estrictamente del lado del cliente. No almacenamos, vemos ni transmitimos tus imágenes. La lógica de 'Descargar' simplemente guarda los datos del lienzo procesado directamente desde la memoria del navegador a tu disco.",
    created_by: "Creado por",
    contact: "Contacto",
    new_dynamic_split: "Nuevo: División Dinámica",
    privacy_title: "Política de Privacidad",
    last_updated: "Última actualización: 11 de Enero, 2026",
    privacy_intro:
      "En <strong class='font-black'>Easy Split</strong>, creemos en la privacidad por diseño. Nuestras herramientas están construidas para ejecutarse <strong class='font-black'>del lado del cliente</strong>, lo que significa que tus datos (imágenes, archivos) permanecen en tu dispositivo y nunca se suben a nuestros servidores.",
    privacy_info_collect_title: "1. Información que recopilamos",
    privacy_info_collect_desc:
      "Dado que no requerimos cuentas de usuario y procesamos archivos localmente, recopilamos datos mínimos:",
    privacy_usage_data:
      "<strong>Datos de uso:</strong> Podemos utilizar análisis de terceros (como Google Analytics) para comprender cómo navegan los usuarios por nuestro sitio. Estos datos son anónimos y no incluyen archivos personales.",
    privacy_cookies:
      "<strong>Cookies:</strong> Usamos cookies esenciales para recordar tus preferencias (como la configuración de idioma).",
    privacy_process_files_title: "2. Cómo procesamos tus archivos",
    privacy_process_files_desc:
      "Cuando utilizas herramientas como nuestro <strong>Cortador de Imágenes</strong>, toda la manipulación de imágenes ocurre dentro de tu navegador web utilizando tecnología HTML5 Canvas. <strong>No vemos, almacenamos ni transmitimos tus imágenes.</strong>",
    privacy_ads_title: "3. Publicidad (Google AdSense)",
    privacy_ads_desc:
      "Utilizamos proveedores externos, incluido Google, para mostrar anuncios basados en las visitas anteriores de un usuario a nuestro sitio web u otros sitios web.",
    privacy_ads_point1:
      "El uso de cookies publicitarias de Google le permite a él y a sus socios mostrar anuncios a tus usuarios basados en su visita a tus sitios y/u otros sitios en Internet.",
    privacy_ads_point2:
      "Los usuarios pueden optar por no recibir publicidad personalizada visitando <a href='https://www.google.com/settings/ads' target='_blank' rel='nofollow noreferrer'>Configuración de anuncios de Google</a>.",
    privacy_links_title: "4. Enlaces de terceros",
    privacy_links_desc:
      "Nuestro sitio web puede contener enlaces a otros sitios web. Si haces clic en un enlace de terceros, serás dirigido a ese sitio. Ten en cuenta que estos sitios externos no son operados por nosotros. Por lo tanto, te recomendamos encarecidamente que revises la Política de privacidad de estos sitios web.",
    privacy_contact_title: "5. Contáctanos",
    privacy_contact_desc:
      "Si tienes alguna pregunta o sugerencia sobre nuestra Política de Privacidad, no dudes en contactarnos.",
    owner_label: "Propietario",
    terms_title: "Términos de Servicio",
    terms_last_updated: "Última actualización: 11 de Enero, 2026",
    terms_intro:
      "Por favor, lee estos términos de servicio ('Términos', 'Términos de Servicio') cuidadosamente antes de usar el sitio web <strong class='font-black'>Easy Split</strong> operado por <strong class='font-black'>hba-dev</strong> ('nosotros', 'nuestro').",
    terms_conditions_title: "1. Condiciones de uso",
    terms_conditions_desc:
      "Al usar este sitio web, certificas que has leído y revisado este Acuerdo y que aceptas cumplir con sus términos. Si no deseas estar sujeto a los términos de este Acuerdo, te recomendamos que dejes de usar el sitio web en consecuencia.",
    terms_ip_title: "2. Propiedad Intelectual",
    terms_ip_desc:
      "Aceptas que todos los materiales, productos y servicios proporcionados en este sitio web son propiedad del propietario del sitio web, sus afiliados, directores, funcionarios, empleados, agentes, proveedores o licenciantes, incluidos todos los derechos de autor, secretos comerciales, marcas comerciales, patentes y otra propiedad intelectual.",
    terms_ugc_label: "Contenido generado por el usuario",
    terms_ugc_desc:
      "Conservas la propiedad total de cualquier imagen o contenido que proceses utilizando nuestras herramientas. Dado que no almacenamos tus archivos, eres el único responsable de tu propio contenido.",
    terms_acceptable_use_title: "3. Uso aceptable",
    terms_acceptable_use_desc:
      "Aceptas no utilizar nuestras herramientas específicas para ningún propósito ilegal o prohibido bajo esta cláusula. Aceptas no utilizar nuestros servicios para:",
    terms_use_1: "Acosar, abusar o amenazar a otros.",
    terms_use_2: "Violar los derechos de otros.",
    terms_use_3: "Perpetrar cualquier fraude o distribuir malware o virus.",
    terms_indemnification_title: "4. Indemnización",
    terms_indemnification_desc:
      "Aceptas indemnizar al propietario del sitio web y sus afiliados y eximirnos de responsabilidad frente a reclamos legales y demandas que puedan surgir de tu uso o mal uso de nuestros servicios.",
    terms_liability_title: "5. Limitación de responsabilidad",
    terms_liability_desc:
      "No somos responsables de ningún daño que pueda ocurrirte como resultado de tu mal uso de nuestro sitio web. Nos reservamos el derecho de editar, modificar y cambiar este Acuerdo en cualquier momento.",
    terms_contact_title: "6. Contacto",
    terms_contact_desc:
      "Para cualquier pregunta relacionada con estos Términos, contáctanos en:",
    about_us_title: "Sobre Nosotros",
    about_us_tagline: "Empoderando a Creadores Desde 2026",
    about_us_intro:
      "Bienvenido a <strong class='font-black'>EASY SPLIT</strong>, la forma más simple y rápida de cortar tus imágenes para redes sociales.",
    about_mission_title: "Nuestra Misión",
    about_mission_desc:
      "Comenzamos Easy Split con un objetivo simple: ayudar a creadores, fotógrafos y narradores a presentar su trabajo sin límites. Ya sea un carrusel perfecto en Instagram o una diapositiva de fotos en TikTok, creemos que tus tomas panorámicas merecen ser vistas en todo su esplendor, no recortadas en un pequeño cuadrado.",
    about_why_title: "Por Qué Construimos Esto",
    about_why_desc:
      "Las herramientas existentes eran demasiado caras, estaban llenas de anuncios o requerían subir tus fotos privadas a un servidor lento. Queríamos construir algo:",
    about_why_fast_title: "Rápido:",
    about_why_fast_desc: "Cero tiempo de carga. Todo sucede en tu navegador.",
    about_why_private_title: "Privado:",
    about_why_private_desc: "Tus fotos nunca salen de tu dispositivo.",
    about_why_free_title: "Gratis:",
    about_why_free_desc:
      "Las herramientas profesionales deben ser accesibles para todos.",
    about_meet_creator_title: "Conoce al Creador",
    about_creator_role: "Desarrollador Fullstack y Creador",
    about_creator_bio:
      "Apasionado por construir aplicaciones web 'neo-brutalistas' que sean divertidas, rápidas y funcionales.",
    about_say_hello: "Di Hola →",
    contact_title: "Contáctanos",
    contact_subtitle: "¡Nos encantaría saber de ti!",
    contact_email_title: "Envíanos un correo",
    contact_email_desc:
      "Para cualquier consulta, comentario o solicitud de soporte.",
    contact_response_time: "Normalmente respondemos en 24 horas.",
    contact_social_title: "Síguenos",
    contact_form_name: "Nombre",
    contact_form_email: "Correo electrónico",
    contact_form_message: "Mensaje",
    contact_form_submit: "Enviar Mensaje",
    cookie_banner_msg:
      "We use cookies to improve your experience. By using our site, you agree to our use of cookies.",
    cookie_accept_btn: "Aceptar",
    cookie_decline_btn: "Rechazar",
    tips_title: "Consejos Pro: Vuélvete Viral",
    tips_1_title: "Cuenta una historia",
    tips_1_desc:
      "No dividas fotos al azar. Usa el deslizamiento continuo para revelar una sorpresa o contar una historia progresiva de izquierda a derecha.",
    tips_2_title: "Solo Alta Resolución",
    tips_2_desc:
      "TikTok comprime mucho las imágenes. Comienza siempre con la resolución más alta posible para asegurar que tus diapositivas divididas se mantengan nítidas.",
    tips_3_title: "El Gancho",
    tips_3_desc:
      "Haz que tu primera diapositiva (la de más a la izquierda) sea la más cautivadora para detener el desplazamiento. Usa la segunda diapositiva para entregar la recompensa.",
    not_found_title: "404 - Página no encontrada",
    not_found_desc: "La página que buscas no existe.",
    not_found_home: "Volver al inicio",
  },
  "zh-CN": {
    ...profileTranslations["zh-CN"],
    title: "Easy Split - 图片分割",
    subtitle:
      "将您的照片分割成无缝网格或垂直幻灯片。非常适合 TikTok、Instagram 等。",
    upload_title: "更改图片",
    upload_placeholder: "点击或拖放图片至此",
    upload_desc: "支持 JPG, PNG, WEBP, AVIF, BMP。推荐 16:9 格式",
    ready_msg: "准备下载",
    download_all: "全部下载 (ZIP)",
    download_part: "保存图片",
    download_zip_mobile: "下载 ZIP",
    download_image: "下载图片",
    part: "部分",
    article_title: "如何分割照片以制作无缝轮播幻灯片",
    article_intro:
      "发布巨幅全景图或宽图片通常会导致质量下降或尴尬的裁剪。EASY SPLIT 通过将您的图片分割成完美对齐的片段来解决这个问题，适用于 TikTok、Instagram 轮播等。",
    article_why_title: "为什么要分割您的图片？",
    article_why_1: "增加互动：观众会滑动查看完整图片。",
    article_why_2: "更好的叙事：在社交媒体上创造全景体验。",
    article_why_3: "高质量：客户端处理确保输出清晰。",
    how_to_title: "用户指南",
    how_to_1: "上传任何图片（全景图效果最佳）。",
    how_to_2: "选择您想要的片段数量（2 到 10）。",
    how_to_3: "如需调整，请调整裁剪区域，然后点击 Split。",
    how_to_4: "下载您的片段并上传到您喜欢的平台。",
    nav_home: "Easy Split",
    nav_splitter: "图片分割器",
    privacy: "隐私政策",
    cookie_policy: "Cookie 政策",
    terms: "服务条款",
    footer_rights: "EASY SPLIT. 版权所有。",
    about: "关于",
    tab_edit: "编辑",
    tab_split: "分割",
    transform_label: "变换",
    rotate_btn: "旋转",
    flip_h_btn: "水平翻转",
    open_crop: "打开裁剪工具",
    cancel_crop: "取消裁剪",
    actions_label: "操作",
    apply_crop: "应用裁剪",
    overwrite_warning: "* 覆盖当前图片",
    segments_label: "片段",
    crop_ratio_label: "裁剪比例",
    custom_ratio: "自定义",
    split_direction_label: "分割方向",
    split_cols: "列 (垂直)",
    split_rows: "行 (水平)",
    width_label: "宽度",
    height_label: "高度",
    split_image_btn: "分割图片",
    processing: "处理中...",
    change_img: "更改图片",
    reset_all: "重置所有",
    reset_image: "重置图片",
    edit_mode: "编辑模式",
    interactive_preview: "交互式预览",
    results_label: "结果",
    feature_client_side_title: "100% 客户端",
    feature_client_side_desc:
      "您的照片从未离开您的设备。所有处理都在您的浏览器中进行，以最大程度地保护隐私。",
    feature_instant_title: "即时分割",
    feature_instant_desc:
      "无需上传等待时间。得益于优化的基于浏览器的 canvas 技术，分割即时发生。",
    feature_quality_title: "无质量损失",
    feature_quality_desc:
      "我们优先考虑高保真导出设置，以确保您的 TikTok 轮播看起来清晰专业。",
    feature_free_title: "100% 免费",
    feature_free_desc:
      "无订阅，无水印，无隐藏费用。只是一个为创作者提供的简单工具。",
    ratio_free: "自由",
    faq_title: "常见问题",
    faq_1_q: "如何为 TikTok 制作无缝轮播？",
    faq_1_a:
      "上传您的全景图片，选择'3 片段'（或更多），然后使用我们的工具进行分割。发布到 TikTok 时，选择'照片模式'并按顺序上传图片。结果将是一个可滑动的无缝全景图。",
    faq_2_q: "在这里上传我的照片安全吗？",
    faq_2_a:
      "是的！实际上，您并没有将它们'上传'到任何地方。此工具完全在您的浏览器中运行。您的图片从未发送到服务器，确保 100% 隐私。",
    faq_3_q: "TikTok 幻灯片的最佳尺寸是多少？",
    faq_3_a:
      "TikTok 推荐 9:16 的纵横比（1080x1920 像素）。使用标准设置时，我们的工具会自动为您设置此比例。",
    faq_4_q: "我也能为 Instagram 分割图片吗？",
    faq_4_a:
      "当然！虽然专为 TikTok 设计，但分割后的图片非常适合 Instagram 轮播（滑动帖子）。只需选择 4:5 或 1:1 比例选项。",
    about_tool_title: "关于此工具",
    about_tool_desc:
      "Easy Split 是一套专为现代内容创作者设计的创意实用工具。我们致力于构建快速、免费且尊重用户隐私的工具。",
    privacy_commitment_title: "隐私承诺",
    privacy_commitment_desc:
      "此图片分割器严格在客户端运行。我们不存储、查看或传输您的图片。'下载'逻辑仅将处理后的 canvas 数据直接从浏览器内存保存到您的磁盘。",
    created_by: "创建者",
    contact: "联系方式",
    new_dynamic_split: "新功能：动态分割",
    privacy_title: "隐私政策",
    last_updated: "最后更新：2026年1月11日",
    privacy_intro:
      "在 <strong class='font-black'>Easy Split</strong>，我们秉持隐私至上的设计理念。我们的工具构建为<strong class='font-black'>客户端</strong>运行，这意味着您的数据（图片、文件）保留在您的设备上，从未上传到我们的服务器。",
    privacy_info_collect_title: "1. 我们收集的信息",
    privacy_info_collect_desc:
      "由于我们不需要用户帐户并在本地处理文件，因此我们要收集的数据最少：",
    privacy_usage_data:
      "<strong>使用数据：</strong> 我们可能会使用第三方分析（如 Google Analytics）来了解用户如何浏览我们的网站。这些数据是匿名的，不包含个人文件。",
    privacy_cookies:
      "<strong>Cookies：</strong> 我们使用必要的 Cookie 来记住您的偏好（如语言设置）。",
    privacy_process_files_title: "2. 我们如何处理您的文件",
    privacy_process_files_desc:
      "当您使用像我们的<strong>图片分割器</strong>这样的工具时，所有图像操作都在您的 Web 浏览器中使用 HTML5 Canvas 技术进行。<strong>我们不会查看、存储或传输您的图片。</strong>",
    privacy_ads_title: "3. 广告 (Google AdSense)",
    privacy_ads_desc:
      "我们使用包括 Google 在内的第三方供应商，根据用户之前访问我们网站或其他网站的情况来投放广告。",
    privacy_ads_point1:
      "Google 使用广告 Cookie 使其及其合作伙伴能够根据您的用户对您网站和/或互联网上其他网站的访问情况向其投放广告。",
    privacy_ads_point2:
      "用户可以通过访问 <a href='https://www.google.com/settings/ads' target='_blank' rel='nofollow noreferrer'>Google 广告设置</a> 来选择退出个性化广告。",
    privacy_links_title: "4. 第三方链接",
    privacy_links_desc:
      "我们的网站可能包含指向其他网站的链接。如果您点击第三方链接，您将被定向到该网站。请注意，这些外部网站并非由我们运营。因此，我们强烈建议您查看这些网站的隐私政策。",
    privacy_contact_title: "5. 联系我们",
    privacy_contact_desc:
      "如果您对我们的隐私政策有任何问题或建议，请随时联系我们。",
    owner_label: "所有者",
    terms_title: "服务条款",
    terms_last_updated: "最后更新：2026年1月11日",
    terms_intro:
      "在使用由 <strong class='font-black'>hba-dev</strong>（'我们'）运营的 <strong class='font-black'>Easy Split</strong> 网站之前，请仔细阅读这些服务条款（'条款'，'服务条款'）。",
    terms_conditions_title: "1. 使用条件",
    terms_conditions_desc:
      "使用本网站即表示您证明您已阅读并审阅本协议，并同意遵守其条款。如果您不想受本协议条款的约束，建议您相应地停止使用本网站。",
    terms_ip_title: "2. 知识产权",
    terms_ip_desc:
      "您同意本网站提供的所有材料、产品和服务均为网站所有者、其关联公司、董事、高管、员工、代理商、供应商或许可方的财产，包括所有版权、商业秘密、商标、专利和其他知识产权。",
    terms_ugc_label: "用户生成内容",
    terms_ugc_desc:
      "您保留使用我们的工具处理的任何图片或内容的完整所有权。由于我们不存储您的文件，因此您对自己的内容负全部责任。",
    terms_acceptable_use_title: "3. 可接受的使用",
    terms_acceptable_use_desc:
      "您同意不为了任何非法目的或本条款禁止的任何目的使用我们的特定工具。您同意不使用我们的服务来：",
    terms_use_1: "骚扰、辱骂或威胁他人。",
    terms_use_2: "侵犯他人的权利。",
    terms_use_3: "实施任何欺诈行为或分发恶意软件或病毒。",
    terms_indemnification_title: "4.赔偿",
    terms_indemnification_desc:
      "您同意赔偿网站所有者及其关联公司，并使我们免受因您使用或滥用我们的服务而引起的法律索赔和要求的损害。",
    terms_liability_title: "5. 责任限制",
    terms_liability_desc:
      "对于因您滥用我们的网站而可能对您造成的任何损害，我们概不负责。我们保留随时编辑、修改和更改本协议的权利。",
    terms_contact_title: "6. 联系",
    terms_contact_desc: "有关这些条款的任何问题，请通过以下方式联系我们：",
    about_us_title: "关于我们",
    about_us_tagline: "自2026年以来为创作者赋能",
    about_us_intro:
      "欢迎来到 <strong class='font-black'>EASY SPLIT</strong>，这是为社交媒体分割图片最简单、最快捷的方式。",
    about_mission_title: "我们的使命",
    about_mission_desc:
      "我们创立 Easy Split 的目标很简单：帮助创作者、摄影师和讲故事的人毫无限制地展示他们的作品。无论是 Instagram 上的无缝轮播还是 TikTok 上的照片幻灯片，我们相信您的全景照片值得以完整的荣耀展示，而不是被裁剪成一个小方块。",
    about_why_title: "我们为什么构建这个",
    about_why_desc:
      "现有工具要么太贵，充斥着广告，要么需要将您的私人照片上传到缓慢的服务器。我们想构建一些东西：",
    about_why_fast_title: "快速：",
    about_why_fast_desc: "零上传时间。一切都在您的浏览器中进行。",
    about_why_private_title: "私密：",
    about_why_private_desc: "您的照片从未离开您的设备。",
    about_why_free_title: "免费：",
    about_why_free_desc: "人人都可以使用专业工具。",
    about_meet_creator_title: "遇见创作者",
    about_creator_role: "全栈开发者 & 创作者",
    about_creator_bio: "热衷于构建有趣、快速且实用的'新粗野主义'网络应用程序。",
    about_say_hello: "打招呼 →",
    contact_title: "联系我们",
    contact_subtitle: "我们很乐意收到您的来信！",
    contact_email_title: "给我们发邮件",
    contact_email_desc: "对于任何查询、反馈或支持请求。",
    contact_response_time: "我们通常在24小时内回复。",
    contact_social_title: "关注我们",
    contact_form_name: "姓名",
    contact_form_email: "电子邮件",
    contact_form_message: "留言",
    contact_form_submit: "发送留言",
    cookie_banner_msg:
      "We use cookies to improve your experience. By using our site, you agree to our use of cookies.",
    cookie_accept_btn: "接受",
    cookie_decline_btn: "拒绝",
    tips_title: "专业提示：如何爆火",
    tips_1_title: "讲一个故事",
    tips_1_desc:
      "不要只是随机分割照片。利用无缝滑动来揭示惊喜或讲述一个从左到右的故事。",
    tips_2_title: "仅限高分辨率",
    tips_2_desc:
      "TikTok 会大量压缩图片。始终以最高分辨率开始，以确保您的切片保持清晰。",
    tips_3_title: "钩子 (The Hook)",
    tips_3_desc:
      "让您的第一张幻灯片（最左边）最迷人，以停止滚动。用第二张幻灯片来传递内容。",
    not_found_title: "404 - 页面未找到",
    not_found_desc: "您查找的页面不存在。",
    not_found_home: "返回首页",
  },
  "zh-TW": {
    ...profileTranslations["zh-TW"],
    title: "Easy Split - 圖片分割",
    subtitle:
      "將您的照片分割成無縫網格或垂直幻燈片。非常適合 TikTok、Instagram 等。",
    upload_title: "更改圖片",
    upload_placeholder: "點擊或拖放圖片至此",
    upload_desc: "支持 JPG, PNG, WEBP, AVIF, BMP。推薦 16:9 格式",
    ready_msg: "準備下載",
    download_all: "全部下載 (ZIP)",
    download_part: "保存圖片",
    download_zip_mobile: "下載 ZIP",
    download_image: "下載圖片",
    part: "部分",
    article_title: "如何分割照片以製作無縫輪播幻燈片",
    article_intro:
      "發布巨幅全景圖或寬圖片通常會導致質量下降或尷尬的裁剪。EASY SPLIT 通過將您的圖片分割成完美對齊的片段來解決這個問題，適用於 TikTok、Instagram 輪播等。",
    article_why_title: "為什麼要分割您的圖片？",
    article_why_1: "增加互動：觀眾會滑動查看完整圖片。",
    article_why_2: "更好的敘事：在社交媒體上創造全景體驗。",
    article_why_3: "高質量：客戶端處理確保輸出清晰。",
    how_to_title: "用戶指南",
    how_to_1: "上傳任何圖片（全景圖效果最佳）。",
    how_to_2: "選擇您想要的片段數量（2 到 10）。",
    how_to_3: "如需調整，請調整裁剪區域，然後點擊 Split。",
    how_to_4: "下載您的片段並上傳到您喜歡的平台。",
    nav_home: "Easy Split",
    nav_splitter: "圖片分割器",
    privacy: "隱私政策",
    cookie_policy: "Cookie 政策",
    terms: "服務條款",
    footer_rights: "EASY SPLIT. 版權所有。",
    about: "關於",
    tab_edit: "編輯",
    tab_split: "分割",
    transform_label: "變換",
    rotate_btn: "旋轉",
    flip_h_btn: "水平翻轉",
    open_crop: "打開裁剪工具",
    cancel_crop: "取消裁剪",
    actions_label: "操作",
    apply_crop: "應用裁剪",
    overwrite_warning: "* 覆蓋當前圖片",
    segments_label: "片段",
    crop_ratio_label: "裁剪比例",
    custom_ratio: "自定義",
    split_direction_label: "分割方向",
    split_cols: "列 (垂直)",
    split_rows: "行 (水平)",
    width_label: "寬度",
    height_label: "高度",
    split_image_btn: "分割圖片",
    processing: "處理中...",
    change_img: "更改圖片",
    reset_all: "重置所有",
    reset_image: "重置圖片",
    edit_mode: "編輯模式",
    interactive_preview: "交互式預覽",
    results_label: "結果",
    feature_client_side_title: "100% 客戶端",
    feature_client_side_desc:
      "您的照片從未離開您的設備。所有處理都在您的瀏覽器中進行，以最大程度地保護隱私。",
    feature_instant_title: "即時分割",
    feature_instant_desc:
      "無需上傳等待時間。得益於優化的基於瀏覽器的 canvas 技術，分割即時發生。",
    feature_quality_title: "無質量損失",
    feature_quality_desc:
      "我們優先考慮高保真導出設置，以確保您的 TikTok 輪播看起來清晰專業。",
    feature_free_title: "100% 免費",
    feature_free_desc:
      "無訂閱，無水印，無隱藏費用。只是一個為創作者提供的簡單工具。",
    ratio_free: "自由",
    faq_title: "常見問題",
    faq_1_q: "如何為 TikTok 製作無縫輪播？",
    faq_1_a:
      "上傳您的全景圖片，選擇'3 片段'（或更多），然後使用我們的工具進行分割。發布到 TikTok 時，選擇'照片模式'並按順序上傳圖片。結果將是一個可滑動的無縫全景圖。",
    faq_2_q: "在這裡上傳我的照片安全嗎？",
    faq_2_a:
      "是的！實際上，您並沒有將它們'上傳'到任何地方。此工具完全在您的瀏覽器中運行。您的圖片從未發送到服務器，確保 100% 隱私。",
    faq_3_q: "TikTok 幻燈片的最佳尺寸是多少？",
    faq_3_a:
      "TikTok 推薦 9:16 的縱橫比（1080x1920 像素）。使用標準設置時，我們的工具會自動為您設置此比例。",
    faq_4_q: "我也能為 Instagram 分割圖片嗎？",
    faq_4_a:
      "當然！雖然專為 TikTok 設計，但分割後的圖片非常適合 Instagram 輪播（滑動帖子）。只需選擇 4:5 或 1:1 比例選項。",
    about_tool_title: "關於此工具",
    about_tool_desc:
      "Easy Split 是一套專為現代內容創作者設計的創意實用工具。我們致力於構建快速、免費且尊重用戶隱私的工具。",
    privacy_commitment_title: "隱私承諾",
    privacy_commitment_desc:
      "此圖片分割器嚴格在客戶端運行。我們不存儲、查看或傳輸您的圖片。'下載'邏輯僅將處理後的 canvas 數據直接從瀏覽器內存保存到您的磁盤。",
    created_by: "創建者",
    contact: "聯繫方式",
    new_dynamic_split: "新功能：動態分割",
    privacy_title: "隱私政策",
    last_updated: "最後更新：2026年1月11日",
    privacy_intro:
      "在 <strong class='font-black'>Easy Split</strong>，我們秉持隱私至上的設計理念。我們的工具構建為<strong class='font-black'>客戶端</strong>運行，這意味著您的數據（圖片、文件）保留在您的設備上，從未上傳到我們的服務器。",
    privacy_info_collect_title: "1. 我們收集的信息",
    privacy_info_collect_desc:
      "由於我們不需要用戶帳戶並在本地處理文件，因此我們要收集的數據最少：",
    privacy_usage_data:
      "<strong>使用數據：</strong> 我們可能會使用第三方分析（如 Google Analytics）來了解用戶如何瀏覽我們的網站。這些數據是匿名的，不包含個人文件。",
    privacy_cookies:
      "<strong>Cookies：</strong> 我們使用必要的 Cookie 來記住您的偏好（如語言設置）。",
    privacy_process_files_title: "2. 我們如何處理您的文件",
    privacy_process_files_desc:
      "當您使用像我們的<strong>圖片分割器</strong>這樣的工具時，所有圖像操作都在您的 Web 瀏覽器中使用 HTML5 Canvas 技術進行。<strong>我們不會查看、存儲或傳輸您的圖片。</strong>",
    privacy_ads_title: "3. 廣告 (Google AdSense)",
    privacy_ads_desc:
      "我們使用包括 Google 在內的第三方供應商，根據用戶之前訪問我們網站或其他網站的情況來投放廣告。",
    privacy_ads_point1:
      "Google 使用廣告 Cookie 使其及其合作夥伴能夠根據您的用戶對您網站和/或互聯網上其他網站的訪問情況向其投放廣告。",
    privacy_ads_point2:
      "用戶可以通過訪問 <a href='https://www.google.com/settings/ads' target='_blank' rel='nofollow noreferrer'>Google 廣告設置</a> 來選擇退出個性化廣告。",
    privacy_links_title: "4. 第三方鏈接",
    privacy_links_desc:
      "我們的網站可能包含指向其他網站的鏈接。如果您點擊第三方鏈接，您將被定向到該網站。請注意，這些外部網站並非由我們運營。因此，我們強烈建議您查看這些網站的隱私政策。",
    privacy_contact_title: "5. 聯繫我們",
    privacy_contact_desc:
      "如果您對我們的隱私政策有任何問題或建議，請隨時聯繫我們。",
    owner_label: "所有者",
    terms_title: "服務條款",
    terms_last_updated: "最後更新：2026年1月11日",
    terms_intro:
      "在使用由 <strong class='font-black'>hba-dev</strong>（'我們'）運營的 <strong class='font-black'>Easy Split</strong> 網站之前，請仔細閱讀這些服務條款（'條款'，'服務條款'）。",
    terms_conditions_title: "1. 使用條件",
    terms_conditions_desc:
      "使用本網站即表示您證明您已閱讀並審閱本協議，並同意遵守其條款。如果您不想受本協議條款的約束，建議您相應地停止使用本網站。",
    terms_ip_title: "2. 知識產權",
    terms_ip_desc:
      "您同意本網站提供的所有材料、產品和服務均為網站所有者、其關聯公司、董事、高管、員工、代理商、供應商或許可方的財產，包括所有版權、商業秘密、商標、專利和其他知識產權。",
    terms_ugc_label: "用戶生成內容",
    terms_ugc_desc:
      "您保留使用我們的工具處理的任何圖片或內容的完整所有權。由於我們不存儲您的文件，因此您對自己的內容負全部責任。",
    terms_acceptable_use_title: "3. 可接受的使用",
    terms_acceptable_use_desc:
      "您同意不為了任何非法目的或本條款禁止的任何目的使用我們的特定工具。您同意不使用我們的服務來：",
    terms_use_1: "騷擾、辱罵或威脅他人。",
    terms_use_2: "侵犯他人的權利。",
    terms_use_3: "實施任何欺詐行為或分發惡意軟件或病毒。",
    terms_indemnification_title: "4.賠償",
    terms_indemnification_desc:
      "您同意賠償網站所有者及其關聯公司，並使我們免受因您使用或濫用我們的服務而引起的法律索賠和要求的損害。",
    terms_liability_title: "5. 責任限制",
    terms_liability_desc:
      "對於因您濫用我們的網站而可能對您造成的任何損害，我們概不負責。我們保留隨時編輯、修改和更改本協議的權利。",
    terms_contact_title: "6. 聯繫",
    terms_contact_desc: "有關這些條款的任何問題，請通過以下方式聯繫我們：",
    about_us_title: "關於我們",
    about_us_tagline: "自2026年以來為創作者賦能",
    about_us_intro:
      "歡迎來到 <strong class='font-black'>EASY SPLIT</strong>，這是為社交媒體分割圖片最簡單、最快捷的方式。",
    about_mission_title: "我們的使命",
    about_mission_desc:
      "我們創立 Easy Split 的目標很簡單：幫助創作者、攝影師和講故事的人毫無限制地展示他們的作品。無論是 Instagram 上的無縫輪播還是 TikTok 上的照片幻燈片，我們相信您的全景照片值得以完整的榮耀展示，而不是被裁剪成一個小方塊。",
    about_why_title: "我們為什麼構建這個",
    about_why_desc:
      "現有工具要么太貴，充斥著廣告，要么需要將您的私人照片上傳到緩慢的服務器。我們想構建一些東西：",
    about_why_fast_title: "快速：",
    about_why_fast_desc: "零上傳時間。一切都在您的瀏覽器中進行。",
    about_why_private_title: "私密：",
    about_why_private_desc: "您的照片從未離開您的設備。",
    about_why_free_title: "免費：",
    about_why_free_desc: "人人都可以使用專業工具。",
    about_meet_creator_title: "遇見創作者",
    about_creator_role: "全棧開發者 & 創作者",
    about_creator_bio: "熱衷於構建有趣、快速且實用的'新粗野主義'網絡應用程序。",
    about_say_hello: "打招呼 →",
    contact_title: "聯絡我們",
    contact_subtitle: "我們很樂意收到您的來信！",
    contact_email_title: "給我們發郵件",
    contact_email_desc: "對於任何查詢、反饋或支持請求。",
    contact_response_time: "我們通常在24小時內回復。",
    contact_social_title: "關注我們",
    contact_form_name: "姓名",
    contact_form_email: "電子郵件",
    contact_form_message: "留言",
    contact_form_submit: "發送留言",
    cookie_banner_msg:
      "We use cookies to improve your experience. By using our site, you agree to our use of cookies.",
    cookie_accept_btn: "接受",
    cookie_decline_btn: "拒絕",
    tips_title: "專業提示：如何爆火",
    tips_1_title: "講一個故事",
    tips_1_desc:
      "不要只是隨機分割照片。利用無縫滑動來揭示驚喜或講述一個從左到右的故事。",
    tips_2_title: "僅限高分辨率",
    tips_2_desc:
      "TikTok 會大量壓縮圖片。始終以最高分辨率開始，以確保您的切片保持清晰。",
    tips_3_title: "鉤子 (The Hook)",
    tips_3_desc:
      "讓您的第一張幻燈片（最左邊）最迷人，以停止滾動。用第二張幻燈片來傳遞內容。",
    not_found_title: "404 - 找不到頁面",
    not_found_desc: "您要尋找的頁面不存在。",
    not_found_home: "返回首頁",
  },
  de: {
    ...profileTranslations.de,
    title: "Easy Split - Bildteiler",
    subtitle:
      "Teilen Sie Ihre Fotos in nahtlose Raster oder vertikale Dias. Perfekt für TikTok, Instagram und mehr.",
    upload_title: "Bild ändern",
    upload_placeholder: "Klicken oder Bild hierher ziehen",
    upload_desc:
      "Unterstützt JPG, PNG, WEBP, AVIF, BMP. Empfohlenes 16:9-Format",
    ready_msg: "Bereit zum Herunterladen",
    download_all: "Alle herunterladen (ZIP)",
    download_part: "Bild speichern",
    download_zip_mobile: "ZIP herunterladen",
    download_image: "Bild herunterladen",
    part: "Teil",
    article_title: "So teilen Sie Fotos für nahtlose Karussell-Dias",
    article_intro:
      "Das Posten riesiger Panoramen oder breiter Bilder führt oft zu Qualitätsverlusten oder ungeschicktem Zuschneiden. EASY SPLIT löst dieses Problem, indem es Ihr Bild in perfekt ausgerichtete Segmente für TikTok, Instagram-Karussells und mehr aufteilt.",
    article_why_title: "Warum Ihre Bilder teilen?",
    article_why_1:
      "Erhöhter Engagement: Zuschauer wischen, um das ganze Bild zu sehen.",
    article_why_2:
      "Vesseres Storytelling: Erstellen Sie Panorama-Erlebnisse in sozialen Medien.",
    article_why_3:
      "Hohe Qualität: Client-seitige Verarbeitung sorgt für scharfe Ausgabe.",
    how_to_title: "Benutzerhandbuch",
    how_to_1:
      "Laden Sie ein beliebiges Bild hoch (Panoramen funktionieren am besten).",
    how_to_2: "Wählen Sie, wie viele Segmente Sie möchten (2 bis 10).",
    how_to_3:
      "Passen Sie den Zuschneidebereich bei Bedarf an und klicken Sie dann auf Split.",
    how_to_4:
      "Laden Sie Ihre Segmente herunter und laden Sie sie auf Ihre Lieblingsplattform hoch.",
    nav_home: "Easy Split",
    nav_splitter: "Bildteiler",
    privacy: "Datenschutzrichtlinie",
    cookie_policy: "Cookie-Richtlinie",
    terms: "Nutzungsbedingungen",
    footer_rights: "EASY SPLIT. Alle Rechte vorbehalten.",
    about: "Über uns",
    tab_edit: "Bearbeiten",
    tab_split: "Teilen",
    transform_label: "Transformieren",
    rotate_btn: "Drehen",
    flip_h_btn: "Horizontal spiegeln",
    open_crop: "Zuschneidewerkzeug öffnen",
    cancel_crop: "Zuschneiden abbrechen",
    actions_label: "Aktionen",
    apply_crop: "Zuschneiden anwenden",
    overwrite_warning: "* Überschreibt das aktuelle Bild",
    segments_label: "Segmente",
    crop_ratio_label: "Zuschneideverhältnis",
    custom_ratio: "Benutzerdefiniert",
    split_direction_label: "Teilungsrichtung",
    split_cols: "Spalten (Vertikal)",
    split_rows: "Zeilen (Horizontal)",
    width_label: "Breite",
    height_label: "Höhe",
    split_image_btn: "Bild teilen",
    processing: "Verarbeitung...",
    change_img: "Bild ändern",
    reset_all: "Alles zurücksetzen",
    reset_image: "Bild zurücksetzen",
    edit_mode: "Bearbeitungsmodus",
    interactive_preview: "Interaktive Vorschau",
    results_label: "Ergebnisse",
    feature_client_side_title: "100% Client-seitig",
    feature_client_side_desc:
      "Ihre Fotos verlassen nie Ihr Gerät. Die gesamte Verarbeitung erfolgt direkt in Ihrem Browser für maximale Privatsphäre.",
    feature_instant_title: "Sofortige Teilung",
    feature_instant_desc:
      "Keine Wartezeiten beim Hochladen. Die Teilung erfolgt sofort dank optimierter browserbasierter Canvas-Technologie.",
    feature_quality_title: "Kein Qualitätsverlust",
    feature_quality_desc:
      "Wir priorisieren High-Fidelity-Exporteinstellungen, um sicherzustellen, dass Ihr TikTok-Karussell knackig und professionell aussieht.",
    feature_free_title: "100% Kostenlos",
    feature_free_desc:
      "Keine Abonnements, keine Wasserzeichen, keine versteckten Gebühren. Einfach ein einfaches Werkzeug für Schöpfer.",
    ratio_free: "Frei",
    faq_title: "Häufig gestellte Fragen",
    faq_1_q: "Wie erstelle ich ein nahtloses Karussell für TikTok?",
    faq_1_a:
      "Laden Sie Ihr Panoramabild hoch, wählen Sie '3 Segmente' (oder mehr) und verwenden Sie unser Tool, um es zu teilen. Wenn Sie auf TikTok posten, wählen Sie 'Fotomodus' und laden Sie die Bilder in der richtigen Reihenfolge hoch. Das Ergebnis ist ein wischbares, nahtloses Panorama.",
    faq_2_q: "Ist es sicher, meine Fotos hier hochzuladen?",
    faq_2_a:
      "Ja! Tatsächlich laden Sie sie nirgendwo hin 'hoch'. Dieses Tool läuft vollständig in Ihrem Browser. Ihre Bilder werden nie an einen Server gesendet, was 100% Privatsphäre gewährleistet.",
    faq_3_q: "Was ist die beste Größe für TikTok-Folien?",
    faq_3_a:
      "TikTok empfiehlt ein Seitenverhältnis von 9:16 (1080x1920 Pixel). Unser Tool stellt dieses Verhältnis bei Verwendung der Standardeinstellungen automatisch für Sie ein.",
    faq_4_q: "Kann ich Bilder auch für Instagram teilen?",
    faq_4_a:
      "Absolut! Obwohl für TikTok konzipiert, funktionieren die geteilten Bilder perfekt für Instagram-Karussells (Wischbare Beiträge). Wählen Sie einfach die Option für das Verhältnis 4:5 oder 1:1.",
    about_tool_title: "Über dieses Tool",
    about_tool_desc:
      "Easy Split ist eine Suite kreativer Dienstprogramme, die für moderne Content-Ersteller entwickelt wurden. Wir glauben daran, Tools zu entwickeln, die schnell, kostenlos sind und die Privatsphäre der Benutzer respektieren.",
    privacy_commitment_title: "Datenschutzverpflichtung",
    privacy_commitment_desc:
      "Dieser Bildteiler arbeitet streng clientseitig. Wir speichern, sehen oder übertragen Ihre Bilder nicht. Die 'Download'-Logik speichert lediglich die verarbeiteten Canvas-Daten direkt aus dem Browserspeicher auf Ihre Festplatte.",
    created_by: "Erstellt von",
    contact: "Kontakt",
    new_dynamic_split: "Neu: Dynamische Teilung",
    privacy_title: "Datenschutzrichtlinie",
    last_updated: "Zuletzt aktualisiert: 11. Januar 2026",
    privacy_intro:
      "Bei <strong class='font-black'>Easy Split</strong> glauben wir an Privacy by Design. Unsere Tools sind so konzipiert, dass sie <strong class='font-black'>clientseitig</strong> ausgeführt werden, was bedeutet, dass Ihre Daten (Bilder, Dateien) auf Ihrem Gerät bleiben und niemals auf unsere Server hochgeladen werden.",
    privacy_info_collect_title: "1. Informationen, die wir sammeln",
    privacy_info_collect_desc:
      "Da wir keine Benutzerkonten benötigen und Dateien lokal verarbeiten, sammeln wir nur minimale Daten:",
    privacy_usage_data:
      "<strong>Nutzungsdaten:</strong> Wir können Analysen von Drittanbietern (wie Google Analytics) verwenden, um zu verstehen, wie Benutzer auf unserer Website navigieren. Diese Daten sind anonymisiert und enthalten keine persönlichen Dateien.",
    privacy_cookies:
      "<strong>Cookies:</strong> Wir verwenden essentielle Cookies, um Ihre Einstellungen (wie Spracheinstellungen) zu speichern.",
    privacy_process_files_title: "2. Wie wir Ihre Dateien verarbeiten",
    privacy_process_files_desc:
      "Wenn Sie Tools wie unseren <strong>Bildteiler</strong> verwenden, erfolgt die gesamte Bildbearbeitung in Ihrem Webbrowser mithilfe der HTML5-Canvas-Technologie. <strong>Wir sehen, speichern oder übertragen Ihre Bilder nicht.</strong>",
    privacy_ads_title: "3. Werbung (Google AdSense)",
    privacy_ads_desc:
      "Wir verwenden Drittanbieter, einschließlich Google, um Anzeigen basierend auf früheren Besuchen eines Benutzers auf unserer Website oder anderen Websites zu schalten.",
    privacy_ads_point1:
      "Die Verwendung von Werbecookies durch Google ermöglicht es ihm und seinen Partnern, Ihren Benutzern Anzeigen basierend auf ihrem Besuch auf Ihren Websites und/oder anderen Websites im Internet zu schalten.",
    privacy_ads_point2:
      "Benutzer können personalisierte Werbung deaktivieren, indem sie <a href='https://www.google.com/settings/ads' target='_blank' rel='nofollow noreferrer'>Google-Anzeigeneinstellungen</a> besuchen.",
    privacy_links_title: "4. Links von Drittanbietern",
    privacy_links_desc:
      "Unsere Website kann Links zu anderen Websites enthalten. Wenn Sie auf einen Link eines Drittanbieters klicken, werden Sie zu dieser Website weitergeleitet. Beachten Sie, dass diese externen Websites nicht von uns betrieben werden. Daher empfehlen wir Ihnen dringend, die Datenschutzrichtlinie dieser Websites zu lesen.",
    privacy_contact_title: "5. Kontaktieren Sie uns",
    privacy_contact_desc:
      "Wenn Sie Fragen oder Vorschläge zu unserer Datenschutzrichtlinie haben, zögern Sie nicht, uns zu kontaktieren.",
    owner_label: "Eigentümer",
    terms_title: "Nutzungsbedingungen",
    terms_last_updated: "Zuletzt aktualisiert: 11. Januar 2026",
    terms_intro:
      "Bitte lesen Sie diese Nutzungsbedingungen ('Bedingungen', 'Nutzungsbedingungen') sorgfältig durch, bevor Sie die Website <strong class='font-black'>Easy Split</strong> nutzen, die von <strong class='font-black'>hba-dev</strong> ('uns', 'wir' oder 'unser') betrieben wird.",
    terms_conditions_title: "1. Nutzungsbedingungen",
    terms_conditions_desc:
      "Durch die Nutzung dieser Website bestätigen Sie, dass Sie diese Vereinbarung gelesen und geprüft haben und dass Sie damit einverstanden sind, deren Bedingungen einzuhalten. Wenn Sie nicht an die Bedingungen dieser Vereinbarung gebunden sein möchten, wird Ihnen empfohlen, die Nutzung der Website entsprechend einzustellen.",
    terms_ip_title: "2. Geistiges Eigentum",
    terms_ip_desc:
      "Sie erklären sich damit einverstanden, dass alle Materialien, Produkte und Dienstleistungen, die auf dieser Website bereitgestellt werden, Eigentum des Website-Eigentümers, seiner verbundenen Unternehmen, Direktoren, leitenden Angestellten, Mitarbeiter, Vertreter, Lieferanten oder Lizenzgeber sind, einschließlich aller Urheberrechte, Geschäftsgeheimnisse, Marken, Patente und anderen geistigen Eigentums.",
    terms_ugc_label: "Benutzergenerierte Inhalte",
    terms_ugc_desc:
      "Sie behalten das volle Eigentum an allen Bildern oder Inhalten, die Sie mit unseren Tools verarbeiten. Da wir Ihre Dateien nicht speichern, sind Sie allein für Ihre eigenen Inhalte verantwortlich.",
    terms_acceptable_use_title: "3. Akzeptable Nutzung",
    terms_acceptable_use_desc:
      "Sie stimmen zu, unsere spezifischen Tools nicht für rechtswidrige Zwecke oder für Zwecke zu verwenden, die unter dieser Klausel verboten sind. Sie stimmen zu, unsere Dienste nicht zu nutzen, um:",
    terms_use_1: "Andere zu belästigen, zu missbrauchen oder zu bedrohen.",
    terms_use_2: "Die Rechte anderer verletzen.",
    terms_use_3: "Betrug begehen oder Malware oder Viren verbreiten.",
    terms_indemnification_title: "4. Entschädigung",
    terms_indemnification_desc:
      "Sie erklären sich damit einverstanden, den Website-Eigentümer und seine verbundenen Unternehmen zu entschädigen und uns von rechtlichen Ansprüchen und Forderungen freizustellen, die sich aus Ihrer Nutzung oder Ihrem Missbrauch unserer Dienste ergeben können.",
    terms_liability_title: "5. Haftungsbeschränkung",
    terms_liability_desc:
      "Wir haften nicht für Schäden, die Ihnen infolge Ihres Missbrauchs unserer Website entstehen können. Wir behalten uns das Recht vor, diese Vereinbarung jederzeit zu bearbeiten, zu modifizieren und zu ändern.",
    terms_contact_title: "6. Kontakt",
    terms_contact_desc:
      "Bei Fragen zu diesen Bedingungen kontaktieren Sie uns bitte unter:",
    about_us_title: "Über uns",
    about_us_tagline: "Stärkung von Kreativen seit 2026",
    about_us_intro:
      "Willkommen bei <strong class='font-black'>EASY SPLIT</strong>, der einfachsten und schnellsten Art, Ihre Bilder für soziale Medien zu teilen.",
    about_mission_title: "Unsere Mission",
    about_mission_desc:
      "Wir haben Easy Split mit einem einfachen Ziel gestartet: Kreativen, Fotografen und Geschichtenerzählern zu helfen, ihre Arbeit ohne Grenzen zu präsentieren. Egal, ob es sich um ein nahtloses Karussell auf Instagram oder eine Fotodia auf TikTok handelt, wir glauben, dass Ihre Panoramaaufnahmen es verdienen, in voller Pracht gesehen zu werden, und nicht in ein winziges Quadrat geschnitten werden sollten.",
    about_why_title: "Warum wir das gebaut haben",
    about_why_desc:
      "Bestehende Tools waren entweder zu teuer, voller Werbung oder erforderten das Hochladen Ihrer privaten Fotos auf einen langsamen Server. Wir wollten etwas bauen, das:",
    about_why_fast_title: "Schnell:",
    about_why_fast_desc: "Null Upload-Zeit. Alles passiert in Ihrem Browser.",
    about_why_private_title: "Privat:",
    about_why_private_desc: "Ihre Fotos verlassen nie Ihr Gerät.",
    about_why_free_title: "Kostenlos:",
    about_why_free_desc:
      "Professionelle Tools sollten für jeden zugänglich sein.",
    about_meet_creator_title: "Treffen Sie den Ersteller",
    about_creator_role: "Fullstack-Entwickler & Schöpfer",
    about_creator_bio:
      "Leidenschaftlich daran interessiert, unterhaltsame, schnelle und funktionale 'neo-brutalistische' Web-Apps zu erstellen.",
    about_say_hello: "Sag Hallo →",
    contact_title: "Kontaktieren Sie uns",
    contact_subtitle: "Wir würden uns freuen, von Ihnen zu hören!",
    contact_email_title: "E-Mail senden",
    contact_email_desc: "Für Anfragen, Feedback oder Support.",
    contact_response_time:
      "Wir antworten normalerweise innerhalb von 24 Stunden.",
    contact_social_title: "Folgen Sie uns",
    contact_form_name: "Name",
    contact_form_email: "E-Mail",
    contact_form_message: "Nachricht",
    contact_form_submit: "Nachricht senden",
    cookie_banner_msg:
      "We use cookies to improve your experience. By using our site, you agree to our use of cookies.",
    cookie_accept_btn: "Akzeptieren",
    cookie_decline_btn: "Ablehnen",
    tips_title: "Profi-Tipps: Viral gehen",
    tips_1_title: "Erzählen Sie eine Geschichte",
    tips_1_desc:
      "Teilen Sie nicht nur zufällige Fotos. Nutzen Sie den nahtlosen Übergang, um eine Überraschung zu enthüllen oder eine Geschichte von links nach rechts zu erzählen.",
    tips_2_title: "Nur hohe Auflösung",
    tips_2_desc:
      "TikTok komprimiert Bilder stark. Beginnen Sie immer mit der höchsten Auflösung, damit Ihre Slides scharf bleiben.",
    tips_3_title: "Der Aufhänger",
    tips_3_desc:
      "Machen Sie Ihre erste Folie (ganz links) zur fesselndsten, um das Scrollen zu stoppen. Nutzen Sie die zweite Folie für die Auflösung.",
    not_found_title: "404 - Seite nicht gefunden",
    not_found_desc: "Die gesuchte Seite existiert nicht.",
    not_found_home: "Zur Startseite zurückkehren",
  },
  ru: {
    ...profileTranslations.ru,
    title: "Easy Split - Разделение фото",
    subtitle:
      "Разделите ваши фото на бесшовные сетки или вертикальные слайды. Идеально для TikTok, Instagram и других.",
    upload_title: "Сменить изображение",
    upload_placeholder: "Нажмите или перетащите изображение сюда",
    upload_desc:
      "Поддержка JPG, PNG, WEBP, AVIF, BMP. Рекомендуемый формат 16:9",
    ready_msg: "Готово к загрузке",
    download_all: "Скачать все (ZIP)",
    download_part: "Сохранить изображение",
    download_zip_mobile: "Скачать ZIP",
    download_image: "Скачать изображение",
    part: "Часть",
    article_title: "Как разделить фото для бесшовных слайдов",
    article_intro:
      "Публикация огромных панорам или широких изображений часто приводит к потере качества или неудачной обрезке. EASY SPLIT решает эту проблему, нарезая ваше изображение на идеально выровненные сегменты для TikTok, Instagram каруселей и других.",
    article_why_title: "Зачем разделять изображения?",
    article_why_1:
      "Увеличение вовлеченности: Зрители листают, чтобы увидеть полную картину.",
    article_why_2:
      "Лучшее повествование: Создавайте панорамные впечатления в социальных сетях.",
    article_why_3:
      "Высокое качество: Обработка на стороне клиента обеспечивает четкость.",
    how_to_title: "Руководство пользователя",
    how_to_1: "Загрузите любое изображение (панорамы подходят лучше всего).",
    how_to_2: "Выберите количество сегментов (от 2 до 10).",
    how_to_3:
      "Настройте область обрезки при необходимости, затем нажмите Split.",
    how_to_4: "Скачайте сегменты и загрузите их на вашу любимую платформу.",
    nav_home: "Easy Split",
    nav_splitter: "Разделитель фото",
    privacy: "Политика конфиденциальности",
    cookie_policy: "Политика Cookie",
    terms: "Условия использования",
    footer_rights: "EASY SPLIT. Все права защищены.",
    about: "О нас",
    tab_edit: "Редактировать",
    tab_split: "Разделить",
    transform_label: "Трансформация",
    rotate_btn: "Повернуть",
    flip_h_btn: "Отразить по горизонтали",
    open_crop: "Открыть инструмент обрезки",
    cancel_crop: "Отменить обрезку",
    actions_label: "Действия",
    apply_crop: "Применить обрезку",
    overwrite_warning: "* Перезаписывает текущее изображение",
    segments_label: "Сегменты",
    crop_ratio_label: "Пропорции обрезки",
    custom_ratio: "Пользовательские",
    split_direction_label: "Направление разделения",
    split_cols: "Колонки (Вертикально)",
    split_rows: "Строки (Горизонтально)",
    width_label: "Ширина",
    height_label: "Высота",
    split_image_btn: "Разделить изображение",
    processing: "Обработка...",
    change_img: "Сменить изображение",
    reset_all: "Сбросить все",
    reset_image: "Сбросить изображение",
    edit_mode: "Режим редактирования",
    interactive_preview: "Интерактивный предпросмотр",
    results_label: "Результаты",
    feature_client_side_title: "100% на стороне клиента",
    feature_client_side_desc:
      "Ваши фото никогда не покидают ваше устройство. Вся обработка происходит прямо в вашем браузере для максимальной конфиденциальности.",
    feature_instant_title: "Мгновенное разделение",
    feature_instant_desc:
      "Нет времени ожидания загрузки. Разделение происходит мгновенно благодаря оптимизированной технологии canvas в браузере.",
    feature_quality_title: "Без потери качества",
    feature_quality_desc:
      "Мы отдаем приоритет настройкам экспорта высокой точности, чтобы ваша карусель TikTok выглядела четкой и профессиональной.",
    feature_free_title: "100% Бесплатно",
    feature_free_desc:
      "Никаких подписок, водяных знаков, скрытых платежей. Просто простой инструмент для создателей.",
    ratio_free: "Свободный",
    faq_title: "Часто задаваемые вопросы",
    faq_1_q: "Как создать бесшовную карусель для TikTok?",
    faq_1_a:
      "Загрузите панорамное изображение, выберите '3 Сегмента' (или больше) и используйте наш инструмент для разделения. При публикации в TikTok выберите 'Режим фото' и загрузите изображения по порядку. Результатом будет бесшовная панорама.",
    faq_2_q: "Безопасно ли загружать сюда свои фото?",
    faq_2_a:
      "Да! На самом деле вы никуда их не 'загружаете'. Этот инструмент работает полностью в вашем браузере. Ваши изображения никогда не отправляются на сервер, обеспечивая 100% конфиденциальность.",
    faq_3_q: "Какой размер лучше всего для слайдов TikTok?",
    faq_3_a:
      "TikTok рекомендует соотношение сторон 9:16 (1080x1920 пикселей). Наш инструмент автоматически устанавливает это соотношение при использовании стандартных настроек.",
    faq_4_q: "Можно ли разделить изображения и для Instagram?",
    faq_4_a:
      "Конечно! Хотя инструмент разработан для TikTok, разделенные изображения отлично работают для Instagram каруселей. Просто выберите опцию соотношения 4:5 или 1:1.",
    about_tool_title: "Об этом инструменте",
    about_tool_desc:
      "Easy Split — это набор креативных утилит, разработанных для современных создателей контента. Мы верим в создание инструментов, которые быстры, бесплатны и уважают конфиденциальность пользователей.",
    privacy_commitment_title: "Обязательство о конфиденциальности",
    privacy_commitment_desc:
      "Этот разделитель изображений работает строго на стороне клиента. Мы не храним, не просматриваем и не передаем ваши изображения. Логика 'Скачать' просто сохраняет обработанные данные canvas прямо из памяти браузера на ваш диск.",
    created_by: "Создано",
    contact: "Контакты",
    new_dynamic_split: "Новое: Динамическое разделение",
    privacy_title: "Политика конфиденциальности",
    last_updated: "Последнее обновление: 11 января 2026",
    privacy_intro:
      "В <strong class='font-black'>Easy Split</strong> мы верим в конфиденциальность на этапе проектирования. Наши инструменты созданы для работы <strong class='font-black'>на стороне клиента</strong>, что означает, что ваши данные (изображения, файлы) остаются на вашем устройстве и никогда не загружаются на наши серверы.",
    privacy_info_collect_title: "1. Информация, которую мы собираем",
    privacy_info_collect_desc:
      "Поскольку мы не требуем учетных записей пользователей и обрабатываем файлы локально, мы собираем минимум данных:",
    privacy_usage_data:
      "<strong>Данные об использовании:</strong> Мы можем использовать стороннюю аналитику (например, Google Analytics), чтобы понять, как пользователи перемещаются по нашему сайту. Эти данные анонимизированы и не включают личные файлы.",
    privacy_cookies:
      "<strong>Cookies:</strong> Мы используем необходимые файлы cookie для запоминания ваших предпочтений (например, настроек языка).",
    privacy_process_files_title: "2. Как мы обрабатываем ваши файлы",
    privacy_process_files_desc:
      "Когда вы используете инструменты, такие как наш <strong>Разделитель изображений</strong>, все манипуляции с изображениями происходят внутри вашего веб-браузера с использованием технологии HTML5 Canvas. <strong>Мы не видим, не храним и не передаем ваши изображения.</strong>",
    privacy_ads_title: "3. Реклама (Google AdSense)",
    privacy_ads_desc:
      "Мы используем сторонних поставщиков, включая Google, для показа рекламы на основе предыдущих посещений пользователем нашего веб-сайта или других веб-сайтов.",
    privacy_ads_point1:
      "Использование рекламных файлов cookie Google позволяет ему и его партнерам показывать рекламу вашим пользователям на основе их посещения ваших сайтов и/или других сайтов в Интернете.",
    privacy_ads_point2:
      "Пользователи могут отказаться от персонализированной рекламы, посетив <a href='https://www.google.com/settings/ads' target='_blank' rel='nofollow noreferrer'>Настройки рекламы Google</a>.",
    privacy_links_title: "4. Ссылки третьих лиц",
    privacy_links_desc:
      "Наш веб-сайт может содержать ссылки на другие веб-сайты. Если вы нажмете на ссылку третьей стороны, вы будете перенаправлены на этот сайт. Обратите внимание, что эти внешние сайты не управляются нами. Поэтому мы настоятельно рекомендуем вам ознакомиться с Политикой конфиденциальности этих веб-сайтов.",
    privacy_contact_title: "5. Свяжитесь с нами",
    privacy_contact_desc:
      "Если у вас есть какие-либо вопросы или предложения относительно нашей Политики конфиденциальности, не стесняйтесь обращаться к нам.",
    owner_label: "Владелец",
    terms_title: "Условия использования",
    terms_last_updated: "Последнее обновление: 11 января 2026",
    terms_intro:
      "Пожалуйста, внимательно прочитайте эти условия использования ('Условия', 'Условия использования') перед использованием веб-сайта <strong class='font-black'>Easy Split</strong>, управляемого <strong class='font-black'>hba-dev</strong> ('мы', 'нас' или 'наш').",
    terms_conditions_title: "1. Условия использования",
    terms_conditions_desc:
      "Используя этот веб-сайт, вы подтверждаете, что прочитали и ознакомились с настоящим Соглашением и согласны соблюдать его условия. Если вы не хотите быть связанными условиями настоящего Соглашения, вам рекомендуется прекратить использование веб-сайта.",
    terms_ip_title: "2. Интеллектуальная собственность",
    terms_ip_desc:
      "Вы соглашаетесь с тем, что все материалы, продукты и услуги, предоставляемые на этом веб-сайте, являются собственностью владельца веб-сайта, его аффилированных лиц, директоров, должностных лиц, сотрудников, агентов, поставщиков или лицензиаров, включая все авторские права, коммерческие тайны, товарные знаки, патенты и другую интеллектуальную собственность.",
    terms_ugc_label: "Пользовательский контент",
    terms_ugc_desc:
      "Вы сохраняете полное право собственности на любые изображения или контент, который вы обрабатываете с помощью наших инструментов. Поскольку мы не храним ваши файлы, вы несете полную ответственность за свой собственный контент.",
    terms_acceptable_use_title: "3. Допустимое использование",
    terms_acceptable_use_desc:
      "Вы соглашаетесь не использовать наши инструменты для каких-либо незаконных целей или целей, запрещенных настоящим пунктом. Вы соглашаетесь не использовать наши услуги для:",
    terms_use_1: "Преследования, оскорбления или угроз другим.",
    terms_use_2: "Нарушения прав других.",
    terms_use_3:
      "Совершения мошенничества или распространения вредоносного ПО или вирусов.",
    terms_indemnification_title: "4. Возмещение ущерба",
    terms_indemnification_desc:
      "Вы соглашаетесь возместить ущерб владельцу веб-сайта и его аффилированным лицам и оградить нас от юридических претензий и требований, которые могут возникнуть в результате вашего использования или неправильного использования наших услуг.",
    terms_liability_title: "5. Ограничение ответственности",
    terms_liability_desc:
      "Мы не несем ответственности за любой ущерб, который может возникнуть у вас в результате неправильного использования нашего веб-сайта. Мы оставляем за собой право редактировать, изменять и вносить поправки в настоящее Соглашение в любое время.",
    terms_contact_title: "6. Контакты",
    terms_contact_desc:
      "По любым вопросам, касающимся этих Условий, пожалуйста, свяжитесь с нами по адресу:",
    about_us_title: "О нас",
    about_us_tagline: "Расширение возможностей создателей с 2026 года",
    about_us_intro:
      "Добро пожаловать в <strong class='font-black'>EASY SPLIT</strong>, самый простой и быстрый способ разделить ваши изображения для социальных сетей.",
    about_mission_title: "Наша миссия",
    about_mission_desc:
      "Мы запустили Easy Split с простой целью: помочь создателям, фотографам и рассказчикам представлять свои работы без ограничений. Будь то бесшовная карусель в Instagram или слайд-шоу в TikTok, мы верим, что ваши панорамные снимки заслуживают того, чтобы их видели во всей красе, а не обрезанными в крошечный квадрат.",
    about_why_title: "Почему мы создали это",
    about_why_desc:
      "Существующие инструменты были либо слишком дорогими, либо переполнены рекламой, либо требовали загрузки ваших личных фотографий на медленный сервер. Мы хотели создать что-то, что:",
    about_why_fast_title: "Быстро:",
    about_why_fast_desc:
      "Нулевое время загрузки. Все происходит в вашем браузере.",
    about_why_private_title: "Конфиденциально:",
    about_why_private_desc: "Ваши фото никогда не покидают ваше устройство.",
    about_why_free_title: "Бесплатно:",
    about_why_free_desc:
      "Профессиональные инструменты должны быть доступны каждому.",
    about_meet_creator_title: "Встречайте создателя",
    about_creator_role: "Fullstack-разработчик и создатель",
    about_creator_bio:
      "Увлечен созданием веселых, быстрых и функциональных 'нео-бруталистских' веб-приложений.",
    about_say_hello: "Сказать привет →",
    contact_title: "Свяжитесь с нами",
    contact_subtitle: "Мы будем рады услышать вас!",
    contact_email_title: "Напишите нам",
    contact_email_desc: "По любым вопросам, отзывам или запросам поддержки.",
    contact_response_time: "Обычно мы отвечаем в течение 24 часов.",
    contact_social_title: "Подписывайтесь на нас",
    contact_form_name: "Имя",
    contact_form_email: "Email",
    contact_form_message: "Сообщение",
    contact_form_submit: "Отправить сообщение",
    cookie_banner_msg:
      "We use cookies to improve your experience. By using our site, you agree to our use of cookies.",
    cookie_accept_btn: "Принять",
    cookie_decline_btn: "Отклонить",
    tips_title: "Советы профи: Как стать вирусным",
    tips_1_title: "Расскажите историю",
    tips_1_desc:
      "Не просто разделяйте случайные фото. Используйте бесшовный слайд, чтобы раскрыть сюрприз или рассказать историю слева направо.",
    tips_2_title: "Только высокое разрешение",
    tips_2_desc:
      "TikTok сильно сжимает изображения. Всегда начинайте с максимально возможного разрешения, чтобы ваши слайды оставались четкими.",
    tips_3_title: "Крючок (The Hook)",
    tips_3_desc:
      "Сделайте ваш первый слайд (самый левый) самым захватывающим, чтобы остановить прокрутку. Используйте второй слайд для развязки.",
    not_found_title: "404 - Страница не найдена",
    not_found_desc: "Страница, которую вы ищете, не существует.",
    not_found_home: "Вернуться на главную",
  },
  hi: {
    ...profileTranslations.hi,
    title: "Easy Split - इमेज स्प्लिटर",
    subtitle:
      "अपनी तस्वीरों को सीमलेस ग्रिड या वर्टिकल स्लाइड में विभाजित करें। TikTok, Instagram और अधिक के लिए उत्तम।",
    upload_title: "छवि बदलें",
    upload_placeholder: "छवि यहाँ क्लिक या ड्रैग करें",
    upload_desc:
      "JPG, PNG, WEBP, AVIF, BMP का समर्थन करता है। अनुशंसित 16:9 प्रारूप",
    ready_msg: "डाउनलोड के लिए तैयार",
    download_all: "सभी डाउनलोड करें (ZIP)",
    download_part: "छवि सहेजें",
    download_zip_mobile: "ZIP डाउनलोड करें",
    download_image: "इमेज डाउनलोड करें",
    part: "भाग",
    article_title: "सीमलेस हिंडोला स्लाइड के लिए तस्वीरों को कैसे विभाजित करें",
    article_intro:
      "विशाल पैनोरमा या विस्तृत छवियों को पोस्ट करने से अक्सर गुणवत्ता में कमी आती है या अजीब तरह से क्रॉपिंग होती है। EASY SPLIT आपकी छवि को TikTok, Instagram हिंडोला, और अधिक के लिए पूरी तरह से संरेखित खंडों में विभाजित करके इसे हल करता है।",
    article_why_title: "अपनी छवियों को क्यों विभाजित करें?",
    article_why_1:
      "बढ़ी हुई व्यस्तता: दर्शक पूरी तस्वीर देखने के लिए स्वाइप करते हैं।",
    article_why_2: "बेहतर कहानी: सोशल मीडिया पर पैनोरमिक अनुभव बनाएं।",
    article_why_3:
      "उच्च गुणवत्ता: क्लाइंट-साइड प्रोसेसिंग स्पष्ट आउटपुट सुनिश्चित करती है।",
    how_to_title: "उपयोगकर्ता गाइड",
    how_to_1: "कोई भी छवि अपलोड करें (पैनोरमा सबसे अच्छा काम करते हैं)।",
    how_to_2: "चुनें कि आप कितने खंड चाहते हैं (2 से 10)।",
    how_to_3:
      "यदि आवश्यक हो तो क्रॉप क्षेत्र को समायोजित करें, फिर Split पर क्लिक करें।",
    how_to_4:
      "अपने खंड डाउनलोड करें और उन्हें अपने पसंदीदा प्लेटफ़ॉर्म पर अपलोड करें।",
    nav_home: "Easy Split",
    nav_splitter: "इमेज स्प्लिटर",
    privacy: "गोपनीयता नीति",
    cookie_policy: "कुकी नीति",
    terms: "सेवा की शर्तें",
    footer_rights: "EASY SPLIT. सर्वाधिकार सुरक्षित।",
    about: "हमारे बारे में",
    tab_edit: "संपादित करें",
    tab_split: "विभाजित करें",
    transform_label: "रूपांतरण",
    rotate_btn: "घुमाएं",
    flip_h_btn: "क्षैतिज पलटें",
    open_crop: "क्रॉप टूल खोलें",
    cancel_crop: "क्रॉप रद्द करें",
    actions_label: "क्रियाएं",
    apply_crop: "क्रॉप लागू करें",
    overwrite_warning: "* वर्तमान छवि को अधिलेखित करता है",
    segments_label: "खंड",
    crop_ratio_label: "क्रॉप अनुपात",
    custom_ratio: "कस्टम",
    split_direction_label: "विभाजन दिशा",
    split_cols: "कॉलम (ऊर्ध्वाधर)",
    split_rows: "पंक्तियाँ (क्षैतिज)",
    width_label: "चौड़ाई",
    height_label: "ऊंचाई",
    split_image_btn: "छवि विभाजित करें",
    processing: "प्रक्रिया की जा रही है...",
    change_img: "छवि बदलें",
    reset_all: "सभी रीसेट करें",
    reset_image: "इमेज रीसेट करें",
    edit_mode: "संपादन मोड",
    interactive_preview: "इंटरएक्टिव पूर्वावलोकन",
    results_label: "परिणाम",
    feature_client_side_title: "100% क्लाइंट-साइड",
    feature_client_side_desc:
      "आपकी तस्वीरें कभी भी आपके डिवाइस को नहीं छोड़ती हैं। अधिकतम गोपनीयता के लिए आपके ब्राउज़र में ही सारी प्रोसेसिंग होती है।",
    feature_instant_title: "तत्काल विभाजन",
    feature_instant_desc:
      "कोई अपलोड प्रतीक्षा समय नहीं। अनुकूलित ब्राउज़र-आधारित कैनवास तकनीक के लिए धन्यवाद विभाजन तुरंत होता है।",
    feature_quality_title: "कोई गुणवत्ता हानि नहीं",
    feature_quality_desc:
      "हम यह सुनिश्चित करने के लिए उच्च-निष्ठा निर्यात सेटिंग्स को प्राथमिकता देते हैं कि आपका TikTok हिंडोला कुरकुरा और पेशेवर दिखे।",
    feature_free_title: "100% निःशुल्क",
    feature_free_desc:
      "कोई सदस्यता नहीं, कोई वॉटरमार्क नहीं, कोई छिपी हुई फीस नहीं। रचनाकारों के लिए बस एक सरल उपकरण।",
    ratio_free: "मुक्त",
    faq_title: "अक्सर पूछे जाने वाले प्रश्न",
    faq_1_q: "मैं TikTok के लिए एक सीमलेस हिंडोला कैसे बनाऊं?",
    faq_1_a:
      "अपनी पैनोरमिक छवि अपलोड करें, '3 खंड' (या अधिक) चुनें, और इसे विभाजित करने के लिए हमारे टूल का उपयोग करें। TikTok पर पोस्ट करते समय, 'फोटो मोड' चुनें और छवियों को क्रम में अपलोड करें। परिणाम एक स्वाइप करने योग्य, सीमलेस पैनोरमा होगा।",
    faq_2_q: "क्या मेरी तस्वीरें यहाँ अपलोड करना सुरक्षित है?",
    faq_2_a:
      "हाँ! वास्तव में, आप उन्हें कहीं भी 'अपलोड' नहीं कर रहे हैं। यह टूल पूरी तरह से आपके ब्राउज़र में चलता है। आपकी छवियां कभी भी सर्वर पर नहीं भेजी जाती हैं, जो 100% गोपनीयता सुनिश्चित करती हैं।",
    faq_3_q: "TikTok स्लाइड के लिए सबसे अच्छा आकार क्या है?",
    faq_3_a:
      "TikTok 9:16 पहलू अनुपात (1080x1920 पिक्सेल) की सिफारिश करता है। मानक सेटिंग्स का उपयोग करते समय हमारा टूल स्वचालित रूप से आपके लिए यह अनुपात सेट करता है।",
    faq_4_q: "क्या मैं Instagram के लिए भी छवियां विभाजित कर सकता हूं?",
    faq_4_a:
      "बिल्कुल! जबकि TikTok के लिए डिज़ाइन किया गया है, विभाजित छवियां Instagram हिंडोला (स्वाइप करने योग्य पोस्ट) के लिए पूरी तरह से काम करती हैं। बस 4:5 या 1:1 अनुपात विकल्प चुनें।",
    about_tool_title: "इस टूल के बारे में",
    about_tool_desc:
      "Easy Split आधुनिक सामग्री रचनाकारों के लिए डिज़ाइन की गई रचनात्मक उपयोगिताओं का एक सूट है। हम उन उपकरणों को बनाने में विश्वास करते हैं जो तेज़, मुफ़्त हैं और उपयोगकर्ता की गोपनीयता का सम्मान करते हैं।",
    privacy_commitment_title: "गोपनीयता प्रतिबद्धता",
    privacy_commitment_desc:
      "यह इमेज स्प्लिटर सख्ती से क्लाइंट-साइड संचालित होता है। हम आपकी छवियों को संग्रहीत, नहीं देखते या प्रसारित नहीं करते हैं। 'डाउनलोड' तर्क बस संसाधित कैनवास डेटा को सीधे आपके ब्राउज़र की मेमोरी से आपके डिस्क पर सहेजता है।",
    created_by: "द्वारा निर्मित",
    contact: "संपर्क",
    new_dynamic_split: "नया: गतिशील विभाजन",
    privacy_title: "गोपनीयता नीति",
    last_updated: "अंतिम अद्यतन: 11 जनवरी 2026",
    privacy_intro:
      "<strong class='font-black'>Easy Split</strong> में, हम डिज़ाइन द्वारा गोपनीयता में विश्वास करते हैं। हमारे उपकरण <strong class='font-black'>क्लाइंट-साइड</strong> चलाने के लिए बनाए गए हैं, जिसका अर्थ है कि आपका डेटा (छवियां, फाइलें) आपके डिवाइस पर रहता है और हमारे सर्वर पर कभी अपलोड नहीं होता है।",
    privacy_info_collect_title: "1. जानकारी जो हम एकत्र करते हैं",
    privacy_info_collect_desc:
      "चूंकि हमें उपयोगकर्ता खातों की आवश्यकता नहीं है और हम स्थानीय रूप से फ़ाइलों को संसाधित करते हैं, इसलिए हम न्यूनतम डेटा एकत्र करते हैं:",
    privacy_usage_data:
      "<strong>उपयोग डेटा:</strong> हम यह समझने के लिए तृतीय-पक्ष एनालिटिक्स (जैसे Google Analytics) का उपयोग कर सकते हैं कि उपयोगकर्ता हमारी साइट को कैसे नेविगेट करते हैं। यह डेटा अज्ञात है और इसमें व्यक्तिगत फ़ाइलें शामिल नहीं हैं।",
    privacy_cookies:
      "<strong>कुकीज़:</strong> हम आपकी प्राथमिकताओं (जैसे भाषा सेटिंग्स) को याद रखने के लिए आवश्यक कुकीज़ का उपयोग करते हैं।",
    privacy_process_files_title: "2. हम आपकी फ़ाइलों को कैसे संसाधित करते हैं",
    privacy_process_files_desc:
      "जब आप हमारे <strong>इमेज स्प्लिटर</strong> जैसे टूल का उपयोग करते हैं, तो सभी छवि हेरफेर HTML5 कैनवास तकनीक का उपयोग करके आपके वेब ब्राउज़र के अंदर होती है। <strong>हम आपकी छवियों को नहीं देखते, संग्रहीत या प्रसारित नहीं करते हैं।</strong>",
    privacy_ads_title: "3. विज्ञापन (Google AdSense)",
    privacy_ads_desc:
      "हम विज्ञापन दिखाने के लिए Google सहित तृतीय-पक्ष विक्रेताओं का उपयोग करते हैं जो उपयोगकर्ता की हमारी वेबसाइट या अन्य वेबसाइटों पर पिछली यात्राओं पर आधारित होते हैं।",
    privacy_ads_point1:
      "Google द्वारा विज्ञापन कुकीज़ का उपयोग इसे और इसके भागीदारों को आपकी साइटों और/या इंटरनेट पर अन्य साइटों पर उनकी यात्रा के आधार पर आपके उपयोगकर्ताओं को विज्ञापन दिखाने में सक्षम बनाता है।",
    privacy_ads_point2:
      "उपयोगकर्ता <a href='https://www.google.com/settings/ads' target='_blank' rel='nofollow noreferrer'>Google विज्ञापन सेटिंग</a> पर जाकर व्यक्तिगत विज्ञापन से बाहर निकल सकते हैं।",
    privacy_links_title: "4. तृतीय-पक्ष लिंक",
    privacy_links_desc:
      "हमारी वेबसाइट में अन्य वेबसाइटों के लिंक हो सकते हैं। यदि आप किसी तृतीय-पक्ष लिंक पर क्लिक करते हैं, तो आपको उस साइट पर निर्देशित किया जाएगा। ध्यान दें कि ये बाहरी साइटें हमारे द्वारा संचालित नहीं हैं। इसलिए, हम आपको इन वेबसाइटों की गोपनीयता नीति की समीक्षा करने की दृढ़ता से सलाह देते हैं।",
    privacy_contact_title: "5. हमसे संपर्क करें",
    privacy_contact_desc:
      "यदि हमारी गोपनीयता नीति के बारे में आपके कोई प्रश्न या सुझाव हैं, तो हमसे संपर्क करने में संकोच न करें।",
    owner_label: "मालिक",
    terms_title: "सेवा की शर्तें",
    terms_last_updated: "अंतिम अद्यतन: 11 जनवरी 2026",
    terms_intro:
      "कृपया <strong class='font-black'>hba-dev</strong> ('हम', 'हमें' या 'हमारा') द्वारा संचालित <strong class='font-black'>Easy Split</strong> वेबसाइट का उपयोग करने से पहले इन सेवा की शर्तों ('शर्तें', 'सेवा की शर्तें') को ध्यान से पढ़ें।",
    terms_conditions_title: "1. उपयोग की शर्तें",
    terms_conditions_desc:
      "इस वेबसाइट का उपयोग करके, आप प्रमाणित करते हैं कि आपने इस समझौते को पढ़ा और समीक्षा की है और आप इसकी शर्तों का पालन करने के लिए सहमत हैं। यदि आप इस समझौते की शर्तों से बाध्य नहीं होना चाहते हैं, तो आपको तदनुसार वेबसाइट का उपयोग बंद करने की सलाह दी जाती है।",
    terms_ip_title: "2. बौद्धिक संपदा",
    terms_ip_desc:
      "आप सहमत हैं कि इस वेबसाइट पर प्रदान की गई सभी सामग्री, उत्पाद और सेवाएं वेबसाइट के मालिक, उसके सहयोगियों, निदेशकों, अधिकारियों, कर्मचारियों, एजेंटों, आपूर्तिकर्ताओं या लाइसेंसदाताओं की संपत्ति हैं, जिसमें सभी कॉपीराइट, व्यापार रहस्य, ट्रेडमार्क, पेटेंट और अन्य बौद्धिक संपदा शामिल हैं।",
    terms_ugc_label: "उपयोगकर्ता निर्मित सामग्री",
    terms_ugc_desc:
      "आप हमारे टूल का उपयोग करके संसाधित की गई किसी भी छवि या सामग्री का पूर्ण स्वामित्व बनाए रखते हैं। चूंकि हम आपकी फ़ाइलों को संग्रहीत नहीं करते हैं, इसलिए आप अपनी सामग्री के लिए पूरी तरह से जिम्मेदार हैं।",
    terms_acceptable_use_title: "3. स्वीकार्य उपयोग",
    terms_acceptable_use_desc:
      "आप सहमत हैं कि हमारे विशिष्ट टूल का उपयोग किसी भी गैरकानूनी उद्देश्य या इस खंड के तहत निषिद्ध किसी भी उद्देश्य के लिए नहीं करेंगे। आप सहमत हैं कि हमारी सेवाओं का उपयोग इसके लिए नहीं करेंगे:",
    terms_use_1: "दूसरों को परेशान करना, गाली देना या धमकी देना।",
    terms_use_2: "दूसरों के अधिकारों का उल्लंघन करना।",
    terms_use_3: "कोई भी धोखाधड़ी करना या मैलवेयर या वायरस वितरित करना।",
    terms_indemnification_title: "4. क्षतिपूर्ति",
    terms_indemnification_desc:
      "आप वेबसाइट के मालिक और उसके सहयोगियों को क्षतिपूर्ति करने और हमारी सेवाओं के आपके उपयोग या दुरुपयोग से उत्पन्न होने वाले कानूनी दावों और मांगों से हमें हानिरहित रखने के लिए सहमत हैं।",
    terms_liability_title: "5. दायित्व की सीमा",
    terms_liability_desc:
      "हम किसी भी क्षति के लिए उत्तरदायी नहीं हैं जो हमारी वेबसाइट के आपके दुरुपयोग के परिणामस्वरूप आपको हो सकती है। हम किसी भी समय इस समझौते को संपादित, संशोधित और बदलने का अधिकार सुरक्षित रखते हैं।",
    terms_contact_title: "6. संपर्क",
    terms_contact_desc:
      "इन शर्तों के संबंध में किसी भी प्रश्न के लिए, कृपया हमसे संपर्क करें:",
    about_us_title: "हमारे बारे में",
    about_us_tagline: "2026 से रचनाकारों को सशक्त बनाना",
    about_us_intro:
      "<strong class='font-black'>EASY SPLIT</strong> में आपका स्वागत है, सोशल मीडिया के लिए अपनी छवियों को विभाजित करने का सबसे आसान और तेज़ तरीका।",
    about_mission_title: "हमारा मिशन",
    about_mission_desc:
      "हमने एक साधारण लक्ष्य के साथ Easy Split शुरू किया: रचनाकारों, फोटोग्राफरों और कहानीकारों को बिना किसी सीमा के अपना काम पेश करने में मदद करना। चाहे वह Instagram पर एक सीमलेस हिंडोला हो या TikTok पर एक फोटो स्लाइड, हमारा मानना ​​है कि आपके पैनोरमिक शॉट्स को पूरी महिमा में देखा जाना चाहिए, न कि एक छोटे वर्ग में क्रॉप किया जाना चाहिए।",
    about_why_title: "हमने इसे क्यों बनाया",
    about_why_desc:
      "मौजूदा उपकरण या तो बहुत महंगे थे, विज्ञापनों से भरे थे, या आपकी निजी तस्वीरों को धीमे सर्वर पर अपलोड करने की आवश्यकता थी। हम कुछ ऐसा बनाना चाहते थे जो:",
    about_why_fast_title: "तेज़:",
    about_why_fast_desc: "शून्य अपलोड समय। सब कुछ आपके ब्राउज़र में होता है।",
    about_why_private_title: "निजी:",
    about_why_private_desc:
      "आपकी तस्वीरें कभी भी आपके डिवाइस को नहीं छोड़ती हैं।",
    about_why_free_title: "निःशुल्क:",
    about_why_free_desc: "पेशेवर उपकरण हर किसी के लिए सुलभ होने चाहिए।",
    about_meet_creator_title: "निर्माता से मिलें",
    about_creator_role: "फुलस्टैक डेवलपर और निर्माता",
    about_creator_bio:
      "मजेदार, तेज़ और कार्यात्मक 'नियो-ब्रूटलिस्ट' वेब ऐप बनाने का शौक।",
    about_say_hello: "नमस्ते कहें →",
    contact_title: "हमसे संपर्क करें",
    contact_subtitle: "हमें आपसे सुनना अच्छा लगेगा!",
    contact_email_title: "हमें ईमेल करें",
    contact_email_desc: "किसी भी पूछताछ, प्रतिक्रिया या सहायता अनुरोध के लिए।",
    contact_response_time: "हम आमतौर पर 24 घंटे के भीतर जवाब देते हैं।",
    contact_social_title: "हमें फॉलो करें",
    contact_form_name: "नाम",
    contact_form_email: "ईमेल",
    contact_form_message: "संदेश",
    contact_form_submit: "संदेश भेजें",
    cookie_banner_msg:
      "We use cookies to improve your experience. By using our site, you agree to our use of cookies.",
    cookie_accept_btn: "स्वीकार करें",
    cookie_decline_btn: "अस्वीकार करें",
    tips_title: "प्रो टिप्स: वायरल हो जाएं",
    tips_1_title: "एक कहानी सुनाएं",
    tips_1_desc:
      "केवल यादृच्छिक तस्वीरें विभाजित न करें। आश्चर्य प्रकट करने या बाएं से दाएं प्रगतिशील कहानी बताने के लिए सीमलेस स्लाइड का उपयोग करें।",
    tips_2_title: "केवल उच्च रिज़ॉल्यूशन",
    tips_2_desc:
      "TikTok छवियों को भारी रूप से संकुचित करता है। यह सुनिश्चित करने के लिए हमेशा उच्चतम संभव रिज़ॉल्यूशन के साथ शुरू करें कि आपकी विभाजित स्लाइड कुरकुरी रहें।",
    tips_3_title: "हुक",
    tips_3_desc:
      "स्क्रॉल को रोकने के लिए अपनी पहली स्लाइड (सबसे बाईं ओर) को सबसे आकर्षक बनाएं। अदायगी देने के लिए दूसरी स्लाइड का उपयोग करें।",
    not_found_title: "404 - पृष्ठ नहीं मिला",
    not_found_desc: "आप जिस पृष्ठ को ढूंढ रहे हैं वह मौजूद नहीं है।",
    not_found_home: "मुख्य पृष्ठ पर लौटें",
  },
  "pt-BR": {
    ...profileTranslations["pt-BR"],
    title: "Easy Split - Divisor de Imagens",
    subtitle:
      "Divida suas fotos em grades perfeitas ou slides verticais. Perfeito para TikTok, Instagram e muito mais.",
    upload_title: "Alterar Imagem",
    upload_placeholder: "Clique ou arraste a imagem aqui",
    upload_desc: "Suporta JPG, PNG, WEBP, AVIF, BMP. Formato recomendado 16:9",
    ready_msg: "Pronto para download",
    download_all: "Baixar Tudo (ZIP)",
    download_part: "Salvar Imagem",
    download_zip_mobile: "Baixar ZIP",
    download_image: "Baixar Imagem",
    part: "Parte",
    article_title: "Como Dividir Fotos para Slides de Carrossel Perfeitos",
    article_intro:
      "Postar panoramas enormes ou imagens largas geralmente resulta em perda de qualidade ou cortes estranhos. EASY SPLIT resolve isso cortando sua imagem em segmentos perfeitamente alinhados para TikTok, carrosséis do Instagram e muito mais.",
    article_why_title: "Por que dividir suas imagens?",
    article_why_1:
      "Aumento do engajamento: Os espectadores deslizam para ver a imagem completa.",
    article_why_2:
      "Melhor narrativa: Crie experiências panorâmicas nas redes sociais.",
    article_why_3:
      "Alta qualidade: O processamento no lado do cliente garante uma saída nítida.",
    how_to_title: "Guia do Usuário",
    how_to_1: "Carregue qualquer imagem (panoramas funcionam melhor).",
    how_to_2: "Escolha quantos segmentos você deseja (2 a 10).",
    how_to_3: "Ajuste a área de corte se necessário, depois clique em Split.",
    how_to_4: "Baixe seus segmentos e carregue-os na sua plataforma favorita.",
    nav_home: "Easy Split",
    nav_splitter: "Divisor de Imagens",
    privacy: "Política de Privacidade",
    cookie_policy: "Política de Cookies",
    terms: "Termos de Serviço",
    footer_rights: "EASY SPLIT. Todos os direitos reservados.",
    about: "Sobre Nós",
    tab_edit: "Editar",
    tab_split: "Dividir",
    transform_label: "Transformar",
    rotate_btn: "Girar",
    flip_h_btn: "Espelhar Horizontalmente",
    open_crop: "Abrir Ferramenta de Corte",
    cancel_crop: "Cancelar Corte",
    actions_label: "Ações",
    apply_crop: "Aplicar Corte",
    overwrite_warning: "* Substitui a imagem atual",
    segments_label: "Segmentos",
    crop_ratio_label: "Proporção de Corte",
    custom_ratio: "Personalizado",
    split_direction_label: "Direção de Divisão",
    split_cols: "Colunas (Vertical)",
    split_rows: "Linhas (Horizontal)",
    width_label: "Largura",
    height_label: "Altura",
    split_image_btn: "Dividir Imagem",
    processing: "Processando...",
    change_img: "Alterar Imagem",
    reset_all: "Redefinir Tudo",
    reset_image: "Redefinir Imagem",
    edit_mode: "Modo de Edição",
    interactive_preview: "Visualização Interativa",
    results_label: "Resultados",
    feature_client_side_title: "100% Lado do Cliente",
    feature_client_side_desc:
      "Suas fotos nunca saem do seu dispositivo. Todo o processamento acontece diretamente no seu navegador para máxima privacidade.",
    feature_instant_title: "Divisão Instantânea",
    feature_instant_desc:
      "Sem tempo de espera para upload. A divisão acontece instantaneamente graças à tecnologia canvas otimizada baseada no navegador.",
    feature_quality_title: "Sem Perda de Qualidade",
    feature_quality_desc:
      "Priorizamos configurações de exportação de alta fidelidade para garantir que seu carrossel do TikTok pareça nítido e profissional.",
    feature_free_title: "100% Grátis",
    feature_free_desc:
      "Sem assinaturas, sem marcas d'água, sem taxas ocultas. Apenas uma ferramenta simples para criadores.",
    ratio_free: "Livre",
    faq_title: "Perguntas Frequentes",
    faq_1_q: "Como faço um carrossel perfeito para o TikTok?",
    faq_1_a:
      "Carregue sua imagem panorâmica, escolha '3 Segmentos' (ou mais) e use nossa ferramenta para dividi-la. Ao postar no TikTok, escolha o 'Modo Foto' e carregue as imagens em ordem. O resultado será um panorama perfeito e deslizável.",
    faq_2_q: "É seguro carregar minhas fotos aqui?",
    faq_2_a:
      "Sim! Na verdade, você não está 'carregando' para lugar nenhum. Esta ferramenta roda inteiramente no seu navegador. Suas imagens nunca são enviadas para um servidor, garantindo 100% de privacidade.",
    faq_3_q: "Qual é o melhor tamanho para slides do TikTok?",
    faq_3_a:
      "O TikTok recomenda uma proporção de 9:16 (1080x1920 pixels). Nossa ferramenta define automaticamente essa proporção para você ao usar as configurações padrão.",
    faq_4_q: "Posso dividir imagens para o Instagram também?",
    faq_4_a:
      "Com certeza! Embora projetado para o TikTok, as imagens divididas funcionam perfeitamente para carrosséis do Instagram (postagens deslizáveis). Basta escolher a opção de proporção 4:5 ou 1:1.",
    about_tool_title: "Sobre esta Ferramenta",
    about_tool_desc:
      "Easy Split é um conjunto de utilitários criativos projetados para criadores de conteúdo modernos. Acreditamos na construção de ferramentas rápidas, gratuitas e que respeitam a privacidade do usuário.",
    privacy_commitment_title: "Compromisso de Privacidade",
    privacy_commitment_desc:
      "Este divisor de imagens opera estritamente no lado do cliente. Nós não armazenamos, visualizamos ou transmitimos suas imagens. A lógica de 'Download' apenas salva os dados processados do canvas diretamente da memória do navegador para o seu disco.",
    created_by: "Criado por",
    contact: "Contato",
    new_dynamic_split: "Novo: Divisão Dinâmica",
    privacy_title: "Política de Privacidade",
    last_updated: "Última atualização: 11 de janeiro de 2026",
    privacy_intro:
      "No <strong class='font-black'>Easy Split</strong>, acreditamos na privacidade desde o design. Nossas ferramentas são construídas para rodar <strong class='font-black'>no lado do cliente</strong>, o que significa que seus dados (imagens, arquivos) permanecem no seu dispositivo e nunca são carregados para nossos servidores.",
    privacy_info_collect_title: "1. Informações que coletamos",
    privacy_info_collect_desc:
      "Como não exigimos contas de usuário e processamos arquivos localmente, coletamos o mínimo de dados:",
    privacy_usage_data:
      "<strong>Dados de uso:</strong> Podemos usar análises de terceiros (como o Google Analytics) para entender como os usuários navegam em nosso site. Esses dados são anônimos e não incluem arquivos pessoais.",
    privacy_cookies:
      "<strong>Cookies:</strong> Usamos cookies essenciais para lembrar suas preferências (como configurações de idioma).",
    privacy_process_files_title: "2. Como processamos seus arquivos",
    privacy_process_files_desc:
      "Quando você usa ferramentas como nosso <strong>Divisor de Imagens</strong>, toda a manipulação de imagem acontece dentro do seu navegador usando a tecnologia HTML5 Canvas. <strong>Nós não vemos, armazenamos ou transmitimos suas imagens.</strong>",
    privacy_ads_title: "3. Publicidade (Google AdSense)",
    privacy_ads_desc:
      "Usamos fornecedores terceirizados, incluindo o Google, para veicular anúncios com base nas visitas anteriores do usuário ao nosso site ou a outros sites.",
    privacy_ads_point1:
      "O uso de cookies de publicidade pelo Google permite que ele e seus parceiros veiculem anúncios para seus usuários com base em suas visitas aos seus sites e/ou outros sites na Internet.",
    privacy_ads_point2:
      "Os usuários podem optar por sair da publicidade personalizada visitando as <a href='https://www.google.com/settings/ads' target='_blank' rel='nofollow noreferrer'>Configurações de Anúncios do Google</a>.",
    privacy_links_title: "4. Links de Terceiros",
    privacy_links_desc:
      "Nosso site pode conter links para outros sites. Se você clicar em um link de terceiros, será direcionado para esse site. Observe que esses sites externos não são operados por nós. Portanto, recomendamos fortemente que você reveja a Política de Privacidade desses sites.",
    privacy_contact_title: "5. Contate-nos",
    privacy_contact_desc:
      "Se você tiver alguma dúvida ou sugestão sobre nossa Política de Privacidade, não hesite em nos contatar.",
    owner_label: "Proprietário",
    terms_title: "Termos de Serviço",
    terms_last_updated: "Última atualização: 11 de janeiro de 2026",
    terms_intro:
      "Por favor, leia estes termos de serviço ('Termos', 'Termos de Serviço') cuidadosamente antes de usar o site <strong class='font-black'>Easy Split</strong> operado pela <strong class='font-black'>hba-dev</strong> ('nós', 'nos' ou 'nosso').",
    terms_conditions_title: "1. Condições de Uso",
    terms_conditions_desc:
      "Ao usar este site, você certifica que leu e revisou este Acordo e concorda em cumprir seus termos. Se você não quiser ficar vinculado aos termos deste Acordo, é aconselhável que pare de usar o site.",
    terms_ip_title: "2. Propriedade Intelectual",
    terms_ip_desc:
      "Você concorda que todos os materiais, produtos e serviços fornecidos neste site são propriedade do proprietário do site, suas afiliadas, diretores, executivos, funcionários, agentes, fornecedores ou licenciadores, incluindo todos os direitos autorais, segredos comerciais, marcas registradas, patentes e outras propriedades intelectuais.",
    terms_ugc_label: "Conteúdo Gerado pelo Usuário",
    terms_ugc_desc:
      "Você mantém a propriedade total de quaisquer imagens ou conteúdo que processar usando nossas ferramentas. Como não armazenamos seus arquivos, você é o único responsável pelo seu próprio conteúdo.",
    terms_acceptable_use_title: "3. Uso Aceitável",
    terms_acceptable_use_desc:
      "Você concorda em não usar nossas ferramentas específicas para fins ilegais ou proibidos por esta cláusula. Você concorda em não usar nossos serviços para:",
    terms_use_1: "Assediar, abusar ou ameaçar outras pessoas.",
    terms_use_2: "Violar os direitos de outras pessoas.",
    terms_use_3: "Cometer qualquer fraude ou distribuir malware ou vírus.",
    terms_indemnification_title: "4. Indenização",
    terms_indemnification_desc:
      "Você concorda em indenizar o proprietário do site e suas afiliadas e nos isentar de reivindicações e demandas legais que possam surgir do seu uso ou mau uso de nossos serviços.",
    terms_liability_title: "5. Limitação de Responsabilidade",
    terms_liability_desc:
      "Não somos responsáveis por quaisquer danos que possam ocorrer a você como resultado do mau uso do nosso site. Reservamo-nos o direito de editar, modificar e alterar este Acordo a qualquer momento.",
    terms_contact_title: "6. Contato",
    terms_contact_desc:
      "Para quaisquer dúvidas sobre estes Termos, entre em contato conosco em:",
    about_us_title: "Sobre Nós",
    about_us_tagline: "Empoderando Criadores desde 2026",
    about_us_intro:
      "Bem-vindo ao <strong class='font-black'>EASY SPLIT</strong>, a maneira mais simples e rápida de dividir suas imagens para redes sociais.",
    about_mission_title: "Nossa Missão",
    about_mission_desc:
      "Começamos o Easy Split com um objetivo simples: ajudar criadores, fotógrafos e contadores de histórias a apresentar seu trabalho sem limites. Seja um carrossel perfeito no Instagram ou um slide de fotos no TikTok, acreditamos que suas fotos panorâmicas merecem ser vistas em toda a sua glória, não cortadas em um quadrado minúsculo.",
    about_why_title: "Por que construímos isso",
    about_why_desc:
      "Ferramentas existentes eram muito caras, cheias de anúncios ou exigiam o upload de suas fotos privadas para um servidor lento. Queríamos construir algo que fosse:",
    about_why_fast_title: "Rápido:",
    about_why_fast_desc:
      "Zero tempo de upload. Tudo acontece no seu navegador.",
    about_why_private_title: "Privado:",
    about_why_private_desc: "Suas fotos nunca saem do seu dispositivo.",
    about_why_free_title: "Grátis:",
    about_why_free_desc:
      "Ferramentas profissionais devem ser acessíveis a todos.",
    about_meet_creator_title: "Conheça o Criador",
    about_creator_role: "Desenvolvedor Fullstack & Criador",
    about_creator_bio:
      "Apaixonado por construir aplicativos web 'neo-brutalistas' divertidos, rápidos e funcionais.",
    about_say_hello: "Diga Olá →",
    contact_title: "Fale Conosco",
    contact_subtitle: "Adoraríamos ouvir de você!",
    contact_email_title: "Envie um Email",
    contact_email_desc: "Para dúvidas, feedbacks ou suporte.",
    contact_response_time: "Geralmente respondemos em 24 horas.",
    contact_social_title: "Siga-nos",
    contact_form_name: "Nome",
    contact_form_email: "Email",
    contact_form_message: "Mensagem",
    contact_form_submit: "Enviar Mensagem",
    cookie_banner_msg:
      "We use cookies to improve your experience. By using our site, you agree to our use of cookies.",
    cookie_accept_btn: "Aceitar",
    cookie_decline_btn: "Recusar",
    tips_title: "Dicas Pro: Viralize",
    tips_1_title: "Conte uma História",
    tips_1_desc:
      "Não divida fotos aleatórias. Use o slide contínuo para revelar uma surpresa ou contar uma história da esquerda para a direita.",
    tips_2_title: "Alta Resolução",
    tips_2_desc:
      "O TikTok comprime muito as imagens. Comece sempre com a resolução mais alta para garantir nitidez.",
    tips_3_title: "O Gancho",
    tips_3_desc:
      "Faça seu primeiro slide (o mais à esquerda) o mais cativante para parar a rolagem. Use o segundo para entregar o conteúdo.",
    not_found_title: "404 - Página não encontrada",
    not_found_desc: "A página que você está procurando não existe.",
    not_found_home: "Voltar para a página inicial",
  },
};
