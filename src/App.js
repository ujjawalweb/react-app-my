import React from "react";

import Services from './Services';
import Aboutus from './Aboutus';
import Home from './Home';

import Contact  from './Contact';

import {  Route, Routes } from 'react-router-dom';

function App() {

  return (
    <>
    <main>
    <Routes>
    <Route path="/" component={Home} exact />
        <Route path="/aboutus" component={Aboutus} />
        <Route path="/services" component={Services} />
        <Route path="/contact" component={Contact} />
    </Routes>
</main>



</>

  );
}




export default App;
