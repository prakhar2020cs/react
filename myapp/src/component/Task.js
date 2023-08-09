
import React from 'react'

export default function Task(props) {
  return ( 
  <>
    <div class='container mt-5'>
    <div class="row">
        <div class="col-4"></div>
        <div class="col-4">   
        <div class="card">
<img src="image/71k2oJWVmtL._SX679_.jpg" className="card-img-top" alt="hp"/>
<div className="card-body">
<h5 className='card-title'>{props.productname}</h5>
<h5 className='card-title'>{props.price}</h5>
<p class="card-text">{props.details}</p>
</div>
      </div>
            </div>
        <div class="col-4"></div>
    </div>
    </div>


    
    </>
      
            
           
  
  
  
 
    
  );
}
