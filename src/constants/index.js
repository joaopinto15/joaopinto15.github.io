import {
    car,
    contact,
    estate,
    github,
    linkedin,
    pricewise,
    snapgram,
    summiz,
    threads,
} from "../assets/icons";

export const skills = [
    {
        imageUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg",
        name: "Java",
        type: "Backend",
    },
    {
        imageUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/c/c-original.svg",
        name: "C",
        type: "Backend",
    },
    {
        imageUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
        name: "Javascript",
        type: "Frontend",
    },
    {
        imageUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original-wordmark.svg",
        name: "node.js",
        type: "Backend",
    },
    {
        imageUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
        name: "Tailwind CSS",
        type: "Frontend",
    },

];
/**
 *  colors to use : #fbc3bc, #accbe1, #b7e4c7, #a2d2ff
 */
export const experiences = [
    {
        title: "Federated Sports",
        company_name: "Basketball",
        icon: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstatic.vecteezy.com%2Fsystem%2Fresources%2Fpreviews%2F000%2F631%2F451%2Foriginal%2Fbasketball-icon-symbol-sign-vector.jpg&f=1&nofb=1&ipt=38fa376762caec80703ddbbe952909148a8ab9942987ef50212036854e1baf98&ipo=images",
        iconBg: "#accbe1",
        date: "January 2006 - April 2020",
        points: [
            "I have several years of experience playing basketball, which has accustomed me to teamwork, respecting others, listening, and learning from each team member.",
            "Also, I have learned to be disciplined, punctual, and to respect the rules.",
        ],
    },
    {
        title: "University of Porto",
        company_name: "ISEP",
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
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/joaopinto15',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/jo%C3%A3o-pinto-92891b250/',
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