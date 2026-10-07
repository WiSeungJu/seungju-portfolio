import DrinkigCase, { drinkigMetadata } from "@/content/DrinkigCase";

export const metadata = drinkigMetadata("en");

export default function Page() {
  return <DrinkigCase lang="en" />;
}
