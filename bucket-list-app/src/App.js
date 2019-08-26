import React from 'react';
import './App.scss';

//importing BucketList component
import BucketList from './components/BucketList';

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
