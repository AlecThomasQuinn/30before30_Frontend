import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Login from "./components/Login";
import Register from "./components/Register";

//importing App Components here
import BucketList from "./components/BucketList";

import "./App.scss";

function App() {
  return (
    <Router>
      <div className="App">

        <Route exact path="/" component={Register} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/bucket-list" component={BucketList} />
      </div>
    </Router>
  );
}

export default App;
