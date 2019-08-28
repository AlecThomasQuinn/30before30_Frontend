import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Login from "./components/Login";
import Register from "./components/Register";

//importing App Components here
import BucketList from "./components/BucketList";

import "./App.scss";
import CategoriesCard from "./components/CategoriesCard";


function App() {
  return (
    <Router>
      <div className="App">
        <Route exact path="/" component={Login} />
        <Route exact path="/register" component={Register} />
        {/* <Link to="/login">Click to login</Link> */}
        <Route exact path="/bucket-list" component={BucketList} />
        <Route exact path="/categoriesCard" component={CategoriesCard}/>
      </div>
    </Router>
  );
}

export default App;
