import React from 'react'
import page from "/404Page.gif"

const PagenotFound = () => {
  return (
    <div className='w-screen h-screen absolute top-0 left-0   '>
    <img className='w-screen h-full object-cover' src={page} alt="" />


    </div>
  )
}

export default PagenotFound