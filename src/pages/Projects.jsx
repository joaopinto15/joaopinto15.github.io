import { Link } from "react-router-dom";
import { IoMdArrowRoundForward } from "react-icons/io";

import { CTA } from "../components";
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
        As a dedicated software engineer, I have had the opportunity to work on
        a diverse range of projects that showcase my skills in software development,
        problem-solving, and innovation.
      </p>

      <div className='flex flex-wrap my-20 gap-16'>
        {projects.map((project) => (
          <div className='lg:w-[400px] w-full' key={project.name}>
            <div className='block-container w-12 h-12'>
              <div className={`${shadow} rounded-xl ${project.theme}`} />
              <div className='btn-front rounded-xl flex justify-center items-center'>
                <img
                  src={project.iconUrl}
                  alt='threads'
                  className='w-1/2 h-1/2 object-contain'
                />
              </div>
            </div>

            <div className='mt-5 flex flex-col'>
              <h4 className='text-2xl font-poppins font-semibold text-black dark:text-white'>
                {project.name}
              </h4>
              <p className='mt-2 text-slate-500 dark:text-slate-100'>{project.description}</p>
              <div className='mt-5 flex items-center gap-2 font-poppins'>

                <Link
                  to={project.link}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='font-semibold text-blue-600 dark:text-blue-500'
                >
                  Source
                </Link>
                <IoMdArrowRoundForward className='text-blue-600 dark:text-blue-500 size-5' />

              </div>


            </div>
          </div>
        ))}
      </div>

      <hr className='border-slate-200 dark:border-slate-700' />
      <CTA />
      {/* TODO: Fix weird margin*/}
      <div className='h-20' />
    </section>
  );
};

export default Projects;
