"use client";

import React, { useState } from "react";
import {
  ChevronLeft,
  Menu,
  Grid,
  User,
  PlusSquare,
  Search,
  Film,
  UserSquare,
} from "lucide-react";
import { EditableText } from "./shared/EditableText";
import { EditableImage } from "./shared/EditableImage";

import { useRef, forwardRef, useImperativeHandle } from "react";

interface InstagramProfileProps {
  isDark: boolean;
}

export interface ProfileRefs {
  frameRef: HTMLDivElement | null;
  scrollRef: HTMLDivElement | null;
  screenRef: HTMLDivElement | null;
}

export const InstagramProfile = forwardRef<ProfileRefs, InstagramProfileProps>(
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
      "posts" | "reels" | "tagged" | "saved" | "feed"
    >("posts");
    const [avatar, setAvatar] = useState("/android-chrome-192x192.png");
    const [username, setUsername] = useState("Easy Split");
    const [name, setName] = useState("Instagram Creator");
    const [category, setCategory] = useState("Digital Creator");
    const [bio, setBio] = useState(
      "📸 Capturing moments\n✈️ Travel & Lifestyle\n👇 New video out now!",
    );
    const [link, setLink] = useState("linktr.ee/insta_user");

    // Stats
    const [postsCount, setPostsCount] = useState("1,240");
    const [followers, setFollowers] = useState("2.5M");
    const [following, setFollowing] = useState("342");

    // Highlights - 5 items
    const [highlights, setHighlights] = useState(
      Array(5).fill({
        name: "Highlight",
        img: "/android-chrome-192x192.png",
      }),
    );

    // Grid images placeholders - 12 items
    const [gridImages, setGridImages] = useState(
      Array(12).fill("/android-chrome-192x192.png"),
    );

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
            {/* Status Bar */}
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
              className={`flex-1 overflow-y-auto scrollbar-hide w-full ${isDark ? "bg-[#000000] text-white" : "bg-white text-black"}`}
            >
              {/* Header */}
              <header
                className={`flex justify-between items-center px-4 pt-6 pb-2 sticky top-0 z-10 backdrop-blur-md ${isDark ? "bg-[#000000]/90" : "bg-white/90"}`}
              >
                <div className="font-bold text-xl flex items-center gap-1">
                  <EditableText
                    value={username}
                    onChange={setUsername}
                    tagName="span"
                  />
                  {/* Verified Badge */}
                  <svg
                    className="w-4 h-4 text-[#0095F6] fill-current"
                    viewBox="0 0 24 24"
                  >
                    <path d="M22.5 12.5c0-1.58-.875-2.95-2.148-3.6.154-.435.238-.905.238-1.4 0-2.21-1.71-3.998-3.818-3.998-.47 0-.92.084-1.336.25C14.818 2.415 13.51 1.5 12 1.5s-2.816.917-3.437 2.25c-.415-.165-.866-.25-1.336-.25-2.11 0-3.818 1.79-3.818 4 0 .495.083.965.238 1.4-1.272.65-2.147 2.02-2.147 3.6 0 1.435.716 2.69 1.794 3.407-.123.418-.19.858-.19 1.31 0 2.503 2.027 4.53 4.53 4.53.64 0 1.238-.13 1.785-.363.63 1.205 1.884 2.03 3.323 2.03 1.438 0 2.693-.825 3.323-2.03.547.233 1.144.363 1.784.363 2.504 0 4.53-2.027 4.53-4.53 0-.452-.067-.892-.19-1.31 1.077-.717 1.793-1.972 1.793-3.407zm-11.63 5.37l-4.223-4.223 1.414-1.414 2.808 2.808 6.446-6.446 1.414 1.414-7.86 7.86z" />
                  </svg>
                  <ChevronLeft className="w-5 h-5 rotate-270" />
                </div>
                <div className="flex items-center gap-4">
                  <PlusSquare className="w-6 h-6 stroke-2" />
                  <Menu className="w-6 h-6 stroke-2" />
                </div>
              </header>

              {/* Profile Info Row */}
              <div className="flex items-center justify-between px-4 py-3">
                {/* Avatar */}
                <div className="relative">
                  <div className="rounded-full p-[3px] bg-linear-to-tr from-[#FFD600] via-[#FF0169] to-[#D300C5]">
                    <div
                      className={`rounded-full p-[2px] ${isDark ? "bg-[#000000]" : "bg-white"}`}
                    >
                      <EditableImage
                        src={avatar}
                        onImageChange={setAvatar}
                        className="w-20 h-20"
                      />
                    </div>
                  </div>
                  <div className="absolute bottom-0 right-0 bg-[#0095F6] border-2 border-white rounded-full p-0.5 text-white flex items-center justify-center w-6 h-6">
                    <span className="text-sm font-bold">+</span>
                  </div>
                </div>

                {/* Stats */}
                <div className="flex flex-1 justify-around text-center ml-4">
                  <div className="flex flex-col">
                    <EditableText
                      value={postsCount}
                      onChange={setPostsCount}
                      className="font-bold text-lg leading-tight"
                    />
                    <span className="text-sm">Posts</span>
                  </div>
                  <div className="flex flex-col">
                    <EditableText
                      value={followers}
                      onChange={setFollowers}
                      className="font-bold text-lg leading-tight"
                    />
                    <span className="text-sm">Followers</span>
                  </div>
                  <div className="flex flex-col">
                    <EditableText
                      value={following}
                      onChange={setFollowing}
                      className="font-bold text-lg leading-tight"
                    />
                    <span className="text-sm">Following</span>
                  </div>
                </div>
              </div>

              {/* Bio Section */}
              <div className="px-4 py-1 pb-4">
                <EditableText
                  value={name}
                  onChange={setName}
                  className="font-bold block text-sm"
                />
                <EditableText
                  value={category}
                  onChange={setCategory}
                  className="text-gray-500 text-xs block mb-1"
                />
                <EditableText
                  value={bio}
                  onChange={setBio}
                  tagName="p"
                  className="text-sm whitespace-pre-wrap leading-tight"
                />
                <div className="flex items-center gap-1 mt-1 text-[#E0F1FF]">
                  <svg
                    viewBox="0 0 24 24"
                    className="w-4 h-4 fill-current text-gray-500 -rotate-45"
                  >
                    <path d="M14.8.9c-.3-.2-.7-.2-1 0l-4.5 2.5c-.3.2-.5.5-.5.9v4.9c0 .3.2.6.4.8l4.1 2.3c.3.2.7.2 1 0 .3-.2.5-.5.5-.9V5.4c0-.3-.2-.6-.4-.8L14.8.9zM5.7 6.4c-.3-.2-.7-.2-1 0L.2 8.9c-.3.2-.5.5-.5.9v4.9c0 .3.2.6.4.8l4.1 2.3c.3.2.7.2 1 0 .3-.2.5-.5.5-.9V10.9c0-.3-.2-.6-.4-.8L5.7 6.4zM5.7 15.5c-.3-.2-.7-.2-1 0l-4.5 2.5c-.3.2-.5.5-.5.9v4.9c0 .3.2.6.4.8l4.1 2.3c.3.2.7.2 1 0 .3-.2.5-.5.5-.9V20c0-.3-.2-.6-.4-.8L5.7 15.5zM14.8 15.5c-.3-.2-.7-.2-1 0l-4.5 2.5c-.3.2-.5.5-.5.9v4.9c0 .3.2.6.4.8l4.1 2.3c.3.2.7.2 1 0 .3-.2.5-.5.5-.9V20c0-.3-.2-.6-.4-.8L14.8 15.5zM23.8 6.4c-.3-.2-.7-.2-1 0l-4.5 2.5c-.3.2-.5.5-.5.9v4.9c0 .3.2.6.4.8l4.1 2.3c.3.2.7.2 1 0 .3-.2.5-.5.5-.9V10.9c0-.3-.2-.6-.4-.8L23.8 6.4z"></path>
                  </svg>
                  <EditableText
                    value={link}
                    onChange={setLink}
                    className="text-[#00376B] dark:text-[#E0F1FF] font-semibold text-sm"
                  />
                </div>

                {/* Buttons */}
                <div className="flex gap-2 mt-4">
                  <button
                    className={`flex-1 py-1.5 rounded-lg text-sm font-semibold transition-colors ${isDark ? "bg-[#363636] text-white hover:bg-[#262626]" : "bg-[#EFEFEF] text-black hover:bg-[#DBDBDB]"}`}
                  >
                    Edit profile
                  </button>
                  <button
                    className={`flex-1 py-1.5 rounded-lg text-sm font-semibold transition-colors ${isDark ? "bg-[#363636] text-white hover:bg-[#262626]" : "bg-[#EFEFEF] text-black hover:bg-[#DBDBDB]"}`}
                  >
                    Share profile
                  </button>
                  <button
                    className={`p-1.5 rounded-lg transition-colors ${isDark ? "bg-[#363636] text-white hover:bg-[#262626]" : "bg-[#EFEFEF] text-black hover:bg-[#DBDBDB]"}`}
                  >
                    <User className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Highlights */}
              <div className="flex overflow-x-auto scrollbar-hide gap-4 px-4 pb-4">
                {highlights.map((highlight, index) => (
                  <div
                    key={index}
                    className="flex flex-col items-center gap-1 min-w-[70px]"
                  >
                    <div
                      className={`rounded-full p-px border border-gray-300 ${isDark ? "border-gray-700" : "border-gray-200"}`}
                    >
                      <div className="rounded-full p-0.5">
                        <EditableImage
                          src={highlight.img}
                          onImageChange={(newSrc) => {
                            const newHighlights = [...highlights];
                            newHighlights[index] = {
                              ...highlight,
                              img: newSrc,
                            };
                            setHighlights(newHighlights);
                          }}
                          className="w-16 h-16 bg-gray-100"
                          rounded="rounded-full"
                        />
                      </div>
                    </div>
                    <EditableText
                      value={highlight.name}
                      onChange={(val) => {
                        const newHighlights = [...highlights];
                        newHighlights[index] = { ...highlight, name: val };
                        setHighlights(newHighlights);
                      }}
                      className="text-xs text-center w-full truncate"
                    />
                  </div>
                ))}
                {/* Add New Highlight Placeholder */}
                <div className="flex flex-col items-center gap-1 min-w-[70px]">
                  <div
                    className={`w-[66px] h-[66px] rounded-full border flex items-center justify-center ${isDark ? "border-gray-700 bg-transparent" : "border-gray-300 bg-white"}`}
                  >
                    <PlusSquare className="w-8 h-8 opacity-50 stroke-1" />
                  </div>
                  <span className="text-xs text-center">New</span>
                </div>
              </div>

              {/* Tabs */}
              <div
                className={`flex border-t sticky top-[60px] z-10 ${isDark ? "border-gray-800 bg-[#000000]" : "border-gray-200 bg-white"}`}
              >
                <div
                  onClick={() => setActiveTab("posts")}
                  className={`flex-1 flex items-center justify-center py-3 cursor-pointer border-b ${activeTab === "posts" ? (isDark ? "border-white text-white" : "border-black text-black") : "border-transparent text-gray-500"}`}
                >
                  <svg
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                    fill="currentColor"
                  >
                    <title>Posts</title>
                    <path
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2px"
                      d="M3 3H21V21H3z"
                    ></path>
                    <path
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2px"
                      d="M9.01486 3 9.01486 21"
                    ></path>
                    <path
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2px"
                      d="M14.98514 3 14.98514 21"
                    ></path>
                    <path
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2px"
                      d="M21 9.01486 3 9.01486"
                    ></path>
                    <path
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2px"
                      d="M21 14.98514 3 14.98514"
                    ></path>
                  </svg>
                </div>
                <div
                  onClick={() => setActiveTab("feed")}
                  className={`flex-1 flex items-center justify-center py-3 cursor-pointer border-b ${activeTab === "feed" ? (isDark ? "border-white text-white" : "border-black text-black") : "border-transparent text-gray-500"}`}
                >
                  <svg
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                    fill="currentColor"
                  >
                    <title>Feed</title>
                    <g
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeWidth="2px"
                    >
                      <path
                        strokeLinejoin="round"
                        d="M6 7H18V17H6z"
                        fill="none"
                      ></path>
                      <path
                        strokeMiterlimit="10"
                        d="M6.00183 3.00372 18.00012 3.00372"
                        fill="none"
                      ></path>
                      <path
                        strokeMiterlimit="10"
                        d="M6.00183 20.99981 18.00012 20.99981"
                        fill="none"
                      ></path>
                    </g>
                  </svg>
                </div>
                <div
                  onClick={() => setActiveTab("reels")}
                  className={`flex-1 flex items-center justify-center py-3 cursor-pointer border-b ${activeTab === "reels" ? (isDark ? "border-white text-white" : "border-black text-black") : "border-transparent text-gray-500"}`}
                >
                  <svg
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                    fill="currentColor"
                  >
                    <title>Reels</title>
                    <g
                      stroke="currentColor"
                      strokeLinejoin="round"
                      strokeWidth="2px"
                    >
                      <path d="M2.0493 7.002 21.9503 7.002" fill="none"></path>
                      <path
                        strokeLinecap="round"
                        d="M13.50427 2.001 16.36227 7.002"
                        fill="none"
                      ></path>
                      <path
                        strokeLinecap="round"
                        d="M7.20677 2.1099 10.00177 7.0019"
                        fill="none"
                      ></path>
                      <path
                        d="M2 12.001v3.449c0 2.849.698 4.006 1.606 4.945.94.908 2.098 1.607 4.946 1.607h6.896c2.848 0 4.006-.699 4.946-1.607.908-.939 1.606-2.096 1.606-4.945V8.552c0-2.848-.698-4.006-1.606-4.945C19.454 2.699 18.296 2 15.448 2H8.552c-2.848 0-4.006.699-4.946 1.607C2.698 4.546 2 5.704 2 8.552z"
                        strokeLinecap="round"
                        fill="none"
                      ></path>
                    </g>
                    <path
                      d="M9.763 17.664a.908.908 0 0 1-.454-.787V11.63a.909.909 0 0 1 1.364-.788l4.545 2.624a.909.909 0 0 1 0 1.575l-4.545 2.624a.91.91 0 0 1-.91 0z"
                      fillRule="evenodd"
                    ></path>
                  </svg>
                </div>
                <div
                  onClick={() => setActiveTab("saved")}
                  className={`flex-1 flex items-center justify-center py-3 cursor-pointer border-b ${activeTab === "saved" ? (isDark ? "border-white text-white" : "border-black text-black") : "border-transparent text-gray-500"}`}
                >
                  <svg
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                    fill="currentColor"
                  >
                    <title>Saved</title>
                    <path
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2px"
                      d="M20 21 12 13.44 4 21 4 3 20 3 20 21z"
                    ></path>
                  </svg>
                </div>
                <div
                  onClick={() => setActiveTab("tagged")}
                  className={`flex-1 flex items-center justify-center py-3 cursor-pointer border-b ${activeTab === "tagged" ? (isDark ? "border-white text-white" : "border-black text-black") : "border-transparent text-gray-500"}`}
                >
                  <svg
                    fill="currentColor"
                    height="24"
                    viewBox="0 0 24 24"
                    width="24"
                  >
                    <title>Tagged</title>
                    <path
                      d="M21 7.48a2 2 0 0 0-2-2h-3.046a2.002 2.002 0 0 1-1.506-.683l-1.695-1.939a1 1 0 0 0-1.506 0L9.552 4.797c-.38.434-.93.682-1.506.682H5a2 2 0 0 0-2 2V19l.01.206A2 2 0 0 0 5 21h14a2 2 0 0 0 2-2V7.48ZM23 19a4 4 0 0 1-4 4H5a4 4 0 0 1-3.995-3.794L1 19V7.48a4 4 0 0 1 4-4h3.046l1.696-1.94a3 3 0 0 1 4.516 0l1.696 1.94H19a4 4 0 0 1 4 4V19Z"
                      fill="currentColor"
                    ></path>
                    <path
                      d="M14.5 10.419a2.5 2.5 0 1 0-5 0 2.5 2.5 0 0 0 5 0Zm2 0a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0ZM12 16.003c3.511 0 6.555 1.99 8.13 4.906a1 1 0 0 1-1.76.95c-1.248-2.31-3.64-3.857-6.37-3.857S6.878 19.55 5.63 21.86a1 1 0 0 1-1.76-.951c1.575-2.915 4.618-4.906 8.13-4.906Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </div>
              </div>

              {/* Grid */}
              <div
                className={`grid grid-cols-3 gap-px pb-5 ${isDark ? "bg-black" : "bg-white"}`}
              >
                {activeTab === "posts" &&
                  gridImages.map((img, i) => (
                    <div
                      key={i}
                      className="relative aspect-square group bg-gray-100 dark:bg-gray-900"
                    >
                      <EditableImage
                        src={img}
                        onImageChange={(newSrc) => {
                          const newImages = [...gridImages];
                          newImages[i] = newSrc;
                          setGridImages(newImages);
                        }}
                        className="w-full h-full object-cover"
                        rounded="rounded-none"
                      />
                      {/* Overlay Pin Icon on first post for effect */}
                      {i === 0 && (
                        <div className="absolute top-2 right-2 text-white drop-shadow-md">
                          <svg
                            viewBox="0 0 24 24"
                            className="w-4 h-4 fill-current rotate-45"
                          >
                            <path d="M16,12V4H17V2H7V4H8V12L6,14V16H11.2V22H12.8V16H18V14L16,12Z" />
                          </svg>
                        </div>
                      )}
                    </div>
                  ))}

                {activeTab !== "posts" && (
                  <div className="col-span-3 flex flex-col items-center justify-center py-20 text-gray-500 gap-4">
                    <div
                      className={`p-4 rounded-full border-2 ${isDark ? "border-gray-800" : "border-gray-200"}`}
                    >
                      {activeTab === "reels" ? (
                        <Film className="w-8 h-8" />
                      ) : (
                        <UserSquare className="w-8 h-8" />
                      )}
                    </div>
                    <h3 className="font-bold text-xl">
                      {activeTab === "reels" ? "Reels" : "Photos of you"}
                    </h3>
                    <p className="text-sm text-center max-w-[200px]">
                      {activeTab === "reels"
                        ? "Share a moment with the world. Create your first Reel."
                        : "When people tag you in photos, they'll appear here."}
                    </p>
                  </div>
                )}
              </div>
            </div>

            {/* Bottom Nav Mockup */}
            <div
              className={`h-[50px] border-t flex items-center justify-around z-20 ${isDark ? "bg-[#000000] border-gray-800 text-white" : "bg-white border-gray-200 text-black"}`}
            >
              <div className="p-2">
                <svg
                  aria-label="Home"
                  fill="currentColor"
                  height="24"
                  role="img"
                  viewBox="0 0 24 24"
                  width="24"
                >
                  <title>Home</title>
                  <path d="m21.762 8.786-7-6.68C13.266.68 10.734.68 9.238 2.106l-7 6.681A4.017 4.017 0 0 0 1 11.68V20c0 1.654 1.346 3 3 3h5.005a1 1 0 0 0 1-1L10 15c0-1.103.897-2 2-2 1.09 0 1.98.877 2 1.962L13.999 22a1 1 0 0 0 1 1H20c1.654 0 3-1.346 3-3v-8.32a4.021 4.021 0 0 0-1.238-2.894ZM21 20a1 1 0 0 1-1 1h-4.001L16 15c0-2.206-1.794-4-4-4s-4 1.794-4 4l.005 6H4a1 1 0 0 1-1-1v-8.32c0-.543.226-1.07.62-1.447l7-6.68c.747-.714 2.013-.714 2.76 0l7 6.68c.394.376.62.904.62 1.448V20Z"></path>
                </svg>
              </div>
              <div className="p-2">
                <svg
                  aria-label="Explore"
                  fill="currentColor"
                  height="24"
                  role="img"
                  viewBox="0 0 24 24"
                  width="24"
                >
                  <title>Explore</title>
                  <path
                    d="M19 10.5A8.5 8.5 0 1 1 10.5 2a8.5 8.5 0 0 1 8.5 8.5Z"
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                  ></path>
                  <line
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    x1="16.511"
                    x2="22"
                    y1="16.511"
                    y2="22"
                  ></line>
                </svg>
              </div>
              <div className="p-2">
                <svg
                  aria-label="Reels"
                  fill="currentColor"
                  height="24"
                  role="img"
                  viewBox="0 0 24 24"
                  width="24"
                >
                  <title>Reels</title>
                  <path d="M22.935 7.468c-.063-1.36-.307-2.142-.512-2.67a5.341 5.341 0 0 0-1.27-1.95 5.345 5.345 0 0 0-1.95-1.27c-.53-.206-1.311-.45-2.672-.513C15.333 1.012 14.976 1 12 1s-3.333.012-4.532.065c-1.36.063-2.142.307-2.67.512-.77.298-1.371.69-1.95 1.27a5.36 5.36 0 0 0-1.27 1.95c-.206.53-.45 1.311-.513 2.672C1.012 8.667 1 9.024 1 12s.012 3.333.065 4.532c.063 1.36.307 2.142.512 2.67.297.77.69 1.372 1.27 1.95.58.581 1.181.974 1.95 1.27.53.206 1.311.45 2.672.513C8.667 22.988 9.024 23 12 23s3.333-.012 4.532-.065c1.36-.063 2.142-.307 2.67-.512a5.33 5.33 0 0 0 1.95-1.27 5.356 5.356 0 0 0 1.27-1.95c.206-.53.45-1.311.513-2.672.053-1.198.065-1.555.065-4.531s-.012-3.333-.065-4.532Zm-1.998 8.972c-.05 1.07-.228 1.652-.38 2.04-.197.51-.434.874-.82 1.258a3.362 3.362 0 0 1-1.258.82c-.387.151-.97.33-2.038.379-1.162.052-1.51.063-4.441.063s-3.28-.01-4.44-.063c-1.07-.05-1.652-.228-2.04-.38a3.354 3.354 0 0 1-1.258-.82 3.362 3.362 0 0 1-.82-1.258c-.151-.387-.33-.97-.379-2.038C3.011 15.28 3 14.931 3 12s.01-3.28.063-4.44c.05-1.07.228-1.652.38-2.04.197-.51.434-.875.82-1.26a3.372 3.372 0 0 1 1.258-.819c.387-.15.97-.329 2.038-.378C8.72 3.011 9.069 3 12 3s3.28.01 4.44.063c1.07.05 1.652.228 2.04.38.51.197.874.433 1.258.82.385.382.622.747.82 1.258.151.387.33.97.379 2.038C20.989 8.72 21 9.069 21 12s-.01 3.28-.063 4.44Zm-4.584-6.828-5.25-3a2.725 2.725 0 0 0-2.745.01A2.722 2.722 0 0 0 6.988 9v6c0 .992.512 1.88 1.37 2.379.432.25.906.376 1.38.376.468 0 .937-.123 1.365-.367l5.25-3c.868-.496 1.385-1.389 1.385-2.388s-.517-1.892-1.385-2.388Zm-.993 3.04-5.25 3a.74.74 0 0 1-.748-.003.74.74 0 0 1-.374-.649V9a.74.74 0 0 1 .374-.65.737.737 0 0 1 .748-.002l5.25 3c.341.196.378.521.378.652s-.037.456-.378.651Z"></path>
                </svg>
              </div>
              <div className="p-2">
                <svg
                  aria-label="Messages"
                  fill="currentColor"
                  height="24"
                  role="img"
                  viewBox="0 0 24 24"
                  width="24"
                >
                  <title>Messages</title>
                  <path
                    d="M13.973 20.046 21.77 6.928C22.8 5.195 21.55 3 19.535 3H4.466C2.138 3 .984 5.825 2.646 7.456l4.842 4.752 1.723 7.121c.548 2.266 3.571 2.721 4.762.717Z"
                    fill="none"
                    stroke="currentColor"
                    strokeLinejoin="round"
                    strokeWidth="2"
                  ></path>
                  <line
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    x1="7.488"
                    x2="15.515"
                    y1="12.208"
                    y2="7.641"
                  ></line>
                </svg>
              </div>
              <div className="p-2">
                <img
                  src={avatar}
                  className={`w-7 h-7 rounded-full border-2 ${isDark ? "border-white" : "border-black"}`}
                  alt="profile"
                />
              </div>
            </div>

            {/* Home indicator */}
            <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gray-500 rounded-full z-30 opacity-50"></div>
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

InstagramProfile.displayName = "InstagramProfile";
