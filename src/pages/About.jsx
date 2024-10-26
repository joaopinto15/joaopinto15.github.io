import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { CTA, WeatherCard, CvCard, UserInfoCard } from "../components";
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

function RenderSkills({ type, shadow }) {
  return (
    <>
      <div className='h-10' />
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
  const shadow = () => getDarkMode() ? "btn-dark" : "btn-back";

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
          Software Engineer based in Portugal, currently studying at <a href="https://www.isep.ipp.pt/" target="_blank" className="text-blue-400" rel="noopener noreferrer"> <strong>ISEP</strong></a>.
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
        <WeatherCard />
        <UserInfoCard />
      </div>

      <div className='py-10 flex flex-col'>
        <h3 className='subhead-text text-black dark:text-white mb-4'>Used Technologies</h3>
        <RenderSkills type="FrontEnd" shadow={shadow} />
        <RenderSkills type="BackEnd" shadow={shadow} />
        <RenderSkills type="Tools" shadow={shadow} />
      </div>

      <div className='py-16'>
        <h3 className='subhead-text text-black dark:text-white mb-4'>Work Experience</h3>
        <div className='mt-5 flex flex-col gap-3 text-slate-500 dark:text-slate-300'>
          <p>
            I am currently a university student, which has limited my ability to
            gain extensive work experience so far. However, my academic journey has
            equipped me with a strong foundation in programming and developed
            my skills in all kind of topics related to frontend and backend.
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