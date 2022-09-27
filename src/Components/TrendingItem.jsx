import React from 'react'
import './trendingItem.css'
import {img_300, unavailable} from '../Config/Config'
export default function TrendingItem({title, id, poster, date, media_type, vote_average}) {
    
  return (
    <div className='media'>
      <img className='trendingItem__img' src={poster ? `${img_300}${poster}` : unavailable}
        alt={title} />
      <b className='title'>{title}</b>
      <span className='media_type'>{media_type==='tv' ? 'TV Serie' : 'Movie'}
      {/* <span className='date'> {date}</span> */}
      </span>
    </div>
  )
}