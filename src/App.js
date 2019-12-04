import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import createTodo from "./components/create-todo.component";
import editTodo from "./components/edit-todo.component";
import todosList from "./components/todos-list.component";

import logo from "./logo.png";

class App extends Component {
  render() {
    return (
      <Router>
        {/* Top Level Div */}
        <div className="container">
          {/* Nav bar div, including bootstrap className */}
          
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="https://github.com/christopherdalziel" target="_blank">
              <img src={logo} width="30" height="30" alt="My first MERN project" />
            </a>
            <Link to="/" className="navbar-brand">MERN-Stack TODO App!</Link>
            {/* Below line className is collpase on purpose? */}
            <div className="collpase nav-collapse">
              <ul className="navbar-nav mr-auto">
                <li className="navbar-item">
                  <Link to="/" className="nav-link">Todos</Link>
                </li>
                <li className="navbar-item">
                  <Link to="/create" className="nav-link">Create Todo</Link>
                </li>
              </ul>
            </div>
          </nav>
          {/* Created Routes */}
            <Route path="/" exact component={todosList} />
            <Route path="/edit/:id" component={editTodo} />
            <Route path="/create" component={createTodo} />
        </div>
      </Router>
    );
  }
}

export default App;