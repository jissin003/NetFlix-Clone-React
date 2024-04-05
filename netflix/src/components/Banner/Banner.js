import React, { useEffect, useState } from 'react'
import "./Banner.css"; 
import axios from '../../Axios';
import { apikey,imageUrl } from '../constants/Constants';


function Banner() {

  const [movie,setMovie]=useState()

 useEffect(()=>{
  axios.get(`trending/all/week?api_key=${apikey}&language=en-US`).then((response)=>{
    setMovie(response.data.results[18])
  })
 },[])


  return (
   
    <div className='banner'
    style={{backgroundImage:`url(${movie ? imageUrl+movie.backdrop_path :"" })`}}
    >

        <div className='contents'>
            <h1 className='title'>{movie ? movie.title ||movie.name :""}</h1>
            <div className='banner_buttons'>
                <button className='buttons'>Play</button>
                <button className='buttons'>My list</button>
            </div>
            <h2 className='description'>{movie ? movie.overview : ""}</h2>

         </div>
         <div className="fade_bottom"></div>
    </div>
  )
}

export default Banner