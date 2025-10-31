import { useEffect, useState } from "react";
import { cn } from "../../utils";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faX } from "@fortawesome/free-solid-svg-icons";
import "./NavBar.css";

import { ArrowUpRight } from "lucide-react";
const NavBar = () => {
  const [state, setState] = useState({
    scroll: false,
    addHeaderShadow: false,
    isOpen: false,
  });

  useEffect(() => {
    const checkScrollY = () => {
      window.scrollY > 3
        ? setState((prev) => ({ ...prev, scroll: true }))
        : setState((prev) => ({ ...prev, scroll: false }));
    };
    window.addEventListener("scroll", checkScrollY);

    return () => window.removeEventListener("scroll", checkScrollY);
  }, []);

  useEffect(
    () =>
      state.scroll
        ? setState((prev) => ({ ...prev, addHeaderShadow: true }))
        : setState((prev) => ({ ...prev, addHeaderShadow: false })),
    [state.scroll],
  );

  const hideMobileNav = () => setState((prev) => ({ ...prev, isOpen: false }));

  return (
    <header
      className={cn(
        "full-bleed fixed top-0 left-0 z-50 w-screen translate-y-0 bg-white p-4 opacity-100 transition-all duration-300 ease-out starting:-translate-y-8 starting:opacity-0",
        state.addHeaderShadow ? "shadow-md" : null,
      )}
    >
      <div className="nav-container mx-auto flex max-w-[1280px] items-center">
        <button
          aria-label={`${state.isOpen ? "Open" : "Close"} mobile navigation menu`}
        >
          {state.isOpen ? (
            <FontAwesomeIcon
              icon={faX}
              beat
              aria-hidden="true"
              className="text-2xl"
              onClick={() =>
                setState((prev) => ({ ...prev, isOpen: !prev.isOpen }))
              }
            />
          ) : (
            <FontAwesomeIcon
              icon={faBars}
              aria-hidden="true"
              className="text-2xl"
              onClick={() =>
                setState((prev) => ({ ...prev, isOpen: !prev.isOpen }))
              }
            />
          )}
        </button>
        <nav className={cn(state.isOpen && "show-nav")}>
          <ul className="flex items-center">
            <li>
              <a href="#hero-section" onClick={hideMobileNav}>
                Home
              </a>
            </li>
            <li>
              <a href="#about-section" onClick={hideMobileNav}>
                About Me
              </a>
            </li>
            <li>
              <a href="#project-section" onClick={hideMobileNav}>
                Projects
              </a>
            </li>
            <li>
              <a href="#contact-me-section" onClick={hideMobileNav}>
                Contact Me
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
};

export default NavBar;
