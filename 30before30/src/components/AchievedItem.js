import React from 'react';

class AchievedItem extends React.Component {

    render(){
        return (
            <>
                <div className ='bucketListItem'>
                    <img src={this.props.item.avatar} alt=''/>
                    <div className='itemDetails'>
                        <h3>{this.props.item.first_name} {this.props.item.last_name}</h3>
                        <p>{this.props.item.email}</p>
                    </div>
                </div>
            </>
        )
    }
};

export default AchievedItem;