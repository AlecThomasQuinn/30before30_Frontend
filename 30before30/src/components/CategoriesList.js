import React, { useEffect, useState } from "react";
import CategoriesCard from './CategoriesCard';
import axios from 'axios';

export default function CategoriesList() {


    return (
        <CategoriesCard />
    )

    // const [data, setData] = useState([]);
    // useEffect(() => {
    //     axios.get(`https://reqres.in/api/users?page=2`)
    //     .then(response => {
    //       setData(response);
         
    //     });

    //   }, []);


    //   return (
    //       <div className="categories-list">
    //           {data.map( res => (
    //               <CategoriesCard key={res.id}/>
    //           ))}
    //       </div>
    //   )

}