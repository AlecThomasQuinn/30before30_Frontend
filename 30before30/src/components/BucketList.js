import React from 'react';

//importing Active & Achieved component's list
import ActiveItem from './ActiveItem';
import AchievedItem from './AchievedItem';

//importing NavigationTabs Component
import NavigationTabs from './NavigationTabs';

class BucketList extends React.Component {
    
    state = {
        active: true,
        achieved: false
    }
    
    activeTab = () => {
        if (this.state.active === false){
            this.setState({ active: true, achieved: false})
        }else if(this.state.active === true){
            return this.state
        }
    }
    achievedTab = () => {
        if (this.state.achieved === false){
            this.setState({ active: false, achieved: true})
        }else if(this.state.achieved === false){
            return this.state
        }
    }

    renderBucketList = () => {
        if (this.state.active === true){
            return <ActiveItem />
        } else {
            return <AchievedItem />
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
                        <h5>Search</h5>
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
                <div className='AddItemButton'>
                    <button>Add</button>
                </div>
                <NavigationTabs />
            </div>
        )
    }
};

export default BucketList;