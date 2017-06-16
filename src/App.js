import React, { Component } from 'react';
import './App.css';
import BookMenu from './BookMenu';

class App extends Component {

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Inventory</h2>
        </div>
        <BookMenu />
      </div>
    );
  }
}

export default App;
