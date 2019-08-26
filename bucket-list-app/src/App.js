import React from 'react';
import './App.scss';

//importing App Components here
import BucketList from './components/BucketList';
import NavigationTabs from './components/NavigationTabs'

//importing our Route component from react router dom
import { Route } from 'react-router-dom';

//importing React Tabs component ans styles from react-tabs to easily setup the app's navigation
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import "react-tabs/style/react-tabs.css";

function App() {
  return (
    <div className="App">
      <BucketList />
      <NavigationTabs />
    </div>
  );
}

export default App;
