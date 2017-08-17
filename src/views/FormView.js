import React, { Component } from 'react';
import TextButton from '../components/TextButton';

export default class FormView extends Component{
  render(){
    return(
      <div>
        <label>
          Title:
          <input type='text' />
        </label>
        <label>
          Author(s):
          <input type='text' />
        </label>
        <label>
          ISBN:
          <input type='text' />
        </label>
        <label>
          Edition:
          <input type='text' />
        </label>
        <label>
          Printing:
          <input type='text' />
        </label>
        <label>
          Year Printed:
          <input type='text' />
        </label>
        <div>
          <label>New:</label>
          <input type="radio" name="condition" value="New"/>
          <label>Like New:</label>
          <input type="radio" name="condition" value="Like New"/>
          <input type="radio" name="condition" value="Very Good"/>
          <input type="radio" name="condition" value="Good"/>
          <input type="radio" name="condition" value="Acceptable"/>
        </div>
        <TextButton onClick={this.props.changeView}>Submit</TextButton>
      </div>
    )
  }
}
