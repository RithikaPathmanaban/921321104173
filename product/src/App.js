import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./Header";
import SingleProduct from "./SingleProduct";
import AllProducts from "./AllProducts";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route path="/AllProducts">
            <AllProducts />
          </Route>
          <Route path="/SingleProduct">
            <SingleProduct />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
