<div align="center">
  <br />
    <a href="https://youtu.be/0fYi8SGA20k?feature=shared" target="_blank">
      <img width="1439" alt="Screenshot 2024-02-02 at 3 01 48 PM" src="https://github.com/18gen/webPortfolio/assets/133405903/d9952f1e-8808-46ca-84ea-20fa677f9e4d">
    </a>
  <br />

  <div>
    <img src="https://img.shields.io/badge/-React_JS-black?style=for-the-badge&logoColor=white&logo=react&color=61DAFB" alt="react.js" />
    <img src="https://img.shields.io/badge/-Three_JS-black?style=for-the-badge&logoColor=white&logo=threedotjs&color=000000" alt="three.js" />
    <img src="https://img.shields.io/badge/-Tailwind_CSS-black?style=for-the-badge&logoColor=white&logo=tailwindcss&color=06B6D4" alt="tailwindcss" />
  </div>

  <h3 align="center">A 3D Developer Portfolio</h3>

   <div align="center">
     Cheak out my latest version website on <a href="https://www.genichihashi.me" target="_blank"><b>Gen's Website</b></a>. Hope you like it !
    </div>
</div>

## 📋 <a name="table">Table of Contents</a>

1. 🤖 [Introduction](#introduction)
2. ⚙️ [Tech Stack](#tech-stack)
3. 🦾 [Quick Start](#quick-start)
7. 👀 [Snippets](#snippets)

## <a name="introduction">🤖 Introduction</a>

In the new year of 2024, I was at the university alone and came up with motivation of developing a website to showcase myself. While there are fireworks and counting down outside, I watched tutorial of web development on <a href="https://www.youtube.com/@javascriptmastery/videos" target="_blank"><b>JavaScript Mastery</b></a> and followed each steps with some adjustments to my preference. Also, watching <a href="https://www.youtube.com/watch?v=0lj643VmTsg&list=LL&index=25"><b>CG Geek</b></a>'s turorial, I created low poly island and embedded to the website. The overall development of this website helped me learning the fundamental of frontend development as well as the excitement 3D modelling. The whole codes are mixed up with multiple sources and it's little messy. I'll fix them when I'm free so please go easy on me :))

## <a name="tech-stack">⚙️ Tech Stack</a>

- React.js
- Three.js
- Vite
- Tailwind CSS

## <a name="quick-start">🤸 Quick Start</a>

Follow these steps to set up the project locally on your machine.

**Prerequisites**

Make sure you have the following installed on your machine:

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/en)
- [npm](https://www.npmjs.com/) (Node Package Manager)

**Cloning the Repository**

```bash
git clone git@github.com:18gen/webPortfolio.git
cd webPortfolio
```

**Installation**

Install the project dependencies using npm:

```bash
npm install
```

**Running the Project**

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser to view the project.

**Any troubles**

- Google it ?
- or checkout out the tutorial I refered at <a href="https://www.youtube.com/watch?v=0fYi8SGA20k&list=LL&index=33" target="_blank"><b>JavaScript Mastery</b>

## <a name="snippets">🕸️ Snippets</a>

<details>
<summary><code>constants.js</code></summary>

```javascript
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
```
</details>

<details>
<summary><code>index.css</code></summary>

```css
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap");

@tailwind base;
@tailwind components;
@tailwind utilities;

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: Helvetica;
  scroll-behavior: smooth;
  color-scheme: dark;
}

.hash-span {
  margin-top: -100px;
  padding-bottom: 100px;
  display: block;
}

.black-gradient {
  background: #000000; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to right,
    #434343,
    #000000
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to right,
    #434343,
    #000000
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
}

.violet-gradient {
  background: #804dee;
  background: linear-gradient(-90deg, #804dee 0%, rgba(60, 51, 80, 0) 100%);
  background: -webkit-linear-gradient(
    -90deg,
    #804dee 0%,
    rgba(60, 51, 80, 0) 100%
  );
}

.green-pink-gradient {
  background: "#00cea8";
  background: linear-gradient(90.13deg, #00cea8 1.9%, #bf61ff 97.5%);
  background: -webkit-linear-gradient(-90.13deg, #00cea8 1.9%, #bf61ff 97.5%);
}

.orange-text-gradient {
  background: #f12711; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to top,
    #f12711,
    #f5af19
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to top,
    #f12711,
    #f5af19
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.green-text-gradient {
  background: #11998e; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to top,
    #11998e,
    #38ef7d
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to top,
    #11998e,
    #38ef7d
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.blue-text-gradient {
  /* background: -webkit-linear-gradient(#eee, #333); */
  background: #56ccf2; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to top,
    #2f80ed,
    #56ccf2
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to top,
    #2f80ed,
    #56ccf2
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.pink-text-gradient {
  background: #ec008c; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to top,
    #ec008c,
    #fc6767
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to top,
    #ec008c,
    #fc6767
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

/* canvas- styles */
.canvas-loader {
  font-size: 10px;
  width: 1em;
  height: 1em;
  border-radius: 50%;
  position: relative;
  text-indent: -9999em;
  animation: mulShdSpin 1.1s infinite ease;
  transform: translateZ(0);
}

/* selfie image */
.circular-image {
  width: 130px; /* or any size you want */
  height: 130px; /* should be the same as width to maintain aspect ratio */
  border-radius: 20%; /* this makes the image circular */
  object-fit: cover; /* this ensures the image covers the area without stretching */
}

/* vanish scrollbar */
.no-scrollbar::-webkit-scrollbar {
  display: none;
}

.no-scrollbar {
  -ms-overflow-style: none;  /* for Internet Explorer, Edge */
  scrollbar-width: none;  /* for Firefox */
}

/* Default size for larger screens */
.ball-container {
  width: 7rem;
  height: 7rem;
}

/* Mobile screen sizes */
@media only screen and (max-width: 767px) {
  .ball-container {
    width: 4rem; /* smaller size for mobile */
    height: 4rem;
  }
  .circular-image {
    width: 110px;
    height: 110px;
  }
}
@media only screen and (max-width: 400px) {
  .ball-container {
    width: 3.8rem; /* smaller size for mobile */
    height: 3.8rem;
  }
}

@media only screen and (max-width: 360px) {
  .ball-container {
    width: 3.5rem; /* smaller size for mobile */
    height: 3.5rem;
  }
}

/* button */
.button {
  display: inline-block;
  padding: 10px 20px;
  background-color: #040817;
  color: #fff;
  border-radius: 30px;
  border: 1px solid #ffffff;
  text-align: center;
  text-decoration: none;
  margin-top: 10px; /* Adjust as needed */
  transition: background-color 0.3s, color 0.3s;
}

.button:hover {
  background-color: #ffffff;
  color: #000000;
}

.resume-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px; /* Adjust the space between elements as needed */
}

.subtitle-container {
  width: 100%;
  text-align: center; /* Center the subtitle on mobile */
}

.subtitle {
  font-size: 1.5em; /* Adjust the font size as needed */
  margin: 20px 0; /* Space above and below the subtitle */
  color: white; /* Color of the subtitle text */
}

.resume-preview {
  position: relative;
  width: 100%; /* Full width on mobile */
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
}

/* Media query for larger screens */
@media (min-width: 768px) {
  .resume-container {
    flex-direction: row;
    justify-content: space-evenly;
  }
  .subtitle-container {
    width: calc(50% - 40px); /* Half the container width minus any margins */
    text-align: left; /* Align the subtitle to the left on desktop */
  }
  .resume-preview {
    /* Keep the same width as the subtitle container */
    width: calc(100% - 40px);
  }
}


.label {
  margin-top: 10px; /* Space between label and image */
  color: white;
  font-size: 1em;
  /* Add any additional styling you want for the label text here */
}

.resume-preview img {
  width: 100%; /* Make image width responsive to the container */
  height: auto; /* Maintain aspect ratio */
  object-fit: contain;
  transition: filter 0.5s ease;
}

.button.open-pdf-button {
  height: 54px;
  width: 200px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.darken {
  filter: brightness(50%);
}

/* Additional styling for the footer */
.footer-text {
  padding-top: 1.5rem;
  font-size: 1.5rem; /* Larger text size */
  margin-bottom: 1rem; /* Space below the text */
  font-weight: bold; /* Optional: makes the text bold */
}

.social-links-container {
  display: flex;
  justify-content: center; /* Center the links container */
  flex-wrap: wrap; /* Allows icons to wrap on smaller screens */
  gap: 1.5rem; /* Increase the space between icons */
  padding-top: 1rem;
  padding-bottom: 1rem;
}

.social-icon {
  height: 40px; /* Adjust the size as needed */
  width: auto;
  vertical-align: middle; /* This will align the icons with any inline elements like text */
  /* If you want the icons to be larger on larger screens, you can add a media query */
}

/* Media query for larger screens */
@media (min-width: 768px) {
  .social-links-container {
  gap: 2rem;
  }
  .footer-text {
    font-size: 2rem;
  
  }
  .social-icon {
    height: 50px; /* Larger icons on larger screens */
  }
  
}

@keyframes mulShdSpin {
  0%,
  100% {
    box-shadow: 0em -2.6em 0em 0em #ffffff,
      1.8em -1.8em 0 0em rgba(255, 255, 255, 0.2),
      2.5em 0em 0 0em rgba(255, 255, 255, 0.2),
      1.75em 1.75em 0 0em rgba(255, 255, 255, 0.2),
      0em 2.5em 0 0em rgba(255, 255, 255, 0.2),
      -1.8em 1.8em 0 0em rgba(255, 255, 255, 0.2),
      -2.6em 0em 0 0em rgba(255, 255, 255, 0.5),
      -1.8em -1.8em 0 0em rgba(255, 255, 255, 0.7);
  }
  12.5% {
    box-shadow: 0em -2.6em 0em 0em rgba(255, 255, 255, 0.7),
      1.8em -1.8em 0 0em #ffffff, 2.5em 0em 0 0em rgba(255, 255, 255, 0.2),
      1.75em 1.75em 0 0em rgba(255, 255, 255, 0.2),
      0em 2.5em 0 0em rgba(255, 255, 255, 0.2),
      -1.8em 1.8em 0 0em rgba(255, 255, 255, 0.2),
      -2.6em 0em 0 0em rgba(255, 255, 255, 0.2),
      -1.8em -1.8em 0 0em rgba(255, 255, 255, 0.5);
  }
  25% {
    box-shadow: 0em -2.6em 0em 0em rgba(255, 255, 255, 0.5),
      1.8em -1.8em 0 0em rgba(255, 255, 255, 0.7), 2.5em 0em 0 0em #ffffff,
      1.75em 1.75em 0 0em rgba(255, 255, 255, 0.2),
      0em 2.5em 0 0em rgba(255, 255, 255, 0.2),
      -1.8em 1.8em 0 0em rgba(255, 255, 255, 0.2),
      -2.6em 0em 0 0em rgba(255, 255, 255, 0.2),
      -1.8em -1.8em 0 0em rgba(255, 255, 255, 0.2);
  }
  37.5% {
    box-shadow: 0em -2.6em 0em 0em rgba(255, 255, 255, 0.2),
      1.8em -1.8em 0 0em rgba(255, 255, 255, 0.5),
      2.5em 0em 0 0em rgba(255, 255, 255, 0.7), 1.75em 1.75em 0 0em #ffffff,
      0em 2.5em 0 0em rgba(255, 255, 255, 0.2),
      -1.8em 1.8em 0 0em rgba(255, 255, 255, 0.2),
      -2.6em 0em 0 0em rgba(255, 255, 255, 0.2),
      -1.8em -1.8em 0 0em rgba(255, 255, 255, 0.2);
  }
  50% {
    box-shadow: 0em -2.6em 0em 0em rgba(255, 255, 255, 0.2),
      1.8em -1.8em 0 0em rgba(255, 255, 255, 0.2),
      2.5em 0em 0 0em rgba(255, 255, 255, 0.5),
      1.75em 1.75em 0 0em rgba(255, 255, 255, 0.7), 0em 2.5em 0 0em #ffffff,
      -1.8em 1.8em 0 0em rgba(255, 255, 255, 0.2),
      -2.6em 0em 0 0em rgba(255, 255, 255, 0.2),
      -1.8em -1.8em 0 0em rgba(255, 255, 255, 0.2);
  }
  62.5% {
    box-shadow: 0em -2.6em 0em 0em rgba(255, 255, 255, 0.2),
      1.8em -1.8em 0 0em rgba(255, 255, 255, 0.2),
      2.5em 0em 0 0em rgba(255, 255, 255, 0.2),
      1.75em 1.75em 0 0em rgba(255, 255, 255, 0.5),
      0em 2.5em 0 0em rgba(255, 255, 255, 0.7), -1.8em 1.8em 0 0em #ffffff,
      -2.6em 0em 0 0em rgba(255, 255, 255, 0.2),
      -1.8em -1.8em 0 0em rgba(255, 255, 255, 0.2);
  }
  75% {
    box-shadow: 0em -2.6em 0em 0em rgba(255, 255, 255, 0.2),
      1.8em -1.8em 0 0em rgba(255, 255, 255, 0.2),
      2.5em 0em 0 0em rgba(255, 255, 255, 0.2),
      1.75em 1.75em 0 0em rgba(255, 255, 255, 0.2),
      0em 2.5em 0 0em rgba(255, 255, 255, 0.5),
      -1.8em 1.8em 0 0em rgba(255, 255, 255, 0.7), -2.6em 0em 0 0em #ffffff,
      -1.8em -1.8em 0 0em rgba(255, 255, 255, 0.2);
  }
  87.5% {
    box-shadow: 0em -2.6em 0em 0em rgba(255, 255, 255, 0.2),
      1.8em -1.8em 0 0em rgba(255, 255, 255, 0.2),
      2.5em 0em 0 0em rgba(255, 255, 255, 0.2),
      1.75em 1.75em 0 0em rgba(255, 255, 255, 0.2),
      0em 2.5em 0 0em rgba(255, 255, 255, 0.2),
      -1.8em 1.8em 0 0em rgba(255, 255, 255, 0.5),
      -2.6em 0em 0 0em rgba(255, 255, 255, 0.7), -1.8em -1.8em 0 0em #ffffff;
  }
}

._slider {
  box-shadow: 0 10px 20px -5px #00000020;
  height: 50px;
  overflow: hidden;
  white-space: nowrap;
  position: relative;
  width: 100%;
  display: flex; /* Aligns the updates container and the scrolling text */
}

.updatesContainer {
  flex-shrink: 0; /* Prevents the container from shrinking */
  background-color: #00cea8; /* Your desired background color */
  padding: 0 1rem; /* Adjust the padding as needed */
  display: flex;
  align-items: center; /* Center the text vertically */
}

.fixedUpdate {
  color: #040817; /* Color for the "Updates" text */
}

._slideTrack {
  display: flex;
  align-items: center; /* Center the text vertically */
  animation: scrollText 20s linear infinite;
  margin-left: 1rem; /* Give some space after the fixed text */
  flex-grow: 1; /* Allows the track to take up the remaining width */
}

@keyframes scrollText {
  0% { transform: translateX(100%); }
  100% { transform: translateX(-100%); }
}

```
</details>

<details>
<summary><code>Motion.js</code></summary>

```javascript
export const textVariant = (delay) => {
  return {
    hidden: {
      y: -50,
      opacity: 0,
    },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        duration: 1.25,
        delay: delay,
      },
    },
  };
};

export const fadeIn = (direction, type, delay, duration) => {
  return {
    hidden: {
      x: direction === "left" ? 100 : direction === "right" ? -100 : 0,
      y: direction === "up" ? 100 : direction === "down" ? -100 : 0,
      opacity: 0,
    },
    show: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: {
        type: type,
        delay: delay,
        duration: duration,
        ease: "easeOut",
      },
    },
  };
};

export const zoomIn = (delay, duration) => {
  return {
    hidden: {
      scale: 0,
      opacity: 0,
    },
    show: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "tween",
        delay: delay,
        duration: duration,
        ease: "easeOut",
      },
    },
  };
};

export const slideIn = (direction, type, delay, duration) => {
  return {
    hidden: {
      x: direction === "left" ? "-100%" : direction === "right" ? "100%" : 0,
      y: direction === "up" ? "100%" : direction === "down" ? "100%" : 0,
    },
    show: {
      x: 0,
      y: 0,
      transition: {
        type: type,
        delay: delay,
        duration: duration,
        ease: "easeOut",
      },
    },
  };
};

export const staggerContainer = (staggerChildren, delayChildren) => {
  return {
    hidden: {},
    show: {
      transition: {
        staggerChildren: staggerChildren,
        delayChildren: delayChildren || 0,
      },
    },
  };
};
```
</details>

<details>
<summary><code>styles.js</code></summary>

```javascript
const styles = {
  paddingX: "sm:px-16 px-6",
  paddingY: "sm:py-16 py-6",
  padding: "sm:px-16 px-6 sm:py-16 py-10",

  heroHeadText:
    "font-black text-white lg:text-[80px] sm:text-[60px] xs:text-[50px] text-[40px] lg:leading-[98px] mt-2",
  heroSubText:
    "text-[#dfd9ff] font-medium lg:text-[30px] sm:text-[26px] xs:text-[20px] text-[16px] lg:leading-[40px]",

  sectionHeadText:
    "text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]",
  sectionSubText:
    "sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider",
};

export { styles };
```

</details>

<details>
<summary><code>tailwind.config.cjs</code></summary>

```javascript
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#050816",
        secondary: "#aaa6c3",
        tertiary: "#151030",
        "black-100": "#100d25",
        "black-200": "#090325",
        "white-100": "#f3f3f3",
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/herobg.png')",
      },
    },
  },
  plugins: [],
};
```

</details>
