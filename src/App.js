//import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

//import the components of the App
import Navbar from "./components/navbar.component";
import BugsList from "./components/bugslist.component";

import EditBug from "./components/edit-bugs.component";
import CreateBug from "./components/create-bugs.component";
import CreateEmployee from "./components/create-employee.component";

function App() {
  return (
    <Router>
      <div className="container">
        <Navbar />
        <br/>
        <Route path="/" exact component={BugsList} />
        <Route path="/edit/:id" component={EditBug} />
        <Route path="/create" component={CreateBug} />
        <Route path="/user" component={CreateEmployee} />
      </div>
    </Router>


  );
}

export default App;

/*
<div className="container">
      <h4 className="mt-3 mb-0">Wellcome to</h4>
      <h1>Bug Tracker</h1>

      <p>Track your IT project bugs by adding them here and managing their status from here.</p>
    </div>
*/