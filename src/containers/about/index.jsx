import React from 'react';
import { BsInfoCircleFill } from 'react-icons/bs';
import { Animate } from 'react-simple-animate';
import {
  FaDatabase, FaReact, FaJsSquare, FaDev,
} from 'react-icons/fa';
import PageHeaderContent from '../../components/pageHeaderContent';
import './styles.scss';
import SocialFooter from '../../components/footer';

const JobSummary = "I'm a full-stack web developer dedicated to creating seamless user experiences through a combination of intuitive front-end designs and robust back-end functionality. Skilled in a wide range of languages, frameworks, and technologies. I can help you build a product, feature or website. Look through some of my work and experience! If you like what you see and have a project you need coded, don't hesitate to contact me.";

const About = () => (
  <section id="about" className="about">
    <PageHeaderContent
      headerText="About"
      icon={<BsInfoCircleFill size={40} />}
    />

    <div className="about__content">
      <div className="about__content__personalWrapper">
        <Animate
          play
          duration={1.5}
          delay={0.5}
          start={{
            transform: 'translateX(-500px)',
          }}
          end={{
            transform: 'translateX(0px)',
          }}
        >
          <h3>Full Stack Web Developper</h3>
          <p>{JobSummary}</p>
        </Animate>

        <Animate
          play
          duration={1.5}
          delay={0.5}
          start={{
            transform: 'translateX(-500px)',
          }}
          end={{
            transform: 'translateX(0px)',
          }}
        >
          <a
            href="https://drive.google.com/file/d/1uRmAn6wJOgClq4RYmxRG1efyWUbhOO2F/view?usp=sharing"
            rel="noopener noreferrer"
            target="_blank"
          >
            <button type="button">GET MY RESUME</button>
          </a>
        </Animate>
      </div>

      <div className="about__content__servicesWrapper">
        <Animate
          play
          duration={1.5}
          delay={0.5}
          start={{
            transform: 'translateX(-500px)',
          }}
          end={{
            transform: 'translateX(0px)',
          }}
        >
          <div className="about__content__servicesWrapper__innerContent">
            <div>
              <FaDatabase size={60} color="var(--theme-main-color)" />
            </div>
            <div>
              <FaJsSquare size={60} color="var(--theme-main-color)" />
            </div>
            <div>
              <FaReact size={60} color="var(--theme-main-color)" />
            </div>
            <div>
              <FaDev size={60} color="var(--theme-main-color)" />
            </div>
          </div>
        </Animate>
      </div>
    </div>
    <Animate
      play
      duration={1.5}
      delay={0.5}
      start={{
        transform: 'translateX(-500px)',
      }}
      end={{
        transform: 'translateX(0px)',
      }}
    >
      <SocialFooter />
    </Animate>
  </section>
);

export default About;
