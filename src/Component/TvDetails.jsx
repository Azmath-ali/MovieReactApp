import React, { useEffect } from 'react'

import {useDispatch, useSelector} from "react-redux"
import { asyncloadtv} from '../Store/Actions/TvAction'
import {removetv} from "../Store/reducers/TvSlice"
import {useLocation, useNavigate, useParams} from "react-router-dom"
import Loading from "../Component/Loading"
import {Link} from "react-router-dom"

import HorizontalSlide from './partials/HorizontalSlide'
import { Outlet } from 'react-router-dom'


const TvDetails = () => {

  const {pathname} = useLocation()

  const {id} = useParams()

  const dispatch = useDispatch()

  const navigate = useNavigate()

  const {information} = useSelector((state)=> state.tv)

  // console.log(information)



  useEffect(()=>{

    dispatch(asyncloadtv(id))

    return(()=> dispatch(removetv()))


  },[id])




  return information ? (
    <div className='w-screen h-fit bg-[#1F1E24] p-5 relative'

    style={{
      background:`linear-gradient(rgba(0,0,0,0.2),rgba(0,0,0,.5), rgba(0,0,0,.8)), url(https://image.tmdb.org/t/p/original/${information.detail.backdrop_path })` ,
      backgroundPosition:'bottom -10%',
      backgroundSize:"cover"
  }}
  >

      <nav className='w-full h-[10vh] flex items-center gap-10 p-3 font-black text-zinc-200 text-xl'>

        <i onClick={()=> navigate(-1)} className="ri-arrow-left-line text-white cursor-pointer"></i>

        <a target='_blank' href={information.detail.homepage}><i className="ri-share-box-fill hover:text-red-500"></i></a>

        <a target='_blank' href={`https://www.wikidata.org/wiki/${information.externalid.wikidata_id}`}><i className="ri-earth-fill hover:text-red-500"></i></a>

        <a  target='_blank' href={`https://www.imdb.com/title/${information.externalid.imdb_id}/`} className='hover:text-red-500'>imdb</a>

      </nav>



      <div className='w-full flex p-4 text-white '>

        <div className='w-[25%] h-[50vh]' >

          {<img className='w-full h-full object-cover' src={`https://image.tmdb.org/t/p/original/${information.detail.backdrop_path || information.detail.poster_path || information.detail.profile_path}`} alt="" />}
        </div>

        <div className='w-[75%] ml-[5%] '>
          
          <h1 className='w-full  text-5xl text-white font-black'>  {information.detail.original_title || information.detail.title }

            <span>({information.detail.first_air_date.split("-")[0]})</span>

          </h1>

          <div className='flex items-center gap-5 font-black mt-4 '>

          <h2 className='font-black'>User Score</h2>

          <h1 className='bg-cyan-200 text-black   w-[6vh] h-[6vh] flex items-center justify-center rounded-full '>

          {(information.detail.vote_average * 10).toFixed()}% 
          
           </h1>


          <h1>{information.detail.first_air_date}</h1>

          <h1>{information.detail.genres.map((val, index)=>

          <div key={index} className='inline-block'> {val.name} </div>
          
          )}</h1>


 

          </div>

          <h1 className='mt-5 font-black'>{information.detail.tagline}</h1>

          <h1 className='mt-5 font-black'>Overview</h1>

          <p className='text-sm font-black mb-5'>{information.detail.overview}</p>


          <Link to = {`${pathname}/trailer`} className='bg-[#6556CD] p-3 font-black rounded-lg ' > 
          <span><i className="ri-play-fill"></i></span>{"  "}
          
          Play Trailer
          
          </Link>





        </div>
      </div>



      {/* Available on Platform */}
      <div className='text-white'>

        <div className='flex items-center gap-5'>

            <h1 className='text-xl'>Available on Platform</h1>

            {information.watchproviders &&  information.watchproviders.flatrate ?
            
              information.watchproviders.flatrate.map((val,index)=>

            <div key={index} className='w-[5vh]'>
              <img title={val.provider_name} className='w-full object-cover' src={`https://image.tmdb.org/t/p/original/${val.logo_path}`} alt="" />

            </div>
            
            ): <span></span>
          
          }
        </div>


        {/* Available on Rent */}

        {information.watchproviders && information.watchproviders.rent ?
          information.watchproviders.rent.map((val,index)=>
        <div className='flex items-center gap-5 mt-5'>
          <h1 className='text-xl'>Available on Rent</h1>

          <div key={index} className='w-[5vh] '>
            <img title={val.provider_name}  className='w-full object-cover' src={`https://image.tmdb.org/t/p/original/${val.logo_path}`} alt="" />

          </div>
          
        </div>
          ) : <span></span>
        
        }



        {/* Available on Buy */}

        { information.watchproviders && information.watchproviders.buy ?
            information.watchproviders.buy.map((val,index)=>
          <div className='flex items-center gap-5 mt-5'>
          <h1 className='text-xl'>Available on Buy</h1>

          <div key={index} className='w-[5vh]'>
            <img title={val.provider_name}  className='w-full object-cover' src={`https://image.tmdb.org/t/p/original/${val.logo_path}`} alt="" />

          </div>

          </div>
          ) : <span></span>
        
        }

      </div>



      <hr className='mt-10 mb-4' />


      {/* {Seasons} */}

      <h1 className='text-3xl mt-5 text-white'>Seasons</h1>

      <div className='w-full h-fit p-3 flex gap-3 overflow-auto'>

        {information.detail.seasons ?  information.detail.seasons.map((s,index)=>

          <div key={index}  >

            <img className='min-w-[12vw]  h-[30vh] object-cover' 
            src={`https://image.tmdb.org/t/p/original/${s.poster_path}`} alt="" />

            <h2 className=' text-xl text-white text-center '>{s.name}</h2>


          </div>
        )
      
        : <h1 className='text-white text-2xl'>Nothing to Show...</h1>
      }

      </div>


  

      <hr className='mt-10 mb-4' />

      {/* Recommendations and Similar */}

      <h1 className='text-3xl text-white'>Recommendations and Similar Stuff</h1>

      <HorizontalSlide data={information.recommendations ? information.recommendations : 
        
        information.similar} />


      <Outlet/>
        

    </div>
  ): <Loading/>

}
export default TvDetails