import React, { Component } from 'react';
import BookMenuItem from './BookMenuItem';

export default class BookMenu extends Component{

  allBooks = () => {
    let bookItems = [];
    this.props.bookData.map( (i) => {
      bookItems.push(<BookMenuItem title={i.title} author={i.authors} id={i.rowid}/>);
    });
    return bookItems;
  }

  render(){
    return(
      <div className="MenuHolder">
        {this.allBooks()}
      </div>
    );
  }
}
