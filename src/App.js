import React, { Component } from 'react';
import './App.css';
import BookMenu from './components/BookMenu';
import BookView from './components/BookView';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      dataReceived: false,
      books: [],
      singleBook: -1
    };
  }

//Get data from book inventory API
  getData = () => {
    fetch('http://localhost:8000/all/')
      .then( (response) => {
        return response.json();
      })
      .then( (bookData) => {
        console.log(bookData);
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
  getID = (i) => {
    for(let n = 0; n < this.state.books.length; n++){
      if(this.state.books[n].rowid === i){
        this.setState({
          singleBook: this.state.books[n]
        });
        break;
      }
    }
  }

  renderBookView = () => {
    if(this.state.singleBook !== -1){
      return(<BookView bookData={this.state.singleBook}/>);
    }
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
        <BookMenu bookData={this.state.books} getID={this.getID}/>
        {this.renderBookView()}
      </div>
    );
  }
}

export default App;
