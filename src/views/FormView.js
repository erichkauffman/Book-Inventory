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
        <TextButton>Submit</TextButton>
      </div>
    )
  }
}
