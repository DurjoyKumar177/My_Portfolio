
import Slider from '../Components/Slider.jsx';
import Skills from './Skills.jsx';
import Portifolios from './Portfolios.jsx';
import Resume from './Resume.jsx';
import Contact from './Contact.jsx';

const Home = () => {
  return (
    <>
      <Slider />
      <Skills/>
      <Portifolios/>
      <Resume/>
      <Contact/>
      {/* Add other sections like Features, Portfolio, etc., as components */}
    </>
  );
};

export default Home;