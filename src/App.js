import React from 'react';
import './assets/css/App.css';

//importacion componentes
import { BrowserRouter } from "react-router-dom";

import Headerrr from './components/Headerrr';


import Footer from './components/Footer';
import Router from './components/Router';


function App() {
  return (
    <div className="App">
      <BrowserRouter>

        <Router />



        {/*<Products/>*/}

        <div className="clearfix"></div>

        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
