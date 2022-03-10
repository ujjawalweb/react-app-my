import React from "react";

import servic from "./1.jpg"

function Servicesabt(props){


return (

<div className="container-fluid ">
 <div className="row">
  <div className="col-md-6 mtp">
      <img src={servic}  className="abt"/>
      
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

      </div>  
     </div>
    
    </div>





);




}





export default Servicesabt;