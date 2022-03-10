import Aboutus from './Aboutus';
import Home from './Home';

import Contact  from './Contact';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {

  return (
    <>
    <Router>
    <Routes>
    <Route path="/" element={<Home />} />
        <Route path="/aboutus"  element={<Aboutus />}  />
        <Route path="/services"  element={<Services />}  />
        <Route path="/contact"  element={<Contact />}  />
        
    </Routes>
</Router>




</>

  );
}




export default App;
