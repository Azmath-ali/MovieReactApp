import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import TopNav from './partials/TopNav'
import DropDown from './partials/DropDown'
import Cards from './partials/Cards'
import axios from '../utilis/Axios'
import Loading from './Loading'
import InfiniteScroll from 'react-infinite-scroll-component'


const Trending = () => {

    const navigate = useNavigate()

    const [trending, setTrending] = useState([])

    const [category, setCategory] = useState("all")

    const [duration, setDuration] = useState("day")


  //  It is used for infinite scroller...
    const [page, setPage] = useState(1)

    const [hasMore, sethasMore] = useState(true)





    const GetTrending = async ()=>{

        try{
          const {data}= await axios.get(`/trending/${category}/${duration}?page=${page}`)
          // setTrending(data.results)

          if(data.results.length > 0 ){
            
            setTrending((prev)=> [...prev, ...data.results])
            setPage(page + 1)
          }
          else{
            sethasMore(false)
          }

    
        }
        
        catch(err){
          console.log(err)
        }
    
      }

      
      const refreshHandler = ()=>{
        if(trending.length === 0){
          GetTrending()
        }
        else{
          setPage(1)
          setTrending([])
          GetTrending()
        }
        
      }
    

    useEffect(()=> {

      // GetTrending()

      refreshHandler()

    },[category,duration])





  return trending.length > 0 ?
    <div className='w-screen h-fit bg-[#1F1E24] text-white font-black   '>
        
        <div className='w-full h-[10vh] flex items-center justify-between p-10  '>

            <h1 onClick={()=> navigate(-1)} className="cursor-pointer"> <i  className="ri-arrow-left-line"></i> Trending({category})</h1>

            <div className=' w-[80%] flex items-center justify-between'>

                <div className='w-[60%]'>
                  
                <TopNav />

                </div>


                <DropDown title="Category" options={["all","movie","tv"]} func={(e)=> setCategory(e.target.value)}  />

                <DropDown title="Duration" options={["day","week"]} func={(e)=> setDuration(e.target.value)}  />
            </div>

        </div>





        <InfiniteScroll
        
        dataLength={trending.length} //This is important field to render the next data
        next={GetTrending}
        hasMore={hasMore}
        loader={<h4>Loading...</h4>}
        
        >

        <Cards data={trending} title={category}  />

        </InfiniteScroll>


        
        
    </div>
    
  : <Loading/>
}

export default Trending