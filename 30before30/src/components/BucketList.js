import React from 'react';

//importing BucketListItem component
import ActiveItem from './ActiveItem';

//importing NavigationTabs Component
import NavigationTabs from './NavigationTabs';

import { Link } from 'react-router-dom';

class BucketList extends React.Component {
    
    state = {
        active: true,
        achieved: false
    }
    
    

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
                    <Link to='/active'>Active</Link>
                    <Link to='/achieved'>Achieved</Link>
                </div>
                <div className='bucketListBody'>
                    <ActiveItem />
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