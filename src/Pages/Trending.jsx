import axios from 'axios'
import React, { useEffect, useState } from 'react'
import MovingPagination from '../Components/MovingPagination'
import TrendingItem from '../Components/TrendingItem'
import './trending.css'
export default function Trending() {
  const [trending, setTrending] = useState([]);
  const [page, setPage] = useState(1); //default 1
  const [pageNbr, setPageNbr] = useState(10); //default 10
  const fetchTrending = async () => {
    const {data} = await axios.get(`https://api.themoviedb.org/3/trending/all/day?api_key=6505633048f5502e5be2af8e438f76df&page=${page}`, {
  } )
    setTrending(data.results);
}
useEffect(
  () => {
    fetchTrending();
    console.log(pageNbr);
    setPageNbr(
      prev => prev + 2 //i wil update it everytime i render by stack
    )
  }, [page])
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
        <MovingPagination setPage={setPage}  Nbr = {pageNbr}/>
    </div>
  )
}
