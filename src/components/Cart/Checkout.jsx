import React, { Component } from "react";
import { Link } from "react-router-dom";
import { ButtonContainer } from "../Button";

class Checkout extends Component {
  state = {};
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-10 mx-auto text-center text-title text-uppdercase pt-5">
            <h1 className="display-3">Thank You!</h1>
            <h3>
              your order has been successfully placed.we will get back to you
              soon. <br />
              Click here to return on products
              <Link to="/">
                <ButtonContainer>Products</ButtonContainer>
              </Link>
            </h3>
          </div>
        </div>
      </div>
    );
  }
}

export default Checkout;
