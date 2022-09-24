import React from 'react'
import {useLocation,useNavigate} from 'react-router-dom';
import './Recipes.css'



function Recipes() {
  const navigate=useNavigate();
    const location = useLocation();
    var data1=location.state.data
    console.log(location.state.data)
    console.log(data1)
    if(data1.length!==0){
      console.log(data1.length)
  return (
    <div className='mainn'>
      
        {data1.map((dat)=>{
            return(
            <div className='cont'>
              <div className='recipecard'>
                <div className='image'>
              <img src={dat.recipe.image} alt='Loading Failed'></img>
              </div>
              <div>
                <div className='recipemiddle'>
                  
            <h1>{dat.recipe.label}</h1>
            <h3>Calories {dat.recipe.calories.toFixed(2)}</h3>
            </div>
            
            
            
            </div>
            
            <div className='Nutr'>
            <h4>&#8226;{dat.recipe.totalNutrients.SUGAR.label} {dat.recipe.totalNutrients.SUGAR.quantity.toFixed(2)}gm</h4>
            <h4>&#8226;{dat.recipe.totalNutrients.FAT.label} {dat.recipe.totalNutrients.FAT.quantity.toFixed(2)}gm</h4>
            <h4>&#8226;{dat.recipe.totalNutrients.PROCNT.label} {dat.recipe.totalNutrients.PROCNT.quantity.toFixed(2)}gm</h4>
            </div><div className='Nutr'>
            <h4>&#8226;{dat.recipe.totalNutrients.VITC.label} {dat.recipe.totalNutrients.VITC.quantity.toFixed(2)}mg</h4>
            <h4>&#8226;{dat.recipe.totalNutrients.VITD.label} {dat.recipe.totalNutrients.VITD.quantity.toFixed(2)}mg</h4>
            <h4>&#8226;{dat.recipe.totalNutrients.VITB12.label} {dat.recipe.totalNutrients.VITB12.quantity.toFixed(2)}mg</h4>
            </div><div className='Nutr'>
            <h4>&#8226;{dat.recipe.totalNutrients.K.label} {dat.recipe.totalNutrients.K.quantity.toFixed(2)}mg</h4>
            <h4>&#8226;{dat.recipe.totalNutrients.MG.label} {dat.recipe.totalNutrients.MG.quantity.toFixed(2)}mg</h4>
            <h4>&#8226;{dat.recipe.totalNutrients.NA.label} {dat.recipe.totalNutrients.NA.quantity.toFixed(2)}mg</h4>
            </div>
            
            </div>
            <div className='hlbox' >
              <div>
              <h3 >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Health Labels </h3>
              </div>
              <div  className='hlabels'>
            {dat.recipe.healthLabels.slice(0,10).map((lab)=>{
              return(
                <h4>&nbsp;&nbsp;&#8226;{lab}&nbsp;&nbsp;</h4>
              )
            })}</div>
            </div>
            </div>
            )
            
        })}
    <div className="footer">
        <h1>End of Recipes</h1>
        <button onClick={()=>{navigate('/')}}>Search other</button>
    </div>   
    </div>
  )
}else{
  
  return(
    <div className='erroh'>
      <h3>Search No Data Found Please Check Name Correctly</h3>
      <h4>Redirect to HomePage.......</h4>
      <button onClick={()=>{navigate('/')}}>Click Here</button>
    </div>
  )
}}


export default Recipes