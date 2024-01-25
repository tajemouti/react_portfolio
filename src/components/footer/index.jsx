import React from 'react';
import {
  FaGithub, FaLinkedin, FaTwitter, FaMedium, FaAngellist,
} from 'react-icons/fa';
import './styles.scss';

const SocialFooter = () => {
  const socialLinks = [
    { name: 'GitHub', link: 'https://github.com/tajemouti', icon: <FaGithub size={25} color="var(--theme-main-color)" /> },
    { name: 'LinkedIn', link: 'https://www.linkedin.com/in/ajrass', icon: <FaLinkedin size={25} color="var(--theme-main-color)" /> },
    { name: 'WellFound', link: 'https://wellfound.com/u/ajrass-tajemouti', icon: <FaAngellist size={25} color="var(--theme-main-color)" /> },
    { name: 'Twitter', link: 'https://twitter.com/AjrassTajemouti', icon: <FaTwitter size={25} color="var(--theme-main-color)" /> },
    { name: 'Medium', link: 'https://medium.com/@tajemouti/', icon: <FaMedium size={25} color="var(--theme-main-color)" /> },
  ];

  return (
    <ul className="social-footer">
      {socialLinks.map((socialLink, index) => (
        <li key={index}>
          <a className="link" href={socialLink.link} rel="noopener noreferrer" target="_blank">
            {socialLink.icon}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default SocialFooter;
