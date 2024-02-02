import React from 'react';
import { styles } from '../styles';
import linkedin from "../assets/linkedin.webp";
import faceBook from "../assets/faceBook.png";
import gmailIcon from "../assets/gmail.png";
import insta from "../assets/insta.webp";
import discord from "../assets/discord.webp";

const Footer = () => {
  return (
    <section id="footer" footer className={`bg-tertiary p-5 text-center text-white ${styles.paddingX}`}>
      <section>
      <p className='footer-text'>Let's Get in Touch! 👋</p>
      <div className="social-links-container">
        <a href="https://www.linkedin.com/in/gen-ichihashi/" target="_blank" rel="noopener noreferrer">
          <img src={linkedin} className="social-icon" />
        </a>
        <a href="https://www.facebook.com/ichihashigen" target="_blank" rel="noopener noreferrer">
          <img src={faceBook} className="social-icon" />
        </a>
        <a href="https://www.instagram.com/ichigen3215" target="_blank" rel="noopener noreferrer">
          <img src={insta} className="social-icon" />
        </a>
        <a href="https://discordapp.com/users/765587657815752775/" target="_blank" rel="noopener noreferrer">
          <img src={discord} className="social-icon" />
        </a>
      </div>
      <p>Email: ichihashigen@gmail.com</p>
      <p className='p-5'>© Copyright {new Date().getFullYear()} Gen Ichihashi</p>
      </section>    
    </section>
  );
};

export default Footer;
