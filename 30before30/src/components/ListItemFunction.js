import React, { useState, useEffect } from "react";
import axios from "axios";
import { Form, Field, withFormik } from "formik"; // a library to make making forms easier
import * as Yup from "yup"; // for validation
import { axiosWithAuth } from "../utils/axiosWithAuth";


// once 'Add Item' is clicked on the bucket list, this ListItem function is called and
// the following form renders

const ListItem = ({errors, touched, values, status}) => {

    console.log('Values from ListItem', values);
    
    // need post request on submit AND 'put' request, will handle put w/ team
    
    const [items, setItems] = useState([]);
    
    useEffect(() => {
        if (status) {
          setItems([...items, status]);
          console.log(items);
        }
      }, [status]);
      
        return(
            <div>
                <h1>I am a list item</h1>
                <Form >
                    <span>Goal achieved?</span>
                    <Field 
                        name='complete' 
                        type='checkbox' 
                        checked={values.complete} 
                    />
                    <Field 
                        name='item_name'
                        type='text' 
                        placeholder='Your goal here' 
                        />
                    <Field 
                        name='description' 
                        component='textarea'
                        type='text' 
                        placeholder='A brief description of your goal' 
                    />
                    
                    <span>Make this item private</span>
                    <Field 
                        name='privacy' 
                        type='checkbox' 
                        checked={values.privacy} 
                    />
                    <Field name='category_id' component='select'>
                        <option>Please select a category</option>
                        <option value={1}>category 1</option>
                        <option value={2}>category 2</option>
                        <option value={3}>category 3</option>
                    </Field>
                    <Field
                        name='target_date' type='date'
                        />
                    
                    {/* console log's like a mofo but you will see the array populate when the submit button is clicked */}
                    <button type='submit' onCLick={console.log(items)}> Submit.</button> 
                </Form>

                    {/* just mapping to verify object is there */}
                    {items.map(item => (
                        <ul key={item.id}>
                            {/* <li>ID: {item.id}</li> */}
                            {/* <li>complete: {item.complete.toString()}</li>
                            <li>name: {item.item_name}</li>
                            <li>description: {item.description}</li>
                            <li>privacy: {item.privacy.toString()}</li>
                            <li>category_id: {item.category_id}</li>
                            <li>target_date: {item.target_date}</li> */}
                        </ul>
                    ))}

            </div>
        );
    };
    
    const FormikListItem = withFormik({
        mapPropsToValues({ item_name, description, privacy, category_id, target_date, complete }) {
            return{
                item_name: item_name || '',
                description: description || '',
                category_id: Date.now(),
                privacy: privacy || true,
                complete: complete || false,
                target_date: target_date || ''
            };
        },
        
        handleSubmit(values, { setStatus }){
            axiosWithAuth()
            //https://reqres.in/api/users
            
            //https://thirty-before-thirty-bw.herokuapp.com/api/items <-- post data to this endpoint
            //https://thirty-before-thirty-bw.herokuapp.com/api/user-items <-- get the array of items the user have
            
            .post('https://thirty-before-thirty-bw.herokuapp.com/api/items', values)
            .then(response => {
                console.log('from axios submit', response);
                setStatus(response.data);
            })
            .catch(error => {
                console.log('From ListItem', values);
            console.log('axios catch from FormikListItem:', error.response);
        })

        //using axiosWithAuth() from utilites folder
    }

})(ListItem);


export default FormikListItem; 

// -input:
//     -name           -Required       -string
//     -description    -Not Required   -string
//     -category_id    -Required       -integer
//     -privacy        -Not Required   -boolean  // default to private | true === private, false === public
//     -complete       -Not Required   -boolean  // default to false
//     -date           -Not Required   -string

//vvvvvvvvvvvvv -- Object that's being posted on the endpoint
// {
//     category: "category 1" <--needs to be removed
//     category_id: 1
//     complete: false
//     description: "wedwedwe"
//     item_name: ""
//     name: "Jerry Osorio" <--needs to be removed
//     privacy: true
//     target_date: "2019-07-31"
// }