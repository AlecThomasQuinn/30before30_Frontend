import React, { useState, useEffect } from "react";
import axios from "axios";
import { Form, Field, withFormik } from "formik"; // a library to make making forms easier
import * as Yup from "yup"; // for validation


// once 'Add Item' is clicked on the bucket list, this ListItem function is called and
// the following form renders


const ListItem = ({errors, touched, values, status}) => {

    // {
//     "id": 4,                             need ListItem ID on object
//     "name": "plant a garden",            On Form 
//     "description": "a description",      On Form
//     "user_id": 2,                        need User ID on object
//     "category_id": 4,                    On Form
//     "privacy": "public",                 On Form
//     "complete": false,                   On Form
//     "target_date": "2020-01-03",         On Form
// }

    // need post request on submit AND 'put' request, will handle put w/ team

    const [items, setItems] = useState([]);

    useEffect(() => {
        if (status) {
          setItems([...items, status]);
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
                    name='name' 
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
                <Field name='category' component='select'>
                    <option>Please select a category</option>
                    <option>category 1</option>
                    <option>category 2</option>
                    <option>category 3</option>
                </Field>
                <Field
                    name='target_date' type='date'
                />
                <button>Submit.</button>
                </Form>

                    {items.map(item => (
                        <ul key={item.id}>
                            <li>name: {item.name}</li>
                            <li>description: {item.description}</li>
                            <li>privacy: {item.privacy}</li>
                            <li>category: {item.category}</li>
                            <li>target_date: {item.target_date}</li>
                            <li>complete: {item.complete}</li>
                        </ul>
                    ))}

            </div>
        );
};

const FormikListItem = withFormik({
    mapPropsToValues({ name, description, privacy, category, target_date, complete }) {
        return{
            name: name || '',
            description: description || '',
            privacy: privacy || true,
            category: category || '',
            target_date: target_date || '',
            complete: complete || false
        };
    },

    handleSubmit(values, { setStatus }){
        axios
        .post('https://reqres.in/api/users', values)
        .then(response => {
            console.log(response.data);
            setStatus(response.data);
        })
    }

})(ListItem);

export default FormikListItem; 