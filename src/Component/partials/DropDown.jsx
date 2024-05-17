import React from 'react'

const DropDown = ({title, options,func}) => {
  return (

      <select  onChange={func}    className='w-[21vh] bg-zinc-900 p-2 text-center'>
      <option disabled > {title} </option>

        {options.map((val,index)=>

        <option key={index} value={val}> {val.toUpperCase()} </option>
        
        
        
        )}

       

      </select>




  )
}

export default DropDown