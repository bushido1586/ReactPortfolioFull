import React, {Component} from 'react';
import {Navbar, NavbarBrand } from 'reactstrap';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar dark color="primary">
        <div className="container">
          <NavbarBrand href="/">Brad Reed the Dev</NavbarBrand>
        </div>
      </Navbar>
    </div>
  );
}

export default App;
