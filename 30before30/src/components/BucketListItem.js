import React from 'react';

class BucketListItem extends React.Component {


    render(){
        return (
            <>
                <div className ='bucketListItem'>
                    <img src ='https://images.pexels.com/photos/2395255/pexels-photo-2395255.jpeg?auto=compress&cs=tinysrgb&h=650&w=940' alt='' />
                    <div className='itemDetails'>
                        <h3>Title</h3>
                        <p>A small description...</p>
                        <p>Target Date : 12/08/2019</p>
                    </div>
                </div>
            </>
        )
    }
};

export default BucketListItem;