import React, { createContext } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth'

export const AppState = createContext();

class AppContext extends React.Component{
    constructor() {
        super();
    
        this.state = {
          bucketList: [],
          active: true,
          achieved: false,
          search: false
        };
      }

      componentDidMount() {

        axiosWithAuth()
        .get('https://thirty-before-thirty-bw.herokuapp.com/api/user-items')
        .then(res => {
            console.log('from componentDidMount', res)
            this.setState({
                bucketList: res.data
            })
        })
        .catch(err => {
            console.log(err.response)
        })
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