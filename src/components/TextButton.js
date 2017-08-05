import React, { Component } from 'react';

export default class TextButton extends Component{
  render(){
    return(
      <div className="TextButton">
        <p>{this.props.children}</p>
      </div>
    );
  }
}
