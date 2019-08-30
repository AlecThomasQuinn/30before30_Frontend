import React from 'react';

class ActiveItem extends React.Component {

    render(){
        // console.log('ActiveItem', this.props)
        return (
            <>
                <div className ='bucketListItem'>
                    <div className='itemDetails'>
                        <h3>{this.props.item.item_name}</h3>
                        <p>{this.props.item.description}</p>
                        <p>{this.props.item.target_date}</p>
                    </div>
                </div>
            </>
        )
    }
};

export default ActiveItem;