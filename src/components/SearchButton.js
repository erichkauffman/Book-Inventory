import React, { Component } from 'react';


export default class SearchButton extends Component{

  handleClick = (e) => {
    this.props.getSearchType(this.props.children);
  }

  setStyle = () => {
    if(this.props.currentSearchType === this.props.children){
      return({
        backgroundColor: '#BBBBBB'
      });
    }
  }

  render(){
    return(
      <div className="SearchButton" style={this.setStyle()} onClick={this.handleClick}>
        <p>{this.props.children}</p>
      </div>
    )
  }
}
