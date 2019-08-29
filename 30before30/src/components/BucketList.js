import React, { useEffect } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";

//importing Active & Achieved component's list
import ActiveItem from "./ActiveItem";
import AchievedItem from "./AchievedItem";

//importing NavigationTabs Component
import NavigationTabs from "./NavigationTabs";

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
        
    //targeting bucketlist on state
    const {bucketList, search, active, achieved }= this.context;

    //checks if active tab is true, and displays it
    const activeTab = () => {
        if (active === false) {
            this.setState({ active: true, achieved: false });
    } else if (active === true) {
        return this.context;
    }
    };
//checks if achieved tab is true, and displays it
    const achievedTab = () => {
        if (achieved === false) {
            this.setState({ active: false, achieved: true });
        } else if (achieved === false) {
            return this.context;
        }
    };  

//Renders the active component upon click
    const renderBucketList = () => {
        if (active === true) {
            return bucketList.map(item => (
                <ActiveItem item={item} key={item.id} />
            ));
        } else {
            return bucketList.map(item => (
                <AchievedItem item={item} key={item.id} />
            ));
        }
    };

    //toggle search bar on/off
    const toggleSearch = () => {
        if (search === false) {
            this.setState({ search: true });
        } else if (search === true) {
            this.setState({ search: false });
        }
    };
    
    //Renders search bar when active, hides when not
    const renderSearch = () => {
        if (search === true) {
            return <SearchBar list={this.context} />;
        }
    };
  
    //   console.log('From BucketList', this.context)
      return (
          <>
                <div id="App">
                    <SettingsMenu pageWrapId={"page-wrap"} outerContainerId={"App"} />
                    <div className='bucketListScene'>
                        <div className='BucketListHeader'>
                            <h1>Bucket List</h1>
                            <div className='headerUtilities'>
                                <h5 
                                onClick={toggleSearch}
                                id='SearchBar'
                                >
                                Search</h5>
                            </div>
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
