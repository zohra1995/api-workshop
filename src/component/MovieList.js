import React from 'react'
import MovieCard from './MovieCard'
export default function MovieList({movies,byname,byrate}) {
  return (
    <div className='movie-list'>

      {movies
      .filter((el) => el.name.toLowerCase().includes(byname.toLowerCase())&& el.rate>=byrate)
      .map((el)=>
      
      (<MovieCard movie={el} />
      
      ))}
      </div>
  )
}
