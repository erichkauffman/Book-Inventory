import React, { Component } from 'react';
import BookMenu from '../components/BookMenu';
import BookInfo from '../components/BookInfo';
import MenuButton from '../components/MenuButton';

export default class MainView extends Component{
  constructor(props){
    super(props);
    this.state = {
      dataReceived: false,
      books: [],
      singleBook: 0
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

//Get selected book
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

//Conditionally render the BookView. This is to keep from seeing stupid things
  renderBookInfo = () => {
    if(this.state.singleBook !== 0){
      return(<BookInfo bookData={this.state.singleBook}/>);
    }
  }

  componentDidMount(){
    this.getData();
  }

  render(){
    return(
      <div className="App">
        <div className="App-header">
          <MenuButton onClick={this.props.changeView}>Add Book</MenuButton>
        </div>
        <BookMenu bookData={this.state.books} getID={this.getID}/>
        {this.renderBookInfo()}
      </div>
    );
  }
}
