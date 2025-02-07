import React from 'react'

const Skills = () => {
  return (
    <div className='flex flex-col items-center gap-7 mt-5 bg-[#F5F5F5]'>
      <h1 className='text-3xl'><b>MY SKILLS</b></h1>
      <div className='flex flex-col gap-15  '>
        <fieldset className='border'>
          <legend className='text-center text-2xl'>Languages</legend>
          <div className='flex flex-row  w-[70vw] justify-around p-5 mt-5'>
            <p><img src={`https://res.cloudinary.com/dblxuatyc/image/upload/v1738932750/C_Language_Logo.svg_flkllj.png`} alt="C Language" /></p>
            <p><img src={`https://res.cloudinary.com/dblxuatyc/image/upload/v1738932750/c-plus-plus-programming-language-icon_oo9whk.png`} alt="C++ Language" /></p>
            <p><img src={`https://res.cloudinary.com/dblxuatyc/image/upload/v1738932752/python-programming-language-icon_bfxnho.png`} alt="Python Language" /></p>
            <p><img src={`https://res.cloudinary.com/dblxuatyc/image/upload/v1738932751/javascript-programming-language-icon_wv9oqg.png`} alt="JavaScript Language" /></p>
            <p><img src={`https://res.cloudinary.com/dblxuatyc/image/upload/v1738932751/html-icon_qbj7wr.png`} alt="HTML" /></p>
            <p><img src={`https://res.cloudinary.com/dblxuatyc/image/upload/v1738932749/css-icon_t6nh0r.png`} alt="CSS" /></p>
          </div>
          
        </fieldset>
        <fieldset className='border'>
          <legend className='text-center text-2xl'>Technologies</legend>
          <div className='flex flex-row  w-[70vw] justify-around p-5 mt-5'>
            <p><img src="https://res.cloudinary.com/dblxuatyc/image/upload/v1738932751/node-js-icon_hfybsy.png" alt="Node js" /></p>
            <p><img src="https://res.cloudinary.com/dblxuatyc/image/upload/v1738932752/react-js-icon_zufsum.png" alt="React js" /></p>
            <p><img src="https://res.cloudinary.com/dblxuatyc/image/upload/v1738932750/express-js-icon_g4jsvn.png" alt="Express js" /></p>
            <p><img src="https://res.cloudinary.com/dblxuatyc/image/upload/v1738932752/postgresql-icon_j5tr6f.png" alt="PostgreSQL" /></p>
          </div>
          
        </fieldset>
        
      </div>
    </div>
  )
}

export default Skills
