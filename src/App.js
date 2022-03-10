import Aboutus from './Aboutus';
import Home from './Home';

import Contact  from './Contact';

import {   Routes, Route  } from 'react-router-dom';

function App() {

  return (
    <>
    <main>
    <Routes>
    <Route path="/" element = {<Home/>} component={Home} exact />
        <Route path="/aboutus" element = {<Aboutus/>}  component={Aboutus} />
        <Route path="/services" element = {<Services/>} component={Services} />
        <Route path="/contact" element = {<Contact/>} component={Contact} />
    </Routes>
</main>




</>

  );
}




export default App;


