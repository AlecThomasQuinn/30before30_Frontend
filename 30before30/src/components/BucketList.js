import React from 'react';

//importing BucketListItem component
import BucketListItem from './BucketListItem';

//importing NavigationTabs Component
import NavigationTabs from './NavigationTabs';

class BucketList extends React.Component {
    

    render(){
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
                    <label id='activeTab'>Active</label>
                    <label id='achievedTab'>Achieved</label>
                </div>
                <div className='bucketListBody'>
                    <BucketListItem />
                    <div className='AddItemButton'>
                        <button>Add</button>
                    </div>
                </div>
                <NavigationTabs />
            </div>
        )
    }
};

export default BucketList;