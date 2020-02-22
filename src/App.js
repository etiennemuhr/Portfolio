import React from "react";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";

import Home from "./pages/Home";
import Projects from "./pages/Projects";

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/" exact component={Home}></Route>
          <Route path="/projects" component={Projects}></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
