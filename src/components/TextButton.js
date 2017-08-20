import React, { Component } from 'react';

export default class TextButton extends Component{

  handleClick = (e) => {
    this.props.onClick(e.target.value);
  }

  render(){
    return(
      <div className={this.props.className} onClick={this.props.onClick}>
        <p>{this.props.children}</p>
      </div>
    );
  }
}
