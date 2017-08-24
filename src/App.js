//eslint-disable-next-line
import React, { Component } from 'react';
import MainView from './views/MainView';
import FormView from './views/FormView';
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

  chooseView = () => {
    let viewComponent = this.state.view === 'main' ? <MainView changeView={this.goToForm}/> : <FormView changeView={this.goToMain}/>;
    return viewComponent;
  }

  render(){
    return(
      this.chooseView()
    );
  }
}

export default App;
