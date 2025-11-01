import { FaGithubSquare, FaLinkedin } from "react-icons/fa";
import { IoMdContact } from "react-icons/io";
import { SiCredly } from "react-icons/si";



export const skills =
    [
        {
            name: "Java",
            type: "BackEnd",
            url: "https://www.java.com/en/",
            proficiency: 80,
        },
        {
            name: "C",
            type: "BackEnd",
            url: "https://en.wikipedia.org/wiki/C_(programming_language)",
            proficiency: 50,
        },
        {
            name: "Rust",
            type: "BackEnd",
            url: "https://www.rust-lang.org/",
            proficiency: 50,
        },
        {
            name: "Nodejs",
            type: "BackEnd",
            url: "https://nodejs.org/en/",
            proficiency: 70,
        },
        {
            name: "SQL",
            type: "BackEnd",
            url: "https://www.oracle.com/database/",
            proficiency: 80,
        },
        {
            name: "Python",
            type: "Machine Learning",
            url: "https://www.python.org/",
            proficiency: 50,
        },
        {
            name: "Javascript",
            type: "FrontEnd",
            url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
            proficiency: 70,
        },
        {
            name: "React",
            type: "FrontEnd",
            url: "https://reactjs.org/",
            proficiency: 80,
        },
        {
            color: "#DD0031",
            name: "Typescript",
            type: "FrontEnd",
            url: "https://www.typescriptlang.org/",
            proficiency: 50,
        },
        {
            name: "Postman",
            type: "Network",
            url: "https://www.postman.com/",
            proficiency: 85,
        },
        {
            name: "Docker",
            type: "Network",
            url: "https://www.docker.com/",
            proficiency: 90,
        },
        {
            name: "Linux",
            type: "Network",
            url: "https://www.linux.org/",
            proficiency: 90,
        },
        {
            color: "#FF9900",
            name: "AWS",
            type: "Network",
            url: "https://aws.amazon.com/",
            proficiency: 50,
        },
    ];

/**
 *  colors to use : #fbc3bc, #accbe1, #b7e4c7, #a2d2ff
*/
export const experiences = [
    {
        title: "University of Porto",
        company_name: "ISEP",
        url: "https://www.isep.ipp.pt/",
        icon: "https://external-content.duckduckgo.com/ip3/portal.isep.ipp.pt.ico",
        iconBg: "#fbc3bc",
        date: "January 2022 - April 2025",
        points: [
            "This course is project-oriented, providing extensive hands-on experience. While I lack professional experience, I have developed projects for each subject in the [course plan](https://www.isep.ipp.pt/Course/Course/26), primarily utilizing Java, C, and JavaScript.",
            "The main knowledge areas covered are: Software Patterns, Databases, Operating Systems, Computer Networks, and Web Development.",
            "I've primarily employed [Scrum](https://scrum.org) and Agile methodologies for managing and developing projects.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
    {
        title: "Student Exchange Program",
        company_name: "Technical University of Sofia",
        url: "https://www.tu-sofia.bg/",
        icon: "https://www.jaunty.eu/wp-content/uploads/2021/03/Technical-University-Sofia-1.png",
        iconBg: "#accbe1",
        date: "Setember 2024 - January 2025",
        points: [
            "Through the [Eramus+](https://erasmus-plus.ec.europa.eu/) program, I had the invaluable opportunity to study in Bulgaria for a semester",
            "During this time, I adapted to a new culture, language, and educational system, which significantly enriched my personal and academic growth.",
            "Additionally, my communication skills improved as I navigated daily interactions in English, which is not my native language, helping me become more confident and fluent in an international setting.",

        ],
    },
    {
        title: "Research Intern",
        company_name: "GECAD - Research Group, Porto, Portugal",
        url: "https://www.gecad.isep.ipp.pt/",
        icon: "https://www2.gecad.isep.ipp.pt/GECAD/Pages/Institution/Brands/GECAD4.png",
        iconBg: "#b7e4c7",
        date: "February 2025 - June 2025",
        points: [
            "Integrated a Host-based Intrusion Detection System (HIDS) across Windows hosts to monitor process traffic behavior within the local network.",
            "Developed an intelligent module leveraging machine learning techniques to analyze and classify SystemCalls from host systems.",
            "Implemented SystemCall extraction in critical Windows processes to enhance communication with the central monitoring server.",
            "Achieved 93% accuracy in detecting malicious system calls on Windows systems without compromising device functionality.",
        ],
    },

];

export const socialLinks = [
    {
        name: 'Contact',
        icon: IoMdContact,
        link: '/contact',
        color: 'text-black dark:text-white',
    },
    {
        name: 'GitHub',
        icon: FaGithubSquare,
        link: 'https://github.com/joaopinto15',
        color: 'text-black dark:text-white',
    },
    {
        name: 'LinkedIn',
        icon: FaLinkedin,
        link: 'https://www.linkedin.com/in/joaopinto15/',
        color: 'text-blue-500',
    },
    {
        name: 'Credly',
        icon: SiCredly,
        link: 'https://www.credly.com/users/joaopinto15/badges',
        color: 'text-black dark:text-white',
    }
];

export const projects = [
    {
        iconUrl: 'https://avatars.githubusercontent.com/u/182362816?s=200&v=4',
        theme: 'btn-back-pink',
        name: 'PureNimble',
        description: 'Coding Organization, where you can find information about the team, projects, and contact information.',
        link: 'https://github.com/PureNimble',
        website: 'https://purenimble.github.io/',
    },
    {
        iconUrl: 'https://raw.githubusercontent.com/PureNimble/PureNimble.github.io/refs/heads/main/src/assets/HairDrop-Logo-DarkMode.svg',
        theme: 'btn-back-pink',
        name: 'HairDrop',
        description: 'This project is a service designed to seamlessly connect users with hair salons, barbershops, and independent hairstylists, offering a modern, on-demand solution for hair care.',
        link: 'https://github.com/PureNimble/hairdrop',
    },
    {
        iconUrl: 'https://raw.githubusercontent.com/PureNimble/PureNimble.github.io/refs/heads/main/src/assets/Jobs4u-Logo-LightMode.svg',
        theme: 'btn-back-pink',
        name: 'Jobs4u',
        description: 'Major Project for the Software Engineering course at ISEP. Jobs4u is a platform that connects job seekers with employers, providing a simple and efficient way to find and post job opportunities.',
        link: 'https://github.com/PureNimble/ISEP-LAPR4',
    }
];

export const maps = {
    a_quiet_place: {
        scale: 3,
        position: [0, 0, 0],
    },
};


export const playerAnimations = {
    idle: "Idle",
    idle2: "Idle 2",
    walk: "Walk",
    run: "Run",
    pointing: "Pointing",
    pointingUp: "Pointing Up",
    dance: "Dance",
};
