import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

import { CTA } from "../components";
import { experiences, skills } from "../constants";

import "react-vertical-timeline-component/style.min.css";
import { Link } from "react-router-dom";

function renderPoint(point) {
  // [example](https://www.example.com)
  const markdownLinkRegex = /\[([^\]]+)\]\((http[s]?:\/\/[^\)]+)\)/g;
  const segments = [];
  let lastIndex = 0;

  point.replace(markdownLinkRegex, (match, linkText, linkHref, index) => {
    // Add the text before the link
    if (index > lastIndex) {
      segments.push(point.substring(lastIndex, index));
    }

    // Add the <a> tag for the link with a unique key
    segments.push(
      <a
        key={index} // Unique key based on the current index
        href={linkHref}
        className="text-blue-500"
        target="_blank"
        rel="noopener noreferrer"
      >
        <strong>{linkText}</strong>
      </a>
    );
    lastIndex = index + match.length;
  });

  if (lastIndex < point.length) {
    segments.push(point.substring(lastIndex));
  }
  return segments;
}

function RenderSkills({ type, shadow }) {
  return (
    <>
      <div style={{ height: '2rem' }} />
      <h5 className="subhead-text-smaller text-black dark:text-white">{type}</h5>
      <div className='mt-16 flex flex-wrap gap-12'>
        {skills.filter(skill => skill.type === type).map(skill => (
          <Link
            key={skill.name}
            to={skill.url}
            target='_blank'
            rel='noopener noreferrer'
          >
            <div className='block-container w-20 h-20'>
              <div className={`${shadow()} rounded-xl`} />
              <div className='btn-front rounded-xl flex justify-center items-center'>
                <img
                  src={skill.imageUrl}
                  alt={skill.name}
                  className='w-1/2 h-1/2 object-contain'
                />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </>
  )


}

const About = ({ getDarkMode }) => {
  const darkmodeColor = () => getDarkMode() ? 'rgb(15 23 42 / 0.95)' : 'rgb(255,255,255)';
  const shadow = () => getDarkMode() ? "btn-dark" : "btn-back";

  return (
    <section className='max-container'>
      <h1 className='head-text  text-black dark:text-white'>
        Hello, I'm{" "}
        <span className='blue-gradient_text font-semibold drop-shadow'>
          {" "}
          João
        </span>{" "}
        👋
      </h1>

      <div className='mt-5 flex flex-col gap-3 text-slate-500 dark:text-slate-100'>
        <p>
          Software Engineer based in Portugal, currently studying at <a href="https://www.isep.ipp.pt/" target="_blank" className="text-blue-400" rel="noopener noreferrer"> <strong>ISEP</strong></a>.
        </p>
      </div>

      <div className='py-10 flex flex-col'>
        <h3 className='subhead-text text-black dark:text-white'>Used Technologies</h3>
        <RenderSkills type="FrontEnd" shadow={shadow} />
        <RenderSkills type="BackEnd" shadow={shadow} />

      </div>

      <div className='py-16'>
        <h3 className='subhead-text text-black dark:text-white'>Work Experience</h3>
        <div className='mt-5 flex flex-col gap-3 text-slate-500 dark:text-slate-100'>
          <p>
            I am currently a university student, which has limited my ability to
            gain extensive work experience so far. However, my academic journey has
            equipped me with a strong foundation in programming and developed
            my skills in all kind of topics related to frontend and backend.
          </p>
        </div>

        <div className='mt-12 flex'>
          <VerticalTimeline lineColor={darkmodeColor()}>
            {experiences.map((experience, index) => (
              <VerticalTimelineElement
                key={experience.company_name}
                date={experience.date}
                dateClassName="text-black dark:text-white"
                iconStyle={{ background: experience.iconBg }}

                icon={
                  <div className='flex justify-center items-center w-full h-full'>
                    <img
                      src={experience.icon}
                      alt={experience.company_name}
                      className='w-[60%] h-[60%] object-contain'
                    />
                  </div>
                }
                contentStyle={{
                  borderBottom: "8px",
                  borderStyle: "solid",
                  borderBottomColor: experience.iconBg,
                  boxShadow: "none",
                  background: darkmodeColor(),
                }}
              >
                <div>
                  <h3 className='text-black dark:text-white text-xl font-poppins font-semibold'>
                    {experience.title}
                  </h3>
                  <p
                    className='text-black-500 dark:text-gray-400 font-medium text-base'
                    style={{ margin: 0 }}
                  >
                    {experience.company_name}
                  </p>
                </div>

                <ul className='my-5 list-disc ml-5 space-y-2'>
                  {experience.points.map((point, index) => (
                    <li
                      key={`experience-point-${index}`}
                      className='text-black-500/50 dark:text-gray-400/50 darkfont-normal pl-1 text-sm'
                    >
                      {renderPoint(point)}
                    </li>
                  ))}
                </ul>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>
      </div>

      <hr className='border-slate-200 dark:border-slate-700' />

      <CTA />
    </section >
  );
};

export default About;
