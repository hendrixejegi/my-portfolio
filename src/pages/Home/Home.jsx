import React, {
  useState,
  useRef,
  useMemo,
  useCallback,
  useEffect,
} from "react";
import "./Home.css";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import useObserver from "../../hooks/useObserver";
import { cn } from "../../lib/utils";

// Assets
import { ArrowUpRight, ArrowDown } from "lucide-react";
import codingAnimation from "../../assets/lotties/Coding.lottie";
import myImage from "../../assets/images/47c01cb8-29e8-4875-92cd-19b473bb5e4f.jpeg";

// FontAwesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDiamond, faRocket } from "@fortawesome/free-solid-svg-icons";
import {
  faHtml5,
  faCss,
  faReact,
  faJs,
  faGit,
} from "@fortawesome/free-brands-svg-icons";

export function Home() {
  const [activeLink, setActiveLink] = useState("#hero-section");
  const [headerBackgroundWhite, setheaderBackgroundWhite] = useState(true);

  const observerOptions = useMemo(() => {
    return {
      threshold: 0.895,
    };
  }, []);

  const observerCallback = useCallback((entries, cb = undefined) => {
    const { isIntersecting } = entries[0];

    isIntersecting
      ? setheaderBackgroundWhite(false)
      : setheaderBackgroundWhite(true);

    cb && cb(isIntersecting);
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
      </main>
    </div>
  );
}

const NavBar = React.memo(({ ref, activeLink, isWhite }) => {
  const [scroll, setScroll] = useState(false);
  const [addHeaderShadow, setAddHeaderShadow] = useState(false);

  useEffect(() => {
    const checkScrollY = () => {
      window.scrollY > 3 ? setScroll(true) : setScroll(false);
    };
    window.addEventListener("scroll", checkScrollY);

    return () => window.removeEventListener("scroll", checkScrollY);
  }, []);

  useEffect(
    () => (scroll ? setAddHeaderShadow(true) : setAddHeaderShadow(false)),
    [scroll],
  );

  return (
    <header
      ref={ref}
      className={cn(
        "full-bleed fixed top-0 left-0 z-50 w-screen translate-y-0 bg-white p-4 opacity-100 transition-all duration-300 ease-out starting:-translate-y-8 starting:opacity-0",
        isWhite ? null : "bg-tertiary",
        addHeaderShadow ? "shadow-md" : null,
      )}
    >
      <div className="mx-auto flex max-w-[1280px] items-center">
        <nav
          className={cn(
            "flex w-full items-center",
            isWhite ? null : "nav--tertiary-bg",
          )}
        >
          <ul className="flex items-center">
            <li>
              <a
                className={`${activeLink === "#hero-section" ? "active" : null}`}
                href="#hero-section"
              >
                Home
              </a>
            </li>
            <li>
              <a
                className={`${activeLink === "#about-section" ? "active" : null}`}
                href="#about-section"
              >
                About Me
              </a>
            </li>
            <li>
              <a
                className={`${activeLink === "#experience-section" ? "active" : null}`}
                href="#experience-section"
              >
                Experiences
              </a>
            </li>
            <li>
              <a
                className={`${activeLink === "#project-section" ? "active" : null}`}
                href="#project-section"
              >
                Projects
              </a>
            </li>
          </ul>

          <a href="https://hendrixejegi.cv/" className="my-cv">
            <span>My CV</span> <ArrowUpRight aria-hidden="true" />
          </a>
        </nav>
      </div>
    </header>
  );
});

const HeroSection = React.memo(() => {
  return (
    <div
      id="hero-section"
      className="relative grid h-screen place-content-center p-4 pt-[90px]"
    >
      <div className="mx-auto grid max-w-5xl grid-cols-2 items-center">
        <h1>
          <span className="text-primary starting block translate-x-0 text-9xl opacity-100 transition-all delay-[3000ms] duration-300 ease-out starting:translate-x-4 starting:opacity-0">
            Hello
          </span>
          <span className="text-primary block max-w-md translate-y-0 opacity-100 transition-all delay-[3000ms] duration-300 ease-out starting:translate-y-4 starting:opacity-0">
            I&#39;m Hendrix. Welcome to my little spot on the web. I build
            things — mostly websites, sometimes ideas — and this portfolio is
            kind of both. Scroll down, I&#39;ll show you around.
          </span>
        </h1>
        <div>
          <DotLottieReact
            src={codingAnimation}
            autoplay
            style={{ aspectRatio: "1" }}
            aria-hidden="true"
          />
        </div>
      </div>

      {/* Decorations */}
      <div className="absolute bottom-1/2 left-8 flex w-[calc(100vh_-_16px)] -translate-x-1/2 translate-y-6 -rotate-90 items-center gap-8 p-4 pr-[90px]">
        <div className="bg-secondary h-0.5 w-full transition-all delay-300 duration-700 ease-out starting:w-0"></div>
        <div className="text-secondary shrink-0 basis-auto translate-y-0 opacity-100 transition-all delay-[700ms] ease-in starting:-translate-y-2.5 starting:opacity-0">
          Frontend developer
        </div>
      </div>
      <div className="text-primary absolute inset-[auto_0_16px] mx-auto flex w-full max-w-5xl animate-bounce items-center gap-2 opacity-100 transition-all delay-[6000ms] ease-in-out starting:animate-none starting:opacity-0">
        <span>Scroll down</span> <ArrowDown aria-hidden="true" />
      </div>
    </div>
  );
});

const AboutMe = React.memo(({ observerArgs, setLink }) => {
  const aboutSectionRef = useRef(null);
  const aboutSectionObserver = useObserver({
    target: aboutSectionRef.current,
    ...observerArgs,
  });

  const iconList = useMemo(
    () => [
      // [Component, aria-label]
      [faHtml5, "HTML 5"],
      [faCss, "CSS 3"],
      [faJs, "JavaScript"],
      [faReact, "React"],
      [faGit, "Git version control"],
    ],
    [],
  );

  useEffect(() => {
    if (aboutSectionObserver) {
      setLink("#about-section");
    } else {
      setLink("#hero-section");
    }
  }, [aboutSectionObserver, setLink]);

  return (
    <section
      ref={aboutSectionRef}
      id="about-section"
      className="full-bleed bg-tertiary h-screen pt-[90px]"
    >
      <div className="mx-auto grid h-full max-w-[1280px] grid-cols-[1fr_300px_1fr] place-content-center p-4">
        <div className="space-y-8 p-8">
          <h2 className="text-primary text-5xl font-semibold">About Me</h2>
          <p className="text-primary">
            My journey didn&#39;t start with code. I was studying at DELSU when
            I realized my path was leading me in a different direction. So I
            made a tough call — I stepped away to chase something that felt more
            like me.
          </p>
          <p>
            That decision led me to the world of code. I once tried learning
            Spanish — fun experiment, but it didn&#39;t stick. HTML, CSS, and
            JavaScript? Those clicked instantly. The first time I saw a page
            come alive from a few lines of code, I knew I&#39;d found my thing.
          </p>
          <div className="flex w-full flex-wrap justify-between">
            {iconList.map((icon, idx) => (
              <FontAwesomeIcon
                key={idx}
                icon={icon[0]}
                size="4x"
                className="text-secondary"
                aria-label={icon[1]}
              />
            ))}
          </div>
        </div>
        <div className="space-y-8 rounded-xl bg-white p-8">
          <div>
            <FontAwesomeIcon
              icon={faRocket}
              size="3x"
              className="text-primary"
              aria-hidden="true"
            />
          </div>
          <p className="text-primary">
            Since then, I&#39;ve been sharpening my skills, exploring frameworks
            like React, Tailwind, and Next.js, and learning how to turn ideas
            into real, working solutions.
          </p>
          <div className="overflow-hidden rounded-lg">
            <img
              src={myImage}
              alt="Hendrix Ejegi, React Frontend Developer"
              className="object- aspect-square scale-130 object-cover object-left-top grayscale filter"
            />
          </div>
        </div>
        <div className="content-end p-6">
          <ul className="space-y-8">
            <li className="text-primary flex items-start gap-4">
              <FontAwesomeIcon icon={faDiamond} size="2x" aria-hidden="true" />
              <span>
                Studied frontend development at AltSchool Africa, where I built
                my foundation and sharpened my skills.
              </span>
            </li>
            <li className="text-primary flex items-start gap-4">
              <FontAwesomeIcon icon={faDiamond} size="2x" aria-hidden="true" />
              <span>
                Currently interning at Calmify Technologies, building Natsu — a
                tool for improving mental wellness across Africa.
              </span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
});
