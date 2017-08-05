import React, { Component } from 'react';
import BookMenuItem from './BookMenuItem';

export default class BookMenu extends Component{

  allBooks = () => {
    let bookItems = [];
    //eslint-disable-next-line
    this.props.bookData.map( (i) => {
      if(i.title.toLowerCase().includes(this.props.search)){
        bookItems.push(<BookMenuItem title={i.title} author={i.authors} id={i.rowid} onClick={this.props.getID}/>);
      }
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
