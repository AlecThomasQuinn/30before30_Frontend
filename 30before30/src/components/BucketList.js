import React from "react";

//importing settings menu component
import SettingsMenu from "./SettingsMenu";

//importing Link from react router dom to push user to different scenes
import { Link } from "react-router-dom";

//importing Search Bar component
import SearchBar from "./SearchBar";

//importing AppState from Context API
import { AppState } from "../contexts/AppContext";


class BucketList extends React.Component {

    //Fetching state with Context API
    static contextType = AppState;

    
    render(){
        
    //targeting state
    const {
        bucketList, 
        search, 
        active, 
        achieved, 
        activeTab, 
        achievedTab,
        renderBucketList,
        toggleSearch
    }= this.context;
    
    //Renders search bar when active, hides when not
    const renderSearch = () => {
        if (search === true) {
            return <SearchBar list={bucketList} />;
        }
    };
  
      console.log('From BucketList', bucketList)
      return (
          <>
                <div id="App">
                    <SettingsMenu pageWrapId={"page-wrap"} outerContainerId={"App"} />
                    <div className='bucketListScene'>
                        <div className='BucketListHeader'>
                            <h1>Bucket List</h1>
                            <h5 
                            onClick={toggleSearch}
                            id='SearchBar'
                            >
                            Search
                            </h5>
                            <div className='bucketListSearchBar'>
                                {renderSearch()}
                            </div>
                        </div>
                        <div id='bucketListProgress'>
                            <p id='bucketListProgress'>Progress: %0</p>
                        </div>
                        <div className='navTabs'>
                            <div 
                            id ='activeTab'
                            onClick={activeTab}
                            >
                            Active
                            </div>
                            <div 
                            id='achievedTab'
                            onClick={achievedTab}
                            >
                            Achieved
                            </div>
                        </div>
                        <div className='bucketListBody'>
                            {renderBucketList()}
                        </div>
                        <div className='buttonContainer'>
                            <Link to ='/list-item' id='addItemButton'>Add</Link>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default BucketList;
