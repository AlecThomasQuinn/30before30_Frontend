import React from 'react';

class SearchBar extends React.Component {

    state = {
        bucketList: []
    }

    changeHandler = (e) => {
        this.setState({bucketList: e.target.value})
    }

    render(){
        return (
            <form>
                <input 
                    type='text' 
                    name='title'
                    placeholder='Search Bucket List'
                    // value={}
                    onChange={this.changeHandler}
                />
            </form>
        )
    }
};

export default SearchBar;