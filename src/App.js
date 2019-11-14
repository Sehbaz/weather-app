import React, { Component } from "react";
import "./App.css";
import Form from "./Components/Form";

class App extends Component {
  // this function will fetch the data from From.js and display it in app.js
  state = {
    temp: ""
  };
  getWeather = weatherinfo => {
    console.log(weatherinfo.main.temp);
    this.setState({ temp: weatherinfo.main.temp });
  };
  render() {
    return (
      <div>
        <h2>Hello world, checkout today's weather!</h2>
        <Form onSubmit={this.getWeather}></Form>
        <h1>{this.state.temp}</h1>
      </div>
    );
  }
}

export default App;
