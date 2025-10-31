import { useState, useMemo, useCallback } from "react";
import NavBar from "../../components/Home/NavBar";
import HeroSection from "../../components/Home/HeroSection";
import AboutMe from "../../components/Home/AboutMe";
import Projects from "../../components/Home/Projects";

export function Home() {
  const [activeLink, setActiveLink] = useState("#hero-section");
  const [headerBackgroundWhite, setheaderBackgroundWhite] = useState(true);

  const observerOptions = useMemo(() => {
    return {
      threshold: 0.895,
    };
  }, []);

  const observerCallback = useCallback((entries, _, cb = undefined) => {
    const { isIntersecting } = entries[0];

    isIntersecting
      ? setheaderBackgroundWhite(false)
      : setheaderBackgroundWhite(true);

    cb(isIntersecting);
  }, []);

  const useObserverArgs = { ...observerOptions, callback: observerCallback };

  const handleActiveLinkChange = (link) => {
    setActiveLink(link);
  };

  return (
    <div className="wrapper">
      <NavBar activeLink={activeLink} isWhite={headerBackgroundWhite} />
      <HeroSection />
      <main className="full-bleed wrapper">
        <AboutMe
          observerArgs={useObserverArgs}
          setLink={handleActiveLinkChange}
        />
        <Projects />
      </main>
    </div>
  );
}
