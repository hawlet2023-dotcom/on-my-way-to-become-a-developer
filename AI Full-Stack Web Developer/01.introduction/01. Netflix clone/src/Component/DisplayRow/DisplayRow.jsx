import React, { useState, useEffect } from 'react'
import styles from './DisplayRow.module.css'
import SlideShow from '../SlideShow/SlideShow'
import {movies} from '../../Data/Data'
import movieInstance from '../../Utility/MovieInstance'
import requests from '../../Utility/requestUrls'
function DisplayRow() {
   const [movie, setMovies] = useState({
    trending:[],
    netflixOriginals:[],
    topRated:[],
    action:[],
    comedy:[],
    horror:[],
    romance:[],
    documentaries:[]
   })
      useEffect(()=>{
        fetchMovie()
    },[])
      
  const fetchMovie = async ()=> {
    try {
      const [trendingRes,netflixRes,topRatedRes,actionRes,comedyRes,horrorRes,romanceRes,docRes]= await Promise.all([

        movieInstance.get(requests.fetchTrending),
        movieInstance.get(requests.fetchNetflixOriginals),
        movieInstance.get(requests.fetchTopRatedMovies),
        movieInstance.get(requests. fetchActionMovies),
        movieInstance.get(requests.fetchComedyMovies),
        movieInstance.get(requests.fetchHorrorMovies),
        movieInstance.get(requests. fetchRomanceMovies),
        movieInstance.get(requests.fetchDocumentaries)
      ])
    
      setMovies({
        trending: trendingRes.data.results,
        netflixOriginals:netflixRes.data.results,
        topRated:topRatedRes.data.results,
        action:actionRes.data.results,
        comedy:comedyRes.data.results,
        horror:horrorRes.data.results,
       romance:romanceRes.data.results,
       documentaries:docRes.data.results,
    })
  }catch (error) {
    console.log(error)
    }
  }

  return (
    <div className={styles.mainWrapper}>
      <SlideShow title="Netflix trending" movies={movie.trending}/>
      <SlideShow title="Popular on Netflix" movies={movie.netflixOriginals}/>
      <SlideShow title="Action" movies={movie.action}/>
      <SlideShow title="Top Rated" movies={movie.topRated}/>

    </div>
  )
}

export default DisplayRow
