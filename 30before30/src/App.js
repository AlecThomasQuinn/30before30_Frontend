import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Login from "./components/Login";
import Register from "./components/Register";
import Settings from "./components/Settings";

import "semantic-ui-css/semantic.min.css";
//importing App Components here
import BucketList from './components/BucketList';
import {default as ListItem} from './components/ListItemFunction';

//Categories components
import CategoriesCard from "./components/CategoriesCard";
import TravelComponent from  "./components/TravelComponent";
import HealthAndFitnessComponent from "./components/HealthAndFitnessComponent";
import WorkComponent from "./components/WorkComponent";
import LearningComponent from "./components/LearningComponent";
import LoveComponent from "./components/LoveComponent";
import UnspecifiedComponent from "./components/UnspecifiedComponent";
import AppContext from "./contexts/AppContext";

//importing Private Route Component
import PrivateRoute from './components/PrivateRoute';

import "./App.scss";



function App() {
  return (
    <Router>
      <div className="App">
        <AppContext>
          <Route exact path="/" component={Login} />
          <Route exact path="/register" component={Register} />
          {/* <Link to="/login">Click to login</Link> */}
          <PrivateRoute exact path="/bucket-list" component={BucketList} />
          <PrivateRoute exact path="/categoriesCard" component={CategoriesCard} />
          <PrivateRoute exact path="/list-item" component={ListItem} />
          <PrivateRoute exact path="/travel" component={TravelComponent} />
          <PrivateRoute exact path="/health-and-fitness" component={HealthAndFitnessComponent} />
          <PrivateRoute exact path="/work" component={WorkComponent} />
          <PrivateRoute exact path="/learning" component={LearningComponent} />
          <PrivateRoute exact path="/love" component={LoveComponent} />
          <PrivateRoute exact path="/unspecified" component={UnspecifiedComponent} />
          <PrivateRoute exact path="/settings" component={Settings} />
        </AppContext>
      </div>
    </Router>
  );
}

export default App;