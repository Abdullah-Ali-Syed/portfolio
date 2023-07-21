import React from 'react';
import '../../App.css';
import FGP from './FGP1.pdf';
import Footer2 from '../Footer2';
import { useRef, useEffect } from 'react';

export default function Services() {

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
    <div ref={aboutMeRef} style={{ position: 'relative' }}>
      <h1 className='services' scrollToAboutMe={scrollToAboutMeSection}></h1>
      <iframe src={FGP} title="Linear Voltage Controlled Frequency Function Generator" width="80%" height="700px" style={{ position: 'absolute', top: '80px', left: '50%', transform: 'translateX(-50%)' }}></iframe>
      <h1 style={{position:"absolute", left:"545px", bottom:"440px", color:'white', fontSize:'45px'}}>Link to Design Files</h1>
      <Footer2/>
    </div>
  );
}
