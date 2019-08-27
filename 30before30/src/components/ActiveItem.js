import React from 'react';

class ActiveItem extends React.Component {

    render(){
        // console.log(this.props)
        return (
            <>
                <div className ='bucketListItem'>
                    <img src ='https://images.pexels.com/photos/2395255/pexels-photo-2395255.jpeg?auto=compress&cs=tinysrgb&h=650&w=940' alt='' />
                    <div className='itemDetails'>
                        <h3>{this.props.item.name}</h3>
                        <p>{this.props.item.description}</p>
                        <p>{this.props.item.target_date}</p>
                    </div>
                </div>
                <div className ='bucketListItem'>
                    <img src ='https://images.pexels.com/photos/2395255/pexels-photo-2395255.jpeg?auto=compress&cs=tinysrgb&h=650&w=940' alt='' />
                    <div className='itemDetails'>
                        <h3>{this.props.item.name}</h3>
                        <p>{this.props.item.description}</p>
                        <p>{this.props.item.target_date}</p>
                    </div>
                </div>
                <div className ='bucketListItem'>
                    <img src ='https://images.pexels.com/photos/2395255/pexels-photo-2395255.jpeg?auto=compress&cs=tinysrgb&h=650&w=940' alt='' />
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

export default ActiveItem;