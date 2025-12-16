import myImage from "../../assets/images/47c01cb8-29e8-4875-92cd-19b473bb5e4f.jpeg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDiamond,
  faRocket,
  faGraduationCap,
  faGlobe,
  faBolt,
} from "@fortawesome/free-solid-svg-icons";
import {
  faHtml5,
  faCss,
  faReact,
  faJs,
  faGit,
} from "@fortawesome/free-brands-svg-icons";

const iconList = [
  // [Component, aria-label]
  [faHtml5, "HTML 5"],
  [faCss, "CSS 3"],
  [faJs, "JavaScript"],
  [faReact, "React"],
  [faGit, "Git version control"],
];

const AboutMe = () => {
  return (
    <section id="about-section" className="full-bleed bg-tertiary min-h-screen">
      <div className="mx-auto grid h-full max-w-[1280px] grid-cols-1 place-content-center p-4 lg:grid-cols-[1fr_300px_1fr]">
        <div className="container-1 space-y-4 p-8">
          <h2 className="text-primary text-3xl font-semibold">About Me</h2>
          <p className="text-primary">
            I tried learning Spanish, but after struggling to roll my R&apos;s,
            I realized I&apos;m much better at languages that use brackets and
            semicolons. That&apos;s when I traded Hola for <b>HTML</b>,{" "}
            <b>CSS</b>, and <b>JavaScript</b>.
          </p>
          <p>
            My journey into tech wasn't a straight line. I made the bold
            decision to step away from traditional university studies to fully
            immerse myself in software engineering—and I haven't looked back.
            Since then, I&apos;ve honed my skills in <b>Next.js</b>,{" "}
            <b>TypeScript</b>, and
            <b> TailwindCSS</b>, moving from tutorials to shipping production
            code in remote, agile environments.
          </p>
          <div className="flex w-full flex-wrap justify-center gap-4">
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
        <div className="container-2 space-y-4 rounded-xl bg-white p-8">
          <div>
            <FontAwesomeIcon
              icon={faRocket}
              size="3x"
              className="rocket text-primary"
              aria-hidden="true"
            />
          </div>
          <p className="text-primary">
            Today, I bridge the gap between design and functionality, building
            scalable, pixel-perfect interfaces. I might not be fluent in Spanish
            yet, but I speak 'Frontend' fluently.
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
          <ul className="space-y-4">
            <li className="text-primary flex items-start gap-4">
              <FontAwesomeIcon
                icon={faGraduationCap}
                size="2x"
                aria-hidden="true"
              />
              <p>
                <strong>Education & Foundation AltSchool Africa Alumnus</strong>{" "}
                Earned a Diploma in Frontend Engineering, moving from
                self-taught foundations to professional-grade software
                development standards.
              </p>
            </li>
            <li className="text-primary flex items-start gap-4">
              <FontAwesomeIcon icon={faGlobe} size="2x" aria-hidden="true" />
              <p>
                <strong>
                  Current Mission Frontend Developer at Calmify Technologies
                </strong>{" "}
                Building Natsu - a digital tool designed to democratize access
                to mental wellness resources across Africa.
              </p>
            </li>
            <li className="text-primary flex items-start gap-4">
              <FontAwesomeIcon icon={faBolt} size="2x" aria-hidden="true" />
              <p>
                <strong>
                  Continuous Growth Expanding into Backend (Node.js)
                </strong>{" "}
                Actively upskilling in server-side technologies to understand
                the full product lifecycle, from database to pixel-perfect UI.
              </p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
