import React from 'react';


const AboutMe = () => {
  return (
   
    <div className="max-w-4xl mx-auto my-12 p-8  ">
      
      
      <h1 className="text-4xl font-bold text-center text-white underline underline-offset-4 mb-8 md:text-5xl">
        About Me
      </h1>
      
     
      <p className="text-lg text-white leading-relaxed break-words">
I’m Bishal Rawal, a passionate BIT student at MIT,Bagbazaar with a drive to blend creativity and technology. I currently work as a Graphic Design Intern at Simjung Tech, where I create visual content that aligns with modern branding standards. With a background in digital marketing from Karu Learning and Rapid Software Technologies, I bring both strategy and style to the table. I'm always eager to learn, explore new platforms, and turn innovative ideas into impactful results.      </p>
 <h2 className="text-4xl font-bold text-center text-white underline underline-offset-4 mt-8 mb-8 md:text-5xl">Work Experiences</h2>
 <p className="flex mt-8 text-2xl items-center gap-3">
                <span role="img" aria-label="laptop" className="text-4xl">💻</span>
                Currently Working with Simjung Tech as <span className='text-blue-400 uppercase'>graphic designer intern</span> 
            </p>
    </div>
  );
};

export default AboutMe;