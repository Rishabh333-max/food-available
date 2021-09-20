import React, { useState } from 'react'
import Sdata from './Sdata'
import { NavLink } from 'react-router-dom';

const GalleryReact = () => {
    const[data,setData]=useState(Sdata);
  const filterItem=(curVal)=>{
      const updatedItem=Sdata.filter((curEle)=>{
          return curEle.category===curVal;
      })
      setData(updatedItem)
  }
    return (
       <>
         <div className="my-5">
    <h1 className="text-center">Our Food Services</h1>
</div>

<hr/>
<div className="menu-tabs Container">
    <div className="menu-tabs d-flex justify-content-around">
    <button type="button" class="btn btn-warning" onClick={()=>filterItem("breakfast")}>Breakfast</button>
    <button type="button" class="btn btn-warning" onClick={()=>filterItem("evening")}>Evening</button>
    <button type="button" class="btn btn-warning" onClick={()=>filterItem("lunch")}>Lunch</button>
    <button type="button" class="btn btn-warning" onClick={()=>filterItem("dinner")}>Dinner</button>
    <button type="button" class="btn btn-warning" onClick={()=>setData(Sdata)}>All</button>
    </div>
</div>
<hr/>
<div className="container-fluid mb-5">
    <div className="row">
        <div className="col-10 mx-auto">
            <div className="row gy-4">
              
{data.map((curVal)=>{
const {id,imgsrc,text,title}=curVal;
return(
    <div className="col-md-4 col-10 mx-auto">
    <div className="card" >
<img src={imgsrc} className="card-img-top" alt="img"/>
<div className="card-body">
 <h5 className="card-title">{title}</h5>
 <p className="card-text">{text}</p>
<button className="btn btn-outline-primary">Order Now</button>
</div>
</div>
</div>
)
})}

         

       </div>
        </div>
    </div>
</div>
       </>
    )
}

export default GalleryReact;
