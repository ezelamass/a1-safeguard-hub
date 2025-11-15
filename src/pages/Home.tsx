import { Hero } from "@/components/sections/Hero";
import { PartnersCarousel } from "@/components/sections/PartnersCarousel";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { SegurosSection } from "@/components/sections/SegurosSection";
import { SegurosVidaSection } from "@/components/sections/SegurosVidaSection";
import { CredencialesSection } from "@/components/sections/CredencialesSection";
import { AboutPreview } from "@/components/sections/AboutPreview";
import { FAQ } from "@/components/sections/FAQ";
import { Layout } from "@/components/layout/Layout";

const Home = () => {
  return (
    <Layout>
      <Hero />
      <PartnersCarousel />
      <HowItWorks />
      <SegurosSection />
      <SegurosVidaSection />
      <CredencialesSection />
      <AboutPreview />
      <FAQ />
    </Layout>
  );
};

export default Home;
