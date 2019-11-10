import React, { Component } from "react";
import "./App.css";
import Content from "./Components/Content";
import Form from "./Components/Form";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      myName: "",
      content: [],
      url: ""
    };
  }

  componentDidMount() {
    fetch(this.url)
      .then(res => res.json())
      .then(data => {
        this.setState({ content: data.main.temp });
        console.log("sehbaz");
        // test
        console.log(data.main.temp);
      })
      .catch(console.log);
  }

  handleParentData = formModel => {
    this.setState({ ...formModel });
  };

  render() {
    this.url =
      "https://openweathermap.org/data/2.5/weather?q=" +
      this.state.myName +
      "&appid=b6907d289e10d714a6e88b30761fae22";

    console.log(this.url);

    return (
      <div>
        <Form handleData={this.handleParentData} />
        <p>{this.state.myName}</p>
        <Content content={this.state.content} />
      </div>
    );
  }
}

export default App;
