import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

export default function useForm({ initialValues }) {
    let history = useHistory();
    const [values, setValues] = useState(initialValues || {});
    const [error, setError] = useState(null);
//track form values
const handle_change = event => {
    const value = event.target.value;
    const name = event.target.name;
       setValues({
          ...values,
          [name]: value
        });
     };
//submit form when submit button is clicked
const handle_submit = event => {
     event.preventDefault();
     submitData({ values });
};
//send data to database
const submitData = async (formValues) => {
     // const url = 'http://localhost:3001';
     const url = "https://demooapi.herokuapp.com";
     const dataObject = formValues.values;
     const { email, password } = dataObject;
     try {
     await axios ({
     method: 'POST',
     url: `${url}/auth/login`,
     data: {
     email: email,
     password: password
     },
     headers: new Headers({ 'Content-Type': 'application/json' })
     }).then(res => {
          history.push('/');
          localStorage.setItem("token", res.data.token);
          localStorage.setItem("userId", res.data.user._id);
          console.log(res.data.user._id);
     })
     }
     catch(err) {
          console.log(err.response.data);
          setError(err.response.data);
     }
};
return {
   handle_change,
   values,
   handle_submit,
   error
}}