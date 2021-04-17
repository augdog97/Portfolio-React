import {useEffect} from "react";
import firebase from 'firebase';
import * as Globals from './Globals';

//Css Import
import './stylesheets/app.scss';


// Components
import NavBarComp from './components/navbar';
import Home from "./components/home";
import Portfolio from "./components/Portfolio";
import Aviation from "./components/Aviation";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Test from "./components/test";

import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";

import ScrollToTop from './components/ScrollToTop';

function App() {

  const remoteConfig = firebase.remoteConfig();
 


  useEffect(() => {
    
    //remoteConfig.settings.minimumFetchIntervalMillis = 10000;
      remoteConfig.fetchAndActivate()
      .then(() => {
        console.log('YAY');
      }).catch((error) => {console.log(error)});
    
    
  }, [])

  return (
      <Router>
          <NavBarComp />
          <ScrollToTop />
    <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/portfolio"  component={Portfolio} />
        <Route path="/aviation-time"  component={Aviation} />
        <Route path="/contact"  component={Contact} />
        <Route path="/test"  component={Test} />
    </Switch>
        < Footer />
       </Router>
   
  );
}

export default App;
