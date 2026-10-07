import type { Metadata } from "next";
import HomePage from "@/components/home/HomePage";
import { alternatesFor } from "@/i18n";

export const metadata: Metadata = {
  alternates: alternatesFor("ko", "/"),
};

export default function Home() {
  return <HomePage lang="ko" />;
}
