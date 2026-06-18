import Categories from "@/components/Categories";
import CTA from "@/components/CTA";
import TopFreelancers from "@/components/FeaturedSections";
import Features from "@/components/Features";
import HeroSection from "@/components/HeroSection";
import HomeSections from "@/components/HomeSections";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <HeroSection></HeroSection>
      <TopFreelancers></TopFreelancers>
      <HomeSections></HomeSections>
      <Categories></Categories>
      <Features></Features>
      <CTA></CTA>
      
    </div>
  );
}
