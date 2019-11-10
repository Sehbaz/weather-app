import React, { Component } from "react";

class Content extends Component {
  render() {
    return (
      <div className="container">
        <div>
          <h2>{JSON.stringify(this.props.content)} 'C</h2>
        </div>
      </div>
    );
  }
}

export default Content;
