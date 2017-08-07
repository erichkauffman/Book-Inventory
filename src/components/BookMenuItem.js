import React, { Component } from 'react';
import DeleteButton from '../images/DeleteButton.png';
import MoneyButton from '../images/MoneyButton.png';

export default class BookMenuItem extends Component{

  handleClick = (e) => {
    this.props.onClick(this.props.id);
  }

  render(){
    return(
      <div className="bookDiv" onClick={this.handleClick}>
        <p className="bookPt">{this.props.title}</p>
        <div className="LeftHolder">
          <p className="bookPa">{this.props.author}</p>
          <img className="removeButton" src={MoneyButton}/>
          <img className="removeButton" src={DeleteButton}/>
        </div>
      </div>
    );
  }
}
