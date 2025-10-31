import { memo } from "react";
import { ArrowDown } from "lucide-react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

import codingAnimation from "../../assets/lotties/Coding.lottie";

const HeroSection = memo(() => {
  return (
    <div
      id="hero-section"
      className="relative grid h-screen place-content-center p-4 pt-[90px] pl-12"
    >
      <div className="mx-auto grid max-w-5xl grid-cols-1 items-center lg:grid-cols-2">
        <h1>
          <span className="text-primary starting block translate-x-0 text-7xl opacity-100 transition-all delay-[900ms] duration-300 ease-out lg:delay-[3000ms] starting:translate-x-4 starting:opacity-0">
            Hello
          </span>
          <span className="text-primary block max-w-md translate-y-0 opacity-100 transition-all delay-[900ms] duration-300 ease-out lg:delay-[3000ms] starting:translate-y-4 starting:opacity-0">
            I&#39;m Hendrix. Welcome to my little spot on the web. I build
            things — mostly websites, sometimes ideas — and this portfolio is
            kind of both. Scroll down, I&#39;ll show you around.
          </span>
        </h1>
        <div className="hidden lg:block">
          <DotLottieReact
            src={codingAnimation}
            autoplay
            style={{ aspectRatio: "1" }}
            aria-hidden="true"
          />
        </div>
      </div>

      {/* Decorations */}
      <div className="absolute bottom-1/2 left-5 flex w-[calc(100vh_-_16px)] -translate-x-1/2 translate-y-6 -rotate-90 items-center gap-8 p-2 pr-[90px]">
        <div className="bg-secondary h-0.5 w-full transition-all delay-300 duration-700 ease-out starting:w-0"></div>
        <div className="text-secondary shrink-0 basis-auto translate-y-0 opacity-100 transition-all delay-[700ms] ease-in starting:-translate-y-2.5 starting:opacity-0">
          Frontend developer
        </div>
      </div>
      <div className="text-primary absolute right-4 bottom-4 mx-auto flex max-w-5xl animate-bounce items-center gap-2 opacity-100 transition-all delay-[1500ms] ease-in-out lg:delay-[6000ms] starting:animate-none starting:opacity-0">
        <span>Scroll down</span> <ArrowDown aria-hidden="true" />
      </div>
    </div>
  );
});

HeroSection.displayName = "HeroSection";

export default HeroSection;
