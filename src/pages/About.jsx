import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { CTA, CvCard, UserInfoCard } from "../components";
import { experiences, skills } from "../constants";
import "react-vertical-timeline-component/style.min.css";
import { Link } from "react-router-dom";

function renderPoint(point) {
  const markdownLinkRegex = /\[([^\]]+)\]\((http[s]?:\/\/[^\)]+)\)/g;
  const segments = [];
  let lastIndex = 0;

  point.replace(markdownLinkRegex, (match, linkText, linkHref, index) => {
    if (index > lastIndex) {
      segments.push(point.substring(lastIndex, index));
    }

    segments.push(
      <a
        key={index}
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

const proficiencyColors = {
  FrontEnd: "from-blue-400 to-blue-600",
  BackEnd: "from-green-400 to-green-600",
  Network: "from-amber-400 to-amber-600",
  "Machine Learning": "from-purple-400 to-purple-600",
};

function RenderSkills({ type }) {
  const skillsByType = skills
    .filter((skill) => skill.type === type)
    .sort((a, b) => (b.proficiency || 0) - (a.proficiency || 0));

  return (
    <div className='flex flex-col w-full'>
      <h5 className="subhead-text-smaller text-black dark:text-white">{type}</h5>
      <div className='mt-4 flex flex-col gap-4'>
        {skillsByType.map((skill) => {
          const level = skill.proficiency ?? 0;
          const gradient = proficiencyColors[type] || "from-slate-400 to-slate-600";

          return (
            <Link
              key={skill.name}
              to={skill.url}
              target='_blank'
              rel='noopener noreferrer'
              className='group block w-full'
            >
              <div className='flex justify-between text-sm font-semibold text-slate-600 dark:text-slate-300'>
                <span>{skill.name}</span>
                <span>{level}%</span>
              </div>
              <div className='mt-2 h-3 rounded-full bg-slate-200 dark:bg-slate-700 overflow-hidden'>
                <div
                  className={`h-full rounded-full bg-gradient-to-r ${gradient} transition-all duration-500 group-hover:opacity-90`}
                  style={{ width: `${level}%` }}
                  aria-hidden='true'
                />
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  )
}

const About = ({ getDarkMode }) => {
  return (
    <section className='max-container px-4 py-8'>
      <h1 className='head-text text-black dark:text-white mb-4'>
        Hello, I'm{" "}
        <span className='blue-gradient_text font-semibold drop-shadow'>
          {" "}
          João
        </span>{" "}
        👋
      </h1>

      <div className='mt-5 flex flex-col gap-3 text-slate-500 dark:text-slate-300'>
        <p>
          Software Engineering graduate from <a href="https://www.isep.ipp.pt/" target="_blank" className="text-blue-400" rel="noopener noreferrer"><strong>ISEP</strong></a>, bringing hands-on, collaborative experience across the full software lifecycle with a strong emphasis on backend engineering.
        </p>
      </div>

      <div className="relative flex flex-wrap justify-center items-center gap-8 mt-8">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "radial-gradient(circle, black 10%, transparent 10%)",
            backgroundSize: "30px 30px",
            zIndex: "-1",
          }}
        />
        <CvCard />
        <UserInfoCard />
      </div>

      <div className='py-10 flex flex-col'>
        <h3 className='subhead-text text-black dark:text-white mb-4'>Most used technologies</h3>
        <div className='mt-6 grid gap-10 md:grid-cols-2 w-full max-w-5xl mx-auto'>
          <RenderSkills type="BackEnd" />
          <RenderSkills type="FrontEnd" />
          <RenderSkills type="Machine Learning" />
          <RenderSkills type="Network" />
        </div>
      </div>

      <div className='py-16'>
        <h3 className='subhead-text text-black dark:text-white mb-4'>Work/Academic Experience</h3>
        <div className='mt-5 flex flex-col gap-3 text-slate-500 dark:text-slate-300'>
          <p>
            As a recent university graduate, I possess a strong foundation in programming and comprehensive skills across both frontend and backend development. My academic background and project experience have fostered a deep interest in cybersecurity and the integration of artificial intelligence into modern systems. I am eager to apply my technical expertise and passion for innovation to develop secure, efficient, and intelligent digital solutions.
          </p>
        </div>

        <div className='mt-12 flex'>
          <VerticalTimeline lineColor={getDarkMode() ? "#2b2b2b" : "#E1E6EA"}>
            {experiences.map((experience) => (
              <VerticalTimelineElement
                key={experience.company_name}
                date={experience.date}
                dateClassName={getDarkMode() ? "text-white" : "text-black"}
                iconStyle={{ background: experience.iconBg }}
                iconOnClick={() => window.open(experience.url, "_blank")}
                icon={
                  <div className='flex justify-center items-center w-full h-full'>
                    <img
                      src={experience.icon}
                      alt={experience.company_name}
                      className='w-[60%] h-[60%] object-contain rounded-full'
                    />
                  </div>
                }
                contentStyle={{
                  borderBottom: "8px",
                  borderStyle: "solid",
                  borderBottomColor: experience.iconBg,
                  boxShadow: "none",
                  background: getDarkMode() ? "#1e1e1e" : "#F0F0F0",
                }}
              >
                <div>
                  <h3 className={getDarkMode() ? 'text-white text-xl font-poppins font-semibold' : 'text-black text-xl font-poppins font-semibold'}>
                    {experience.title}
                  </h3>
                  <p
                    className={getDarkMode() ? 'text-gray-400 font-medium text-base' : 'text-gray-700 font-medium text-base'}
                    style={{ margin: 0 }}
                  >
                    {experience.company_name}
                  </p>
                </div>

                <ul className='my-5 list-disc ml-5 space-y-2'>
                  {experience.points.map((point, index) => (
                    <li
                      key={`experience-point-${index}`}
                      className={getDarkMode() ? 'text-gray-200 dark:text-gray-300 font-normal pl-1 text-sm' : 'text-gray-600 font-normal pl-1 text-sm'}
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


      <CTA />
    </section>
  )
};

export default About;
