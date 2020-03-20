import React from "react";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";

import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Cv from "./pages/Cv";

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/" exact component={Home}></Route>
          <Route path="/projects" component={Projects}></Route>
          <Route path="/cv" component={Cv}></Route>
        </Switch> 
      </Router>
    </div>
  );
}

export default App;
