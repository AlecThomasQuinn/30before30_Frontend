import React from 'react';

class AchievedItem extends React.Component {

    render(){
        return (
            <>
                <div className ='bucketListItem'>
                    <img src ='https://images.pexels.com/photos/1903707/pexels-photo-1903707.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' />
                        <h3>Title</h3>
                        <p>A small description...</p>
                        <p>Target Date : 12/08/2019</p>
                </div>
            </>
        )
    }
};

export default AchievedItem;