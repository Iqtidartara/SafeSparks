import ChooseMe from "@/components/ChooseMe";
import Company from "@/components/Company";
import HomeSection from "@/components/HomeSection";
import SafeSpark from "@/components/SafeSpark";

export default function Home() {
  return (
    <main className=" " >
      <HomeSection />
      <Company />
      <ChooseMe />
      <SafeSpark />
    </main>
  );
}
