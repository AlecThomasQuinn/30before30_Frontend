import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Login from "./components/Login";
import Register from "./components/Register";

import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h1>30 Before 30 BucketList!</h1>
        </header>
        <Route exact path="/" component={Register} />
        {/* <Link to="/login">Click to login</Link> */}
        <Route exact path="/login" component={Login} />
      </div>
    </Router>
  );
}

export default App;
