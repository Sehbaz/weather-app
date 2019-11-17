import React, { Component } from "react";
import "./Form.css";
import Axios from "axios";

class Form extends Component {
  // setting state to default value
  state = {
    cityName: "",
    country: "",
    tech: [],
    temp: "",
    newsTitle: "",
    cityapi: "",
    countryapi: ""
  };

  //handling the on click submit event
  handleSubmit = async event => {
    event.preventDefault();
    // using axios for fetch the data form the api for weather report
    const response = await Axios.get(
      `https://openweathermap.org/data/2.5/weather?q=${this.state.cityName},${this.state.country}&appid=b6907d289e10d714a6e88b30761fae22`
    );
    this.setState({
      temp: response.data.main.temp,
      countryapi: response.data.sys.country,
      cityapi: response.data.name + ", "
    });
    // this will fetch the latest news in the tech industry
    const news = await Axios.get(
      `https://newsapi.org/v2/top-headlines?q=tech&apiKey=7035a2ce18004b138c9f980fe58a0f21&pageSize=15`
    );
    this.setState({ tech: news.data.articles, newsTitle: "tech today" });
    // resetting to default values
    this.setState({ cityName: "", country: "" });
  };

  render() {
    // mapping the array of top tech news
    const news = this.state.tech.map(elements => {
      return <li>{elements.title}</li>;
    });
    return (
      <div className="main-container">
        <div className="news-container">
          <h1>{this.state.newsTitle}</h1>
          <div>
            <ul>{news}</ul>
          </div>
        </div>

        <div className="form-container">
          {" "}
          <div className="temp-container">
            <h2>{this.state.temp}</h2>
            <p>
              {this.state.cityapi}
              {this.state.countryapi}
            </p>
          </div>
          <form onSubmit={this.handleSubmit}>
            <input
              type="text"
              placeholder="city: London"
              value={this.state.cityName}
              onChange={event =>
                this.setState({ cityName: event.target.value })
              }
              required
            ></input>
            <input
              type="text"
              placeholder="country: UK"
              value={this.state.country}
              onChange={event => this.setState({ country: event.target.value })}
              required
            ></input>
            <button className="gobtn">GO</button>
          </form>
        </div>
      </div>
    );
  }
}

export default Form;
