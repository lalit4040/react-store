import React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import Details from "./components/Details";
import Cart from "./components/Cart";
import Default from "./components/Default";
import Model from "./components/Model";
import Checkout from "./components/Cart/Checkout";

function App() {
  return (
    <React.Fragment>
      <Navbar></Navbar>
      <Switch>
        <Route exact path="/" component={ProductList}></Route>
        <Route path="/details" component={Details}></Route>
        <Route path="/cart" component={Cart}></Route>
        <Route path="/checkout" component={Checkout}></Route>
        <Route component={Default}></Route>
      </Switch>
      <Model></Model>
    </React.Fragment>
  );
}

export default App;
