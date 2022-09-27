import axios from 'axios'
import React, { useEffect, useState } from 'react'
import TrendingItem from '../Components/TrendingItem'
import './trending.css'
export default function Trending() {
  const [trending, setTrending] = useState([])
  const fetchTrending = async () => {
    const {data} = await axios.get('https://api.themoviedb.org/3/trending/all/day?api_key=6505633048f5502e5be2af8e438f76df', {
  } )
    console.log(data.results);
    setTrending(data.results);
}
useEffect(
  () => {
    fetchTrending();
  }, [])
  return (
    <div>
    <div className="spantitle">
    <span className="pageTitle">Trending</span>
    </div>
      <div className='trending'>
        { trending && trending.map((t) => (
          <TrendingItem 
            title = {t.title || t.name} 
            id = {t.id} 
            poster = {t.poster_path} 
            date = {t.first_air_date || t.release_date} 
            media_type = {t.media_type} 
            vote_average = {t.vote_average}
          />
        ))}
        </div>
    </div>
  )
}
