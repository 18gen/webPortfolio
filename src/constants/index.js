import {
  javascript,
  html,
  css,
  C,
  C2,
  canva,
  blender,
  java,
  drRacket,
  python,
  fusion360,
  reactjs,
  scketchfab,
  receiptGenerator,
  chessGame,
  memorylane,
  github2,
  youtube,
  spotify,
} from "../assets";

export const navLinks = [
  {
    id: "home",
    title: "Home",
  },
  {
    id: "about",
    title: "About",
  },
  {
    id: "tech",
    title: "Skill",
  }
  ,
  {
    id: "project",
    title: "Project",
  },
  {
    id: "resume",
    title: "Resume",
  },
];

const services = [
  {
    title: "3D  Modelling",
    text: "New skill training from 2024! Let me transform your 2D image to 3D with Blender",
    icon: scketchfab,
    link: "https://sketchfab.com/18gen",
    view: "View my SkechHub"
  },
  {
    title: "Front / Backend Developer",
    text: "Still learning a lot! \n Check out some of my latest work",
    icon: github2,
    link: "https://github.com/18gen",
    view: "View my GitHub",
  },
    // link: "https://www.karuizawa.co.jp/newspaper/topics/2020/09/post-241.php?fbclid=IwAR3Z1iJ3yvYqmD8n_R1Lf8aKPU3WTd0BOPa_LPo4_CgFbgpyTELZb5E2wYA",
  {
    title: "Story Teller",
    text: "Expressed my struggles as a teenager through a video, filmed in 2019",
    icon: youtube,
    link: "https://www.youtube.com/watch?v=aFPMyIzUWTU",
    view: "Watch my Video",
  },
  {
    title: "Melody Addict",
    text: "Where I roam, tunes follow! Join me for a J-pop jam, retro hits and coffee beats",
    icon: spotify,
    link: "https://open.spotify.com/user/31z7l5ijs2mdlx3ozkhkqajeu7gq?si=fbcabeb81a774165",
    view: "Peek my Playlist",
  },
];


const technologies = [
  {
    name: "Python",
    icon: python,
  },
  {
    name: "Java",
    icon: java,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "C",
    icon: C,
  },
  {
    name: "C++",
    icon: C2,
  },
  {
    name: "HTML",
    icon: html,
  },
  {
    name: "CSS",
    icon: css,
  },
  {
    name: "React",
    icon: reactjs,
  },
  {
    name: "DrRacket",
    icon: drRacket,
  },
  {
    name: "Blender",
    icon: blender,
  },
  {
    name: "Fusion360",
    icon: fusion360,
  },
  {
    name: "Canva",
    icon: canva,
  },
];

const projects = [
  {
    name:"Y+OUR Memory Lane",
    description:
    "Crafted during UofTHack11 with a theme of Nostalgia, \n Y+Our Memory Lane uses Google Map API to showcase past and present street views from the exact same perspective. With Cohere API, it adds stories about each location's landmarks and history, enhancing the nostalgic journey. Users can also contribute personal snapshots and tales, merging 'your and our' memory lanes into a shared narrative.",
    tags: [
      {
        name: "django",
        color: "blue-text-gradient",
      },
      {
        name: "googleMap/Cohere API",
        color: "green-text-gradient",
      },
      {
        name: "html/css, React",
        color: "pink-text-gradient",
      },
    ],
    videolink: memorylane,
    source_code_link: "https://github.com/18gen/UofTHacks2024",
  },
  {
    name: "Sustainable Chef",
    description:
      "Cooking assistant website that helps reduce food waste by tracking the expiration dates of items and suggesting recipes using those ingredients. Integrating ChatGPT API for cooking instructions and DALL-E 3 for visualizing the finished dish, it transforms leftover management into a creative and sustainable culinary experience.",
    tags: [
      {
        name: "python/flask",
        color: "blue-text-gradient",
      },
      {
        name: "DALL-E3/OpenAI API",
        color: "green-text-gradient",
      },
      {
        name: "html/css",
        color: "pink-text-gradient",
      },
    ],
    videolink: receiptGenerator,
    source_code_link: "https://github.com/18gen/receipt-generator",
  },
  {
    name: "Chess Game",
    description:
      "The chess game, built exclusively with C++ for a CS246 class group project, features AI players(levels 1 to 4) and includes graphics using XQuartz. *The source code is not shareable due to academic policies",
    tags: [
      {
        name: "C++",
        color: "blue-text-gradient",
      },
      {
        name: "XQuartz",
        color: "pink-text-gradient",
      },
    ],
    videolink: chessGame,
    source_code_link: "https://github.com/18gen",
  },
];

export { services, technologies, projects };