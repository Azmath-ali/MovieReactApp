import axios from '../utilis/Axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Loading from './Loading'
import TopNav from './partials/TopNav'
import DropDown from './partials/DropDown'
import Cards from './partials/Cards'
import InfiniteScroll from 'react-infinite-scroll-component'


const TvShow = () => {

    const navigate = useNavigate()

    const [tvshow, setTvShow] =   useState([])

    const [category, setCategory] = useState("airing_today")

    const [page, setPage] = useState(1)

    const [hasMore, sethasMore] = useState(true)



    const GetTvShow = async ()=>{

        try{
            const {data} = await axios.get(`tv/${category}?page=${page}`)
            // console.log(data)

            if(data.results.length > 0){
                setTvShow((prev)=> [...prev, ...data.results])
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
        if(tvshow.length === 0){
            GetTvShow()
        }
        else{
            setPage(1)
            setTvShow("")
            GetTvShow()
        }

    }


    useEffect(()=>{
        refreshHandler()

    }, [category])
    



    return tvshow.length > 0 ?
    <div className='w-screen h-fit bg-[#1F1E24] text-white font-black   '>
        
        <div className='w-full h-[10vh] flex items-center justify-between p-10  '>

            <h1 onClick={()=> navigate(-1)} className="cursor-pointer"> <i  className="ri-arrow-left-line"></i> Tv Show({category})</h1>

            <div className=' w-[80%] flex items-center justify-between'>

                <div className='w-[60%] '>

                <TopNav />

                </div>


                <DropDown title="Category" options={["airing_today", "on_the_air", "popular", "top_rated"]} func={(e)=> setCategory(e.target.value)}  />


            </div>

        </div>





        <InfiniteScroll
        
        dataLength={tvshow.length} //This is important field to render the next data
        next={GetTvShow}
        hasMore={hasMore}
        loader={<h4>Loading...</h4>}
        
        >

        <Cards data={tvshow} title="tv"  />

        </InfiniteScroll>


        
        
    </div>
    
  : <Loading/>
}

export default TvShow