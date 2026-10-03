import Home, { generateMetadata as generateHomeMetadata } from "../[lang]/page";
import { SiteLayout } from "@/components/SiteLayout";

export function generateMetadata() {
  return generateHomeMetadata({ params: Promise.resolve({ lang: "en" }) });
}

export default function RootPage() {
  return (
    <SiteLayout lang="en">
      <Home params={Promise.resolve({ lang: "en" })} />
    </SiteLayout>
  );
}
