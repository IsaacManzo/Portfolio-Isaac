import React from 'react'

const Project = ({item}) => {
  return (
    <div key={item.id} className='flex flex-col items-center text-center'>
      <div className='mb-8'>
        <a href={item.href} target="_blank">
        <img className='rounded-2xl cursor-pointer hover:scale-110 transition-all' src={item.image} alt='no cargo la imagen'/>
        </a>
      </div>
      <p className='capitalize text-accent text-sm'>{item.category}</p>
      <h3 className='text-2xl font-semibold capitalize mb-3'>{item.name}</h3>
      <p>{item.description}</p>
    </div>
  )
}

export default Project