import React from 'react';

//importing Active & Achieved component's list
import ActiveItem from './ActiveItem';
import AchievedItem from './AchievedItem';

//importing NavigationTabs Component
import NavigationTabs from './NavigationTabs';

//importing Link from react router dom to push user to different scenes
import { Link } from 'react-router-dom';

//importing Sort component
import SortComponent from './SortComponent';
//importing Search Bar component
import SearchBar from './SearchBar';

class BucketList extends React.Component {
    
    state = {
        active: true,
        achieved: false,
        search: false,
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
            return <ActiveItem />
        } else {
            return <AchievedItem />
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
            return <SearchBar />
        }
    }
    
    render(){

        console.log(this.state)
        return (
            <div className='bucketListScene'>
                <div className='BucketListHeader'>
                    <h1>Bucket List</h1>
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
                    {/* <SearchBar /> */}
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
        )
    }
};

export default BucketList;