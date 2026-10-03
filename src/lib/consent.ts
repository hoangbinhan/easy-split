import Cookies from "js-cookie";

export const CONSENT_CHANGED = "easy-split:consent-changed";
export const CONSENT_SETTINGS = "easy-split:consent-settings";
const CONSENT_VERSION = "2";

export function getConsent(): boolean | null {
  if (Cookies.get("cookie_consent_version") !== CONSENT_VERSION) return null;
  const value = Cookies.get("cookie_consent");
  return value === "true" ? true : value === "false" ? false : null;
}

export function setConsent(accepted: boolean) {
  const options = { expires: 365, path: "/", sameSite: "Lax" as const, secure: location.protocol === "https:" };
  Cookies.set("cookie_consent", String(accepted), options);
  Cookies.set("cookie_consent_version", CONSENT_VERSION, options);
  window.dispatchEvent(new Event(CONSENT_CHANGED));
}

export function clearAnalyticsCookies() {
  const hostname = location.hostname;
  const domains = hostname.split(".").map((_, index, parts) => parts.slice(index).join("."));
  for (const name of Object.keys(Cookies.get())) {
    if (!/^(_ga(?:_|$)|_gid$|_gat(?:_|$)|_gcl_)/.test(name)) continue;
    Cookies.remove(name, { path: "/" });
    for (const domain of domains) Cookies.remove(name, { path: "/", domain });
  }
}
