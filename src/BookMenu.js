import React, { Component } from 'react';
import BookMenuItem from './BookMenuItem';

export default class BookMenu extends Component{
  constructor(props){
    super(props);
    this.state = {getDB: 'all'};
  }

  
  render(){
    return(
      <div className="MenuHolder">
        <BookMenuItem title="Introduction to Algorithms" author="Thomas Corman"/>
        <BookMenuItem title="Cracking the Coding Interview" author="Gayle Laakmann McDowell"/>
      </div>
    );
  }
}
