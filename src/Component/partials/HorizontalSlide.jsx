import React from 'react'
import { Link } from 'react-router-dom'
import noImage from "/noImage.avif"


const HorizontalSlide = ({data}) => {
    // console.log(data)
  return (
    <div className='w-full h-full  p-3 overflow-y-auto '>

        <div className='w-full   overflow-y-hidden flex gap-10 '>

            {data.length > 0 ? data.map((val,index)=> 
            <Link to={`/${val.media_type}/details/${val.id}`} key={index} className=' min-w-[17%] h-[33vh] bg-zinc-900  '>


            <div className='text-white w-full h-full text-center'>
                <img className='w-full h-[50%] object-cover' 

                src={ val.backdrop_path || val.profile_path ?
                  
                  `https://image.tmdb.org/t/p/original/${val.backdrop_path || val.profile_path}`
                
                  : noImage

                } alt="" />

                <h1 className='font-black mt-2' >{val.name || val.title || val.original_name || val.original_title}</h1>

                <p className='mt-3 text-sm'>{val.overview.slice(0, 30)}...

                <Link>more</Link>

                </p>

            </div> 
        </Link>
)
    : <h1>Nothing to Show...</h1>

      }
        </div>



 </div>


  )
}

export default HorizontalSlide