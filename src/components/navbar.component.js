import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {

    render() {
      return (
        <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
            <div className="container">
                <Link to="/" className="navbar-brand">Bug Tracker</Link>
                <div className="collpase navbar-collapse">
                    <ul className="navbar-nav mr-auto">
                        <li className="navbar-item">
                            <Link to="/" className="nav-link">All bugs</Link>
                        </li>
                        <li className="navbar-item">
                            <Link to="/create" className="nav-link">Log new bug</Link>
                        </li>
                        <li className="navbar-item">
                            <Link to="/user" className="nav-link">Add Employee</Link>
                        </li> 
                    </ul>
                </div>
            </div>
        </nav>
      );
    }
  }