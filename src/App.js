import React from 'react';
import Home from './Home';
import About from './About';
import Application from './Application';
import { Switch, Route, Redirect } from 'react-router-dom';
import Navbar from './Navbar';
// import Navbar from './Navbar';
// import Services from './Services';
import Status from './Status';

const App = () => {
  return (
    <>
    <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/About" component={About} />
        <Route exact path="/Application" component={Application} />
        <Route exact path="/Status" component={Status} />
        
      
        <Redirect to="/" />
      </Switch>
    </>
  )
}

export default App;