import axios from '../utilis/Axios'
import React, { useEffect, useState } from 'react'
import Loading from './Loading'
import TopNav from './partials/TopNav'
import DropDown from './partials/DropDown'
import Cards from './partials/Cards'
import { useNavigate } from 'react-router-dom'
import InfiniteScroll from 'react-infinite-scroll-component'


const Popular = () => {

    const navigate = useNavigate()

    const [popular, setPopular] =   useState([])

    const [category, setCategory] = useState("movie")

    const [page, setPage] = useState(1)

    const [hasMore, sethasMore] = useState(true)



    const GetPopular = async ()=>{

        try{
            const {data} = await axios.get(`${category}/popular?page=${page}`)
            // console.log(data)

            if(data.results.length > 0){
                setPopular((prev)=> [...prev, ...data.results])
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
        if(popular.length === 0){
            GetPopular()
        }
        else{
            setPage(1)
            setPopular([])
            GetPopular()
        }

    }


    useEffect(()=>{
        refreshHandler()

    }, [category])
    



    return popular.length > 0 ?
    <div className='w-screen h-fit bg-[#1F1E24] text-white font-black   '>
        
        <div className='w-full h-[10vh] flex items-center justify-between p-10  '>

            <h1 onClick={()=> navigate(-1)} className="cursor-pointer"> <i  className="ri-arrow-left-line"></i> Popular({category})</h1>

            <div className=' w-[80%] flex items-center justify-between'>

                <div className='w-[60%] '>

                <TopNav />

                </div>


                <DropDown title="Category" options={["movie","tv"]} func={(e)=> setCategory(e.target.value)}  />


            </div>

        </div>





        <InfiniteScroll
        
        dataLength={popular.length} //This is important field to render the next data
        next={GetPopular}
        hasMore={hasMore}
        loader={<h4>Loading...</h4>}
        
        >

        <Cards data={popular} title={category}  />

        </InfiniteScroll>


        
        
    </div>
    
  : <Loading/>
}

export default Popular