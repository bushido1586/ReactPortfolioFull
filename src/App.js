import React, {Component} from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Main />
      </div>
    </BrowserRouter>
  );
}

export default App;
