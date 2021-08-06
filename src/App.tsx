import React from "react";
import "./App.css";

import { BrowserRouter as Router, Switch,Route } from "react-router-dom";
import Home from "./pages/index";
import SigninPage from "./pages/signin";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/signin" component={SigninPage} />
      </Switch>
    </Router>
  );
}

export default App;