import {DiHtml5, DiCss3, DiJsBadge, DiReact, DiBootstrap, DiDigitalOcean,DiFirebase, DiGit, DiGithubBadge, DiJqueryLogo, DiLinux, DiMongodb, DiMysql, DiNginx, DiNodejs, DiSass, DiUbuntu } from "react-icons/di"
import {SiTypescript, SiRedux, SiZod, SiExpress,SiReactquery, SiTailwindcss, SiPrisma} from "react-icons/si";
import {GiWifiRouter} from "react-icons/gi"
import {FaNetworkWired} from "react-icons/fa"
import {BiAnalyse} from "react-icons/bi"
import {AiFillWindows} from "react-icons/ai"
import {TbBrandOffice} from "react-icons/tb"
import {MdOutlineSecurity} from "react-icons/md"
import {BiLogoPython} from "react-icons/bi"
import {RiEnglishInput} from "react-icons/ri"
export const links = [
  {
    name: "Home",
    hash: "/",
  },
 
  {
    name: "Projects",
    hash: "/projects",
  },
  {
    name: "Skills",
    hash: "/skills",
  },
  {
    name: "Contact",
    hash: "/contact",
  },
] as const;



export const projectsData = [
  {
    title: "Campus Network Design Using Reverbed simulation",
    description:
      `The aim of the project is to develop campus network design based on simulation study and how the simulation
      tool can be used to develop the simulation model of campus area network.
      The objective of this project is to demonstrate basics of designing a network while considering the
      communication can perform in design.
      1. Research about the problems encountered in the current systems.
      2. Research about the numbers of users and types of equipment.
      3. Research about the network topology
      4. Research tools and techniques
      5. Analysis of the network infrastructure and architecture
      6. Analysis of addressing and routing component.
      7. Designing Architecture
      8.Security managed services 
      9.Firewall 
      10.logical and physical 
      11.Performance 
      12. Identify the effects on performance
      13. Advantages and disadvantages of network 
      14. Final document of the whole project`,
    tags: ["Firewall"],
  },

  
];

export const skillsData = [
  {
    name: "Routing&Switching",
    icon: <GiWifiRouter className="w-10 h-10"/>
  },
  {
    name: "Design&Architecture",
    icon: <FaNetworkWired className="w-10 h-10"/>
  },
  {
    name: "Planning&Analysis&Research",
    icon: <BiAnalyse className="w-10 h-10"/>
  },
  {
    name: "Firewall&Security",
    icon: <MdOutlineSecurity className="w-10 h-10"/>
  },
  {
    name: "Microsoft Office 365",
    icon: <TbBrandOffice className="w-10 h-10"/>
  },
  {
    name: "Window Server",
    icon: <AiFillWindows className="w-10 h-10"/>
  },
  {
    name: "Linux",
    icon: <DiLinux className="w-10 h-10"/>
  },
  {
    name: "Python",
    icon: <BiLogoPython className="w-10 h-10"/>
  },
  {
    name: "English",
    icon: <RiEnglishInput className="w-10 h-10" />
  }
 
] 