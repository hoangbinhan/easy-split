"use client";

import { useRef, useEffect } from "react";

interface EditableTextProps {
  value: string;
  onChange: (value: string) => void;
  className?: string;
  tagName?: "h1" | "h2" | "h3" | "p" | "span" | "div";
}

export function EditableText({
  value,
  onChange,
  className = "",
  tagName = "span",
}: EditableTextProps) {
  const ref = useRef<HTMLElement>(null);

  // Sync ref with value only when not focused to avoid cursor jumping
  useEffect(() => {
    if (
      ref.current &&
      document.activeElement !== ref.current &&
      ref.current.innerText !== value
    ) {
      ref.current.innerText = value;
    }
  }, [value]);

  const Tag = tagName as any;

  return (
    <Tag
      ref={ref}
      contentEditable
      suppressContentEditableWarning
      className={`outline-none min-w-[20px] cursor-text transition-colors focus:bg-white/10 hover:bg-white/5 rounded px-1 ${className}`}
      onBlur={(e: React.FocusEvent<HTMLElement>) => {
        onChange(e.currentTarget.innerText);
      }}
      onKeyDown={(e: React.KeyboardEvent<HTMLElement>) => {
        if (e.key === "Enter") {
          e.preventDefault();
          e.currentTarget.blur();
        }
      }}
    />
  );
}
