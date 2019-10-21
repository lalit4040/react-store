import React, { Component } from "react";

class Detault extends Component {
  state = {};
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-10 mx-auto text-center text-title text-uppdercase pt-5">
            <h1 className="display-3">404</h1>
            <h1>erroe</h1>
            <h2>page not found</h2>
            <h3>
              requested url
              <span className="text-danger">
                {this.props.location.pathname}
              </span>{" "}
              was not found
            </h3>
          </div>
        </div>
      </div>
    );
  }
}

export default Detault;
