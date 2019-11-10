import React, { Component } from "react";
class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      myName: ""
    };
  }
  submitForm = e => {
    e.preventDefault();
    this.props.handleData(this.state);
  };
  onChange = e => {
    this.setState({
      myName: e.target.value
    });
  };

  render() {
    return (
      <div className="container">
        <div>
          <form>
            <input type="text" name="myName" onChange={this.onChange}></input>
            <input
              type="button"
              value="submit"
              onClick={this.submitForm}
            ></input>
          </form>
        </div>

        <h1>{JSON.stringify(this.props.content)}</h1>
      </div>
    );
  }
}

export default Form;
