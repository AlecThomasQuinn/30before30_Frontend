import React from 'react';

class AchievedItem extends React.Component {

    render(){
        return (
            <>
                <div className ='bucketListItem'>
                    <img src ='https://images.pexels.com/photos/1903707/pexels-photo-1903707.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' alt=''/>
                    <div className='itemDetails'>
                        <h3>{this.props.item.name}</h3>
                        <p>{this.props.item.description}</p>
                        <p>{this.props.item.target_date}</p>
                    </div>
                </div>
                <div className ='bucketListItem'>
                    <img src ='https://images.pexels.com/photos/1903707/pexels-photo-1903707.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' alt=''/>
                    <div className='itemDetails'>
                        <h3>{this.props.item.name}</h3>
                        <p>{this.props.item.description}</p>
                        <p>{this.props.item.target_date}</p>
                    </div>
                </div>
                <div className ='bucketListItem'>
                    <img src ='https://images.pexels.com/photos/1903707/pexels-photo-1903707.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' alt=''/>
                    <div className='itemDetails'>
                        <h3>{this.props.item.name}</h3>
                        <p>{this.props.item.description}</p>
                        <p>{this.props.item.target_date}</p>
                    </div>
                </div>
            </>
        )
    }
};

export default AchievedItem;