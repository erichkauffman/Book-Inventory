import React, { Component } from 'react';
import BookMenuItem from '../components/BookMenuItem';

export default class BookMenu extends Component{

  conditionalSearch = () => {
    let bookItems = [];
    let searchType;
    switch(this.props.searchType){
      case 'A':
        searchType = "authors";
        break;
      case 'T':
        searchType = "title";
        break;
      case 'I':
        searchType = "isbn";
        break;
    }
    this.props.bookData.map((i) => {
      bookItems.push(<BookMenuItem title={i.title} author={i.authors} id={i.rowid} onClick={this.props.getID}/>);
    });
    return bookItems;
  }

  render(){
    //Do not import display
    return(
      <div className="MenuHolder">
        {this.conditionalSearch()}
      </div>
    );
  }
}
