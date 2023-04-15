import React from 'react'
import ReactStars from 'react-stars'
export default function MovieCard({movie}) {
  return (
    <div className='movie-card' style={{backgroundImage:`url(${movie.PosterURL})` }} >
     
      <div className='movie-content'> 
     <h2> {movie.name}</h2> 
     <p>{movie.Description}</p>
     <ReactStars 
    count={5}
    onChange={()=>{}}
    value={movie.rate}
    edit ={false}
    size={24}
    activeColor="#ffd700"
  />
     

    </div>
    </div>
  )
}
