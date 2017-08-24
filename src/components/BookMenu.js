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
      if(i[searchType].toLowerCase().includes(this.props.search.toLowerCase())){
        bookItems.push(<BookMenuItem title={i.title} author={i.authors} id={i.rowid} onClick={this.props.getID} checkSingle={this.props.checkSingle}/>);
      }
    });
    return bookItems;
  }

  render(){
    return(
      <div className="MenuHolder">
        {this.conditionalSearch()}
      </div>
    );
  }
}
