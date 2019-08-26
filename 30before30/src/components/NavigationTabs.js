import React from 'react';

class NavigationTabs extends React.Component {


    render () {
        return (
            <div className='footerTabs'>
                <div id='bucketListTab'>BucketList</div>
                <div id='categoriesTab'>Categories</div>
                <div id='settingsTab'>Settings</div>
            </div>
        )
    }
};

export default NavigationTabs;