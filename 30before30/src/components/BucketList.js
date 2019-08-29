import React from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth'

//importing Active & Achieved component's list
import ActiveItem from './ActiveItem';
import AchievedItem from './AchievedItem';

//importing NavigationTabs Component
import NavigationTabs from "./NavigationTabs";

//importing settings menu component
import SettingsMenu from "./SettingsMenu";

//importing Link from react router dom to push user to different scenes
import { Link } from 'react-router-dom';

//importing Sort component
import SortComponent from './SortComponent';

//importing Search Bar component
import SearchBar from './SearchBar';

class BucketList extends React.Component {
    
    state = {
        bucketList: [{
            "id": 4,
            "name": "plant a garden",
            "description": "a description",
            "user_id": 2,
            "category_id": 4,
            "privacy": "public",
            "complete": false,
            "target_date": "2020-01-03",
            "category_name": "Learning"
          }],
        active: true,
        achieved: false,
        search: false,
        searchValue: ''
        // sort: false
    }
    
    //checks if active tab is true, and displays it
    activeTab = () => {
        if (this.state.active === false){
            this.setState({ active: true, achieved: false})
        }else if(this.state.active === true){
            return this.state
        }
    }
    //checks if achieved tab is true, and displays it
    achievedTab = () => {
        if (this.state.achieved === false){
            this.setState({ active: false, achieved: true})
        }else if(this.state.achieved === false){
            return this.state
        }
    }
    
    //Renders the active component upon click
    renderBucketList = () => {
        if (this.state.active === true){
            return this.state.bucketList.map(item => <ActiveItem item={item} key={item.id}/>)
        } else {
            return this.state.bucketList.map(item => <AchievedItem item={item} key={item.id}/>)
        }
    }
 
    //toggle search bar on/off
    toggleSearch = () => {
        if (this.state.search === false){
            this.setState({ search: !this.state.search})
        } else if (this.state.search === true){
            this.setState({ search: !this.state.search})
        }
    }

    
    //Renders search bar when active, hides when not
    renderSearch = () => {
        if (this.state.search === true){
            return <SearchBar list={this.state} />
        }
    }

    render(){
  
        axiosWithAuth()
            .get('https://thirty-before-thirty-bw.herokuapp.com/api/user-items')
            .then(res => console.log(res))
            .catch(err => console.log(err.response))
  
        
        // console.log(this.state)
        return (
            <>
            {/* <div id="App">
            <SettingsMenu pageWrapId={"page-wrap"} outerContainerId={"App"} />
            </div> */}
            <div className='bucketListScene'>
                <div className='BucketListHeader'>
                    <h1>Bucket List</h1>
                    {/* <SettingsMenu /> */}
                    <div className='headerUtilities'>
                        <h5>Sort</h5>
                        {/* <SortComponent /> */}
                        <h5 
                        onClick={this.toggleSearch}
                        id='SearchBar'
                        >Search</h5>
                    </div>
                    <div className='bucketListSearchBar'>
                        {this.renderSearch()}
                    </div>
                </div>
                <div id='bucketListProgress'>
                    <p id='bucketListProgress'>Progress: %0</p>
                </div>
                <div className='navTabs'>
                    <div 
                    id ='activeTab'
                    onClick={this.activeTab}
                    >
                    Active
                    </div>
                    <div 
                    id='achievedTab'
                    onClick={this.achievedTab}
                    >
                    Achieved
                    </div>
                </div>
                <div className='bucketListBody'>
                    {this.renderBucketList()}
                </div>
                <div className='buttonContainer'>
                    <Link to ='/list-item' id='addItemButton'>Add</Link>
                </div>
                <NavigationTabs />
            </div>
            </>
        )
    }
}

export default BucketList;
