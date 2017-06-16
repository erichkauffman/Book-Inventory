import React, { Component } from 'react';
import BookMenuItem from './BookMenuItem';

export default class BookMenu extends Component{
  constructor(props){
    super(props);
    this.state = {
      dataReceived: false,
      books: []
    };

  }

  getData = () => {
    fetch('http://localhost:8000/all/short')
      .then( (response) => {
        return response.json();
      })
      .then( (bookData) => {
        console.log(bookData);
        this.setState({ //What if this is setting a state that is not the BookMenu?
          dataReceived: true,
          books: bookData
        });
      })
      .catch( (err) => {
        console.log(err);
      });
  }

  allBooks = () => {
    if(this.state.dataReceived){
      console.log("I am being called");
      let bookItems = [];
      this.state.books.map( (i) => {
        bookItems.push(<BookMenuItem title={i.title} author={i.authors} id={i.rowid}/>);
      });
      return bookItems;
    }
  }

  componentDidMount(){
    this.getData();
  }

  render(){
    return(
      <div className="MenuHolder">
        <BookMenuItem title="Introduction to Algorithms" author="Thomas Corman" id={0}/>
        <BookMenuItem title="Cracking the Coding Interview" author="Gayle Laakmann McDowell" id={0}/>
        {this.allBooks()}
      </div>
    );
  }
}
