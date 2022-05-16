/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Nien's Portfolio",
  description:
    "We always have a choice to make and the choice we make, defines that are we really doing the right thing",
  author: " - Anish Mayaramka",
    og: {
    title: "Nien Luong Portfolio",
    type: "website",
    url: "https://nienlb.info",
  },
};

//Home Page
const greeting = {
  title: "Nien Luong",
  logo_name: "NienLuong",
  nickname: "nienlb",
  subTitle:
    "We always have a choice to make and the choice we make, defines that are we really doing the right thing",
  author: "Anish Mayaramka",
  resumeLink: "https://1drv.ms/b/s!AnBooq3pd12OiMpiL8127BAFUF5v-w?e=rMM8N9",
  portfolio_repository: "https://github.com/nienlb/myPortfolio",
  githubProfile: "https://github.com/nienlb",
};

const socialMediaLinks = [
  /* Your Social Media Link */
  // github: "https://github.com/ashutosh1919",
  // linkedin: "https://www.linkedin.com/in/ashutosh-hathidara-88710b138/",
  // gmail: "ashutoshhathidara98@gmail.com",
  // gitlab: "https://gitlab.com/ashutoshhathidara98",
  // facebook: "https://www.facebook.com/laymanbrother.19/",
  // twitter: "https://twitter.com/ashutosh_1919",
  // instagram: "https://www.instagram.com/layman_brother/"

  {
    name: "Github",
    link: "https://github.com/nienlb",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/nienlb/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  // {
  //   name: "YouTube",
  //   link: "https://www.youtube.com/channel/UC_amoXmmxSY9KusoDczDTXQ",
  //   fontAwesomeIcon: "fa-youtube", // Reference https://fontawesome.com/icons/youtube?style=brands
  //   backgroundColor: "#FF0000", // Reference https://simpleicons.org/?q=youtube
  // },
  {
    name: "Gmail",
    link: "tatsuyanin@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  {
    name: "Twitter",
    link: "https://twitter.com/nienlb",
    fontAwesomeIcon: "fa-twitter", // Reference https://fontawesome.com/icons/twitter?style=brands
    backgroundColor: "#1DA1F2", // Reference https://simpleicons.org/?q=twitter
  },
  {
    name: "Facebook",
    link: "https://www.facebook.com/nienlb/",
    fontAwesomeIcon: "fa-facebook-f", // Reference https://fontawesome.com/icons/facebook-f?style=brands
    backgroundColor: "#1877F2", // Reference https://simpleicons.org/?q=facebook
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/nienlb/",
    fontAwesomeIcon: "fa-instagram", // Reference https://fontawesome.com/icons/instagram?style=brands
    backgroundColor: "#E4405F", // Reference https://simpleicons.org/?q=instagram
  },
];

const skills = {
  data: [
    {
      title: "Customer success specialist",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Receive Customer information from B2B Consulting Sales department and analyze, survey expectations and come up with a suitable implementation strategy for each customer",
        "⚡ Advising customers on how to use and apply technology at the company to support their company's sustainable growth",
        "⚡ Transform daily administrative activities and processes with Base's management solution",
        "⚡ Coaching the customer side staff to use proficiently and operate the system by themselves",
        "⚡ Accompanying customers to plan development strategies for businesses when using Base products",
      ],
      softwareSkills: [
        {
          skillName: "GoogleSheet",
          fontAwesomeClassname: "simple-icons:googlesheets",
          style: {
            color: "#34a853",
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Draw-io",
          fontAwesomeClassname: "file-icons:draw-io",
          style: {
            backgroundColor: "white",
            color: "#f08616",
          },
        },
      ],
    },
    {
      title: "Intern Developer",
      fileName: "FullStackImg",
      skills: [
        "⚡ Developing mobile applications using React Native",
        "⚡ Designing highly attractive user interface for mobile and web applications",
        "⚡ Deploying application on cloud and martket",
      ],
      softwareSkills: [
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "Yarn",
          fontAwesomeClassname: "simple-icons:yarn",
          style: {
            color: "#2C8EBB",
          },
        },
        {
          skillName: "DigitalOcean",
          fontAwesomeClassname: "simple-icons:digitalocean",
          style: {
            color: "#007EFC",
          },
        },

        {
          skillName: "VSCode",
          fontAwesomeClassname: "vscode-icons:file-type-vscode",
          style: {
            color: "#007EFC",
          },
        },
      ],
    },
    {
      title: "Supporter",
      fileName: "DesignImg",
      skills: [
        "⚡ Performing remote troubleshooting through diagnostic techniques and pertinent questions",
        "⚡ Determining the best solution based on the issue",
        "⚡ Take professional pictures in a studio or on location",
        "⚡ Use photo manipulation software such as Adobe Suite to get desired results",
        "⚡ Maintenance keep everything running smoothly",

      ],
      softwareSkills: [
        {
          skillName: "Photoshop",
          fontAwesomeClassname: "vscode-icons:file-type-photoshop",
          style: {
            backgroundColor:"FFF",
          },
        },
        {
          skillName: "AI",
          fontAwesomeClassname: "vscode-icons:file-type-ai",
          style: {
            color: "#FF9900",
          },
        },
        {
          skillName: "Fix",
          fontAwesomeClassname: "iconoir:tv-fix",
          style: {
            color: "#0089D6",
          },
        },
      ],
    },
    // {
    //   title: "UI/UX Design",
    //   fileName: "DesignImg",
    //   skills: [
    //     "⚡ Designing highly attractive user interface for mobile and web applications",
    //     "⚡ Customizing logo designs and building logos from scratch",
    //     "⚡ Creating the flow of application functionalities to optimize user experience",
    //   ],
    //   softwareSkills: [
    //     {
    //       skillName: "Adobe XD",
    //       fontAwesomeClassname: "simple-icons:adobexd",
    //       style: {
    //         color: "#FF2BC2",
    //       },
    //     },
    //     {
    //       skillName: "Figma",
    //       fontAwesomeClassname: "simple-icons:figma",
    //       style: {
    //         color: "#F24E1E",
    //       },
    //     },
    //     {
    //       skillName: "Adobe Illustrator",
    //       fontAwesomeClassname: "simple-icons:adobeillustrator",
    //       style: {
    //         color: "#FF7C00",
    //       },
    //     },
    //     {
    //       skillName: "Inkscape",
    //       fontAwesomeClassname: "simple-icons:inkscape",
    //       style: {
    //         color: "#000000",
    //       },
    //     },
    //   ],
    // },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "HackerRank",
      iconifyClassname: "simple-icons:hackerrank",
      style: {
        color: "#2EC866",
      },
      profileLink: "https://www.hackerrank.com/tatsuyanin",
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "Vietnam National University HCM, University of Economics and Law",
      subtitle: "Management of Information Systems",
      logo_path: "UEL - logo official.png",
      alt_name: "UEL",
      duration: "2013 - 2017",
      descriptions: [
        "⚡ I have studied basic of analyzing, consulting, designing, developing and implementing Management Information System to solve business problems.",
        "⚡ Knowledge of management information system: Have basic and specialized scientific knowledge related to management information system.",
        "⚡ Skills, qualities and careers: Ability to analyze and solve management problems with management information systems solutions; capable of testing, researching and discovering knowledge; have the ability to think systematically; have ideological awareness, attitudes, equity, ethics and other responsibilities.",
        "⚡ Teamwork and communication: Teamwork, communication skill, and foreign language skill"
      ],
      website_link: "https://www.uel.edu.vn/",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "ReactJS & JS",
      subtitle: "",
      logo_path: "nordiccoder.png",
      certificate_link:
        "https://1drv.ms/b/s!AnBooq3pd12OiMpfJUvNlN6HVkq-TA?e=XuOWR1",
      alt_name: "Nordic Coder",
      color_code: "#FFFFFF",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work, Internship and Volunteership",
  description:
    "Since I was a student, I've had the opportunity to work at startups, where I've held a variety of positions ranging from supporter to sales to interning as a developer. I most recently worked at Team Customer Success on analysis, consulting, and training projects.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      experiences: [
        {
          title: "Customer Success Specialist",
          company: "Base.vn",
          company_url: "Base.vn",
          logo_path: "basevn.png",
          duration: "Sep 2020 - Apr 2022",
          location: "Ho Chi Minh City",
          description:
            "Applying base platform to deploy digital transformation for more than 80 large or small companies in many different fields, including• construction manufacturing, logistics, commerce, and so on.",
          color: "#FFF",
        },
        {
          title: "Technician and Mobile Developer",
          company: "Boxshop.vn",
          company_url: "https://boxshop.vn",
          logo_path: "boxshop.png",
          duration: "Apr 2015 - June 2020",
          location: "Ho Chi Minh City",
          description:
            "I work as a technician in the company's stores, where I am in charge of equipment installation and maintenance. In addition, I work on loyalty app and merchant management mobile application development projects.",
          color: "#FFF",
        },
       
      ],
    },
    {
      title: "Internships",
      experiences: [
        {
          title: "Developer Intern",
          company: "Boxshop.vn",
          company_url: "https://boxshop.vn",
          logo_path: "boxshop.png",
          duration: "Apr 2018 - Aug 2018",
          location: "Ho Chi Minh City",
          description:
            "Research OCR processing of uploaded CVs to extract information, as well as keywords for high or poor ratings.",
          color: "#FFF",
        },
      ],
    },
    {
      title: "Volunteerships",
      experiences: [
        {
          title: "Volunteer at Investment Day",
          company: "Viisa.vn",
          company_url: "https://www.viisa.vn/blog/viisa-acceleration-program-batch-6-graduated?categoryId=213",
          logo_path: "viisa.png",
          duration: "On 10th December 2019",
          location: "Ho Chi Minh City",
          description:
            "Support with the organization of the Investment Day event.",
          color: "#4285F4",
        },
        {
          title: "Photographer",
          company: "Ciovn.org",
          company_url: "https://ciovn.org/cong-tac-vien/",
          logo_path: "cio.png",
          duration: "Aug 2018 - Mar 2019",
          location: "Ho Chi Minh City",
          description:
            "Photographer for Event of CIO Vietnam.",
          color: "#D83B01",
        },
        {
          title: "Volunteer of Join Climate Camp & Youth Speak Fair",
          company: "Changeorg.vn",
          company_url: "https://changevn.org/",
          logo_path: "changevn.png",
          duration: "2016",
          location: "Dong Nai Province & HCM City",
          description:
            "Participating in a project that involves the installation of solar power poles and the promotion of wildlife preservation.",
          color: "#000000",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects makes use of vast variety of latest technology tools. My best experience is to create Data Science projects and deploy them to web applications using cloud infrastructure.",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "Publications",
  description:
    "I have worked on and published a few research papers and publications of my own.",
  avatar_image_path: "projects_image.svg",
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "avatar.png",
    description:
      "I aim to be a dedicated and ambitious person who has a strong desire to work as a consultant or business analyst. I'm looking for a full-time employment in the business where I can put my expertise and skills to good use, thereby helping the operations of the company I work for.",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "For individual fundamental empowerment, I like to write powerful lessons that create impact on each of the reader individually to change the core of their character.",
    link: "https://ashutoshhathidara.wordpress.com",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Address",
    subtitle: "161D/14 Lac Long Quan, 11 Distric, Ho Chi Minh city, Viet Nam",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://goo.gl/maps/oSTEX2fAwk9yjgdW9",
  },
  phoneSection: {
    title: "Phone Number",
    subtitle: "+84 366 474 688",
  },
  mailSection: {
    title: "Mail",
    subtitle: "tatsuyanin@gmail.com",
  }
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  contactPageData,
};
