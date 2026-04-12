import React from 'react';
import Hero from './Hero';
import Education from './Education';
import About from './About';
import MyWork from './Mywork';
import Contact from './Contact';
import SEO from './SEO';

const Home = () => {
  return (
    <>
      <SEO 
        title="Deepakkumar | Full Stack Web & Mobile App Developer"
        description="Welcome to my official portfolio website! Explore my skills, projects, work experience, and journey as a Developer and UI/UX Designer."
        name="Deepakkumar"
        type="website"
        url="https://deepakportfolioo.web.app/"
        image="https://deepakportfolioo.web.app/assets/ProfileImage-DvYnejqx.jpg"
        schema={{
          "@context": "https://schema.org",
          "@type": "Person",
          "name": "Deepakkumar",
          "url": "https://deepakportfolioo.web.app/",
          "jobTitle": "Full Stack Developer",
          "sameAs": [
            "https://www.linkedin.com/in/deepak5556",
            "https://github.com/Deepak5556"
          ]
        }}
      />
      <Hero />
      <Education />
      <About />
      <MyWork />
      <Contact />
    </>
  );
};

export default Home;
