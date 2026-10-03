import { DocumentLayout } from "@/components/DocumentLayout";
export { metadata, viewport } from "@/components/DocumentLayout";

export default function HomeLayout({ children }: { children: React.ReactNode }) {
  return <DocumentLayout lang="en">{children}</DocumentLayout>;
}
