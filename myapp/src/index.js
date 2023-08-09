import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import reportWebVitals from './reportWebVitals';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';


import Menu from './component/Menu';
import Card from './component/Card';








const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    
 

  
 <Menu></Menu>
 <h4>Week1</h4>
 <Card link="image/x.png" link1="portfolio\Day3\ass3 navbarbybootstrap.html" link2="portfolio\Day3\demobootstrap1.html" link3="portfolio\Day3\image gallery.html" link4="portfolio\Day1\timetable.html" ></Card>
 <Card link="image/x.png" link1="portfolio\Day4\assignment4 crcwebsite\assignment4 crcwebsite.html" link2="portfolio\Day5ppt\Presentation1.pptx" link4="portfolio\Day6\nameage.html" link3="portfolio\Day6\entering value js.html" ></Card>
 <h4>Week2</h4>
 <Card link="image/x.png" link1="portfolio\Day6\nameage.html" link2="portfolio\Day7\assigment.html" link3="portfolio\Day7\calculator.html" link4="portfolio\Day8\formdesign.html" ></Card>
 <h4>Week3</h4>
 <Card link="image/x.png" link1="portfolio\Day8\signinn.html" link2="portfolio/Day8\Table.html" link3="portfolio\Day9\bill2.html" link4="portfolio\Day10\regestration.html" ></Card>
 <h4>Week4</h4>
 <Card link="image/x.png" link1="portfolio\Day11\Inserting values in h1.html" link2="portfolio/Day11\welcome.html" link3="portfolio\Day9\bill2.html" link4="portfolio\Day12\filterby age.html" ></Card>
 <h4>Week5</h4>
 <Card link="image/x.png" link1="portfolio\Day12\map.html" link2="portfolio\Day12\storing  values in map.html" link3="portfolio\Day13\jsin form.html" link4="" ></Card>
  
   

  
    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
