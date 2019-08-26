import React, { useState, useEffect } from "react";
import axios from "axios";
import { Form, Field, withFormik } from "formik"; // a library to make making forms easier
import * as Yup from "yup"; // for validation


// once 'Add Item' is clicked on the bucket list, this ListItem function is called and
// the following form renders
export default function ListItem(){

    //each to-do item needs a name, description, category (dropdown)
    // privacy toggle (check, private checked as default)
    // status (active, acheived)
    // target date (calendar input)

const [item, SetItem] = useState([]);

    return(
        <div>
            <h1>I am a list item</h1>
            <form >
            <Field name='name' type='text' placeholder='Your goal here' />
            <Field name='name' type='text' placeholder='A brief description of what you want to accomplish' />
            <Field name='name' type='text' placeholder='A brief description of what you want to accomplish' />

            </form>
        </div>
    )
};

