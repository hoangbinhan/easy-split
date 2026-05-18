import Link from "next/link";

const supportedLocales = [
  "en",
  "vi",
  "ko",
  "jp",
  "th",
  "id",
  "es",
  "zh-CN",
  "zh-TW",
  "de",
  "ru",
  "hi",
  "pt-BR",
];

export default function RootPage() {
  const redirectScript = `
    (function () {
      var supported = ${JSON.stringify(supportedLocales)};
      var stored = window.localStorage && window.localStorage.getItem("language");
      var browser = (navigator.language || "en").toLowerCase();
      var locale = stored && supported.indexOf(stored) >= 0 ? stored : "en";
      if (!stored) {
        locale = supported.find(function (lang) {
          return browser === lang.toLowerCase() || browser.indexOf(lang.toLowerCase().split("-")[0]) === 0;
        }) || "en";
      }
      window.location.replace("/" + locale + "/");
    })();
  `;

  return (
    <main className="min-h-screen flex flex-col items-center justify-center gap-6 p-6 text-center">
      <script dangerouslySetInnerHTML={{ __html: redirectScript }} />
      <h1 className="text-4xl font-black">Easy Split</h1>
      <p className="max-w-md text-lg font-semibold">
        Free image splitting tools for TikTok and Instagram.
      </p>
      <Link
        href="/en/"
        className="border-4 border-black bg-yellow-400 px-6 py-3 font-black uppercase shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
      >
        Continue
      </Link>
    </main>
  );
}
