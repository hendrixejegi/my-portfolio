import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { projects } from "@/db.json";

const ProjectCard = (props) => {
  const { name, image, description, choices, live, github } = props;

  return (
    <li className="bg-tertiary flex flex-col gap-2 rounded-xl p-2">
      <img src={image} alt={name} className="rounded-md" />
      <h3 className="text-primary font-semibold">{name}</h3>
      <p className="text-primary/80 grow">{description}</p>
      <div className="flex items-center justify-between">
        {choices.length > 0 && (
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                className="text-secondary cursor-pointer"
              >
                Technical choices
              </Button>
            </PopoverTrigger>
            <PopoverContent>
              <ul className="space-y-2">
                {choices.map((choice) => {
                  return (
                    <li key={choice.title}>
                      <b>{choice.title}:</b> {choice.description}
                    </li>
                  );
                })}
              </ul>
            </PopoverContent>
          </Popover>
        )}
        <div className="ml-auto flex items-center">
          <Button variant="link" className="px-2">
            <a
              href={live}
              target="_blank"
              referrerPolicy="no-referrer"
              className="text-secondary w-fit rounded-lg text-sm font-semibold underline underline-offset-4"
            >
              Live
            </a>
          </Button>
          <Button variant="link" className="px-1">
            <a
              href={github}
              target="_blank"
              referrerPolicy="no-referrer"
              className="text-secondary w-fit rounded-lg text-sm font-semibold underline underline-offset-4"
            >
              GitHub
            </a>
          </Button>
        </div>
      </div>
    </li>
  );
};

const Projects = () => {
  return (
    <section id="project-section" className="space-y-4 p-4 py-[90px] md:p-8">
      <h2 className="text-primary text-3xl font-semibold">Selected Work</h2>
      <div>
        <ul className="gap-4 md:grid md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => {
            return <ProjectCard key={project.name} {...project} />;
          })}
        </ul>
      </div>
    </section>
  );
};

export default Projects;
