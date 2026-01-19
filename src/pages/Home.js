import React from 'react';
import HeroSlider from '../components/HeroSlider';
import Services from '../components/Services';
import Team from '../components/Team';
import AlternativeServices from '../components/AlternativeServices';
import Work from '../components/Work';
import Blog from '../components/Blog';
import Contact from '../components/Contact';

const Home = () => {
  return (
    <>
      <HeroSlider />
      <Services />
      <Team />
      <AlternativeServices />
      <Work />
      <Blog />
      <Contact />
    </>
  );
};

export default Home;
