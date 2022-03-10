import React from "react";

import profile from "./profile.png"

function Testi(props){

return(

    <div class="container-fluid">
         <div class="container mtp">
<div id="testimonial-slider" class="owl-carousel">
                <div class="testimonial">
                    <div class="pic">
                        <img src={profile} />
                    </div>
                    <div class="testimonial-profile">
                        <h3 class="title">{props.testtitle}</h3>
                      
                    </div>
                    <p class="description">
                    {props.testpara}
                    </p>
                </div>
                <div class="testimonial sec">
                    <div class="pic">
                        <img src={profile} />
                    </div>
                    <div class="testimonial-profile">
                        <h3 class="title">{props.testtitle2}</h3>
                      
                    </div>
                    <p class="description sec">
                    {props.testpara}
                    </p>
                </div>
                <div class="testimonial">
                    <div class="pic">
                        <img src={profile} />
                    </div>
                    <div class="testimonial-profile">
                        <h3 class="title">{props.testtitle}</h3>
                        
                    </div>
                    <p class="description">
                    {props.testpara}
                    </p>
                </div>
            </div>
            </div>
            </div>
        
        
);


}

export default Testi;