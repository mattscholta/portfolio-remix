export interface Experience {
  company: string;
  companyUrl: string;
  date: string;
  dateRange?: [Date, Date];
  image?: string;
  description: string;
  highlights: string[];
  tags: string[];
  title: string;
}

export const experience: Experience[] = [
  // {
  //   company: "Rocket CMS",
  //   companyUrl: "https://rocketcms.org/",
  //   date: `Feb 2022 - Present`,
  //   description: `<p>RocketCMS lets anyone manage your website using the components you've designed.</p>`,
  //   highlights: [
  //     `Delivered a full rebuild & rebrand of the Python + Django website to NextJS`,
  //     `Migrated to a (nearly) fully containerized stack and development workflow`,
  //     `Introduced GraphQL and strong (generated) types across services`,
  //     `Abstracted a core style-guide used across services`
  //   ],
  //   image: `https://rocketcms.org/favicon.ico`,
  //   tags: [],
  //   title: `Founder`
  // },
  {
    company: "Haldi Inc.",
    companyUrl: "https://haldi.com/",
    date: `Apr 2021 - Present`,
    dateRange: [new Date(2021, 4, 1), new Date()],
    description: `<p>One year in and we've accomplished so much. Here are a few milestones worth mentioning.</p>`,
    highlights: [
      `Delivered a full rebuild & rebrand of the Python + Django website to NextJS`,
      `Migrated to a (nearly) fully containerized stack and development workflow`,
      `Introduced GraphQL and strongly (generated) types across services`,
      `Created a Survey framework to enable data driven iteration`,
      `Abstracted a core style-guide used across services`
    ],
    image: `https://haldi.com/favicon.ico`,
    tags: [],
    title: `Principal Engineer`
  },
  {
    company: "thredUP",
    companyUrl: "https://thredup.com/",
    date: `Feb 2016 - Apr 2021`,
    dateRange: [new Date("February 2016"), new Date("April 2021")],
    description: `<p>Successfully pitched, prototyped, and delivered several high-impact projects within the organization. Assisting in hiring, managing, and mentoring of engineers at various levels, distributed across the globe.</p>`,
    highlights: [
      `Content Management System; Pitched, prototyped, and delivered`,
      `PWA (Progressive Web App); Pitched, prototyped, and delivered`,
      `Lerna Monorepo; Pitched, prototyped, and delivered`,
      `CSS Overhaul; Pitched, prototyped, and delivered`
    ],
    image: `https://thredup.com/favicon.ico`,
    tags: [],
    title: `Staff Engineer`
  },
  {
    company: "Bynd",
    companyUrl: "https://bynd.com/",
    date: `Nov 2011 - Apr 2015`,
    dateRange: [new Date(2011, 11, 1), new Date(2015, 4, 1)],
    description: `<p>Maintain and expand design system and its components with a strong emphasis on color system and data visualization. Collaborate with broader product, design, and engineering teams to help establish a stronger UX patterns, and solutions. Focus areas include:</p>`,
    highlights: [
      `Building out UX/UI/IxD patterns and maintaining the design system with semantic versioning`,
      `Ensuring color consistency, accessibility, and flexibility in charts/graphs`,
      `Facilitating collaboration between product, engineering, and design teams`,
      `Prototyping and developing internal proof-of-concepts in React`
    ],
    image: `https://bynd.com/favicon.ico`,
    tags: [],
    title: `Technical Team Lead`
  },
  {
    company: "Lift Agency",
    companyUrl: "https://liftagency.co",
    date: `Jul 2010 - Nov 2011`,
    dateRange: [new Date(2010, 7, 1), new Date(2011, 11, 1)],
    description: `
    <p>While at Creative Lift (now Lift Agency) we developed a variety of Mobile & Desktop applications for Facebook, Snapfish, Union Bank, AOL, Gerber, Proactive, Charter and a variety of others.</p>
    <p>We improved brand communication and provided more effective and consistent user experiences, utilizing various frameworks and custom developed solutions and agile design and development techniques.</p>
    `,
    // <p>I was on the team responsible for creating the “Lift Calculator,” an iPhone application that allows users to easily calculate the response rate of marketing campaigns & compare against averages.</p>
    highlights: [
      `Building out UX/UI/IxD patterns and maintaining the design system with semantic versioning`,
      `Ensuring color consistency, accessibility, and flexibility in charts/graphs`,
      `Facilitating collaboration between product, engineering, and design teams`,
      `Prototyping and developing internal proof-of-concepts in React`
    ],
    image: "https://liftagency.co/favicon.ico",
    tags: [],
    title: `Interactive Developer`
  },
  {
    company: "Hotwire <small>(contract)</small>",
    companyUrl: "https://hotwire.com",
    date: `Apr 2010 - Jun 2010`,
    dateRange: [new Date(2010, 4, 1), new Date(2010, 6, 1)],
    description: `
    <p>Worked in a development capacity within the Creative Services department to produce e-mails, banners, and 3rd party widgets during planning, design and production phases. I was responsible for efficiently communicating with Engineering and User Experience departments to achieve team-wide goals.</p>
    `,
    highlights: [
      `Building out UX/UI/IxD patterns and maintaining the design system with semantic versioning`,
      `Ensuring color consistency, accessibility, and flexibility in charts/graphs`,
      `Facilitating collaboration between product, engineering, and design teams`,
      `Prototyping and developing internal proof-of-concepts in React`
    ],
    image: "https://hotwire.com/favicon.ico",
    tags: [],
    title: `Graphic Designer`
  },
  {
    company: "I.W. Group Inc.",
    companyUrl: "https://www.iwgroup.agency",
    date: `Sep 2008 - Feb 2010`,
    dateRange: [new Date(2008, 8, 1), new Date(2010, 2, 1)],
    description: `
    <p>Development and Interaction Design of varying marketing domains and advertising collateral for clients including; McDonalds, FedEx, PG&E</p>
    `,
    highlights: [
      `Building out UX/UI/IxD patterns and maintaining the design system with semantic versioning`,
      `Ensuring color consistency, accessibility, and flexibility in charts/graphs`,
      `Facilitating collaboration between product, engineering, and design teams`,
      `Prototyping and developing internal proof-of-concepts in React`
    ],
    // image: "https://www.iwgroup.agency/favicon.ico",
    tags: [],
    title: `Interactive Designer/Developer`
  },
  {
    company: "Zipidee",
    companyUrl: "https://zipidee.com",
    date: `Oct 2007 - Aug 2008`,
    dateRange: [new Date(2007, 10, 1), new Date(2008, 8, 1)],
    description: `
      <p>Development and Interaction Design of varying marketing domains and advertising collateral for clients including.</p>
    `,
    highlights: [
      `Building out UX/UI/IxD patterns and maintaining the design system with semantic versioning`,
      `Ensuring color consistency, accessibility, and flexibility in charts/graphs`,
      `Facilitating collaboration between product, engineering, and design teams`,
      `Prototyping and developing internal proof-of-concepts in React`
    ],
    // image: "https://www.iwgroup.agency/favicon.ico",
    tags: [],
    title: `Multi-Media Production Artist`
  }
];

export interface Social {
  icon: string;
  title: string;
  url: string;
}

export const social: Social[] = [
  {
    icon: `/images/svg/envelope.svg`,
    title: `matthew.scholta`,
    url: `mailto:matthew.scholta@gmail.com`
  },
  {
    icon: `/images/svg/phone.svg`,
    title: `(415) 722-7481`,
    url: `tel:+14157227481`
  },
  {
    icon: `/images/svg/github.svg`,
    title: `visormatt`,
    url: `https://github.com/visormatt`
  },
  {
    icon: `/images/svg/linkedin.svg`,
    title: `/in/MatthewScholta`,
    url: `https://www.linkedin.com/in/MatthewScholta`
  },
  {
    icon: `/images/svg/twitter.svg`,
    title: `@visormatt`,
    url: `https://twitter.com/visormatt`
  }
  // {
  //   icon: `/images/svg/github.svg`,
  //   title: `PDF Download`,
  //   url: `https://mattscholta.com/resume.pdf`
  // }
];
