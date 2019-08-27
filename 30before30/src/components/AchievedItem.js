import React from 'react';

class AchievedItem extends React.Component {

    render(){
        return (
            <>
                <div className ='bucketListItem'>
                    <img src ='https://images.pexels.com/photos/1903707/pexels-photo-1903707.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' />
                    <div className='itemDetails'>
                        <h3>Title</h3>
                        <p>A small description...</p>
                        <p>Target Date : 12/08/2019</p>
                    </div>
                </div>
                <div className ='bucketListItem'>
                    <img src ='https://images.pexels.com/photos/1903707/pexels-photo-1903707.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' />
                    <div className='itemDetails'>
                        <h3>Title</h3>
                        <p>A small description...</p>
                        <p>Target Date : 12/08/2019</p>
                    </div>
                </div>
                <div className ='bucketListItem'>
                    <img src ='https://images.pexels.com/photos/1903707/pexels-photo-1903707.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' />
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

export default AchievedItem;