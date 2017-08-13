import React, { Component } from 'react';

export default class BookInfo extends Component{

  render(){
    return(
      <table className="bookInfo">
        <tr>
          <th>Title:</th><td>{this.props.bookData.title}</td>
        </tr>
        <tr>
          <th>Author(s):</th><td>{this.props.bookData.authors}</td>
        </tr>
        <tr>
          <th>ISBN:</th><td>{this.props.bookData.isbn}</td>
        </tr>
        <tr>
          <th>Edition:</th><td>{this.props.bookData.edition}</td>
        </tr>
        <tr>
          <th>Year Printed:</th><td>{this.props.bookData.yr_print}</td>
        </tr>
        <tr>
          <th>Printing:</th><td>{this.props.bookData.printing}</td>
        </tr>
        <tr>
          <th>Cover Type:</th><td>{this.props.bookData.cover}</td>
        </tr>
        <tr>
          <th>Condition:</th><td>{this.props.bookData.condition}</td>
        </tr>
        <tr>
          <th>Purchase Date:</th><td>{this.props.bookData.date_purch}</td>
        </tr>
        <tr>
          <th>Purchase Location:</th><td>{this.props.bookData.loc_purch}</td>
        </tr>
        <tr>
          <th>Amount Paid:</th><td>${this.props.bookData.amt_paid/100}</td>
        </tr>
        <tr>
          <th>Sell Price:</th><td>${this.props.bookData.sell_price/100}</td>
        </tr>
        <tr>
          <th>Selling Site:</th><td>{this.props.bookData.site}</td>
        </tr>
        <tr>
          <th>Shelf Location:</th><td>{this.props.bookData.shelf}</td>
        </tr>
      </table>
    );
  }
}
