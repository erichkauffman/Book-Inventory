import React, { Component } from 'react';

export default class MenuButton extends Component{

  handleClick = (e) => {
    this.props.onClick(e.target.value);
  }

  render(){
    return(
      <div className="MenuButton" onClick={this.props.onClick}>
        <p>{this.props.children}</p>
      </div>
    );
  }
}
