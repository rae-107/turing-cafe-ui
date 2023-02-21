import React, { Component } from "react";
import "./Form.css";

class Form extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      date: "",
      time: "",
      number: 0,
    };
  }

  render() {
    return (
      <form>
        <input
          type="text"
          value={this.state.name}
          placeholder="Name"
          name="name"
          onChange={this.handleChange}
        ></input>
        <input
          type="text"
          value={this.state.date}
          placeholder="Date (mm/dd)"
          name="date"
          onChange={this.handleChange}
        ></input>
        <input
          type="text"
          value={this.state.time}
          placeholder="Time"
          name="time"
          onChange={this.handleChange}
        ></input>
        <input
          type="number"
          value={this.state.number}
          placeholder="Number"
          name="number"
          onChange={this.handleChange}
        ></input>
        <button>Make Reservation</button>
      </form>
    );
  }
}

export default Form;
