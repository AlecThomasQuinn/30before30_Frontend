import React, { useEffect, useState } from "react";
import CategoriesCard from './CategoriesCard';
import axios from 'axios';

export default function CategoriesList() {

    const [data, setData] = useState([]);
    useEffect(() => {
      axios.get(`https:/thirty-before-thirty-bw.herokuapp.com//api/user-items`)
      .then(response => {
        setData(response);
        console.log(response);

      });

    }, []);

    return (
        <CategoriesCard />
    )
}