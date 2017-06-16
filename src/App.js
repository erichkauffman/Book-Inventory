import React, { Component } from 'react';
import './App.css';
import BookMenu from './BookMenu';

class App extends Component {

  Count = () => {
    let items = [];
    let nums = [1,2,3,4,5,6,7,8,9,10];
    nums.map( (i) => {
      items.push(<li>{i}</li>);
    });
    return(
      <ul>{items}</ul>
    );
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Inventory</h2>
        </div>
        {this.Count()}
        <BookMenu />
      </div>
    );
  }
}

export default App;
