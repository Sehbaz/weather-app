import React, { Component } from "react";
import "./Form.css";
import Axios from "axios";
class Form extends Component {
  // setting state to default value
  state = { cityName: "" };

  //handling the on click submit event
  handleSubmit = async event => {
    event.preventDefault();
    // using axios for fetch the data form the api
    const response = await Axios.get(
      `https://openweathermap.org/data/2.5/weather?q=${this.state.cityName}&appid=b6907d289e10d714a6e88b30761fae22`
    );
    this.props.onSubmit(response.data);
    this.setState({ cityName: "" });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          placeholder="enter your city"
          value={this.state.cityName}
          onChange={event => this.setState({ cityName: event.target.value })}
        ></input>
        <button>GO</button>
      </form>
    );
  }
}

export default Form;
