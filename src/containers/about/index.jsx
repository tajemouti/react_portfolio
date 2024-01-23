import React from 'react';
import { BsInfoCircleFill } from 'react-icons/bs';
import { Animate } from 'react-simple-animate';
import { DiApple, DiAndroid } from 'react-icons/di';
import { FaDev, FaDatabase } from 'react-icons/fa';
import PageHeaderContent from '../../components/pageHeaderContent';
import './styles.scss';
import SocialFooter from '../../components/footer';

// const personalDetails = [
//   {
//     id: 1,
//     label: 'Name',
//     value: 'Ajrass Tajemouti',
//   },
//   {
//     id: 2,
//     label: 'Age',
//     value: '43',
//   },
//   {
//     id: 3,
//     label: 'Address',
//     value: 'Bouznika, Morocco',
//   },
//   {
//     id: 4,
//     label: 'E-mail',
//     value: 'tajemouti@gmail.com',
//   },
//   {
//     id: 5,
//     label: 'Contact No',
//     value: '+212 617 708 648',
//   },
// ];

const JobSummary = 'A certified full-stack web developer dedicated to creating seamless user experiences through a combination of intuitive front-end designs and robust back-end functionality. Skilled in a wide range of languages, frameworks, and technologies, with the ability to quickly learn new tools.';

const About = () => (
  <section id="about" className="about">
    <PageHeaderContent
      headerText="About Me"
      icon={<BsInfoCircleFill size={40} />}
    />

    <div className="about__content">
      <div className="about__content__personalWrapper">
        <Animate
          play
          duration={1.5}
          delay={0.5}
          start={{
            transform: 'translateX(-900px)',
          }}
          end={{
            transform: 'translateX(0px)',
          }}
        >
          <h3>Full Stack Web Developper</h3>
          <p>{JobSummary}</p>
        </Animate>

        {/* <Animate
          play
          duration={1.5}
          delay={1}
          start={{
            transform: 'translateX(500px)',
          }}
          end={{
            transform: 'translateX(0px)',
          }}
        >
          <h3 className="personalInformationHeaderText">Personel Information</h3>
          <ul>
            {
              personalDetails.map((item) => (
                <li key={item.id}>
                  <span className="title">{item.label}</span>
                  <span className="value">{item.value}</span>
                </li>
              ))
            }
          </ul>
        </Animate> */}
      </div>
      <div className="about__content__servicesWrapper">
        <Animate
          play
          duration={1.5}
          delay={0.5}
          start={{
            transform: 'translateX(600px)',
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
              <DiAndroid size={60} color="var(--theme-main-color)" />
            </div>
            <div>
              <FaDev size={60} color="var(--theme-main-color)" />
            </div>
            <div>
              <DiApple size={60} color="var(--theme-main-color)" />
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
        transform: 'translateX(-900px)',
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
