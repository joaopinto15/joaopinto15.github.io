import { CTA, ProjectCard } from "../components";
import { projects } from "../constants";


const Projects = ({ getDarkMode }) => {
  const shadow = getDarkMode() ? "btn-dark" : "btn-back";

  return (
    <section className='max-container'>
      <h1 className='head-text text-black dark:text-white'>
        My{" "}
        <span className='blue-gradient_text drop-shadow font-semibold'>
          Projects
        </span>
      </h1>

      <p className='text-slate-500 dark:text-slate-100 mt-2 leading-relaxed'>
        As a junior software developer, I am still building my portfolio and gaining experience.
        While I don't have many projects yet, I am eager to learn and grow in the field of software development.
      </p>

      <div className='flex flex-wrap my-20 gap-16'>
        {projects.map((project) => (
          <ProjectCard project={project} shadow={shadow} key={project.name} />
        ))}
      </div>

      <CTA />
    </section>
  );
};

export default Projects;
