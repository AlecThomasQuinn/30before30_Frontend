import React from 'react';

class ActiveItem extends React.Component {

    render(){
        console.log('ActiveItem', this.props)
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

export default ActiveItem;