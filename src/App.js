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
    <Route path="/" element={} component={Home} exact />
        <Route path="/aboutus" element={} component={Aboutus} />
        <Route path="/services" element={} component={Services} />
        <Route path="/contact" element={} component={Contact} />
    </Routes>
</main>




</>

  );
}




export default App;
