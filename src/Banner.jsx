import React from "react";

import banner from './banner.png'; 

import banner2 from './banner2.png'; 

function Banner(){


return(
<div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active one">
      <img src={banner} className="d-block w-100" alt="..." />


<h2 className="text text-effect "> Grow Big with  <br />

Musicol Business</h2>
<p class="para">Nam libero tempore, cum soluta nobis est eligendi optio <br />
                                    cumque nihil impedit quo minus. </p>

<button className="btn1">Read More</button>

 </div>
 <div className="carousel-item">
      <img src={banner2} className="d-block w-100" alt="..." />
      
<h2 className="text"> There are to  <br />

many variations </h2>
<p class="para">Nam libero tempore, cum soluta nobis est eligendi optio <br />
                                    cumque nihil impedit quo minus. </p>

<button className="btn1">Read More</button>
    </div>
    <div className="carousel-item">
      <img src={banner} className="d-block w-100" alt="..." />
      
<h2 className="text"> Grow Big with  <br />

Musicol Business</h2>
<p class="para">Nam libero tempore, cum soluta nobis est eligendi optio <br />
                                    cumque nihil impedit quo minus. </p>

<button className="btn1">Read More</button>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>  

);


}

    
 





export default Banner;



