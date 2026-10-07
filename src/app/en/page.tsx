import type { Metadata } from "next";
import HomePage from "@/components/home/HomePage";
import { alternatesFor } from "@/i18n";

const DESCRIPTION =
  "Portfolio of Seungju Wi (위승주): founder of the fine-dining magazine Gourmevel and Problem Solver (PM) at LIKELION. A product manager who uses AI to take products from problem definition to launch: Salary FYI, Planfit, Drinkig, Gourmevel.";

export const metadata: Metadata = {
  title: { absolute: "Seungju Wi | Problem Solver (PM)" },
  description: DESCRIPTION,
  alternates: alternatesFor("en", "/"),
  openGraph: {
    locale: "en_US",
    title: "Seungju Wi | Problem Solver (PM)",
    description: DESCRIPTION,
    url: "https://portfolio.gourmevel.com/en",
  },
  twitter: { title: "Seungju Wi | Problem Solver (PM)", description: DESCRIPTION },
};

export default function HomeEn() {
  return <HomePage lang="en" />;
}
