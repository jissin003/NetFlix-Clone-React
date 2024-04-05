import React from 'react'
import './Suggestions.css'
import { useEffect,useState } from 'react'
import axios from '../../Axios'
import { apikey, imageUrl } from '../constants/Constants'
import Youtube from 'react-youtube'


function Suggestions(props) {
const [movies,setMovies]=useState([])
const [id,setUrlid]= useState('')

useEffect(() => {
  axios.get(props.url).then((response) => {
      console.log(response.data.results);
      setMovies(response.data.results);
  });
}, [props.url]);


const opts = {
  origin: 'https://www.youtube.com',
  height: '390',
  width: '100%',
  playerVars: {
    // https://developers.google.com/youtube/player_parameters
    autoplay: 1,
  },
};

const handleyoutube=(id)=>{
 console.log(id)
 axios.get(`/movie/${id}/videos?language=en-US&api_key=${apikey}`).then((response)=>{
 if(response.data.results.length!==0){
      setUrlid(response.data.results[0])
    }
    else{
      console.log('TMDB Array empty')
    }


 })
}


  return (
    <div className='suggestions'>
        <h1>{props.title}</h1>
        <div className="suggestion_movies">
        {movies.map((obj)=>(
             <img key={obj.id}  onClick={() => handleyoutube(obj.id)}  className={props.isSmall ? 'smallposters': 'posters'} src={`${imageUrl+obj.backdrop_path}`}  alt="NetFlix orginals" />
        ))}
      </div>
      <div>
      { id && <Youtube opts={opts} videoId={id.key} />}
      </div>
    </div>
  )
}

export default Suggestions