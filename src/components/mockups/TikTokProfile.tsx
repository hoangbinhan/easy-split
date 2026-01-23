"use client";

import React, { useEffect, useState } from "react";
import { Menu, Lock, Grid, Heart, Bookmark } from "lucide-react";
import { EditableText } from "./shared/EditableText";
import { EditableImage } from "./shared/EditableImage";

import { useRef, forwardRef, useImperativeHandle } from "react";

interface TikTokProfileProps {
  isDark: boolean;
}

export interface ProfileRefs {
  frameRef: HTMLDivElement | null;
  scrollRef: HTMLDivElement | null;
  screenRef: HTMLDivElement | null;
}

export const TikTokProfile = forwardRef<ProfileRefs, TikTokProfileProps>(
  ({ isDark }, ref) => {
    const frameRef = useRef<HTMLDivElement>(null);
    const scrollRef = useRef<HTMLDivElement>(null);
    const screenRef = useRef<HTMLDivElement>(null);

    useImperativeHandle(ref, () => ({
      get frameRef() {
        return frameRef.current;
      },
      get scrollRef() {
        return scrollRef.current;
      },
      get screenRef() {
        return screenRef.current;
      },
    }));

    const [activeTab, setActiveTab] = useState<
      "videos" | "private" | "liked" | "favorites"
    >("videos");
    const [avatar, setAvatar] = useState("/android-chrome-192x192.png");
    const [username, setUsername] = useState("@easysplit.click");
    const [name, setName] = useState("Easy Split");
    const [isMounted, setIsMounted] = useState(false);

    // Stats
    const [following, setFollowing] = useState("142");
    const [followers, setFollowers] = useState("10.5M");
    const [likes, setLikes] = useState("502.4M");

    const [bio, setBio] = useState(
      "✨ Creating for you \n🎥 New video every day\n👇 Check my links below",
    );

    // Grid images placeholders - 12 items
    const [gridImages, setGridImages] = useState(
      Array(12).fill("/android-chrome-192x192.png"),
    );
    useEffect(() => {
      setIsMounted(true);
    }, []);

    return (
      <div className="flex flex-col items-center gap-8 w-full max-w-4xl mx-auto">
        {/* Device Frame */}
        <div
          ref={frameRef}
          className={`
        relative mx-auto border-gray-800 dark:border-gray-800 bg-gray-800 border-8 rounded-[2.5rem] h-[800px] w-[375px] shadow-2xl overflow-hidden
        ${isDark ? "dark" : ""}
      `}
        >
          <div
            ref={screenRef}
            className="w-full h-full flex flex-col relative bg-white dark:bg-black"
          >
            {/* Internal Content */}
            {/* <div className="h-[32px] bg-transparent absolute top-0 w-full z-20 pointer-events-none flex justify-between px-6 pt-3 text-[10px] font-bold text-white mix-blend-difference">
              <span>9:41</span>
              <div className="flex gap-1">
                <span>IIII</span>
                <span>Wi-Fi</span>
                <span>Battery</span>
              </div>
            </div> */}

            <div
              ref={scrollRef}
              data-mockup-scroll="true"
              className={`flex-1 overflow-y-auto scrollbar-hide w-full ${isDark ? "bg-[#121212] text-white" : "bg-white text-black"}`}
            >
              {/* Header */}
              <header
                className={`flex justify-between items-center px-4 pt-6 pb-2 sticky top-0 z-10 backdrop-blur-md ${isDark ? "bg-[#121212]/80" : "bg-white/80"}`}
              >
                {/* <ChevronLeft className="w-7 h-7 cursor-pointer" /> */}
                <div className="w-7 h-7" />
                <div className="font-bold flex items-center gap-1 text-md">
                  <EditableText
                    value={name}
                    onChange={setName}
                    className="max-w-[150px] truncate block text-center"
                  />
                  {/* Verified Badge */}
                  <svg
                    className="w-3.5 h-3.5 text-cyan-400 fill-current"
                    viewBox="0 0 24 24"
                  >
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                  </svg>
                </div>
                <Menu className="w-6 h-6 cursor-pointer" />
              </header>

              {/* Profile Section */}
              <div className="flex flex-col items-center pt-4 pb-4">
                <EditableImage
                  src={avatar}
                  onImageChange={setAvatar}
                  className={`w-24 h-24 border-2 ${isDark ? "border-gray-800" : "border-gray-100"}`}
                />

                <div className="mt-3 flex items-center gap-1 text-sm font-semibold">
                  <EditableText
                    value={username}
                    onChange={setUsername}
                    tagName="span"
                  />
                </div>

                <div className="flex justify-center gap-12 mt-6 w-full px-8">
                  <div className="flex flex-col items-center cursor-pointer">
                    <EditableText
                      value={following}
                      onChange={setFollowing}
                      className="font-bold text-lg leading-none"
                    />
                    <span className="text-gray-400 text-xs mt-1">
                      Following
                    </span>
                  </div>
                  <div className="flex flex-col items-center cursor-pointer">
                    <EditableText
                      value={followers}
                      onChange={setFollowers}
                      className="font-bold text-lg leading-none"
                    />
                    <span className="text-gray-400 text-xs mt-1">
                      Followers
                    </span>
                  </div>
                  <div className="flex flex-col items-center cursor-pointer">
                    <EditableText
                      value={likes}
                      onChange={setLikes}
                      className="font-bold text-lg leading-none"
                    />
                    <span className="text-gray-400 text-xs mt-1">Likes</span>
                  </div>
                </div>

                <div className="mt-6 px-12 text-center text-sm whitespace-pre-wrap leading-relaxed min-h-[40px]">
                  <EditableText value={bio} onChange={setBio} tagName="p" />
                </div>

                {/* Action Buttons */}
                {/* <div className="flex items-center gap-2 mt-6 w-full px-12">
                  <button className="flex-1 py-3 bg-[#fe2c55] text-white font-semibold rounded-[4px] text-sm hover:bg-[#e62248] transition-colors">
                    Follow
                  </button>
                  <button
                    className={`p-3 border rounded-[4px] transition-colors ${isDark ? "border-gray-700 hover:bg-gray-800" : "border-gray-200 hover:bg-gray-50"}`}
                  >
                    <Instagram className="w-5 h-5" />
                  </button>
                  <button
                    className={`p-3 border rounded-[4px] transition-colors ${isDark ? "border-gray-700 hover:bg-gray-800" : "border-gray-200 hover:bg-gray-50"}`}
                  >
                    <ChevronLeft className="w-5 h-5 rotate-270" />
                  </button>
                </div> */}
              </div>

              {/* Tabs */}
              <div
                className={`grid grid-cols-4 border-b mt-2 sticky top-[80px] z-9 ${isDark ? "border-gray-800 bg-[#121212]" : "border-gray-200 bg-white"}`}
              >
                {[
                  { id: "videos", icon: Grid },
                  { id: "private", icon: Lock },
                  { id: "favorites", icon: Bookmark },
                  { id: "liked", icon: Heart },
                ].map((tab) => (
                  <div
                    key={tab.id}
                    className={`flex items-center justify-center py-3 cursor-pointer relative transition-colors ${activeTab === tab.id ? (isDark ? "text-white" : "text-black") : "text-gray-400"}`}
                    onClick={() =>
                      setActiveTab(
                        tab.id as "videos" | "private" | "liked" | "favorites",
                      )
                    }
                  >
                    <tab.icon
                      className={`w-5 h-5 ${activeTab === tab.id ? "" : ""}`}
                    />
                    {activeTab === tab.id && (
                      <div
                        className={`absolute bottom-0 w-8 h-[2px] rounded-t-sm ${isDark ? "bg-white" : "bg-black"}`}
                      />
                    )}
                  </div>
                ))}
              </div>

              {/* Grid */}
              <div
                className={`grid grid-cols-3 gap-px min-h-[300px] ${isDark ? "bg-black" : "bg-white"}`}
              >
                {activeTab === "videos" &&
                  gridImages.map((img, i) => (
                    <div key={i} className="relative aspect-3/4 group">
                      <EditableImage
                        src={img}
                        onImageChange={(newSrc) => {
                          const newImages = [...gridImages];
                          newImages[i] = newSrc;
                          setGridImages(newImages);
                        }}
                        className="w-full h-full object-cover"
                        rounded="rounded-none"
                        key={`grid-${i}`}
                      />
                      <div className="absolute bottom-1 left-1 flex items-center gap-1 text-white drop-shadow-md">
                        <svg
                          viewBox="0 0 24 24"
                          className="w-3 h-3 fill-current"
                        >
                          <path d="M8 5v14l11-7z"></path>
                        </svg>
                        <span className="text-[10px] font-bold">
                          {isMounted ? (Math.random() * 10).toFixed(1) : 0}K
                        </span>
                      </div>
                    </div>
                  ))}
                {activeTab !== "videos" && (
                  <div className="col-span-3 flex flex-col items-center justify-center py-20 text-gray-400 text-center gap-4">
                    {activeTab === "private" && (
                      <Lock className="w-16 h-16 opacity-20" />
                    )}
                    {activeTab === "liked" && (
                      <Heart className="w-16 h-16 opacity-20" />
                    )}
                    {activeTab === "favorites" && (
                      <Bookmark className="w-16 h-16 opacity-20" />
                    )}
                    <p className="text-sm font-medium">
                      This user has not published any content here.
                    </p>
                  </div>
                )}
              </div>

              {/* Bottom spacer for scroll */}
              {/* <div className="h-20" /> */}
            </div>

            {/* Bottom Nav Mockup */}
            <div
              className={`h-[50px] border-t flex items-center justify-around z-20 ${isDark ? "bg-[#121212] border-gray-800 text-white" : "bg-white border-gray-200 text-gray-400 text-black"}`}
            >
              <div className={`w-[40px] flex flex-col items-center`}>
                <svg
                  width="32px"
                  data-e2e=""
                  height="32px"
                  viewBox="0 0 48 48"
                  fill={isDark ? "#fff" : "#000"}
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M23.0484 7.84003C23.6014 7.38666 24.3975 7.38666 24.9504 7.84001L41.051 21.04C41.5411 21.4418 41.7258 22.1082 41.5125 22.705C41.2991 23.3017 40.7338 23.7 40.1 23.7H37.769L36.5769 36.7278C36.4592 38.0149 35.3798 39 34.0873 39H13.9127C12.6202 39 11.5409 38.0149 11.4231 36.7278L10.231 23.7H7.89943C7.2657 23.7 6.70035 23.3017 6.487 22.705C6.27364 22.1083 6.45833 21.4418 6.9484 21.04L23.0484 7.84003ZM23.9995 10.9397L12.0948 20.7H12.969L14.369 36H22.4994V28.3138C22.4994 27.7616 22.9471 27.3138 23.4994 27.3138H24.4994C25.0517 27.3138 25.4994 27.7616 25.4994 28.3138V36H33.631L35.031 20.7H35.9045L23.9995 10.9397Z"
                  ></path>
                </svg>
                <span className="text-[9px]">Home</span>
              </div>
              <div className="w-[40px] flex flex-col items-center">
                <svg
                  width="32px"
                  data-e2e=""
                  height="32px"
                  viewBox="0 0 36 36"
                  fill={isDark ? "#fff" : "#000"}
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M18 28.0547C23.553 28.0547 28.0547 23.5531 28.0547 18C28.0547 12.4469 23.553 7.94531 18 7.94531C12.4469 7.94531 7.94531 12.4469 7.94531 18C7.94531 23.5531 12.4469 28.0547 18 28.0547ZM30.375 18C30.375 24.8345 24.8345 30.375 18 30.375C11.1655 30.375 5.625 24.8345 5.625 18C5.625 11.1655 11.1655 5.625 18 5.625C24.8345 5.625 30.375 11.1655 30.375 18Z"
                  ></path>
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M20.3508 20.3864C20.712 20.1679 20.9645 19.8074 21.0462 19.3932L22.427 12.3948C22.5027 12.0113 22.0871 11.7204 21.7527 11.9226L15.6486 15.6137C15.2874 15.8322 15.0349 16.1928 14.9532 16.6069L13.5724 23.6053C13.4967 23.9888 13.9123 24.2797 14.2467 24.0775L20.3508 20.3864ZM16.5684 20.0442L18.9029 18.6325L19.431 15.9559L17.0965 17.3676L16.5684 20.0442Z"
                  ></path>
                </svg>
                <span className="text-[9px]">Discover</span>
              </div>
              <div className="mt-[-10px]">
                {/* Plus button */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 70 45"
                  width="70px"
                  height="45px"
                >
                  <path
                    fill="#D8D8D8"
                    stroke="#979797"
                    strokeWidth="0.5"
                    d="M.25.25h74.5v48.5H.25z"
                    opacity="0.01"
                  ></path>
                  <path
                    fill={isDark ? "#FA2D6C" : "#FA2D6C"}
                    fillRule="evenodd"
                    d="M23.5 23.3c0-4.48 0-6.72.872-8.432a8 8 0 0 1 3.496-3.496C29.58 10.5 31.82 10.5 36.3 10.5h9.9c4.48 0 6.72 0 8.432.872a8 8 0 0 1 3.496 3.496C59 16.58 59 18.82 59 23.3v2.4c0 4.48 0 6.72-.872 8.432a8 8 0 0 1-3.496 3.496c-1.711.872-3.952.872-8.432.872h-9.9c-4.48 0-6.72 0-8.432-.872a8 8 0 0 1-3.496-3.496C23.5 32.42 23.5 30.18 23.5 25.7z"
                    clipRule="evenodd"
                  ></path>
                  <path
                    fill="#20D5EC"
                    fillRule="evenodd"
                    d="M16 23.3c0-4.48 0-6.72.872-8.432a8 8 0 0 1 3.496-3.496C22.08 10.5 24.32 10.5 28.8 10.5h9.9c4.48 0 6.72 0 8.432.872a8 8 0 0 1 3.496 3.496c.872 1.711.872 3.952.872 8.432v2.4c0 4.48 0 6.72-.872 8.432a8 8 0 0 1-3.496 3.496c-1.711.872-3.952.872-8.432.872h-9.9c-4.48 0-6.72 0-8.432-.872a8 8 0 0 1-3.496-3.496C16 32.42 16 30.18 16 25.7z"
                    clipRule="evenodd"
                  ></path>
                  <rect
                    width="36"
                    height="28"
                    x="19.5"
                    y="10.5"
                    fill={isDark ? "#fff" : "#000"}
                    rx="8"
                  ></rect>
                  <path
                    fill={isDark ? "#000" : "#fff"}
                    fillRule="evenodd"
                    d="M37 18a.5.5 0 0 0-.5.5v5h-5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h5v5a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-5h5a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-5v-5a.5.5 0 0 0-.5-.5z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </div>
              <div className="w-[40px] flex flex-col items-center">
                <svg
                  width="32px"
                  data-e2e=""
                  height="32px"
                  viewBox="0 0 32 32"
                  fill={isDark ? "#fff" : "#000"}
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M24.0362 21.3333H18.5243L15.9983 24.4208L13.4721 21.3333H7.96047L7.99557 8H24.0009L24.0362 21.3333ZM24.3705 23.3333H19.4721L17.2883 26.0026C16.6215 26.8176 15.3753 26.8176 14.7084 26.0026L12.5243 23.3333H7.62626C6.70407 23.3333 5.95717 22.5845 5.9596 21.6623L5.99646 7.66228C5.99887 6.74352 6.74435 6 7.66312 6H24.3333C25.2521 6 25.9975 6.7435 26 7.66224L26.0371 21.6622C26.0396 22.5844 25.2927 23.3333 24.3705 23.3333ZM12.6647 14C12.2965 14 11.998 14.2985 11.998 14.6667V15.3333C11.998 15.7015 12.2965 16 12.6647 16H19.3313C19.6995 16 19.998 15.7015 19.998 15.3333V14.6667C19.998 14.2985 19.6995 14 19.3313 14H12.6647Z"
                  ></path>
                </svg>
                <span className="text-[9px]">Inbox</span>
              </div>
              <div className="w-[40px] flex flex-col items-center">
                <svg
                  width="32px"
                  data-e2e=""
                  height="32px"
                  viewBox="0 0 48 48"
                  fill={isDark ? "#fff" : "#000"}
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M24.0003 8.5C19.3059 8.5 15.5003 12.3056 15.5003 17C15.5003 21.6944 19.3059 25.5 24.0003 25.5C28.6947 25.5 32.5003 21.6944 32.5003 17C32.5003 12.3056 28.6947 8.5 24.0003 8.5ZM24.0003 27.5C17.824 27.5 13.0161 31.3744 11.0087 36.877C10.5186 38.2204 11.5522 39.5363 12.88 39.5363H35.1186C36.4468 39.5363 37.4805 38.2196 36.9896 36.876C34.9805 31.3773 30.1772 27.5 24.0003 27.5Z"
                  ></path>
                </svg>
                <span
                  className={`text-[9px] font-bold ${isDark ? "text-white" : "text-black"}`}
                >
                  Profile
                </span>
              </div>
            </div>

            {/* Home indicator */}
            <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gray-300 rounded-full z-30 opacity-50"></div>
          </div>
        </div>

        <div className="text-center text-gray-500 text-sm max-w-lg">
          <p>
            Tip: Click on any text or image in the mockup to edit it. The design
            stays editable.
          </p>
          <p className="mt-2 text-xs">Developed with ❤️ by Easy Split</p>
        </div>
      </div>
    );
  },
);

TikTokProfile.displayName = "TikTokProfile";
