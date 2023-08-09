import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Inlinecss() {
  return (
    <div>
        <h1 style={{ color:"red",borderStyle:"solid"}}>my first heading</h1>
        <p className='bg-danger'>this is my para</p>
    </div>
  );
}
