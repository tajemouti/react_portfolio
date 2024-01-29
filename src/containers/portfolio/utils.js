import ImageOne from '../../images/image1.jpg';
import ImageTwo from '../../images/image2.jpg';
import ImageThree from '../../images/image3.png';
import ImageFour from '../../images/image4.png';
import ImageFive from '../../images/image5.png';
import ImageSix from '../../images/image6.jpg';
import ImageSeven from '../../images/image7.jpg';
import ImageEight from '../../images/image8.png';

const portfolioData = [
  {
    id: 2,
    name: 'Space Hub',
    image: ImageOne,
    link: 'https://steady-halva-c6ed0d.netlify.app/',
    code: 'https://github.com/tajemouti/SpaceX',
  },
  {
    id: 2,
    name: 'Health Clinic',
    image: ImageTwo,
    link: 'https://jade-rabanadas-479b96.netlify.app/',
    code: 'https://github.com/tajemouti/medical-appointments-front-end',
  },
  {
    id: 3,
    name: 'Budget App',
    image: ImageThree,
    link: 'https://budget-wizard-app.onrender.com',
    code: 'https://github.com/tajemouti/budget_app',
  },
  {
    id: 3,
    name: 'Repice App',
    image: ImageFour,
    link: 'https://recipe-wizard-app.onrender.com/',
    code: 'https://github.com/tajemouti/rails_group_project',
  },
  {
    id: 2,
    name: 'Dubai Airshow',
    image: ImageFive,
    link: 'https://tajemouti.github.io/first-capstone/',
    code: 'https://github.com/tajemouti/first-capstone/',
  },
  {
    id: 2,
    name: 'Math Magician',
    image: ImageSix,
    link: 'https://glowing-bubblegum-24c388.netlify.app/',
    code: 'https://github.com/tajemouti/math-magicians',
  },
  {
    id: 3,
    name: 'Medical API',
    image: ImageSeven,
    link: 'https://medical-appointments-booking-wizard.onrender.com/',
    code: 'https://github.com/tajemouti/medical-appointments-back-end',
  },
  {
    id: 2,
    name: 'Pollution Metrics',
    image: ImageEight,
    link: 'https://kaleidoscopic-paletas-4f0fa5.netlify.app/',
    code: 'https://github.com/tajemouti/weather-pollution-metrics',
  },
];

const filterData = [
  {
    filterId: 1,
    label: 'All',
  },
  {
    filterId: 2,
    label: 'Front End',
  },
  {
    filterId: 3,
    label: 'Back End',
  },
];

export { portfolioData, filterData };
