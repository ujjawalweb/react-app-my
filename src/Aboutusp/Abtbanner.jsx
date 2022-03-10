import React from "react";
import about_bg from "../abt.jpg"

const img4="https://picsum.photos/200/300";


function Abtbanner(){

return (

<>
<div class="banner2">
    
    <img src={about_bg} class="abtbanner" />

    <h2 className="text">About us</h2>
    <p className="para par">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, </p>
    
</div>
</>



);




}

export default Abtbanner;