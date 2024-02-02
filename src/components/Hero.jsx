import React from 'react';
import { motion } from "framer-motion";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  return (
    <section id="home" className={`relative w-full h-screen mx-auto`}>
      {/* ComputersCanvas container */}
      <div className={`absolute inset-0 w-full h-full` }>
        <ComputersCanvas />
      </div>
      {/* Text container */}
      <div
        className={`absolute z-0 top-[100px] max-w-7xl mx-auto
          ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hey, it's <span className='text-[#915EFF]'>Gen</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-5`}>
            I'm an Aspiring Developer 
            <br/> with a Zeal for Innovation and Exploration
          </p>
          <p className={`${styles.caution} text-white-5`}>
            * 3D image below may take up to 15s to load initially....
          </p>
        </div>
        
      </div>

      {/* Scroll indicator container */}
      <div className='absolute z-0 xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
        <a href='#about'>
          <div className='z-0 w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0]
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
