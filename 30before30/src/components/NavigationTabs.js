import React from 'react';

//importing Link from react router dom to push user to different scenes
import { Link } from 'react-router-dom';

class NavigationTabs extends React.Component {


    render () {
        return (
            <div className='footerTabs'>
                <Link to ='/bucket-list' id='bucketListTab'>BucketList</Link>
                <Link to ='/categories' id='categoriesTab'>Categories</Link>
                <Link to ='/settings' id='settingsTab'>Settings</Link>
            </div>
        )
    }
};

export default NavigationTabs;