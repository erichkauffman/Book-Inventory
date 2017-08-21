//eslint-disable-next-line
import React, { Component } from 'react';
import { chooseView } from './lib/Nav';
import './App.css';

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      view: 'main'
    }
  }

  goToForm = () => {
    this.setState({
      view: 'form'
    });
  }

  goToMain = () => {
    this.setState({
      view: 'main'
    });
  }

  render(){
    return(
      //Do not export display functions
      chooseView(this.state.view, this.goToMain, this.goToForm)
    );
  }
}

export default App;
