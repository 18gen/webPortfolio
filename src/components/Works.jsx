import React, { useRef, useEffect } from 'react';
// import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  source_code_link,
  videolink,
}) => {

  return (    
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <div className={`bg-tertiary p-5 rounded-3xl w-full ${window.innerWidth >= 640 ? 'sm:w-[500px]' : 'w-[450px]'}`}>
        <div className='relative flex'>
          <div className='w-full h-full rounded-2xl'>
          <video 
            autoPlay
            loop
            muted
            playsInline
            webkit-playsinline="true"
            className='h-full w-full object-contain rounded-xl'>
            <source src={videolink} type="video/mp4"/>
            Your browser does not support the video tag.
          </video>
          </div>
        {/*
        <img
            src={image}
            alt='project_image'
            className='w-full h-full object-cover rounded-2xl'
          />
        */}
          <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
            >
              <img
                src={github}
                alt='source code'
                className='w-1/2 h-1/2 object-contain'
              />
            </div>
          </div>
        </div>

        <div className='mt-5'>
          <h3 className='text-white font-bold text-[24px]'>{name}</h3>
          <p className='mt-2 text-secondary text-[14px]'>{description}</p>
        </div>

        <div className='mt-4 flex flex-wrap gap-2'>
          {tags.map((tag) => (
            <p
              key={`${name}-${tag.name}`}
              className={`text-[14px] ${tag.color}`}
            >
              #{tag.name}
            </p>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const Works = () => {
  
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} `}>My work</p>
        <h2 className={`${styles.sectionHeadText}`}>Projects.</h2>
        <p className={`${styles.sectionSubText} `}>video may only be played on Chrome</p>
      </motion.div>

     <div className='mt-5 flex overflow-x-auto no-scrollbar  gap-7' style={{ scrollSnapType: 'x mandatory' }}>
        {projects.map((project, index) => (
          <div key={`project-${index}`} style={{ scrollSnapAlign: 'start' }}>
            <ProjectCard index={index} {...project} />
          </div>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "project");
