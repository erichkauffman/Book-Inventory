import React, { Component } from 'react';

export default class BookView extends Component{

  render(){
    return(
      <p>{this.props.bookData}</p>
    );
  }
}
