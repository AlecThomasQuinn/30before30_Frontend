import React, { createContext } from 'react';

export const AppState = createContext();

class AppContext extends React.Component{
    state ={
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
          }],
        active: true,
        achieved: false,
        search: false,
        searchValue: ''
    }

    render(){
        return (
            <AppState.Provider value={{...this.state}}>
                {this.props.children}
            </AppState.Provider>
        );
    }
};

export default AppContext;