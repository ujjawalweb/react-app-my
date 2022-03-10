import React from "react";

import about from "./about.png"

function About(props){


return (

<div className="container-fluid ">
 <div className="row">
  <div className="col-md-6 mtp">
      <img src={about}  className="abt"/>
      
      </div>   
     
      <div className="col-md-6 mtps">
          <h3 class="had">{props.abthead}</h3>
         <p class="abt-para"> {props.abtpara}</p> 
         <p class="abt-para2"> {props.abtpara2}</p> 

        <ul class="lists">
           <li><i class="fa fa-square"></i> &nbsp; &nbsp; {props.list1}</li> 
           <li><i class="fa fa-square"></i> &nbsp; &nbsp;{props.list1}</li> 
           <li><i class="fa fa-square"></i> &nbsp; &nbsp; {props.list1}</li> 
        </ul>
        
<button className="btn1 abtn">About us</button>
      </div>  
     </div>
    
    </div>





);




}

export default About;