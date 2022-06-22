import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route


} from "react-router-dom";

import './App.css';

import './components/login.module.css';
import './components/register.module.css';
import './components/todo.module.css'

import Index from "./components/index";
import Login from './components/login';
import Register from './components/register';
import ToDo from './components/todo';

function App() {

  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Index />
          </Route>

          <Route exact path="/login">
            <Login />
          </Route>

          <Route exact path="/register">
            <Register />
          </Route>

          <Route exact path="/todo">
            <ToDo />
          </Route>
        </Switch>

      </div>
    </Router>
  );
}

export default App;
