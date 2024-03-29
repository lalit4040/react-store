import React from "react";
import { Link } from "react-router-dom";

export default function CartTotals({ value }) {
  const { cartSubTotal, cartTax, cartTotal, clearCart } = value;

  return (
    <React.Fragment>
      <div className="container">
        <div className="row">
          <div className="com-10 mt-2 ml-sm-5 ml-md-auto col-sm-8 text-capitalize text-right">
            <Link to="/">
              <button
                className="btn btn-outline-danger text-uppercase mb-3 px-5"
                type="button"
                onClick={() => clearCart()}
              >
                clear cart
              </button>
            </Link>
            <h5>
              <span className="text-title">subtotal :</span>
              &#8377;<strong>{cartSubTotal}</strong>
            </h5>

            <h5>
              <span className="text-title">tax :</span>
              &#8377;<strong>{cartTax}</strong>
            </h5>

            <h5>
              <span className="text-title">total :</span>
              &#8377;<strong>{cartTotal}</strong>
            </h5>
            <Link to="/Checkout">
              <button
                className="btn btn-success text-uppercase mb-3 px-5"
                type="button"
                onClick={() => clearCart()}
              >
                Checkout
              </button>
            </Link>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
