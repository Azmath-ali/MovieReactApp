import axios from '../utilis/Axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Loading from './Loading'
import TopNav from './partials/TopNav'
import DropDown from './partials/DropDown'
import Cards from './partials/Cards'
import InfiniteScroll from 'react-infinite-scroll-component'


const Movie = () => {

    const navigate = useNavigate()

    const [movie, setMovie] =   useState([])

    const [category, setCategory] = useState("now_playing")

    const [page, setPage] = useState(1)

    const [hasMore, sethasMore] = useState(true)



    const GetMovie = async ()=>{

        try{
            const {data} = await axios.get(`movie/${category}?page=${page}`)
            // console.log(data)

            if(data.results.length > 0){
                setMovie((prev)=> [...prev, ...data.results])
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
        if(movie.length === 0){
            GetMovie()
        }
        else{
            setPage(1)
            setMovie("")
            GetMovie()
        }

    }


    useEffect(()=>{
        refreshHandler()

    }, [category])
    



    return movie.length > 0 ?
    <div className='w-screen h-fit bg-[#1F1E24] text-white font-black   '>
        
        <div className='w-full h-[10vh] flex items-center justify-between p-10  '>

            <h1 onClick={()=> navigate(-1)} className="cursor-pointer"> <i  className="ri-arrow-left-line"></i> Movie({category})</h1>

            <div className=' w-[80%] flex items-center justify-between'>

                <div className='w-[60%] '>

                <TopNav />

                </div>


                <DropDown title="Category" options={["now_playing", "popular", "top_rated", "upcoming"]} func={(e)=> setCategory(e.target.value)}  />


            </div>

        </div>





        <InfiniteScroll
        
        dataLength={movie.length} //This is important field to render the next data
        next={GetMovie}
        hasMore={hasMore}
        loader={<h4>Loading...</h4>}
        
        >

        <Cards data={movie} title="movie" />

        </InfiniteScroll>


        
        
    </div>
    
  : <Loading/>
}

export default Movie