import FooterWithSocialMediaIcons from "@/components/Homepage/Fragments/Footer";
import Hero from "@/components/Homepage/Fragments/Hero";
import Header from "@/components/Shared/Fragments/Header";

export default function Home() {
  return (
    <>
      <Header />
      <div className="flex flex-col justify-between items-center gap-40 w-screen min-h-screen overflow-x-hidden">
        <Hero />
        <FooterWithSocialMediaIcons />
      </div>
    </>
  );
}
