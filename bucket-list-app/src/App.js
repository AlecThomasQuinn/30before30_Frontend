import React from 'react';
import './App.scss';

//importing BucketList component
import BucketList from './components/BucketList';

//importing our Route component from react router dom
import { Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BucketList />
      <div className='footerTabs'>
          <div id='bucketListTab'>BucketList</div>
          <div id='categoriesTab'>Categories</div>
          <div id='settingsTab'>Settings</div>
      </div>
    </div>
  );
}

export default App;
