import Hero from "@/components/hero/hero";
import Stats from "@/components/stats/stats";
import About from "@/components/about/about";
import Audience from "@/components/audience/audience";
import Content from "@/components/content/content";
import Brands from "@/components/brands/brands";
import Story from "@/components/story/story";
import Contact from "@/components/contact/contact";

export default function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <About />
      <Audience/>
      <Content/>
      <Brands/>
      <Story/>
      <Contact/>
    </>
  );
}