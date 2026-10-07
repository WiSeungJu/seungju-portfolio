import GourmevelCase, { gourmevelMetadata } from "@/content/GourmevelCase";

export const metadata = gourmevelMetadata("en");

export default function Page() {
  return <GourmevelCase lang="en" />;
}
