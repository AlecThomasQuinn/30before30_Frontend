import React from 'react';

//importing Link from react router dom to push user to different scenes
import { Link } from "react-router-dom";

class ActiveItem extends React.Component {

    render(){
        // console.log('ActiveItem', this.props)
        return (
            <>
                <Link to = '/list-item' className ='bucketListItem'>
                    <div className='itemDetails'>
                        <h3>{this.props.item.item_name}</h3>
                        <p>{this.props.item.description}</p>
                        <p>{this.props.item.target_date}</p>
                    </div>
                </Link>
            </>
        )
    }
};

export default ActiveItem;