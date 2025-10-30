import { useRef, useEffect, memo, useMemo } from "react";
import useObserver from "../../hooks/useObserver";
import myImage from "../assets/images/47c01cb8-29e8-4875-92cd-19b473bb5e4f.jpeg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDiamond, faRocket } from "@fortawesome/free-solid-svg-icons";
import {
  faHtml5,
  faCss,
  faReact,
  faJs,
  faGit,
} from "@fortawesome/free-brands-svg-icons";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const AboutMe = memo(({ observerArgs, setLink }) => {
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

  // GSAP
  useGSAP(
    () => {
      const aboutSection_GSAPTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: aboutSectionRef.current,
          pin: true,
          start: "top top",
        },
      });

      aboutSection_GSAPTimeline
        .from(".container-1 > h2", {
          y: -10,
          opacity: 0,
          ease: "back",
          duration: 0.3,
        })
        .from(".container-1 > p:first-of-type", {
          y: -10,
          opacity: 0,
          ease: "back",
          duration: 0.3,
        })
        .from(".container-1 > p:last-of-type", {
          y: -10,
          opacity: 0,
          ease: "back",
          duration: 0.3,
        })
        .from(".stack", { x: -10, opacity: 0, stagger: 0.3 })
        .from(".container-2", { rotateY: 45, opacity: 0, duration: 0.3 })
        .from(".rocket", { x: -10, y: 10, opacity: 0, duration: 0.3 })
        .from(".container-2 > p", {
          y: -10,
          opacity: 0,
          ease: "back",
          duration: 0.3,
        })
        .from(".container-3 li", {
          x: 10,
          opacity: 0,
          stagger: 0.3,
        });
    },
    { scope: aboutSectionRef.current },
  );

  return (
    <section
      ref={aboutSectionRef}
      id="about-section"
      className="full-bleed bg-tertiary h-screen pt-[90px]"
    >
      <div className="mx-auto grid h-full max-w-[1280px] grid-cols-1 place-content-center p-4 lg:grid-cols-[1fr_300px_1fr]">
        <div className="container-1 space-y-8 p-8">
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
                className="stack text-secondary"
                aria-label={icon[1]}
              />
            ))}
          </div>
        </div>
        <div className="container-2 space-y-8 rounded-xl bg-white p-8">
          <div>
            <FontAwesomeIcon
              icon={faRocket}
              size="3x"
              className="rocket text-primary"
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
        <div className="container-3 content-end p-6">
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

AboutMe.displayName = "AboutMe";

export default AboutMe;
