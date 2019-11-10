import React, { Component } from "react";
import "./App.css";
import Content from "./Content";

class App extends Component {
  state = {
    content: []
  };
  componentDidMount() {
    fetch(
      "https://openweathermap.org/data/2.5/weather?q=London,uk&appid=b6907d289e10d714a6e88b30761fae22"
    )
      .then(res => res.json())
      .then(data => {
        this.setState({ content: data.main });
      })
      .catch(console.log);
  }
  render() {
    return <Content content={this.state.content} />;
  }
}

export default App;
