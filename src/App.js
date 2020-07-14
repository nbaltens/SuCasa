import React from 'react';
import './App.css';

import Home from './pages/Home';
import Rentals from './pages/Rentals';
import SingleRental from './pages/SingleRental';
import Error from './pages/Error';

import {Route, Switch} from 'react-router-dom';

import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  
  return (
      <>
      <Navbar />
      <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/rentals/" component={Rentals} />
      <Route exact path="/rentals/:slug" component={SingleRental} />
      <Route component={Error} />
      </Switch>
      <Footer />
      </>
  );
}
//SLUG CAN BE CHANGED
export default App;
