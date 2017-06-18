import React, { Component } from 'react';
import './App.css';
import BookMenu from './BookMenu';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      dataReceived: false,
      books: [],
      bookIndex: null
    };
  }

//Get data from book inventory API
  getData = () => {
    fetch('http://localhost:8000/all/')
      .then( (response) => {
        return response.json();
      })
      .then( (bookData) => {
        this.setState({
          dataReceived: true,
          books: bookData
        });
      })
      .catch( (err) => {
        console.log(err);
      });
  }

  componentDidMount(){
    this.getData();
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Inventory</h2>
        </div>
        <BookMenu bookData={this.state.books} />
      </div>
    );
  }
}

export default App;
