import React from 'react'
import ReactStars from 'react-stars'

export default function SearchBar({setByRate,setByName}) {
  return (
    <div className='search-bar'>
      <h3> LET'S CHILL </h3>
<div className='search-input'> 
<img src='https://th.bing.com/th/id/OIP._gWKb7XothF92LD2Fq5NLwHaHM?w=212&h=206&c=7&r=0&o=5&pid=1.7' alt=''/>
       < input type="text"  placeholder='search for your favorite movie '
        size={50} onChange={(e)=>setByName(e.target.value)}/>
       </div>
       <ReactStars 
    count={5}
    onChange={(newValue)=>{setByRate(newValue)}}
    size={24}
    activeColor="#ffd700"
  />
  
    </div>
  )
}
