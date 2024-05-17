import React, { useState } from 'react'
import {useDispatch, useSelector} from "react-redux"
import { asyncloadperson} from '../Store/Actions/personAction'
import {removeperson} from "../Store/reducers/PersonSlice"
import {useLocation, useNavigate, useParams} from "react-router-dom"
import Loading from "../Component/Loading"
import { useEffect } from 'react'
import HorizontalSlide from './partials/HorizontalSlide'





const PersonDetails = () => {

  const {pathname} = useLocation()

  const {id} = useParams()

  const dispatch = useDispatch()

  const navigate = useNavigate()

  const {information} = useSelector((state)=> state.person)

  // console.log(information)




  useEffect(()=>{

    dispatch(asyncloadperson(id))

    return(()=> dispatch(removeperson()))


  },[id])






  return information ? (
  <div className='w-screen h-screen p-4 bg-[#1F1E24] text-white overflow-auto flex  '>


    {/* Left Side...  */}

      <nav className='text-xl  '>
        <i onClick={()=> navigate(-1)} className="ri-arrow-left-line cursor-pointer hover:text-red-500"></i>     
      </nav>


    <div className='w-[30%] h-full p-2 '>


      <div className='w-[100%] flex flex-col items-center   '>
        <img className='w-[55%] text-center  object-cover mb-6' src={`https://image.tmdb.org/t/p/original/${information.detail.backdrop_path || information.detail.poster_path || information.detail.profile_path}`} alt="" />

        <hr className='w-[50%]' />

        <div className='flex items-center gap-5 text-2xl mt-4 text-center'>

          <a target='_blank' href={`https://www.wikidata.org/wiki/${information.externalid.wikidata_id}`}> <i className="ri-earth-line"></i> </a>

          <a target='_blank' href={`https://www.facebook.com/${information.externalid.facebook_id}`}> <i className="ri-facebook-circle-fill"></i> </a>

          <a target='_blank' href={`https://www.instagram.com/${information.externalid.instagram_id}`}> <i className="ri-instagram-fill"></i> </a>

          <a target='_blank' href={`https://www.twitter.com/${information.externalid.twitter_id}`}> <i className="ri-twitter-x-fill"></i> </a>

        </div>

          <h1 className='mt-2 p-2 text-2xl'>Personal Info</h1>


          <h2 className='text-xl text-zinc-400'>Known For </h2>
          <p className='mb-4 w-[12vh]  text-start text-zinc-400'>{information.detail.known_for_department}</p>
            


          <h2 className=' mr-8 text-center  text-xl text-zinc-400'>Gender </h2>
          <p className='w-[12vh] mb-4  text-start text-zinc-400' >  {information.detail.gender && information.detail.gender==1 ? "Female" : "Male" }  </p>


          <h2 className='text-xl w-[13vh]  text-zinc-400'>Birthday</h2>
          <p className='w-[13vh] mb-4 text-start text-zinc-400'> {information.detail.birthday} </p>


          <h2 className='text-xl w-[13vh] text-zinc-400'>Deathday   </h2>
          <p className='w-[13vh] mb-4 text-zinc-400'>{ information.detail.deathday ? information.detail.deathday : "Still Alive" } </p>


          <h2 className='text-xl  ml-3  text-zinc-400'>Place of Birth </h2>
          <p className=' w-[25vh] ml-20 mb-4  text-zinc-400'>{information.detail.place_of_birth} </p>


          <h2 className='text-xl ml-4 text-zinc-400'>Also Known As </h2>
          <p className='text-zinc-400  w-[27vh]  ml-20'> {information.detail.also_known_as.slice(0,1)} </p>






      </div>

    </div>




    {/* Right Side... */}

    <div className='w-[70%]   p-3  '>

      <div className=''>
        <h1  className='text-5xl mb-5 font-black '>{information.detail.name}</h1>

        <h1 className='mb-4 text-zinc-400 font-black '>Biography</h1>
        <p className='mb-7'>{information.detail.biography.slice(0,460)}</p>

        <h1 className='font-black mb-3 text-zinc-400'>Known For</h1>

        <HorizontalSlide data = {information.combinedCredits.cast}  />

      </div>


    
    </div>














  </div>
  ) : <Loading/>
}





export default PersonDetails