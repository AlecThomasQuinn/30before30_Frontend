import React, { useState, useEffect } from "react";
import axios from "axios";
import { Form, Field, withFormik } from "formik"; // a library to make making forms easier
import * as Yup from "yup"; // for validation


// once 'Add Item' is clicked on the bucket list, this ListItem function is called and
// the following form renders

// {
//     "id": 4,
//     "name": "plant a garden",
//     "description": "a description",
//     "user_id": 2,
//     "category_id": 4,
//     "privacy": "public",
//     "complete": false,
//     "target_date": "2020-01-03",
// }


const ListItem = () => {

    // name,
    // description
    // category (dropdown)
    // privacy toggle (check, private checked as default)
    // status (active, acheived) <--- I don't think this needs to be on the form, just a part of the ListItem object
    // target date (calendar input)


    // need post request on submit AND 'put' request, will handle put w/ team

    const [item, SetItem] = useState([]);

        return(
            <div>
                <h1>I am a list item</h1>
                <form >
                <Field 
                    name='name' 
                    type='text' 
                    placeholder='Your goal here' 
                />
                <Field 
                    component='textarea'
                    name='description' 
                    type='text' 
                    placeholder='A brief description of your goal' 
                />
                <span>Make this item private</span>
                <Field 
                    name='privacy' 
                    type='checkbox' 
                    checked='true' 
                />
                <Field name='category' component='select'>
                    <option>Please select a category</option>
                    <option>category 1</option>
                    <option>category 2</option>
                    <option>category 3</option>
                </Field>

                
                </form>
            </div>
        )
};

const FormikListItem = withFormik({})(ListItem);

export default FormikListItem;