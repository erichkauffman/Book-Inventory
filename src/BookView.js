import React, { Component } from 'react';

export default class BookView extends Component{

  render(){
    return(
      <table className="bookView">
        <tr>
          <th>Author(s):</th><td>{this.props.bookData.authors}</td>
        </tr>
        <tr>
          <th>Title:</th><td>{this.props.bookData.title}</td>
        </tr>
        <tr>
          <th>ISBN:</th><td>{this.props.bookData.isbn}</td>
        </tr>
        <tr>
          <th>condition:</th><td>{this.props.bookData.condition}</td>
        </tr>
        <tr>
          <th>cover type:</th><td>{this.props.bookData.cover}</td>
        </tr>
        <tr>
          <th>edition:</th><td>{this.props.bookData.edition}</td>
        </tr>
        <tr>
          <th>printing:</th><td>{this.props.bookData.printing}</td>
        </tr>
      </table>
    );
  }
}
