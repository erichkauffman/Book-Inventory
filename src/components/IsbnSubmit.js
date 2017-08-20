import React, { Component } from 'react';

export default class IsbnSubmit extends Component{

  onClick = (e) => {
    this.props.onClick(e.target.value);
  }

  render(){
    return(
      <div className="IsbnSubmit" onClick={this.onClick}>
        <p>Search</p>
      </div>
    )
  }
}
