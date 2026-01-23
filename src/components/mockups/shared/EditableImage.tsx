"use client";

import { useRef } from "react";
import { Upload } from "lucide-react";

interface EditableImageProps {
  src: string;
  onImageChange: (newSrc: string) => void;
  className?: string;
  alt?: string;
  rounded?: string;
}

export function EditableImage({
  src,
  onImageChange,
  className = "",
  alt = "Image",
  rounded = "rounded-full",
}: EditableImageProps) {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log("handleFileChange");

    const file = e.target.files?.[0];
    console.log("file", file);
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        onImageChange(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div
      className={`relative group cursor-pointer overflow-hidden ${rounded} ${className} bg-gray-200`}
      onClick={() => fileInputRef.current?.click()}
    >
      <img src={src} alt={alt} className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity z-8">
        <Upload className="w-6 h-6 text-white text-shadow-sm" />
      </div>
      <input
        type="file"
        ref={fileInputRef}
        className="hidden"
        accept="image/*"
        onChange={handleFileChange}
      />
    </div>
  );
}
