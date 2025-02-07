import React from 'react'

const Skills = () => {
  return (
    <div className='flex flex-col items-center gap-7 mt-5 bg-[#F5F5F5]'>
      <h1 className='text-3xl'><b>MY SKILLS</b></h1>
      <div className='flex flex-col gap-15  '>
        <fieldset className='border'>
          <legend className='text-center text-2xl'>Languages</legend>
          <div className='flex flex-row  w-[70vw] justify-around p-5 mt-5'>
            <p><img src={`/assets/C.PNG`} alt="C Language" /></p>
            <p><img src={`/assets/c-plus-plus-programming-language-icon.PNG`} alt="C++ Language" /></p>
            <p><img src={`/assets/python-programming-language-icon.PNG`} alt="Python Language" /></p>
            <p><img src={`/assets/javascript-programming-language-icon.PNG`} alt="JavaScript Language" /></p>
            <p><img src={`/assets/html-icon.PNG`} alt="HTML" /></p>
            <p><img src={`/assets/css-icon.PNG`} alt="CSS" /></p>
          </div>
          
        </fieldset>
        <fieldset className='border'>
          <legend className='text-center text-2xl'>Technologies</legend>
          <div className='flex flex-row  w-[70vw] justify-around p-5 mt-5'>
            <p><img src="/assets/node-js-icon.PNG" alt="Node js" /></p>
            <p><img src="/assets/react-js-icon.PNG" alt="React js" /></p>
            <p><img src="/assets/express-js-icon.PNG" alt="Express js" /></p>
            <p><img src="/assets/postgresql-icon.PNG" alt="PostgreSQL" /></p>
          </div>
          
        </fieldset>
        
      </div>
    </div>
  )
}

export default Skills
