import React, { useState, useEffect } from "react"; 
import axios from "axios";
import { Form, Field, withFormik } from "formik"; // a library to make making forms easier
import * as Yup from "yup"; // for validation
import { axiosWithAuth } from "../utils/axiosWithAuth";


// once 'Add Item' is clicked on the bucket list, this ListItem function is called and
// the following form renders

const ListItem = ({errors, touched, values, status}) => {

    //console.log('Values from ListItem', values);
    
    // need post request on submit AND 'put' request, will handle put w/ team
    
    const [items, setItems] = useState([]);
    
    useEffect(() => {
        if (status) {
          setItems([...items, status]);
          console.log(items);
        }
      }, [status]);
      
        return(
            <div className='ListItemFormWrapper'>
                <h1 className='NewGoalItem'>New Goal</h1>
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
                    {touched.item_name && errors.item_name && (<p>{errors.item_name}</p>)}
                    {console.log('touched.item_name',touched.item_name)}
                    
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
                        <option value={0}>Please select a category</option>
                        <option value={1}>Health and Fitness</option>
                        <option value={2}>Travel</option>
                        <option value={3}>Work</option>
                        <option value={4}>Learning</option>
                        <option value={5}>Love</option>
                        {/* could be mapped but this is fine for now */}
                    </Field>
                    {0 == values.category_id && (<p>{errors.category_id}</p>)}
                    {console.log('touched.category_id', touched.category_id)}
                    {console.log('values.category_id is 0', values.category_id == 0)}

                    <Field
                        name='target_date' type='date'
                        />
                    
                    {/* console log's like a mofo but you will see the array populate when the submit button is clicked */}
                    <button type='submit'> Submit.</button> 
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
                category_id: category_id,
                privacy: privacy || true,
                complete: complete || false,
                target_date: target_date || ''
            };
        },

        handleSubmit(values, { setStatus }){

            //const id = 

            axiosWithAuth()
            
            //https://thirty-before-thirty-bw.herokuapp.com//api/update-item/:id
            
                .post(`https://thirty-before-thirty-bw.herokuapp.com//api/update-item/${id}`, values)
                .then(response => {
                    console.log('from axios submit', response);
                    setStatus(response.data);
                })
                .catch(error => {
                    console.log('From ListItem', values);
                console.log('axios catch from FormikListItem:', error.response);
        })

    },

    validationSchema: Yup.object().shape({
        item_name: Yup.string().required('Your goal needs a name!'),
        category_id: Yup.bool().required('Your goal needs a category!'),
      })

})(ListItem);


export default FormikListItem; 