import React from 'react';
import '../../App.css';
import Cards from '../Cards';
import HeroSection from '../HeroSection';
import Footer from '../Footer';
import AboutMe from '../AboutMe';
import Gap1 from '../Gap1';
import { useRef, useEffect } from 'react';


function HomePage2() {
  const aboutMeRef = useRef(null);

  useEffect(() => {
    scrollToAboutMeSection();
  }, []);

  const scrollToAboutMeSection = () => {
    if (aboutMeRef.current) {
      const scrollOptions = {
        behavior: 'smooth',
        block: 'start',
        inline: 'nearest',
      };
  
      aboutMeRef.current.scrollIntoView(scrollOptions);
      
      // Adjust the scrolling position with an offset (in pixels)
      const offset = -60; // Adjust this value as needed
      window.scrollBy(0, offset);
    }
  };
  
  return (
    <>
      <HeroSection scrollToAboutMe={scrollToAboutMeSection}/>
      
      <AboutMe />
      <Gap1/>
      <div ref={aboutMeRef}>
      <Cards scrollToAboutMe={scrollToAboutMeSection}/>
      </div>
      <Footer />
    </>
  );
}

export default HomePage2;
