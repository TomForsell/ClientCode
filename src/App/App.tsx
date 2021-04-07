import React from 'react';
import logo from './dnb-rgb-sjøgrønn.png';
import './App.css';
import Menu from "../Menu/Menu";
import { Switch, Route } from 'react-router-dom';
import About from "../About/About";
import Environments from "../Environments";
import '@dnb/eufemia/style/core';
import '@dnb/eufemia/style/components';
import '@dnb/eufemia/style/themes/ui';
import Home from '../Home/Home';
import Environment from '../Environment';


function App() {
  return (
      <div>
        <Menu/>
          <Switch>
              
              <Route exact path="/">
                  <Home />
              </Route>
              
              <Route exact path="/environments" >
                  <Environments />
              </Route>

              <Route path="/environment/:id">
                  <Environment />
              </Route>

              <Route exact path="/about" >
                  <About />
              </Route>

          </Switch>
      </div>

  );
}

export default App;
