import React from 'react'
import { useState } from 'react'
export default function AddMovie ({add}) {
const [show ,setShow]=useState(false)
  const [movie ,setMovie]=useState({name:"",Description : "",rate:0 ,PostureURL :""});
  return (

    <div className='add'> 

    <button > + </button>

     {( show && <div className='modal-bg'>

     < div className='modal-content'>
     < input type="text" placeholder='movie name'   onChange={(e)=>setMovie({...movie,name:e.target.value})} />
     < input type="text" placeholder='movie description'   onChange={(e)=>setMovie({...movie,Description:e.target.value})}/>
     < input type="text" placeholder='movie image'   onChange={(e)=>setMovie({...movie,PostureURL:e.target.value})}/>
     < input type="number" value  placeholder='movie rating'  onChange={(e)=>setMovie({...movie,rate:e.target.value})}/>
     <button onClick={()=>{add(movie) ; setShow(false);}}> Confirm </button>
     <button onClick={setShow(false)}>  Cancel </button>
     </div> 

    </div>)}

    </div>
  )
}
