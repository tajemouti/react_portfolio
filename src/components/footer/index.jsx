import React from 'react';
import {
  FaGithub, FaLinkedin, FaFacebook, FaWhatsapp, FaEnvelope,
} from 'react-icons/fa';
import './styles.scss';

const SocialFooter = () => {
  const socialLinks = [
    { name: 'GitHub', link: 'https://github.com/tajemouti', icon: <FaGithub size={25} color="var(--theme-main-color)" /> },
    { name: 'LinkedIn', link: 'https://www.linkedin.com/in/ajrass', icon: <FaLinkedin size={25} color="var(--theme-main-color)" /> },
    { name: 'Facebook', link: 'https://www.facebook.com/ajrass', icon: <FaFacebook size={25} color="var(--theme-main-color)" /> },
    { name: 'E-mail', link: 'mailto:tajemouti@gmail.com', icon: <FaEnvelope size={25} color="var(--theme-main-color)" /> },
    { name: 'WhatsApp', link: 'https://api.whatsapp.com/send?phone=212617708648', icon: <FaWhatsapp size={25} color="var(--theme-main-color)" /> },
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
