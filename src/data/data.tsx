import {
  AcademicCapIcon,
  ArrowDownTrayIcon,
  BuildingOffice2Icon,
  CalendarIcon,
  FlagIcon,
  MapIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline';

import GithubIcon from '../components/Icon/GithubIcon';
import InstagramIcon from '../components/Icon/InstagramIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
import StackOverflowIcon from '../components/Icon/StackOverflowIcon';
import TwitterIcon from '../components/Icon/TwitterIcon';
import heroImage from '../images/header-background.webp';
import porfolioImage1 from '../images/portfolio/portfolio-1.jpg';
import porfolioImage2 from '../images/portfolio/portfolio-2.jpg';
import porfolioImage3 from '../images/portfolio/portfolio-3.jpg';
import porfolioImage4 from '../images/portfolio/portfolio-4.jpg';
import porfolioImage5 from '../images/portfolio/portfolio-5.jpg';
import porfolioImage6 from '../images/portfolio/portfolio-6.jpg';
import porfolioImage7 from '../images/portfolio/portfolio-7.jpg';
import porfolioImage8 from '../images/portfolio/portfolio-8.jpg';
import porfolioImage9 from '../images/portfolio/portfolio-9.jpg';
import porfolioImage10 from '../images/portfolio/portfolio-10.jpg';
import porfolioImage11 from '../images/portfolio/portfolio-11.jpg';
import profilepic from '../images/profilepic.jpg';
import testimonialImage from '../images/testimonial.webp';
import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  PortfolioItem,
  SkillGroup,
  Social,
  TestimonialSection,
  TimelineItem,
} from './dataDef';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: 'React Resume Template',
  description: "Example site built with Tim Baker's react resume template",
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: 'hero',
  About: 'about',
  Contact: 'contact',
  Portfolio: 'portfolio',
  Resume: 'resume',
  Skills: 'skills',
  Stats: 'stats',
  Testimonials: 'testimonials',
} as const;

export type SectionId = (typeof SectionId)[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  name: `I'm Sam Hoekwater`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        I'm currently a Fort Worth based <strong className="text-stone-100">Software Engineer</strong>, currently working
        at <strong className="text-stone-100">Lockheed Martin</strong> helping support Test-Station Avionic Software.
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        In my free time time, I enjoy playing volleyball, snow skiing, running, and working on my personal video game project.
      </p>
    </>
  ),
  actions: [
    {
      href: '/assets/resume.pdf',
      text: 'Resume',
      primary: true,
      Icon: ArrowDownTrayIcon,
    },
    {
      href: `#${SectionId.Contact}`,
      text: 'Contact',
      primary: false,
    },
  ],
};

/**
 * About section
 */
export const aboutData: About = {
  profileImageSrc: profilepic,
  description: `I am a dedicated young engineer with a passion for developing innovative 
	  solutions and bringing creative projects to life. In my current role, I hold Secret
  	Security Clearance and work on avionics software models, creating and maintaining
	systems that simulate fighter jet avionics to enhance pilot training and system testing.
	Additionally, I’m working on a personal video game project—a western-themed platform
	shooter—that combines my technical skills with my love for design and gameplay mechanics.
	I’m committed to continuous learning and enjoy challenging myself with complex projects. 
	Whether in team settings or solo projects, I approach every task with a strong work ethic
	and enthusiasm for problem-solving.`,

  aboutItems: [
    {label: 'Location', text: 'Fort Worth, TX', Icon: MapIcon},
    {label: 'Age', text: '23', Icon: CalendarIcon},
    {label: 'Interests', text: 'Game Development, Fitness, Nature', Icon: SparklesIcon},
    {label: 'Study', text: 'University of Michigan, Ann Arbor', Icon: AcademicCapIcon},
    {label: 'Employment', text: 'Lockheed Martin Co.', Icon: BuildingOffice2Icon},
  ],
};

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
  {
    name: 'Technical Skills',
    skills: [
      {
        name: 'C++',
        level: 9,
      },
      {
        name: 'Python',
        level: 8,
      },
      {
        name: 'Javascript',
        level: 5,
      },
      {
	name: 'Git',
	level: 9,
      },
      {
	name: 'Linux',
	level: 9,
      },
      {
	name: 'SQL',
	level: 5,
      },
    ],
  },
  {
    name: 'Languages Spoken',
    skills: [
      {
        name: 'English',
        level: 10,
      },
      {
        name: 'Spanish',
        level: 5,
      },
    ],
  },
];

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
  {
    title: 'Project title 1',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage1,
  },
  {
    title: 'Project title 2',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage2,
  },
  {
    title: 'Project title 3',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage3,
  },
  {
    title: 'Project title 4',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage4,
  },
  {
    title: 'Project title 5',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage5,
  },
  {
    title: 'Project title 6',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage6,
  },
  {
    title: 'Project title 7',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage7,
  },
  {
    title: 'Project title 8',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage8,
  },
  {
    title: 'Project title 9',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage9,
  },
  {
    title: 'Project title 10',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage10,
  },
  {
    title: 'Project title 11',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage11,
  },
];

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const education: TimelineItem[] = [
  {
    date: 'Sep. 2019 to Apr. 2023',
    location: 'School of Engineering',
    itle: 'Bachelor\'s in  Computer Science',
    content: <p>Overall GPA: 3.5/4.0
    <br></br><br></br>
    Throughout my studies at the University of Michigan, I was able to design, implement, and learn/apply proper coding principles in my software development. The Computer Science program at Michigan emphasized learning how to write code that is not only functional, but also high performance. They taught me how to collaborate with others on coding projects and integrate each person's part into one final product. 
    <br></br><br></br>
    The classes that helped me the most in becoming a capable engineer were <b>Data Structures and Algorithms</b>, <b>Computer Organization</b>, and <b>Web Systems</b>. In these classes, I learned how to make systems scalable to handle large amounts of data and traffic.</p>
  },
];

export const experience: TimelineItem[] = [
  {
    date: 'Jul 2023 - Present',
    location: 'Lockheed Martin Co.',
    title: 'Software Engineer',
    content: (
      <p>
      	<b>-Optimized Avionics Test Station Software:</b> Developed and maintained universal software using C and C++ to
	streamline avionics simulations for the Integrated Fighter Group Program, reducing cross-program redundancy
	and improving codebase efficiency.
      <br></br>
	<b>-Enhanced Pilot Simulation Interfaces:</b> Designed and implemented GUIs that accurately simulate pilot interactions
	with avionics subsystems, improving test accuracy and contributing to more realistic test scenarios.
      <br></br>	
	<b>-Developed and Integrated Classified Radar Model:</b> Led the full lifecycle development of a classified radar model,
	collaborating with customers to meet project specifications and deadlines. Successfully integrated model into seamless
	communication with mission computer softwares.
      </p>
    ),
  },
  {
    date: 'May 2022 - Aug 2022',
    location: 'Dematic Inc.',
    title: 'Software Engineer Intern',
    content: (
      <p>
      	<b>-Developed Cost-Saving Sortation Simulator:</b> Created a sortation simulator that replicated the company's package
	sorting processes, enabling engineers to test tools without using live stations, resulting in significant cost
	savings during development phases.
	<br></br>
	<b>-Collaborated With Team:</b> Learned valuable communication skills and how to approach gaining comprehension of a large codebase.
      </p>
    ),
  },
  {
    date: 'Jun 2019 - May 2022',
    location: 'Floor Care Concepts',
    title: 'Crew Leader',
    content: (
      <p>
	<b>-Leadership and Management: </b>Led a team of 3-5 employees in completing gym floor refinishing projects, ensuring on-time 
	delivery and high-quality results, while managing workflow and resolving on-site issues.
	<br></br>
	<b>-Customer Relationship and Communication:</b> Interfaced with customers, providing timely updates on project progress and
	ensured customer satisfaction by addressing concern and managing expectations.
      </p>
    ),
  },
];

/**
 * Testimonial section
 */
export const testimonial: TestimonialSection = {
  imageSrc: testimonialImage,
  testimonials: [
    {
      name: 'Mason McDaniel, Senior Software Engineer at Lockheed Martin',
      text: 'Sam has been a great addition to the team and has a delightful attitude towards his work that brightens each moment. He has excelled in all his work and does everything promptly and thoroughly. He is a very clever engineer and has a strong work ethic. Whenever he has questions on something he immediately asks and is always looking for more work. Sam is an engineer with lots of potential and will excel in whatever he does.',
      //image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/169.jpg',
    },
    {
      name: 'Andrew Handrop, Software Engineer at Lockheed Martin',
      text: 'Sam is easy to work with and a fast learner. He is quick to ask questions and works diligently until his work is done.',
      //image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/14.jpg',
    },
  ],
};

/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: 'Get in touch.',
  description: 'Feel free to reach out to me via my email linked below.',
  items: [
    {
      type: ContactType.Email,
      text: 'samuelhoekwater@gmail.com',
      href: 'mailto:samuelhoekwater@gmail.com',
    },
    {
      type: ContactType.Location,
      text: 'Fort Worth TX, USA',
      href: 'https://www.google.ca/maps/place/Fort+Worth,+TX/@32.7992671,-97.9130364,10z/',
    },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  {label: 'Github', Icon: GithubIcon, href: 'https://github.com/shoekwater'},
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/samuelhoekwater/'},
];
