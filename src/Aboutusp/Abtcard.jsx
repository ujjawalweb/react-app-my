import React from "react";

const imgs1="https://i.ibb.co/QP6Nmpf/image-1-about.jpg";

const imgs2="https://i.ibb.co/JvN0NVB/image-2-about.jpg";

function Abtcard(props){

return (

<>
<section class="about-section">
        <div class="container">
            <div class="row">                
                <div class="content-column col-lg-6 col-md-12 col-sm-12 order-2">
                    <div class="inner-column">
                        <div class="sec-title">
                            <span class="title">{props.abtcom}</span>
                            <h3 class="had">{props.abttitle}</h3>
                        </div>
                   
                        <ul class="lists">
                            <li><i class="fa fa-square"></i> &nbsp; {props.lione}</li>
                            <li><i class="fa fa-square"></i> &nbsp; {props.litwo}</li>
                            <li><i class="fa fa-square"></i> &nbsp; {props.lithree}</li>
                        </ul>
                        <div class="btn-box">
                            <a href="#" class="theme-btn btn-style-one">Contact Us</a>
                        </div>
                    </div>
                </div>

             
                <div class="image-column col-lg-6 col-md-12 col-sm-12">
                    <div class="inner-column wow fadeInLeft">
                        <figure class="image-1"><a href="#" class="lightbox-image" data-fancybox="images"><img src={imgs1} alt=""  class="crds"/></a></figure>
                        <figure class="image-2"><a href="#" class="lightbox-image" data-fancybox="images"><img src= {imgs2}alt=""  /></a></figure>
                    </div>
                </div>
            </div>
        </div>
    </section>

</>

);




}

export default Abtcard;

