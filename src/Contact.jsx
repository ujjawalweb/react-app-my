import React from "react";

import Navbar from "./Navbar";

import Contactbanner from "./Contactbanner";

import Form from "./Form";

import Footer from "./Footer";


function Contact(){

return (

<>
<Navbar />

<Contactbanner />

<Form  add="Address" adds="Akshya Nagar 1st Block 1st Cross, Rammurthy nagar"  phone="Let's Talk" number="0123456789"
support="General Support" email="dummy@gmail.com"

/>

<Footer copy="&copy; 2021-2022, *demo*" />

</>



);
}

export default Contact;