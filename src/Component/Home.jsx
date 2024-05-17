import React, { useEffect, useState } from 'react'
import SideNav from './partials/SideNav'
import TopNav from './partials/TopNav'
import Header from './partials/Header'
import axios from "../utilis/Axios"
import HorizontalSlide from './partials/HorizontalSlide'
import DropDown from './partials/DropDown'
import Loading from './Loading'

const Home = () => {

  const [wallpaper, setWallpaper]  = useState(null)

  const [trending, setTrending] = useState(null)

  const [category, setCategory] = useState("all")



  // For Header.jsx
  const headerWallpapers = async ()=>{
    try{

      const {data} = await axios.get(`/trending/all/day`)

      let randomData = data.results[(Math.random() * data.results.length).toFixed()]

      setWallpaper(randomData)
    
    }
    catch(err){
       console.log(err)
      }

  }



  
  
  
  
  // For HorizontalSlide.jsx

  // For DropDown.jsx

  const GetTrending = async ()=>{

    try{
      const {data}= await axios.get(`/trending/${category}/day`)
      setTrending(data.results)

    }
    
    catch(err){
      console.log(err)
    }

  }








  useEffect(()=>{

    !wallpaper && headerWallpapers()
    
    GetTrending()
  
  }, [category])






   

  return   wallpaper && trending ? (
    <>
    <SideNav/>

    <div className='w-[80%] h-full bg-[#1F1E24] overflow-hidden'>

    <TopNav/>

    <Header data = {wallpaper} />


    {/* For DropDown  */}
    <div className=' p-4 text-white flex items-center justify-between'>

      <h1 className=' text-2xl'>Trending</h1>

      <DropDown title='Filter' options = {["all", "tv", "movie"]} func ={(e)=> setCategory(e.target.value)}  />
            
    </div>




    <HorizontalSlide data = {trending} />








    </div>
    </>
  )
  : <Loading/>



        
        
        
        

  
}

export default Home