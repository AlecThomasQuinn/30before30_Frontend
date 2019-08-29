import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Login from "./components/Login";
import Register from "./components/Register";

import "semantic-ui-css/semantic.min.css";
//importing App Components here
import BucketList from './components/BucketList';
import {default as ListItem} from './components/ListItemFunction';
import CategoriesCard from "./components/CategoriesCard";
import TravelComponent from  "./components/TravelComponent";
import HealthAndFitnessComponent from "./components/HealthAndFitnessComponent";
import WorkComponent from "./components/WorkComponent";
import LearningComponent from "./components/LearningComponent";
import LoveComponent from "./components/LoveComponent";

import "./App.scss";




function App() {
  return (
    <Router>
      <div className="App">
        <Route exact path="/" component={Register} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/bucket-list" component={BucketList} />
        <Route exact path="/list-item" component={ListItem} />
        <Route exact path="/categoriesCard" component={CategoriesCard}/>
        <Route exact path="/travel" component={TravelComponent} />
        <Route exact path="/health-and-fitness" component={HealthAndFitnessComponent} />
        <Route exact path="/work" component={WorkComponent} />
        <Route exact path="/learning" component={LearningComponent} />
        <Route exact path="/love" component={LoveComponent} />

      </div>
    </Router>
  );
}

export default App;