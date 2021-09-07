import DatePicker from 'react-datepicker';
import moment from 'moment';
import 'react-datepicker/dist/react-datepicker.css';
import React, { Component } from "react";

class DateLimit extends Component {

    constructor(props) {
        super(props);
    
        this.state = {
            dob: moment()
          };
          this.dateChange = this.dateChange.bind(this);
      }

      dateChange(date) {
        this.setState({
          dob: date
        });
      }

    render() {
      return (
      <DatePicker
        selected={this.state.dob}
        onChange={this.dateChange}
        className="form-control"
       placeholder="Date of Birth"
       maxDate={new Date()}
       />
       );
    }
  }

  export default DateLimit;