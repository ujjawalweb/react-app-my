import React from "react";


import Navbar from "./Navbar";
import Servicesbanner from "./Servicesbanner";

import Servicesbox from "./Servicesbox";
import Servicesabt from "./Servicesabt";

import Footer from "./Footer";

import Testi from "./Testi";


function Services(){


return (

<>
<Navbar />

<Servicesbanner />
<Servicesbox  blocktit="Ipsum dolor"  blocktit2="Classical Latin"  blocktit3="Ipsum generators"  blockpara="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga possimus explicabo veniam nobis est quibusdam quas expedita, pariatur illum rem. Lorem ipsum dolor sit amet."/>

<Servicesabt  abthead="Gives you the best solution " abtpara="These cases are perfectly simple and easy to distinguish. In a free hour,"
abtpara2="when our power of choice is untrammelled and when nothing prevents"  list1="Apartments frequently or motionless." />


<Footer copy="&copy; 2021-2022, *demo*" />





	
</>


);
}

export default Services;