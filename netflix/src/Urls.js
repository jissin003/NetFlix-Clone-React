import { apikey } from "./components/constants/Constants"



export const action =`https://api.themoviedb.org/3/discover/movie?api_key=${apikey}&with_genres=28`

export const originals =`https://api.themoviedb.org/3/discover/tv?api_key=${apikey}&with_networks=213`

export const  HorrorMovies =`https://api.themoviedb.org/3/discover/movie?api_key=${apikey}&with_genres=27`

export const romance=`https://api.themoviedb.org/3/discover/movie?api_key=${apikey}&with_genres=10749`