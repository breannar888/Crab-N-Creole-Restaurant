import "../css/reservationform.css";
//data for the time slots available in reservation form
import TIME_DATA from "../textdata/formtimedata";
import React, { Component } from "react";
//npm install moment --save, gets current date
import moment from "moment";

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      date: "",
      time: "10:30 AM",
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
      `Reservation Information: \n\nDate:\n${this.state.date}\nTime:\n${this.state.time}\nPeople:\n${this.state.amount}`
    );
    event.preventDefault();
  };

  render() {
    let times = TIME_DATA;

    return (
      <div className="reserve">
        <label for="datefield">Make a Reservation</label>
        <form onSubmit={this.handleSubmit}>
          <input
            aria-label="Select Date"
            type="date"
            required
            id="datefield"
            min={moment().format("YYYY-MM-DD")}
            max="2025-09-17"
            value={this.state.date}
            onChange={this.handleDateChange}
          />
          <select
            aria-label="Pick A Time"
            value={this.state.time}
            onChange={this.handleTimeChange}
            defaultValue={{ id: "1", time: "10:00 AM" }}
            required
          >
            {times.map((eattime) => (
              <option key={eattime.id}>{eattime.time}</option>
            ))}
          </select>
          <input
            aria-label="Input number of people for reservation"
            type="number"
            min="1"
            max="20"
            required
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
