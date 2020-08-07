import React from "react";
import { Switch, Route } from "react-router-dom";
import { CssBaseline } from "@material-ui/core";

import "./App.css";

import Navbar01 from "./pages/shared/00_Navbar01";
import Footer01 from "./pages/shared/99_Footer01";
import ScrollToTop01 from "./pages/shared/components/ScrollToTop01";
import HomePage01 from "./pages/HomePage/HomePage01";
import Data from "./pages/shared/data/Data";
import ProductPage01 from "./pages/ProductPage/ProductPage01";

const App = () => {
  return (
    <React.Fragment>
      <CssBaseline />
      <Navbar01 />
      <div id="back-to-top-anchor" />
      <ScrollToTop01 />
      <main>
        <Switch>
          <Route exact path="/" component={HomePage01} />

          {Data.map((xxx, i) => (
            <Route
              exact
              key={i}
              path={`/product/${i}`}
              render={() => <ProductPage01 {...xxx} />}
            />
          ))}
        </Switch>
      </main>
      <Footer01 />
    </React.Fragment>
  );
};

export default App;
