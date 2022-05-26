export interface Experience {
  company: string;
  companyUrl: string;
  contract?: boolean;
  date: string;
  dateRange?: [start: Date, end?: Date];
  description: string;
  highlights: string[];
  image?: string;
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
  //   tags: [
  //      "NodeJS",
  //      "TailwindCSS",
  //      "TypeScript"
  //   ],
  //   title: `Founder`
  // },
  {
    company: "Haldi",
    companyUrl: "https://haldi.com/",
    date: `Apr 2021 - Present`,
    dateRange: [new Date(2021, 4, 1)],
    description: `
      <p>
        One year in we've jump-started the organizations code! We've taken a
        "loosely typed" & "strongly coupled" and successfully flipped it. The
        entire stack is now containerized and makes us of Firebase Emulators
        for an incredible development workflow.
      </p>
    `,
    // <p>One year in and we've accomplished so much. Here are a few milestones worth mentioning.</p>
    highlights: [
      `0% - 80% Docker(ized) stack and development workflow`,
      `Introduced GraphQL and strongly (generated) typings across services`,
      `Delivered a full rebuild & rebrand of the Python + Django website to NextJS`,
      `Survey Framework, CSS Style Guide, Monorepo, Unit & E2E Testing, and more`
    ],
    image: `https://haldi.com/favicon.ico`,
    tags: [
      "Docker",
      "Google Cloud",
      "GraphQL",
      "GraphQL Nexus",
      "NextJS",
      "NodeJS",
      "Serverless",
      "TailwindCSS",
      "TypeScript"
    ],
    title: `Principal Engineer`
  },
  {
    company: "thredUP",
    companyUrl: "https://thredup.com/",
    date: `Feb 2016 - Apr 2021`,
    dateRange: [new Date("February 2016"), new Date("April 2021")],
    description: `
      <p>Successfully pitched, prototyped, and delivered several high-impact projects within the organization. Assisting in hiring, managing, and mentoring of engineers at various levels, distributed across the globe.</p>
    `,
    highlights: [
      `Content Management System; Pitched, prototyped, and delivered`,
      `Progressive Web App (PWA); Pitched, prototyped, and delivered`,
      `Lerna Monorepo; Pitched, prototyped, and delivered`,
      `CSS Overhaul; Pitched, prototyped, and delivered`,
      `Apollo Migration, Redux Migration, Checkout Overhaul, and many more...`
    ],
    image: `https://thredup.com/favicon.ico`,
    tags: [
      "CSS",
      "Docker",
      "HTML",
      "Kubernetes",
      "PostCSS",
      "NodeJS",
      "React",
      "TailwindCSS",
      "TypeScript",
      "Webpack"
    ],
    title: `Staff Engineer`
  },
  {
    company: "Bynd",
    companyUrl: "https://bynd.com/",
    date: `Nov 2011 - Apr 2015`,
    dateRange: [new Date(2011, 11, 1), new Date(2015, 4, 1)],
    description: `<p>
      Agency life in San Francisco affords the opportunity to work with a
      variety of "high profile" clients to create and deliver high-impact
      projects. As Team Lead, my responsibilities included: pitch work,
      application architecture, technical documentation, code reviews, and
      mentoring.
    </p>`,
    highlights: [
      `Google TrainUP; Pitched, architected, developed, and delivered`,
      `Google Databoard; Conceptualized, architected, developed, and delivered`,
      `Facebook Disaster Relief; Prototyped with BackboneJS and Facebook API's`,
      `Apple iAds; Development of HTML micro sites internally for Apple`,
      `Apple iAds; Pitched an abstraction to minimize production time/cost, which was adopted internally`
    ],
    image: `https://bynd.com/favicon.ico`,
    tags: [
      "AngularJS",
      "BackboneJS",
      "CSS",
      "Google Cloud",
      "HTML",
      "Javascript"
    ],
    title: `Technical Team Lead`
  },
  {
    company: "Lift Agency",
    companyUrl: "https://liftagency.co",
    date: `Jul 2010 - Nov 2011`,
    dateRange: [new Date(2010, 7, 1), new Date(2011, 11, 1)],
    description: `<p>
      Joining Lift Agency was a conscious decision to move away from any
      form of a "Design" related role and focus on "Engineering".
    </p>`,
    highlights: [
      `Wrote the Charter Checkout system and client side validation flow`,
      `Experienced all the fun "quirks" of the IE days and Financial Systems`,
      `Assisted in creating the "Lift Calculator" an iPhone application`
    ],
    image: "https://liftagency.co/favicon.ico",
    tags: [
      "CSS",
      "HTML",
      "JQuery",
      "Javascript",
      "Development",
      "Git",
      "Adobe Flash",
      "PHP"
    ],
    title: `Interactive Developer`
  },
  {
    company: "Hotwire",
    companyUrl: "https://hotwire.com",
    contract: true,
    date: `Apr 2010 - Jun 2010`,
    dateRange: [new Date(2010, 4, 1), new Date(2010, 6, 1)],
    description: `<p>
      Worked in a development capacity within the Creative Services department
      to produce e-mails, banners, and 3rd party widgets throughout.
    </p>`,
    highlights: [
      `Created initial prototypes for interactive widgets`,
      `Coded various `
    ],
    image: "https://hotwire.com/favicon.ico",
    tags: [
      "Adobe Illustrator",
      `Adobe Photoshop`,
      "CSS",
      "HTML",
      "JQuery",
      "Prototyping"
    ],
    title: `Graphic Designer`
  },
  {
    company: "I.W. Group",
    companyUrl: "https://www.iwgroup.agency",
    date: `Sep 2008 - Feb 2010`,
    dateRange: [new Date(2008, 8, 1), new Date(2010, 2, 1)],
    description: `<p>
      A hybrid Dev/Design role creating web and interactive materials
      for clients including; McDonalds, FedEx, PG&E, US Army, US Census, and
      others.
    </p>`,
    highlights: [
      `Management of the APAC Ronald McDonald House Charity web domain`,
      `Development of Flash media across 3-5 languages and varying dimensions`,
      `Speaker: New York, non-profit meetup re: Using social networking to enhance brand awareness`
    ],
    // image: "https://www.iwgroup.agency/favicon.ico",
    tags: [
      "Adobe Flash",
      "Adobe Illustrator",
      "Adobe Photoshop",
      "CSS",
      "HTML",
      "JQuery"
    ],
    title: `Interactive Designer/Developer`
  },
  {
    company: "Zipidee",
    companyUrl: "https://zipidee.com",
    date: `Oct 2007 - Aug 2008`,
    dateRange: [new Date(2007, 10, 1), new Date(2008, 8, 1)],
    description: `<p>
      As with any startup we tend to wear many hats, and this being my first professional / non-freelance position I took every opportunity I could to be involved.
    </p>`,
    highlights: [
      `Implemented and managed the video encoding/transcoding processes`,
      `Balancing speed/quality settings across multiple outputs for varying use-cases`,
      `Responsible for production of flash components and banners used on domains`,
      `Development of custom branded, Flash video players for use on partner domains`,
      `Partners: Amazon, TiVo, ASPCA, The Weather Channel, and many others`
    ],
    // image: "https://www.iwgroup.agency/favicon.ico",
    tags: [
      `ActionScript 2.0`,
      `Adobe Flash`,
      `Adobe Photoshop`,
      "CSS",
      `HTML`,
      `video encoding`,
      `video transcoding`
    ],
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
  // {
  //   icon: `/images/svg/phone.svg`,
  //   title: `(415) 722-7481`,
  //   url: `tel:+14157227481`
  // },
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
