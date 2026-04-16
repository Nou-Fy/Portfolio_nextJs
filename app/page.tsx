import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { Experience } from "@/components/experience";
import { Skills } from "@/components/skills";
import { Education } from "@/components/education";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";

export const metadata = {
  title: "Nantsoinaharimanana Nomena Tiavina - Full Stack Developer",
  description:
    "Full-stack developer and digital engineer passionate about innovative solutions in software development, data engineering, and renewable energy.",
};

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
