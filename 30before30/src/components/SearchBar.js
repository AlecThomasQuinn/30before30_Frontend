import React from 'react';

class SearchBar extends React.Component {

    state = {
        bucketList: [{
            "id": 4,
            "name": "plant a garden",
            "description": "a description",
            "user_id": 2,
            "category_id": 4,
            "privacy": "public",
            "complete": false,
            "target_date": "2020-01-03",
            "category_name": "Learning"
          }]
    }

    changeHandler = (e) => {
        this.setState({bucketList: e.target.value})
    }

    render(){
        console.log(this.props)
        return (
            <form>
                <input 
                    type='text' 
                    name='title'
                    placeholder='Search Bucket List'
                    value={this.state.bucketList.name}
                    onChange={this.changeHandler}
                />
            </form>
        )
    }
};

export default SearchBar;