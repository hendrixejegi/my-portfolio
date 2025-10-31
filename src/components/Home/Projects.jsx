import queueUp from "../../assets/images/queueup.png";

const Projects = () => {
  return (
    <section className="space-y-4 p-8">
      <h2 className="text-primary text-3xl font-semibold">Selected Work</h2>
      <div>
        <ul className="gap-4 md:grid md:grid-cols-2 lg:grid-cols-3">
          <li className="bg-tertiary space-y-2 rounded-xl p-2">
            <img
              src={queueUp}
              alt="QueueUp - Ticket management dashboard"
              className="rounded-2xl"
            />
            <h3 className="text-primary font-semibold">
              QueueUp - Manage your tickets
            </h3>
            <div className="flex items-center justify-between">
              <p className="text-secondary w-fit rounded-lg px-1 py-0.5 text-sm font-semibold">
                React
              </p>
              <div>
                <a
                  href="https://hng-2-ticket-app.vercel.app/"
                  className="text-secondary w-fit rounded-lg px-1 py-0.5 text-sm font-semibold underline underline-offset-4"
                >
                  Live
                </a>
                <a
                  href="https://github.com/hendrixejegi/hng-2-ticket-app"
                  className="text-secondary w-fit rounded-lg px-1 py-0.5 text-sm font-semibold underline underline-offset-4"
                >
                  GitHub
                </a>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Projects;
