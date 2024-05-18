import React from 'react'
import { useSelector } from 'react-redux'
import { useLocation, useNavigate } from 'react-router-dom'
import ReactPlayer from 'react-player'
import PagenotFound from '../PagenotFound'


const Trailer = () => {

    const navigate = useNavigate()

    const {pathname} = useLocation()

    
    const category = pathname.includes("movie") ? "movie" : "tv"
    
    const ytVideo = useSelector(state => state[category].information.videos)



  return  (
    <div className=' absolute top-0 left-0 w-screen h-screen bg-slate-700'>

        
        <i onClick={()=> navigate(-1)} className="ri-close-fill text-white text-2xl absolute right-2 top-[8%]"></i>

        { ytVideo ?
        
        <ReactPlayer
        controls
        width={1470}
        height={800}
        

        url={`https://www.youtube.com/watch?v=${ytVideo.key}`}

        />
      
       : <PagenotFound/>
      }
        
    </div>
)
}

export default Trailer