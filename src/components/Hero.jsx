
import React from 'react';

const Hero = () => {
  return (
    <div className="w-full h-full flex items-center justify-center px-5 bg-[#F5F5F5]">
      <div className="flex flex-col gap-6 items-center text-center w-full max-w-3xl">
        <div className="flex flex-col typewriter items-center gap-5 text-3xl sm:text-4xl md:text-5xl font-bold">
          <p className="border max-w-max flex items-center gap-1 px-3 py-2 rounded-lg">
            Hi, I'm <span className="p-1 bg-[#3A506B] text-white rounded-md">Sathvik</span>
          </p> 
          <p>Full-Stack Web Developer</p>
        </div>

        <div className="w-4/5 sm:w-3/4 text-base sm:text-lg">
          A consistent performer with a proven track record. Hands-on experience in full-stack web development.
          Interested in C++, Python, and Machine Learning. Possesses teamwork skills, effective communication,
          and strong problem-solving abilities.
        </div>

        <div className="flex flex-row gap-3 items-center">
          <p className="text-sm sm:text-base">Download My Resume: </p>
          <a href="src/assets/ResumeUpdated.pdf" download>
            <img 
              src="src/assets/download.jpg" 
              alt="Download Icon" 
              className="w-6 h-6 sm:w-8 sm:h-8 hover:scale-110 transition-transform duration-200"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
