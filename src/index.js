import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
import {BrowserRouter as Router} from 'react-router-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {RentalProvider} from './context';

ReactDOM.render(
  <RentalProvider>
    <Router>
    <App /> 
    </Router>
  </RentalProvider>,
   document.getElementById('root')
);

serviceWorker.unregister();
