import React, { Component } from 'react';
import { allBooks } from '../lib/Search';

export default class BookMenu extends Component{

  render(){
    //Do not import display
    return(
      <div className="MenuHolder">
        {allBooks(this.props.bookData, this.props.searchType, this.props.search, this.props.getID)}
      </div>
    );
  }
}
