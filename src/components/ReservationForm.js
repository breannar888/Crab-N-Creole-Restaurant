import "../css/reservationform.css";
//data for the time slots available in reservation form
import TIME_DATA from "../textdata/formtimedata";
import React, { Component } from "react";
//npm install moment --save, gets current date
import moment from 'moment';



class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      date: "",
      time: "",
      amount: "",
    };
    
  }

  handleDateChange = (event) => {
    this.setState({
      date: event.target.value,
    });
  };

  handleTimeChange = (event) => {
    this.setState({
      time: event.target.value,
    });
  };

  handleAmountChange = (event) => {
    this.setState({
      amount: event.target.value,
    });
  };

  handleSubmit = (event) => {
    alert(
      "Reservation Info:\nDate: " + `${this.state.date}` 
      + "\nTime: " + `${this.state.time}` 
      + "\nPeople: " + `${this.state.amount}`
    );
    event.preventDefault();
  };

  

  render() {
    let times = TIME_DATA;

    return (
      <div className="reserve">
        <form onSubmit={this.handleSubmit}>
          <input
            type="date"
            required
            id="datefield"
            min={moment().format("YYYY-MM-DD")}
            max="2025-09-17"
            value={this.state.date}
            onChange={this.handleDateChange}
          />
          <select value={this.state.time} onChange={this.handleTimeChange}>
            {times.map((eattime) => (
              <option key={eattime.id} value={eattime.value}>
                {eattime.time}
              </option>
            ))}
          </select>
          <input
            type="number"
            min="1"
            max="20"
            placeholder="2 People"
            value={this.state.amount}
            onChange={this.handleAmountChange}
          />
          <button type="submit">Reserve</button>
        </form>
        <div></div>
      </div>
    );
  }
}

export default Form;
