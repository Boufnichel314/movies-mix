import axios from 'axios'
import React, { useEffect, useState } from 'react'

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
      <span className='pageTitle'>Trending</span>
      <div className='trending'>
        { trending && trending.map((t) => (
          console.log(t)
        ))}
        </div>
    </div>
  )
}
