import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.css";
import Home from "../home/Home";
import Form from "../form/Form";
import AdminPanel from "../admin/Admin";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/form" component={Form} exact />
        <Route path="/admin" component={AdminPanel} exact />
        <Route path="/" render={() => <div>404</div>} />
      </Switch>
    </Router>
  );
}

export default App;
