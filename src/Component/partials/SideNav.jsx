import React from 'react'
import { Link } from 'react-router-dom'

const SideNav = () => {
  return (
    <div className='w-[20%] h-full bg-[#1F1E24] border-r-2 border-zinc-400 p-8'>

        <h1 className='text-white font-bold'><i className="text-[#6556CD] ri-tv-fill"></i> SCSDB.</h1>

        <nav className='flex flex-col gap-3 mt-6 text-white'>

        <h2 className='font-bold'>New Feeds</h2>

        <Link to="/trending" className='hover:bg-[#6556CD] p-4 hover:font-bold hover:text-lg duration-300 rounded-lg flex items-center gap-1'> <span><i className="ri-fire-fill"></i></span> Trending</Link>
        <Link to="/popular"  className='hover:bg-[#6556CD] p-4 hover:font-bold hover:text-lg  duration-300 rounded-lg flex items-center gap-1'><span><i className="ri-bard-fill"></i></span>Popular</Link>
        <Link to="/movie"  className='hover:bg-[#6556CD] p-4 hover:font-bold hover:text-lg  duration-300 rounded-lg flex items-center gap-1'><span><i className="ri-movie-2-fill"></i></span>Movies</Link>
        <Link to="/tv"  className='hover:bg-[#6556CD] p-4 hover:font-bold hover:text-lg  duration-300 rounded-lg flex items-center gap-1'><span><i className="ri-tv-2-fill"></i></span>TV Shows</Link>
        <Link to="/person"  className='hover:bg-[#6556CD] p-4 hover:font-bold hover:text-lg  duration-300 rounded-lg flex items-center gap-1'><span><i className="ri-team-fill"></i></span>Person</Link>

        <hr className='w-full' />
        </nav>

        
    </div>
  )
}

export default SideNav