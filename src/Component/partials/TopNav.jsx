import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from '../../utilis/Axios'
import noImage from "/noImage.avif"

const TopNav = () => {
    const [query, setQuery] = useState("")

    const [searches, setSearches] = useState([])

    const GetSearch =  () =>{

        axios.get(`search/multi?query=${query}`)

        .then((res)=> setSearches(res.data.results))

        .catch((err)=> console.log(err))

    }
       

    useEffect(()=> GetSearch(), [query] )


    


  return (
    <>
    <div className=' h-[8%] p-10 flex items-center pl-36  '>
        
        <i className="text-white text-2xl ri-search-line"></i>

        <input onChange={(e)=>setQuery(e.target.value)} value={query} className='w-[40%] m-4  rounded-lg p-2 font-bold outline-none bg-transparent text-white border-none' type="text" placeholder='search anything...' />

        {query.length > 0 && 

        <i onClick={()=> setQuery("")} className="text-white text-2xl ri-close-fill"></i>
        }


    <div className='absolute top-[10%] z-[50]  w-[30%] max-h-[50vh] bg-red-200 overflow-auto rounded-lg  '>

        {searches.map((val, index)=>


        <Link to={`/${val.media_type}/details/${val.id}`} key={index} className=' hover:bg-blue-400 hover:text-white duration-300 w-full flex items-center justify-start border-b-2 p-5 font-bold'>

            <img className=' w-[7vw] h-[7vw] mr-5 object-cover rounded-full' 

            src={val.backdrop_path || val.profile_path ? `https://image.tmdb.org/t/p/original/${val.backdrop_path || val.profile_path }`

            : noImage
        
        } alt=""/>

            <span>{val.title || val.original_title || val.original_name || val.name}</span>
        </Link> 
    
    
        
        )}
            
       
        
     
    </div>

    </div>

    </>

  )
    
}

export default TopNav