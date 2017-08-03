import React, { Component } from 'react';

export default class BookMenuItem extends Component{

  handleClick = (e) => {
    this.props.onClick(this.props.id);
  }

  render(){
    return(
      <div className="bookDiv" onClick={this.handleClick}>
          <p className="bookPt">{this.props.title}</p>
          <p className="bookPa">{this.props.author}</p>
      </div>
    );
  }
}
