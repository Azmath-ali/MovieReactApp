import React from 'react'
import { Link } from 'react-router-dom'



const Header = ({data}) => {

    // console.log(data)


  return (
    <div className='w-[full] h-[45vh]  flex flex-col justify-center p-6 '

    style={{
        background:`linear-gradient(rgba(0,0,0,0.2),rgba(0,0,0,.5), rgba(0,0,0,.8)), url(https://image.tmdb.org/t/p/original/${data.backdrop_path || data.profile_path })` ,
        backgroundPosition:'bottom -10%',
        backgroundSize:"cover"
    }}

    >

        <h1 className='text-4xl mb-5 font-black text-white'>{data.title || data.name || data.original_name || data.original_title}</h1>

        <p className='w-[50%] mb-5 text-white'>{data.overview.slice(0,200)}... 
        <Link to={`/${data.media_type}/details/${data.id}`} className='text-blue-400 font-black'> more </Link>
        
        
        </p>

        <p className='text-white'> 


        <i className="text-yellow-400 mr-2 ri-megaphone-fill"></i>
        
        {data.release_date || "No Information"} {"    "}

        <i className=" text-yellow-400 ml-4 ri-album-fill"></i>{" "}

        {data.media_type.toUpperCase()}    

        </p>

        <Link to={`/${data.media_type}/details/${data.id}/trailer`}
        
        className='w-fit mt-4 p-2 bg-[#6556CD]'>Watch Trailer</Link>
    
        







    </div>
  )
}

export default Header