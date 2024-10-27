import { WiDaySunny, WiNightClear, WiCloud, WiCloudy, WiShowers, WiRain, WiThunderstorm, WiSnow, WiFog } from 'react-icons/wi';

import { FaGithubSquare, FaLinkedin } from "react-icons/fa";
import { IoMdContact } from "react-icons/io";
import { SiCredly } from "react-icons/si";



export const skills = [
    {
        imageUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg",
        name: "Java",
        type: "BackEnd",
        url: "https://www.java.com/en/",
    },
    {
        imageUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/c/c-original.svg",
        name: "C",
        type: "BackEnd",
        url: "https://en.wikipedia.org/wiki/C_(programming_language)",
    },
    {
        imageUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
        name: "Javascript",
        type: "FrontEnd",
        url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    },
    {
        imageUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
        name: "React",
        type: "FrontEnd",
        url: "https://reactjs.org/",
    },
    {
        imageUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/angularjs/angularjs-original.svg",
        name: "Angular",
        type: "FrontEnd",
        url: "https://angular.io/",
    },
    {
        imageUrl: "https://www.svgrepo.com/show/374056/rust.svg",
        name: "Rust",
        type: "BackEnd",
        url: "https://www.rust-lang.org/",
    },
    {
        imageUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/oracle/oracle-original.svg",
        name: "SQL",
        type: "BackEnd",
        url: "https://www.oracle.com/database/",
    },
    {
        imageUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
        name: "Python",
        type: "BackEnd",
        url: "https://www.python.org/",
    },
    {
        imageUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original-wordmark.svg",
        name: "Nodejs",
        type: "BackEnd",
        url: "https://nodejs.org/en/",
    },
    {
        imageUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg",
        name: "aws",
        type: "Tools",
        url: "https://aws.amazon.com/",
    },
    {
        imageUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/denojs/denojs-original.svg",
        name: "deno.js",
        type: "BackEnd",
        url: "https://deno.com/",
    },
    {
        imageUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg",
        name: "Postman",
        type: "Tools",
        url: "https://www.postman.com/",
    },
    {
        imageUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg",
        name: "Docker",
        type: "Tools",
        url: "https://www.docker.com/",
    },
    {
        imageUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linux/linux-original.svg",
        name: "Linux",
        type: "Tools",
        url: "https://www.linux.org/",
    },
    {
        imageUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg",
        name: "Visual Studio",
        type: "Tools",
        url: "https://code.visualstudio.com/",

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
        name: 'HairDrop (under development)',
        description: 'This project is a service designed to seamlessly connect users with hair salons, barbershops, and independent hairstylists, offering a modern, on-demand solution for hair care.',
        link: 'https://github.com/PureNimble/hairdrop',
        website: 'https://hairdrop.me',
    },
    {
        iconUrl: 'https://raw.githubusercontent.com/PureNimble/PureNimble.github.io/refs/heads/main/src/assets/Jobs4u-Logo-LightMode.svg',
        theme: 'btn-back-pink',
        name: 'Jobs4u',
        description: 'Major Project for the Software Engineering course at ISEP. Jobs4u is a platform that connects job seekers with employers, providing a simple and efficient way to find and post job opportunities.',
        link: 'https://github.com/PureNimble/ISEP-LAPR4',
    }
];

export const overlay = [
    {
        title: "Welcome to my web portfolio!",
        description: "Explore my work and don't miss the 3D animation section for an immersive experience. Enjoy!",
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

export const weatherIcons = {
    "01d": WiDaySunny,
    "01n": WiNightClear,
    "02d": WiCloud,
    "02n": WiCloud,
    "03d": WiCloudy,
    "03n": WiCloudy,
    "04d": WiCloudy,
    "04n": WiCloudy,
    "09d": WiShowers,
    "09n": WiShowers,
    "10d": WiRain,
    "10n": WiRain,
    "11d": WiThunderstorm,
    "11n": WiThunderstorm,
    "13d": WiSnow,
    "13n": WiSnow,
    "50d": WiFog,
    "50n": WiFog,
};

export const overlayCards = [

    {
        image: "https://github.com/joaopinto15.png",
        title: "Welcome to my web portfolio!",
        description: "Explore my work and don't miss the 3D animation section for an immersive experience. Enjoy!",
    },
];
