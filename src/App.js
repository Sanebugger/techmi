import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';
import Header from "./components/Header";
import Home from './components/HOMEPAGE/Home';

import Services from './components/Services';

function App() {
  return (
    <>
     <Router>
      <Header/>
      <Switch>
        <Route exact path='/' component={Home}></Route>
        <Route exaect path='/services' component={Services}></Route>
        <Route exact path='/contactus' component={ContactUs}></Route>
        <Route exact path='/aboutus' component={AboutUs}></Route>
      </Switch>
    </Router>
  </>
  );
}

export default App;
