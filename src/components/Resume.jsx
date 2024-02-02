import React, {useRef} from "react";
import { motion } from "framer-motion";
import { textVariant } from "../utils/motion";
import resumeImageEN from "../assets/Resume_2024_ENG.png";
import resumeImageJP from "../assets/Resume_2024_JPN.png";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";

const Resume = () => {
    const imageENRef = useRef(null);
  const imageJPRef = useRef(null);

  const handleMouseEnter = (ref) => {
    if(ref.current) {
      ref.current.classList.add('darken');
    }
  };

  const handleMouseLeave = (ref) => {
    if(ref.current) {
      ref.current.classList.remove('darken');
    }
  };
  return (
    <div className={`xl:mt-12 flex flex-col xl:flex-row gap-10 overflow-hidden `}>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Something Official?</p>
        <h3 className={styles.sectionHeadText}>Resume.</h3>
        <div className="resume-container">
          <div className="subtitle-container">
            <div className="subtitle">English</div>
            <div className="resume-preview">
              <img ref={imageENRef} src={resumeImageEN} alt="Resume Preview English" />
              <a 
                onMouseEnter={() => handleMouseEnter(imageENRef)}
                onMouseLeave={() => handleMouseLeave(imageENRef)}
                href="https://drive.google.com/file/d/1srngRaqkvFnD71EGfBTnZoftVcfv3kDI/view?usp=sharing"
                className="button open-pdf-button text-[20px]"
                target="_blank"
                rel="noopener noreferrer">
                Open PDF
              </a>
            </div>
          </div>
          <div className="subtitle-container">
            <div className="subtitle">Japanese</div>
            <div className="resume-preview">
              <img ref={imageJPRef} src={resumeImageJP} alt="Resume Preview Japanese" />
              <a 
                onMouseEnter={() => handleMouseEnter(imageJPRef)}
                onMouseLeave={() => handleMouseLeave(imageJPRef)}
                href="https://drive.google.com/drive/folders/1_gwuFC16BVosXXKsgmacPWfzTrud__4_?usp=sharing"
                className="button open-pdf-button text-[20px]"
                target="_blank"
                rel="noopener noreferrer">
                Open PDF
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

  
export default SectionWrapper(Resume, "resume");
