import React, { Component } from 'react';


export default class SearchButton extends Component{

  render(){
    return(
      <div>
        <p>{this.props.children}</p>
      </div>
    )
  }
}
