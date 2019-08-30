import React from "react";

//importing settings menu component
import SettingsMenu from "./SettingsMenu";

//importing Link from react router dom to push user to different scenes
import { Link } from "react-router-dom";

//importing Search Bar component
import SearchBar from "./SearchBar";

//importing AppState from Context API
import { AppState } from "../contexts/AppContext";

import ActiveItem from './ActiveItem';


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
        toggleSearch,
        changeHandler,
        searchValue
    }= this.context;
    
    //Renders search bar when active, hides when not
    const renderSearch = () => {
        if (search === true) {
            return <SearchBar list={bucketList} />;
        }
    };

    //Filters through the bucketList and if it cannot find the item's name, it won't return it, if it does
    bucketList.filter(
        (item) => {
            // console.log('From Search Filter',item)
            return item.item_name.indexOf(searchValue) !== -1; 
        }
    );
   
  
      console.log('From BucketList', this.context)
      return (
          <>
                <div id="App">
                    <SettingsMenu pageWrapId={"page-wrap"} outerContainerId={"App"} />
                    <div className='bucketListScene'>
                        <div className='BucketListHeader'>
                            <h1>Bucket List</h1>
                        </div>
                        {/* <div className='bucketListSearchBar'>
                            <form onSubmit={e => e.preventDefault()}>
                                <input 
                                    type='text' 
                                    placeholder='Search Bucket List'
                                    value={searchValue}
                                    onChange={changeHandler.bind()}
                                />
                            </form>
                        </div> */}
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
                        {bucketList.map((item)=> {
                            return <ActiveItem item={item} key={item.id} />
                        })}
                            {/* {renderBucketList()} */}
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
