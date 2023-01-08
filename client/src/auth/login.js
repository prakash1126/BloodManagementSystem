import React from 'react'
import '../App.css'
import {Link} from 'react-router-dom'
 import { Formik, Form, Field } from 'formik';
 import * as Yup from 'yup';
 const loginSchema = Yup.object().shape({
   email: Yup.string().email('Invalid email').required('required'),
   password: Yup.string()
   .min(5, "Too Short!")
   .max(100, "Too Long!")
   .required("required"),
 });
 const Login = () => (
   <div className="Body">
     <h1>Login</h1>
     <Formik
       initialValues={{
         email: '',
         password:'',
       }}
       validationSchema={loginSchema}
       onSubmit= {async values => {
        const {confirmPassword, ...updatedValues}=values
        const requestOptions = {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(updatedValues)
      };
      try {
        const res=await fetch("http://localhost:5000/register", requestOptions)
        const data=res.json()
        if(res.status===200){
          alert(data.msg)
        }
        else{
          alert(data.error)
        }
    }
    catch (error) {
        console.error(error);
    }}
}>
       {({ errors, touched }) => (
         <Form className="Form">
           <Field name="email" placeholder="Email" type="email" className="Field" />
           {errors.email && touched.email ? <div className="Errors">{errors.email}</div> : null}
           <Field name="password" placeholder="Password" type="password"className="Field" />
           {errors.password && touched.password ? <div className="Errors">{errors.password}</div> : null}
           <button className="btn"type="submit">Submit</button>
           <Link className="link" to="/register">Register</Link>
         </Form>
       )}
     </Formik>
   </div>
 );

export default Login