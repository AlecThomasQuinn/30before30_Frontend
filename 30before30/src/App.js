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
import TravelComponent from  "./components/categoriesComponents/TravelComponent";
import HealthAndFitnessComponent from "./components/categoriesComponents/HealthAndFitnessComponent";
import WorkComponent from "./components/categoriesComponents/WorkComponent";
import LearningComponent from "./components/categoriesComponents/LearningComponent";
import LoveComponent from "./components/categoriesComponents/LoveComponent";
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
          <PrivateRoute exact path="/settings" component={Settings} />
        </AppContext>
      </div>
    </Router>
  );
}

export default App;