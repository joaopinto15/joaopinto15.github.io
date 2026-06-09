import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";
import { ReactLight } from "@/components/ui/svgs/reactLight";
import { Typescript } from "@/components/ui/svgs/typescript";
import { Nodejs } from "@/components/ui/svgs/nodejs";
import { Python } from "@/components/ui/svgs/python";
import { Rust } from "@/components/ui/svgs/rust";
import { Postgresql } from "@/components/ui/svgs/postgresql";
import { Kubernetes } from "@/components/ui/svgs/kubernetes";
import { Java } from "@/components/ui/svgs/java";
import { Dotnet } from "@/components/ui/svgs/dotnet";
import { Grafana } from "@/components/ui/svgs/grafana";
import { Argocd } from "@/components/ui/svgs/argocd";
import { Redis } from "@/components/ui/svgs/redis";

export const DATA = {
  name: "João Pinto",
  initials: "JP",
  url: "https://joaopinto15.github.io",
  location: "Porto, Portugal",
  locationLink: "https://www.google.com/maps/place/Porto",
  description:
    "Junior Software Engineer based in Portugal, passionate about building secure, practical software that helps people.",
  summary:
    "My interests include backend development, cloud infrastructure, DevOps, and cybersecurity. I enjoy working on systems that are reliable and easy to evolve, while continuously learning new technologies and improving the way software is built, deployed, and monitored.",
  avatarUrl: "/me.jpg",
  skills: [
    { name: "React", icon: ReactLight },
    { name: "Typescript", icon: Typescript },
    { name: "Node.js", icon: Nodejs },
    { name: "Python", icon: Python },
    { name: "Rust", icon: Rust },
    { name: "Postgres", icon: Postgresql },
    { name: "Kubernetes", icon: Kubernetes },
    { name: "Java", icon: Java },
    { name: ".NET", icon: Dotnet },
    { name: "Grafana", icon: Grafana },
    { name: "Argo CD", icon: Argocd },
    { name: "Redis", icon: Redis },
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    // { href: "/notes", icon: NotebookIcon, label: "Notes" },
  ],
  contact: {
    email: "pintojad03@gmail.com",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/joaopinto15",
        icon: Icons.github,
        navbar: true,
      },

      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/joaopinto15/",
        icon: Icons.linkedin,

        navbar: true,
      },
      Credly: {
        name: "Credly",
        url: "https://www.credly.com/users/joaopinto15",
        icon: Icons.credly,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Capgemini",
      href: "https://www.capgemini.com/pt-en/",
      badges: [],
      location: "Hybird",
      title: "Associate Software Engineer",
      logoUrl: "/capgemini.svg",
      start: "January 2026",
      end: "Current",
      description:
        "Contributed to the implementation, documentation, and maintenance of a .NET microservices-based application supporting a large-scale retail mobile platform. Hosted and managed services in a Kubernetes cluster, implemented observability with Grafana, and supported continuous deployments using ArgoCD.",
    },
    {
      company: "GECAD",
      badges: [],
      href: "https://www.gecad.isep.ipp.pt/",
      location: "Porto",
      title: "Researcher",
      logoUrl: "/gecad.png",
      start: "January 2025",
      end: "November 2025",
      description:
        "Conducted research and wrote a technical report focused on improving virus detection in Windows systems. The investigation explored monitoring WinAPI activity by tracking Windows API calls and using a machine learning model to analyze behavioral patterns, improving the detection of suspicious activity and strengthening security visibility on Windows endpoints.",
    },
  ],
  education: [
    {
      school: "University of Porto",
      href: "https://www.up.pt/feup/pt/",
      degree: "Master's Degree in CyberSecurity",
      logoUrl: "/fcup.svg",
      start: "2026",
      end: "Current",
    },
    {
      school: "Polytechnic University of Porto",
      href: "https://www.isep.ipp.pt/",
      degree: "Bachelor's Degree in Computer Science",
      logoUrl: "/isep.svg",
      start: "2022",
      end: "2025",
    },
    {
      school: "University of Sofia",
      href: "https://tu-sofia.bg",
      degree: "Erasmus+ Exchange Student",
      logoUrl: "/sofia.svg",
      start: "2025",
      end: "2024",
    },
  ],
  projects: [
    {
      title: "Inteligent HIDS",
      href: "https://github.com/joaopinto15/WinAPI_Tracker",
      dates: "Jan 2025 - Nov 2025",
      active: true,
      description:
        "For my final project at ISEP, I developed a Wazuh integration infrastructure focused on monitoring WinAPI activity. The system tracks Windows API calls and uses a machine learning model to analyze behavioral patterns, enabling better detection of suspicious activity and improving security visibility on Windows endpoints.",
      technologies: ["C++", "Wazuh", "WinAPI", "SystemCalls", "Python"],
      links: [
        {
          type: "Source 1",
          href: "https://github.com/joaopinto15/WinAPI_ML_Model",
          icon: <Icons.github className="size-3" />,
        },
        {
          type: "Source 2",
          href: "https://github.com/joaopinto15/WinAPI_Tracker",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/chat-collect.mp4",
    },
    {
      title: "Kubernetes HomeServer",
      href: "https://github.com/joaopinto15/kubernetes-lab",
      dates: "Jun 2026 - Present",
      active: true,
      description:
        "Building a Kubernetes-based homeserver for self-hosting applications, storing photos and movies, and managing personal services, with GitOps automation through Argo CD and full-stack observability using Grafana.",
      technologies: [
        "Grafana",
        "Kubernetes",
        "PostgreSQL",
        "Argo CD",
        "bash",
        "debian",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/joaopinto15/kubernetes-lab",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "https://cdn.magicui.design/bento-grid.mp4",
    },
    ,
  ],
} as const;
