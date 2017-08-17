import React, { Component } from 'react';
import NumericInput from 'react-numeric-input';
import Select from 'react-select';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import TextButton from '../components/TextButton';

import 'react-datepicker/dist/react-datepicker.css';
import 'react-select/dist/react-select.css';

//Location options stand-in
const locOps = [{value: 'Online', label: 'Online'},
                {value: 'Redwing Public Library', label: 'Redwing Public Library'},
                {value: 'Hudson Public Library', label: 'Hudson Public Library'}];

export default class FormView extends Component{

  constructor(props){
    super(props);
    this.state = {
      startDate: moment(),
      bookProps: {
        title: null,
        authors: null,
        isbn: null,
        edition: null,
        printing: null,
        yr_print: null,
        date_purch: null,
        condition: null,
        cover: null,
        loc_purch: null,
        amt_paid: null,
        sell_price: null,
        site: null,
        shelf: null
      }
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange = (date) => {
    this.setState({
      startDate: date
    });
  }

  onChange = (value) => {
    this.setState({
      locOps: value
    });
  }

  render(){
    return(
      <div>
        <table className="formHolder">
          <tr>
            <th>Title:</th>
            <td><input type="text" className="textIn"/></td>
          </tr>
          <tr>
            <th>Author(s):</th>
            <td><input type="text" className="textIn"/></td>
          </tr>
          <tr>
            <th>ISBN:</th>
            <td><input type="text" className="textIn"/></td>
          </tr>
          <tr>
            <th>Edition:</th>
            <td><NumericInput min={0} className="numberInputs"/></td>
          </tr>
          <tr>
            <th>Year Printed:</th>
            <td><NumericInput className="numberInputs" min={0}/></td>
          </tr>
          <tr>
            <th>Printing:</th>
            <td><NumericInput className="numberInputs" min={0}/></td>
          </tr>
          <tr>
            <th>Cover Type:</th>
            <td>Hard<input type="radio" name="cover" value="Hard"/>
                Soft<input type="radio" name="cover" value="Soft"/></td>
          </tr>
          <tr>
            <th>Condition:</th>
            <td>New<input type="radio" name="condition" value="New"/>
                Like New<input type="radio" name="condition" value="Like New"/>
                Very Good<input type="radio" name="condition" value="Very Good"/>
                Good<input type="radio" name="condition" value="Good"/>
                Acceptable<input type="radio" name="condition" value="Acceptable"/></td>
          </tr>
          <tr>
            <th>Purchase Date:</th>
            <td><DatePicker selected={this.state.startDate} onChange={this.handleChange} className="dateIn"/></td>
          </tr>
          <tr>
            <th>Purchase Location:</th>
            <td><Select.Creatable className="purchase-location" name="purchase-location" options={locOps} value={this.state.bookProps.loc_purch} placeholder="select a location" onChange={this.onChange}/></td>
          </tr>
          <tr>
            <th>Amount Paid:</th>
            <td><NumericInput className="numberInputs" min={0} step={.01} precision={2}/></td>
          </tr>
          <tr>
            <th>Sell Price:</th>
            <td><NumericInput className="numberInputs" min={0} step={.01} precision={2}/></td>
          </tr>
          <tr>
            <th>Site Listed:</th>
            <td>Amazon<input type="checkbox" name="site" value="Amazon"/>
                Ebay<input type="checkbox" name="site" value="Ebay"/></td>
          </tr>
          <tr>
            <th>Shelf:</th>
            <td><input type="text" className="textIn"/></td>
          </tr>
          <tr>
            <th><TextButton onClick={this.props.changeView}>Submit</TextButton></th>
            <td><TextButton onClick={this.props.changeView}>Back</TextButton></td>

          </tr>
        </table>
      </div>
    )
  }
}
