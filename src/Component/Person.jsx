import axios from '../utilis/Axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Loading from './Loading'
import TopNav from './partials/TopNav'
import DropDown from './partials/DropDown'
import Cards from './partials/Cards'
import InfiniteScroll from 'react-infinite-scroll-component'


const Person = () => {

    const navigate = useNavigate()

    const [person, setPerson] =   useState([])

    const [category, setCategory] = useState("popular")

    const [page, setPage] = useState(1)

    const [hasMore, sethasMore] = useState(true)



    const Getperson = async ()=>{

        try{
            const {data} = await axios.get(`person/${category}?page=${page}`)
            // console.log(data)

            if(data.results.length > 0){
                setPerson((prev)=> [...prev, ...data.results])
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
        if(person.length === 0){
            Getperson()
        }
        else{
            setPage(1)
            setPerson("")
            Getperson()
        }

    }


    useEffect(()=>{
        refreshHandler()

    }, [category])
    



    return person.length > 0 ?
    <div className='w-screen h-fit bg-[#1F1E24] text-white font-black   '>
        
        <div className='w-full h-[10vh] flex items-center justify-between p-10  '>

            <h1 onClick={()=> navigate(-1)} className="cursor-pointer"> <i  className="ri-arrow-left-line"></i> person</h1>

            <div className=' w-[80%] flex items-center justify-between'>

                <div className='w-[60%] '>

                <TopNav />

                </div>



            </div>

        </div>





        <InfiniteScroll
        
        dataLength={person.length} //This is important field to render the next data
        next={Getperson}
        hasMore={hasMore}
        loader={<h4>Loading...</h4>}
        
        >

        <Cards data={person} title='person'  />

        </InfiniteScroll>


        
        
    </div>
    
  : <Loading/>
}

export default Person