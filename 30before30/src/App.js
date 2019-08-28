import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Login from "./components/Login";
import Register from "./components/Register";
import Settings from "./components/Settings";

import "semantic-ui-css/semantic.min.css";
//importing App Components here
import BucketList from './components/BucketList';
import {default as ListItem} from './components/ListItemFunction';

import "./App.scss";
import CategoriesCard from "./components/CategoriesCard";

function App() {
  return (
    <Router>
      <div className="App">
        <Route exact path="/" component={Login} />
        <Route exact path="/settings" component={Settings} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/bucket-list" component={BucketList} />
        <Route exact path="/categoriesCard" component={CategoriesCard} />
        <Route exact path="/list-item" component={ListItem} />
      </div>
    </Router>
  );
}

export default App;
