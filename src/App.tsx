import React from 'react';
import logo from './logo.svg';
import './App.css';
import Menu from "./Menu";
import { Switch, Route } from 'react-router-dom';
import About from "./About";
import All from "./All";
import Product from "./Product";


function App() {
  return (
      <div>
        <Menu/>
          <Switch>
              <Route exact path="/all" >
                  <All />
              </Route>

              <Route path="/product/:id">
                  <Product />
              </Route>

              <Route exact path="/about" >
                  <About />
              </Route>
          </Switch>
      </div>

  );
}

export default App;
