import React from "react";
import ImageSplitterClient from "./splitter-client";
import { Metadata } from "next";

export const runtime = "edge";

export const metadata: Metadata = {
  title: "TikTok Image Splitter | Free Online Grid Maker",
  description:
    "Split your 16:9 images into 3 perfectly sized 9:16 vertical segments for TikTok carousels. Free, fast, and no quality loss.",
};

export default function ImageSplitterPage() {
  return (
    <div className="space-y-16">
      <section className="text-center space-y-4 pt-4 sm:pt-8">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
          TikTok Slide Splitter
        </h1>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
          Convert your landscape photos into 3 seamless vertical slides for
          TikTok. Upload once, get three perfectly cropped images.
        </p>
      </section>

      <ImageSplitterClient />

      <article className="prose prose-slate lg:prose-lg mx-auto bg-white p-6 sm:p-10 rounded-2xl shadow-sm border border-slate-100">
        <h2 className="text-2xl font-bold text-slate-900">
          Cách cắt ảnh slide TikTok không bị đen
        </h2>
        <p>
          Việc đăng tải hình ảnh lên TikTok thường gặp vấn đề bị viền đen nếu
          không đúng tỷ lệ. Công cụ <strong>TikTok Image Splitter</strong> giúp
          bạn giải quyết triệt để vấn đề này bằng cách tự động cắt ảnh theo tỷ
          lệ chuẩn 9:16.
        </p>

        <h3 className="text-xl font-semibold text-slate-800 mt-6">
          Tại sao nên dùng ảnh chế độ Slide (Carousel)?
        </h3>
        <ul className="list-disc pl-5 space-y-2">
          <li>
            <strong>Tăng tương tác:</strong> Người xem có xu hướng vuốt (swipe)
            để xem hết nội dung, giúp tăng thời gian xem (watch time).
          </li>
          <li>
            <strong>Kể chuyện tốt hơn:</strong> Bạn có thể chia nhỏ một bức ảnh
            toàn cảnh (panorama) thành 3 phần liên tiếp, tạo hiệu ứng thị giác
            thú vị.
          </li>
          <li>
            <strong>Chất lượng cao:</strong> Công cụ xử lý ảnh ngay trên trình
            duyệt của bạn, đảm bảo file xuất ra sắc nét, không bị nén quá mức.
          </li>
        </ul>

        <h3 className="text-xl font-semibold text-slate-800 mt-6">
          Hướng dẫn sử dụng
        </h3>
        <ol className="list-decimal pl-5 space-y-2">
          <li>Tải lên ảnh kích thước 16:9 (hoặc ảnh ngang bất kỳ).</li>
          <li>
            Đợi hệ thống tự động tính toán và chia ảnh thành 3 phần bằng nhau.
          </li>
          <li>
            Bấm <strong>Download All</strong> để tải trọn bộ hoặc tải từng tấm
            riêng lẻ.
          </li>
          <li>Vào TikTok, chọn chế độ "Ảnh" và chọn 3 ảnh theo đúng thứ tự.</li>
        </ol>
      </article>
    </div>
  );
}
