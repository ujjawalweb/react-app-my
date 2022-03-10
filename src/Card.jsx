import React from "react";


import icon1 from "./icon1.png";

function Cards(props){

return(

    
            <div class="serviceBox">
                <div class="service-icon">
                    <span><img src={icon1}  class="iconn"/></span>
                </div>
                <h3 class="title">{props.title}</h3>
                <p class="description">{props.paras}</p>
            </div>
        


        

);

}

export default Cards;

