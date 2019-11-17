import React, { Component } from "react";
import "./App.css";
import Form from "./Components/Form";

class App extends Component {
  render() {
    return (
      <div>
        <h2>Hello world, checkout today's weather!</h2>
        <Form></Form>
      </div>
    );
  }
}

export default App;
