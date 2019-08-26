import React from 'react';

//importing BucketListItem component
import BucketListItem from './BucketListItem';

class BucketList extends React.Component {
    

    render(){
        return (
            <>
                <h1>Bucket List</h1>
                <div className='navTabs'>
                    <label id='activeTab'>Active</label>
                    <label id='achievedTab'>Achieved</label>
                </div>
                <div className='bucketListBody'>
                    <BucketListItem />
                </div>
            </>
        )
    }
};

export default BucketList;