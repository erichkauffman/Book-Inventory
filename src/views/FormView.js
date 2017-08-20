import React, { Component } from 'react';
import NumericInput from 'react-numeric-input';
import Select from 'react-select';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import IsbnSubmit from '../components/IsbnSubmit';
import TextButton from '../components/TextButton';
import { CheckNotNull } from '../lib/CheckNotNull';
import { postBook } from '../lib/postBook';

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
      err: true,
      dispErr: false,
      startDate: moment(),
      bookProps: {
        title: null,
        authors: null,
        isbn: null,
        edition: null,
        yr_print: null,
        printing: null,
        date_purch: moment().format("MM/DD/YYYY"),
        condition: null,
        cover: null,
        loc_purch: null,
        amt_paid: null,
        sell_price: null,
        shelf: null
      },
      site: {
        Ebay: false,
        Amazon: false
      }
    };
  }

  findBookInfo = (e) => {

  }

  inputChange = (e) => {
    let bookProps = this.state.bookProps;
    bookProps[e.target.name] = e.target.value;
    this.setState({
      bookProps: bookProps
    });
    this.checkObject();
  }

  editionChange = (value) => {
    let bookProps = this.state.bookProps;
    bookProps.edition = value;
    this.setState({
      bookProps: bookProps
    });
    this.checkObject();
  }

  yearPrintChange = (value) => {
    let bookProps = this.state.bookProps;
    bookProps.yr_print = value;
    this.setState({
      bookProps: bookProps
    });
    this.checkObject();
  }

  printingChange = (value) => {
    let bookProps = this.state.bookProps;
    bookProps.printing = value;
    this.setState({
      bookProps: bookProps
    });
    this.checkObject();
  }

  dateChange = (date) => {
    let bookProps = this.state.bookProps;
    bookProps.date_purch = date.format("MM/DD/YYYY");
    this.setState({
      bookProps: bookProps,
      startDate: date
    });
    this.checkObject();
  }

  locationChange = (value) => {
    let bookProps = this.state.bookProps;
    if(value === null){
      bookProps.loc_purch = value;
    }else{
      bookProps.loc_purch = value.value;
    }
    this.setState({
      bookProps: bookProps,
      locVal: value
    });
    this.checkObject();
  }

  amtPaidChange = (value) => {
    let bookProps = this.state.bookProps;
    bookProps.amt_paid = value * 100;
    this.setState({
      bookProps: bookProps
    });
    this.checkObject();
  }

  sellPriceChange = (value) => {
    let bookProps = this.state.bookProps;
    bookProps.sell_price = value * 100;
    this.setState({
      bookProps: bookProps
    });
    this.checkObject();
  }

  siteChange = (e) => {
    let site = this.state.site;
    site[e.target.value] = e.target.checked;
    this.setState({
      site: site
    });
    this.checkObject();
  }

  setSite = () => {
    let site = this.state.site;
    let bookProps = this.state.bookProps;
    let siteStr;
    if(site.Ebay && site.Amazon){
      siteStr = "Ebay, Amazon";
    }else if(site.Ebay){
      siteStr = "Ebay";
    }else if(site.Amazon){
      siteStr = "Amazon";
    }else{
      siteStr = "";
    }
    bookProps.site = siteStr;
    this.setState({
      bookProps: bookProps
    });
    this.checkObject();
  }

  checkObject = () => {
    let bookProps = this.state.bookProps;
    let check = CheckNotNull(bookProps);
    this.setState({
      err: !check,
    });
    return check;
  }

  submitForm = () => {
    this.setSite();
    let objReady = this.checkObject();
    if(objReady){
      postBook(this.state.bookProps);
      this.props.changeView();
    }else{
      this.setState({
        dispErr: true
      });
    }
  }

  errEmptyMessage = () => {
    if(this.state.dispErr){
      return(<p className="emptyWarn">All fields must be completed before entry</p>);
    }
    return;
  }

  render(){
    return(
      <div className="formView">
        <table className="formHolder">
          <tr>
            <th></th>
            <td><input type="text" className="isbnSearch" name="isbnSearch" placeholder="Enter ISBN Number"/><IsbnSubmit onClick={this.findBookInfo}/></td>
          </tr>
          <tr>
            <th>Title:</th>
            <td><input type="text" className="textIn" name="title" onChange={this.inputChange}/></td>
          </tr>
          <tr>
            <th>Author(s):</th>
            <td><input type="text" className="textIn" name="authors" onChange={this.inputChange}/></td>
          </tr>
          <tr>
            <th>ISBN:</th>
            <td><input type="text" className="textIn" name="isbn" onChange={this.inputChange}/></td>
          </tr>
          <tr>
            <th>Edition:</th>
            <td><NumericInput min={0} className="numberInputs" onChange={this.editionChange}/></td>
          </tr>
          <tr>
            <th>Year Printed:</th>
            <td><NumericInput min={0} className="numberInputs" onChange={this.yearPrintChange}/></td>
          </tr>
          <tr>
            <th>Printing:</th>
            <td><NumericInput className="numberInputs" min={0} onChange={this.printingChange}/></td>
          </tr>
          <tr>
            <th>Cover Type:</th>
            <td>Hard<input type="radio" name="cover" value="Hard" onChange={this.inputChange}/>
                Soft<input type="radio" name="cover" value="Soft" onChange={this.inputChange}/></td>
          </tr>
          <tr>
            <th>Condition:</th>
            <td>New<input type="radio" name="condition" value="New" onChange={this.inputChange}/>
                Like New<input type="radio" name="condition" value="Like New" onChange={this.inputChange}/>
                Very Good<input type="radio" name="condition" value="Very Good" onChange={this.inputChange}/>
                Good<input type="radio" name="condition" value="Good" onChange={this.inputChange}/>
                Acceptable<input type="radio" name="condition" value="Acceptable" onChange={this.inputChange}/></td>
          </tr>
          <tr>
            <th>Purchase Date:</th>
            <td><DatePicker selected={this.state.startDate} onChange={this.dateChange} className="dateIn"/></td>
          </tr>
          <tr>
            <th>Purchase Location:</th>
            <td><Select.Creatable className="purchase-location" name="purchase-location" options={locOps} value={this.state.locVal} placeholder="select a location" onChange={this.locationChange}/></td>
          </tr>
          <tr>
            <th>Amount Paid:</th>
            <td><NumericInput className="numberInputs" min={0} step={.01} precision={2} onChange={this.amtPaidChange}/></td>
          </tr>
          <tr>
            <th>Sell Price:</th>
            <td><NumericInput className="numberInputs" min={0} step={.01} precision={2} onChange={this.sellPriceChange}/></td>
          </tr>
          <tr>
            <th>Site Listed:</th>
            <td>Amazon<input type="checkbox" name="site" value="Amazon" onChange={this.siteChange}/>
                Ebay<input type="checkbox" name="site" value="Ebay" onChange={this.siteChange}/></td>
          </tr>
          <tr>
            <th>Shelf:</th>
            <td><input type="text" className="textIn" name="shelf" onChange={this.inputChange}/></td>
          </tr>
          <tr>
            <th><TextButton className={this.state.err ? "TextButtonWarning" : "TextButton"} onClick={this.submitForm}>Submit</TextButton></th>
            <td><TextButton className="TextButton" onClick={this.props.changeView}>Back</TextButton></td>

          </tr>
        </table>
        {this.errEmptyMessage()}
      </div>
    )
  }
}
