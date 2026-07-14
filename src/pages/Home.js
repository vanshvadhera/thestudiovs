import React from 'react';
import HeroSlider from '../components/sections/HeroSlider';
import Services from '../components/sections/Services';
// import Team from '../components/sections/Team';
import AlternativeServices from '../components/sections/AlternativeServices';
import Work from '../components/sections/Work';
// import Blog from '../components/sections/Blog';
import Contact from '../components/sections/Contact';

const Home = () => {
  return (
    <>
      <HeroSlider />
      <Services />
      {/* <Team /> */}
      <AlternativeServices />
      <Work />
      {/* <Blog /> */}
      <Contact />
    </>
  );
};

export default Home;
