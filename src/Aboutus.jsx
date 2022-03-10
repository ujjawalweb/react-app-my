import React from "react";

import Abtbanner from "./Aboutusp/Abtbanner";
import Navbar from "./Navbar";
import Abtcard from "./Aboutusp/Abtcard";
import Abtchoose from "./Aboutusp/Abtchoose";
import Footer from "./Footer";


function Aboutus(){


return (

<>
<Navbar />
<Abtbanner />
<Abtcard  abtcom="About Company"  abttitle="We are leader in Industrial" lione="Lorem Ipsum is simply dummy text" 
litwo="Consectetur adipisicing elit" lithree="Sed do eiusmod tempor incididunt"
/>

<Abtchoose maintitle="Why Choose us"  choosedetail="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis ..."

choosetitle="Lorem ipsum dolor"
/>
<Footer copy="&copy; 2021-2022, *demo*" />



	
</>


);
}

export default Aboutus;