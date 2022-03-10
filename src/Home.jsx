import React from "react";

import Navbar from "./Navbar";
import Banner from "./Banner";
import Heading1 from "./Heading1"
import Card from "./Card";
import About from "./About";
import Counter from "./Counter";
import Testi from "./Testi";
import Footer from "./Footer"
import Ban from "./Ban";
import Faq from "./Faq";

function Home(){

return (
<>

<Navbar />

<Banner />
<Heading1 maintitle="Explore Our Solutions" />

<div class="container">
<div classname="row justify-content-center">
    <div class="col-md-12 text-center mt-4">
<div className="crd">
<Card  title="Invoicing"    paras="These cases are perfectly simple and easy to distinguish. In a free hour power." 
/>

<Card  title="Business Growth"    paras="These cases are perfectly simple and easy to distinguish. In a free hour power." 
/>

<Card  title="Problem Solving"    paras="These cases are perfectly simple and easy to distinguish. In a free hour power." 
/>
</div>
</div>
</div>
</div>

<About abthead="The Largest Business Expert" abtpara="These cases are perfectly simple and easy to distinguish. In a free hour,"
abtpara2="when our power of choice is untrammelled and when nothing prevents"  list1="Apartments frequently or motionless."
/>

<div class="container-fluid bg-lgt">
    <div class="container">
<div classname="row justify-content-center">
    <div class="col-md-12 text-center mt-4">
<div className="crd">
<Counter counttit="Total Projects" value="520" />
<Counter counttit="Other Projects" value="244" />
<Counter counttit="Job Success" value="95" />

</div>
</div>
</div>
</div>
</div>
<Ban />
<Heading1 maintitle="Our Team" />
<Faq  teamname="Michael Doe"  teamname2="Williamson" teamname3="Rosy"  teamde="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ac eros lacus. Sed commodo fringilla pharetra. Proin sodales risus et nunc volutpat." />

<Heading1 maintitle="Testimonial" />

<Testi testtitle="williamson"  testtitle2="Kristina"  testpara="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam varius eros consequat auctor gravida. Fusce tristique lacus at urna sollicitudin pulvinar. Suspendisse hendrerit ultrices mauris."/>
<Footer copy="&copy; 2021-2022, *demo*" />


</>


);



}

export default Home;