import React from "react";


import icon1 from "./icon1.png";

function Cards(props){

return(

    
            <div className="serviceBox">
                <div className="service-icon">
                    <span><img src={icon1}  class="iconn"/></span>
                </div>
                <h3 className="title">{props.title}</h3>
                <p className="description">{props.paras}</p>
            </div>
        


        

);

}

export default Cards;

