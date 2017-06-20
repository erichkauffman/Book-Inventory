import React, { Component } from 'react';
import './App.css';
import BookMenu from './BookMenu';
import BookView from './BookView';

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

//Get index of book display
  getIndex = (i) => {
    this.setState({
      bookIndex: i
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
        <BookMenu bookData={this.state.books} getIndex={this.getIndex}/>
        <BookView bookData={this.state.books[this.state.bookIndex]}/>
      </div>
    );
  }
}

export default App;
