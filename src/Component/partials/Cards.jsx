import React from 'react'
import { Link } from 'react-router-dom'
import noImage from "/noImage.avif"

const Cards = ({data, title}) => {

  return (
    <div  className='w-screen h-screen bg-[#1F1E24]  flex items-center flex-wrap gap-8  p-5'>

        {data.map((val,index)=> (

            <Link to={`/${val.media_type || title}/details/${val.id}`}  key={index} className='w-[30vh] h-[50vh] relative' >

                <img className='w-full h-[80%] object-cover' 
                src={val.backdrop_path || val.poster_path || val.profile_path  ?
                  `https://image.tmdb.org/t/p/original/${val.backdrop_path || val.poster_path || val.profile_path}`
                
                  : noImage
                
                } alt="" />



                <h1 className='mt-2'>{val.name || val.title || val.original_name || val.original_title} </h1>



                {val.vote_average &&

                <div className='w-[6vh] h-[6vh]  rounded-full text-center flex items-center justify-center bg-blue-400 text-white absolute right-[-10%] bottom-[30%]'>

                {(val.vote_average* 10).toFixed()}%

                </div>
                }

               


            </Link>
        
        )
        )}



    </div>
  )
}

export default Cards