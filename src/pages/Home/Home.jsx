import React, { useState } from "react";
import "./Home.css";
import { ArrowUpRight, ArrowDown } from "lucide-react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

export function Home() {
  return (
    <div className="wrapper">
      <NavBar />
      <HeroSection />
      <main className="full-bleed wrapper">
        <AboutMe />
      </main>
    </div>
  );
}

const NavBar = React.memo(() => {
  const [activeLink, setActiveLink] = useState("/");

  return (
    <header className="full-bleed fixed top-0 left-0 z-10 w-screen translate-y-0 bg-white p-4 opacity-100 transition-all duration-300 ease-in starting:-translate-y-4 starting:opacity-0">
      <div className="mx-auto flex max-w-[1280px] items-center">
        <nav className="flex w-full items-center">
          <ul className="flex items-center">
            <li>
              <a className={`${activeLink === "/" ? "active" : null}`} href="">
                Home
              </a>
            </li>
            <li>
              <a
                className={`${activeLink === "/about" ? "active" : null}`}
                href=""
              >
                About Me
              </a>
            </li>
            <li>
              <a
                className={`${activeLink === "/experiences" ? "active" : null}`}
                href=""
              >
                Experiences
              </a>
            </li>
            <li>
              <a
                className={`${activeLink === "/projects" ? "active" : null}`}
                href=""
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
    <div className="relative grid h-screen place-content-center p-4 pt-[90px]">
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
            src="https://lottie.host/56d4f494-db21-401a-88a7-759d7b622620/pkio1nZWxK.lottie"
            autoplay
            style={{ aspectRatio: "1" }}
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

const AboutMe = React.memo(() => {
  return (
    <section className="full-bleed bg-tertiary h-screen">
      <div className="mx-auto max-w-[1280px] p-4">
        <div>
          <h2>About Me</h2>
        </div>
      </div>
    </section>
  );
});
