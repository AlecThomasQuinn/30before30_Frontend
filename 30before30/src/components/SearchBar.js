// import React from 'react';
// import ActiveItem from './ActiveItem';

// //importing AppState from Context API
// import { AppState } from "../contexts/AppContext";

// class SearchBar extends React.Component {

//     //Fetching state with Context API
//     static contextType = AppState;

    
//     render(){

        


//         // console.log('from SearchBar', this.props)
//         return (
//             <form onSubmit={e => e.preventDefault()}>
//                 <input 
//                     type='text' 
//                     placeholder='Search Bucket List'
//                     value={searchValue}
//                     onChange={changeHandler.bind()}
//                 />
//                 <ul>
//                    {bucketList.map((item)=> {
//                     return <ActiveItem item={item} key={item.id} />
//                 })} 
//                 </ul>
//             </form>
//         )
//     }
// };

// export default SearchBar;