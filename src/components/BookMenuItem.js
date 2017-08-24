import React, { Component } from 'react';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';
import DeleteButton from '../images/DeleteButton.png';
import MoneyButton from '../images/MoneyButton.png';
import { Sell, Delete } from '../lib/Remove';

export default class BookMenuItem extends Component{
  constructor(props){
    super(props);
    this.state = {
      req: 1,
      style: "unselected"
    };
  }

  handleClick = (e) => {
    this.props.onClick(this.props.id);
    this.setState({
      style: "selected"
    });
  }

  handleSell = (e) => {
    e.stopPropagation();
    confirmAlert({
      title: 'Sell',
      message: 'Are you sure this book has sold? This action is permanent and cannot be undone.',
      confirmLabel: 'OK',
      cancelLabel: 'Cancel',
      onConfirm: () => {Sell(this.props.id); this.setState({req: 0});}
    });
  }

  handleDelete = (e) => {
    e.stopPropagation();
    confirmAlert({
      title: 'Delete',
      message: 'Are you sure want to delete this book? This action is permanent and cannot be undone.',
      confirmLabel: 'OK',
      cancelLabel: 'Cancel',
      onConfirm: () => {Delete(this.props.id); this.setState({req: 0});}
    });
  }

  conditionlRender = (check) => {
    if(check){
      return(
        <div className={this.state.style} onClick={this.handleClick}>
          <p className="bookPt">{this.props.title}</p>
          <div className="LeftHolder">
            <p className="bookPa">{this.props.author}</p>
            <img className="removeButton" src={DeleteButton} alt="delete" onClick={this.handleDelete}/>
            <img className="removeButton" src={MoneyButton} alt="sell" onClick={this.handleSell}/>
          </div>
        </div>
      );
    }else{
      return null;
    }
  }

  componentWillReceiveProps(nextProps){
    this.setState({
      style: nextProps.checkSingle === nextProps.id ? "selected" : "unselected"
    });
  }

  render(){
    return(
      this.conditionlRender(this.state.req)
    );
  }
}
