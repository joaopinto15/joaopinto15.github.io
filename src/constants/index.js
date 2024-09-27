import {
    estate,
    pricewise,
    snapgram,
    summiz,
    threads,
} from "../assets/icons";
import {
    c, java, javascript, nodejs, react, tailwindcss, sql, blender, threejs, vite, python
} from "../assets/icons/skills";


import { FaGithubSquare, FaLinkedin } from "react-icons/fa";
import { IoMdContact } from "react-icons/io";


export const skills = [
    {
        imageUrl: java,
        name: "Java",
        type: "BackEnd",
        url: "https://www.java.com/en/",
    },
    {
        imageUrl: c,
        name: "C",
        type: "BackEnd",
        url: "https://en.wikipedia.org/wiki/C_(programming_language)",
    },
    {
        imageUrl: javascript,
        name: "Javascript",
        type: "FrontEnd",
        url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    },
    {
        imageUrl: react,
        name: "React",
        type: "FrontEnd",
        url: "https://reactjs.org/",
    },
    {
        imageUrl: nodejs,
        name: "node.js",
        type: "BackEnd",
        url: "https://nodejs.org/en/",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "FrontEnd",
        url: "https://tailwindcss.com/",
    },
    {
        imageUrl: sql,
        name: "SQL",
        type: "BackEnd",
        url: "https://www.w3schools.com/sql/",
    },
    {
        imageUrl: blender,
        name: "Blender",
        type: "BackEnd",
        url: "https://www.blender.org/",
    },
    {
        imageUrl: threejs,
        name: "Three.js",
        type: "FrontEnd",
        url: "https://threejs.org/",
    },
    {
        imageUrl: vite,
        name: "Vite",
        type: "FrontEnd",
        url: "https://vitejs.dev/",
    },
    {
        imageUrl: python,
        name: "Python",
        type: "BackEnd",
        url: "https://www.python.org/",
    },


];
/**
 *  colors to use : #fbc3bc, #accbe1, #b7e4c7, #a2d2ff
 */
export const experiences = [
    {
        title: "Federated Sports",
        company_name: "Basketball",
        url: "https://www.fpb.pt/",
        icon: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstatic.vecteezy.com%2Fsystem%2Fresources%2Fpreviews%2F000%2F631%2F451%2Foriginal%2Fbasketball-icon-symbol-sign-vector.jpg&f=1&nofb=1&ipt=38fa376762caec80703ddbbe952909148a8ab9942987ef50212036854e1baf98&ipo=images",
        iconBg: "#b7e4c7",
        date: "January 2006 - April 2020",
        points: [
            "I have several years of experience playing basketball, which has accustomed me to teamwork, respecting others, listening, and learning from each team member.",
            "Also, I have learned to be disciplined, punctual, and to respect the rules.",
        ],
    },
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
    }
];

export const projects = [
    {
        iconUrl: pricewise,
        theme: 'btn-back-red',
        name: 'Todo Full Stack App',
        description: '...',
        link: 'https://github.com/joaopinto15/todo_fullstackapp',
    },
    {
        iconUrl: threads,
        theme: 'btn-back-blue',
        name: 'Web Portfolio',
        description: 'This is my personal portfolio website, built with React and Tailwind CSS.',
        link: 'https://github.com/joaopinto15/joaopinto15.github.io',
    }
];

export const maps = {
    a_quiet_place: {
        scale: 3,
        position: [0, 0, 0],
    },
};


export const playerAnimations = {
    sitUp: "sitUp",
    sit: "sit",
    run: "run",
    walk: "walk",
    idle: "idle",
};