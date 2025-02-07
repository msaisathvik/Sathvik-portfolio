import React from 'react'

const Card = (props) => {
  return (
    <div className='border p-3 h-[30vh] flex flex-col gap-3 items-center justify-around rounded-xl w-[30vw]'>
        <a href={`${props.url}`} target='_blank' className='text-2xl' > {props.title}</a>
        <hr className='w-full'/>
        <p className='text-lg w-[70%] text-center '>{props.description}</p>
        <p className='text-center'>Technologies Used: {props.technologies}</p>
    </div>
  )
}

export default Card