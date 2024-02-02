import React, { useState, useRef, useEffect } from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import  selfieImage  from "../assets/selfie.jpg";

const ServiceCard = ({ index, title, icon, text, link, view }) => {
  return (
    <Tilt>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-[292px] green-pink-gradient p-[1px] rounded-[20px]'
    >
      <div
        options={{ max: 45, scale: 1, speed: 450, }}
        className='w-[290px] bg-tertiary rounded-[20px] py-5 px-20 min-h-[300px]
        flex justify-evenly items-center flex-col'
      >
        <img src={icon} alt={title}
          className='w-16 h-16 object-contain mb-4'/>
        <h3 className='w-[200px] text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
        <p className="w-[190px] text-secondary text-[15px] text-center">
          {text}
        </p>
        <a href={link} className="button w-[200px]" target="_blank" rel="noopener noreferrer">
          {view}
        </a>
      </div>
    </motion.div>
    </Tilt>
  )
}

const About = () => {
  // Create a ref for the container
  const scrollRef = useRef(null);

  // Duplicate your services for the infinite loop
  const [scrollItems, setScrollItems] = useState([...services, ...services]);

  // Handle the scroll event
  const handleScroll = () => {
    const { current } = scrollRef;
    // When you reach the end of the container, reset to the beginning
    if (current.scrollLeft >= current.scrollWidth / 2) {
      current.scrollLeft = 0;
    }
  };

  // Set up the scroll event listener
  useEffect(() => {
    const { current } = scrollRef;
    current.addEventListener('scroll', handleScroll);

    // Clean up the event listener
    return () => {
      current.removeEventListener('scroll', handleScroll);
    };
  }, []);


  return (
    <>
      <div className={`relative w-full max-w-7xl mx-auto`}> {/*${styles.paddingX} */}
        {/* Header container with flex layout */}
        <div className="flex flex-col md:flex-row items-center justify-between">
          {/* Text container */}
          <motion.div variants={textVariant()} className="flex flex-col">
            <p className={styles.sectionSubText}>Introduction</p>
            <h2 className={styles.sectionHeadText}>About Me.</h2>
          </motion.div>

          {/* Image container */}
          <div className="mt-4 md:mt-0">
            <img src={selfieImage} alt="Gen" className="circular-image"/>
          </div>
        </div>
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[20px] max-w-3xl leading-[30px]'
      >
        Just a heads-up, my name can be a bit tricky to pronounce - it's got an Asian twist to it. 
        So feel free to call me 'Jane' or give 'Gen' a try by saying 'gain' super fast! 
        <br></br>
        I'm a 2B Computer Science student at the University of Waterloo, exploring the exciting blend of tech, healthcare, and agriculture.
        Got a project in mind? I'm all ears!
      </motion.p>

      <div
        ref={scrollRef}
        className="mt-4 flex overflow-x-auto no-scrollbar gap-10 p-8"
        style={{ scrollBehavior: "smooth" }} // for smooth scrolling
      >
        {scrollItems.map((service, index) => (
          <ServiceCard key={index} index={index} {...service} />
        ))}
      </div>
      
      </div>
    </>
  )
}

export default SectionWrapper(About, "about");
