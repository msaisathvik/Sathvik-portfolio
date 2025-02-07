
import React from 'react';
import Card from './Card';

const Projects = () => {
  return (
    <div className="flex flex-col gap-5 py-6 w-full px-4 sm:px-8 md:px-12  mx-auto bg-[#F5F5F5]">
      <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-center break-words">
        MY PROJECTS
      </h1>

      <div className='flex justify-around'>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6 ">
        <Card 
          title="Crickey" 
          url="https://github.com/msaisathvik/amfoss-tasks/tree/main/task-06/cricket-vault"
          description="Built a Discord bot using Python that displays live Cricket scores on query." 
          technologies={['Python, ', 'BeautifulSoup4']}
        />
        <Card 
          title="Exoplanet Exploration" 
          description="Built a website for NASA Hackathon featuring simulations and info about Exoplanets." 
          technologies={['HTML, ', 'CSS, ', 'JS']} 
        />
        <Card 
          title="Simon Game" 
          description="Built a memory-based game for fun and learning." 
          technologies={['HTML, ', 'CSS, ', 'JS']} 
        />
        <Card 
          title="Permalist" 
          description="Developed a to-do app with an integrated database." 
          technologies={['HTML, ', 'CSS, ', 'JS, ', 'Node.js, ', 'Express.js, ', 'EJS, ', 'PostgreSQL']} 
        />
      </div>
      </div>
      
    </div>
  );
};

export default Projects;

