import React, { Component } from 'react';

export default class BookMenuItem extends Component{
  render(){
    return(
      <div className="bookDiv">
          <p className="bookPt">{this.props.title}</p>
          <p className="bookPa">{this.props.author}</p>
      </div>
    );
  }
}
