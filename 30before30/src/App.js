import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Login from "./components/Login";
import Register from "./components/Register";

//importing App Components here
import BucketList from './components/BucketList';
import {default as ListItem} from './components/ListItemFunction';

import "./App.scss";

function App() {
  return (
    <Router>
      <div className="App">
        <Route exact path="/" component={Register} />
        {/* <Link to="/login">Click to login</Link> */}
        <Route exact path="/login" component={Login} />
        <Route exact path="/bucket-list" component={BucketList} />
        <Route exact path="/list-item" component={ListItem} />
        <ListItem />
      </div>
    </Router>
  );
}

export default App;
