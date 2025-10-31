import NavBar from "../../components/Home/NavBar";
import HeroSection from "../../components/Home/HeroSection";
import AboutMe from "../../components/Home/AboutMe";
import Projects from "../../components/Home/Projects";
import Contact from "../../components/Home/Contact";

export function Home() {
  return (
    <div className="wrapper">
      <NavBar />
      <HeroSection />
      <main className="full-bleed wrapper">
        <AboutMe />
        <Projects />
        <Contact />
      </main>
    </div>
  );
}
