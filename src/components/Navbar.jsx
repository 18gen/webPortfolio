import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { styles } from "../styles";
import "./styles.css";
import { navLinks } from "../constants";
import { menu, close } from "../assets";
import { logo } from "../assets";
import linkedin from "../assets/linkedin.webp";
import faceBook from "../assets/faceBook.png";
import insta from "../assets/insta.webp";
import discord from "../assets/discord.webp";
import github from "../assets/github2.png";
import closeIcon from "../assets/closeIcon.png";
import link from "../assets/link.png";

const copyToClipboard = (text, setButtonText) => {
  navigator.clipboard.writeText(text).then(() => {
    setButtonText('Copied!');
    setTimeout(() => {
      setButtonText('Copy');
    }, 2000);
  });
};

// SocialMediaModal component using provided CSS
const SocialMediaModal = ({ isOpen, onClose, buttonText, setButtonText }) => {
  if (!isOpen) return null;
  return (
    <div className={`popup ${isOpen ? 'show' : ''}`} style={{ position: 'fixed' }}>
      <div className="popup-content">
        <header>
          <span>Connect with me</span>
          <img src={closeIcon} className="close-icon" alt="Close" onClick={onClose} />
        </header>
        <div className="content">
          <div className="icons">
            {/* Social media links */}
            <a href="https://www.linkedin.com/in/gen-ichihashi/" target="_blank" rel="noopener noreferrer">
              <img src={linkedin} className="social-icon" />
            </a>
            <a href="https://www.facebook.com/ichihashigen" target="_blank" rel="noopener noreferrer">
              <img src={faceBook} className="social-icon" />
            </a>
            <a href="https://github.com/18gen" target="_blank" rel="noopener noreferrer">
              <img src={github} className="social-icon" />
            </a>
            <a href="https://www.instagram.com/ichigen3215" target="_blank" rel="noopener noreferrer">
              <img src={insta} className="social-icon" />
            </a>
            <a href="https://discordapp.com/users/765587657815752775/" target="_blank" rel="noopener noreferrer">
              <img src={discord} className="social-icon" />
            </a>
          </div>
          <p>Feel free to reach out to me! 😁</p>
          <div className="field">
            <input type="text" value="http://genichihashi.me" readOnly />
            <button onClick={() => copyToClipboard('http://genichihashi.me', setButtonText)}>{buttonText}</button>
          </div>
        </div>
      </div>
    </div>
  );
};

const Navbar = () => {
  const [active, setActive] = useState("");
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false); // State to manage modal visibility
  const [buttonText, setButtonText] = useState('Copy'); // State to manage button text
  const navigate = useNavigate();
  
  
  useEffect(() => {
    // Handle scroll event for changing navbar style
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const handleNavLinkClick = (sectionId) => {
    setMenuOpen(!isMenuOpen);
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };


  const [language, setLanguage] = useState('ENG'); // New state for language
  const toggleModal = () => {
    setModalOpen(!modalOpen); // This function will toggle the modal state
  };

  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-10 
        ${scrolled ? "bg-primary" : "bg-transparent"}`}
    >
      <div className='flex justify-between items-center max-w-7xl mx-auto w-full'>
      <div className='flex items-center gap-2'>
        <Link
          to='/'
          className='flex items-center gap-2'
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <p className='text-white text-[20px] font-bold cursor-pointer flex'>
          市橋 源 &nbsp; <span className='sm:block hidden'> | Gen Ichihashi </span>
          </p>
        </Link>
        <button class="view-modal" onClick={toggleModal}>
        Contact        
        </button>
      </div>
      </div>
      <SocialMediaModal isOpen={modalOpen} onClose={() => setModalOpen(false)}
        buttonText={buttonText} setButtonText={setButtonText} />

      <div className='menu-icon' onClick={toggleMenu}>
        <button className={`burger ${isMenuOpen ? "open" : ""}`}>
        </button>
      </div>

      <div className={`background ${isMenuOpen ? "open" : ""}`}></div>
      <div className={`menu ${isMenuOpen ? "open" : ""}`}>
        <nav>
          {navLinks.map((link, index) => (
            <Link
            key={link.id}
            className={`menu-item ${isMenuOpen ? "appear" : ""}`}
            style={{ animationDelay: `0.${index + 1}s` }}
            onClick={() => handleNavLinkClick(link.id)}
          >
            {link.title}
            </Link>
            
          ))}
          
        </nav>
      </div>
    </nav>
  );
};

export default Navbar;