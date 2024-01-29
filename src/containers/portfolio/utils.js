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
    description: 'Space Hub is a cutting-edge web application integrated with real-time data from the SpaceX API, and empowers users to effortlessly book rockets and participate in curated space missions. Experience the future of space exploration with Space Hub.',
    image: ImageOne,
    link: 'https://steady-halva-c6ed0d.netlify.app/',
    code: 'https://github.com/tajemouti/SpaceX',
    tech: ['React', 'Redux', 'CSS5', 'API'],
  },
  {
    id: 2,
    name: 'Health Clinic',
    description: 'Health Clinic is an intuitive interface for medical booking system. Sign up, log in, browse & reserve appointments with doctors. View details, add & manage doctors. Responsive on desktop & mobile.',
    image: ImageTwo,
    link: 'https://jade-rabanadas-479b96.netlify.app/',
    code: 'https://github.com/tajemouti/medical-appointments-front-end',
    tech: ['React', 'Redux', 'Tailwind', 'API'],
  },
  {
    id: 3,
    name: 'Budget App',
    description: 'Budget App is a mobile web application for streamlined budget management. Users can register and log in to keep their financial data private. The app enables the introduction of transactions linked to specific categories, providing a clear overview of spending per category.',
    image: ImageThree,
    link: 'https://budget-wizard-app.onrender.com',
    code: 'https://github.com/tajemouti/budget_app',
    tech: ['Rails', 'PostgreSQL', 'RSpec', 'CSS5'],
  },
  {
    id: 3,
    name: 'Repice App',
    description: 'Recipe App is a user-friendly web application designed to help users discover, organize, and share their favorite recipes. With an intuitive interface, users can browse a diverse collection of recipes, add their own culinary creations, and explore cooking ideas from a vibrant community.',
    image: ImageFour,
    link: 'https://recipe-wizard-app.onrender.com/',
    code: 'https://github.com/tajemouti/rails_group_project',
    tech: ['Rails', 'PostgreSQL', 'Ruby', 'RSpec'],
  },
  {
    id: 2,
    name: 'Dubai Airshow',
    description: 'Dive into the future of aviation at Dubai Airshow, the premier aerospace event. Explore groundbreaking innovations, connect with industry leaders, and experience the pinnacle of aviation excellence. Join us to witness the next era of flight unfold.',
    image: ImageFive,
    link: 'https://tajemouti.github.io/first-capstone/',
    code: 'https://github.com/tajemouti/first-capstone/',
    tech: ['JavaScript', 'HTML5', 'CSS5'],
  },
  {
    id: 2,
    name: 'Math Magician',
    description: 'Welcome to Math Magicians. Your go-to web application for all your mathematical needs! A powerful calculator application that makes complex computations a breeze. Math Magicians is here to simplify your math journey with a sleek and user-friendly interface.',
    image: ImageSix,
    link: 'https://glowing-bubblegum-24c388.netlify.app/',
    code: 'https://github.com/tajemouti/math-magicians',
    tech: ['React', 'JavaScript', 'CSS5', 'API'],
  },
  {
    id: 3,
    name: 'Medical API',
    description: 'Medical API exposes endpoints for user login, doctor listing, doctor details, reservation creation, and user reservation listing. Additionally, it implements features such as marking a doctor as removed and comprehensive documentation for seamless integration with a front-end UI.',
    image: ImageSeven,
    link: 'https://medical-appointments-booking-wizard.onrender.com/',
    code: 'https://github.com/tajemouti/medical-appointments-back-end',
    tech: ['Rails', 'PostgreSQL', 'RSpec', 'Swagger'],
  },
  {
    id: 2,
    name: 'Pollution Metrics',
    description: 'Pollution Metrics is a pollution metrics dashboard for Canadian cities and states. It allows users to explore air quality and weather data for various regions within Canada. Users can navigate through Canadian states, view a list of cities, and access detailed pollution and weather information for each city.',
    image: ImageEight,
    link: 'https://kaleidoscopic-paletas-4f0fa5.netlify.app/',
    code: 'https://github.com/tajemouti/weather-pollution-metrics',
    tech: ['React', 'Redux', 'CSS5', 'API'],
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
