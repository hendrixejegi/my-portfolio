import { useEffect, useState } from "react";
import { cn } from "../../utils";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faX } from "@fortawesome/free-solid-svg-icons";
import "./NavBar.css";

import { ArrowUpRight } from "lucide-react";
const NavBar = ({ ref, activeLink, isWhite }) => {
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

  return (
    <header
      ref={ref}
      className={cn(
        "full-bleed fixed top-0 left-0 z-50 w-screen translate-y-0 bg-white p-4 opacity-100 transition-all duration-300 ease-out starting:-translate-y-8 starting:opacity-0",
        isWhite ? null : "bg-tertiary",
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
        <nav
          className={cn(
            isWhite && "nav--tertiary-bg",
            state.isOpen && "show-nav",
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
};

export default NavBar;
