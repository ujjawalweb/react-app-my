import Aboutus from './Aboutus';
import Home from './Home';

import Contact  from './Contact';

import {  Route, Switch } from 'react-router-dom';

function App() {

  return (
    <>
    <main>
    <Switch>
    <Route path="/" component={Home} exact />
        <Route path="/aboutus" component={Aboutus} />
        <Route path="/services" component={Services} />
        <Route path="/contact" component={Contact} />
    </Switch>
</main>



</>

  );
}




export default App;
