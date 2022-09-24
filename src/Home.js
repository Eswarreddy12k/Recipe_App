import React, { useState } from 'react';
import {useNavigate} from 'react-router-dom'
import Recipes from './Recipes';
import './Home.css'


function Home() {
    const navigate=useNavigate();
    const [item,setitem]=useState();
    async function handleClick(){
        var s=JSON.stringify(item);
        const a=await fetch('https://api.edamam.com/search?q='+s+'&app_id=96a6b686&app_key=274c3a36c57da3fc1f64cafa7abbfcda')
        var data1=await a.json()
        data1=data1.hits
        navigate('/recipe',{state:{data:data1}})
        

    }

  return (
    <>
    <div className='homee'>
        <input type="text" placeholder='Search Here For Recipies' onChange={(e)=>{setitem(e.target.value)}}></input>
        <button onClick={()=>{handleClick()}}>Search</button>
        
    </div>
    <div className='footer'>
      <h1>Created With Edamam API</h1>
    </div>
    </>
  )
}


export default Home