import React from 'react'
import '../App.css'
 import { Formik, Form, Field } from 'formik';
 import * as Yup from 'yup';
 const registerSchema = Yup.object().shape({
   fullName: Yup.string()
     .min(2, 'Too Short!')
     .max(50, 'Too Long!')
     .required('Required'),
   age: Yup.string()
     .min(0, 'Too Short!')
     .max(3, 'Too Long!')
     .required('Required'),
   gender:Yup.string().required("required"),
   email: Yup.string().email('Invalid email').required('Required'),

 });
 
 const Register = () => (
   <div className="Body">
     <h1>Register</h1>
     <Formik
       initialValues={{
         fullName: '',
         age:Number(''),
         gender:'',
         email: '',
       }}
       validationSchema={registerSchema}
       onSubmit={values => {
         // same shape as initial values
         console.log(values);
       }}
     >
       {({ errors, touched }) => (
         <Form className="Form">
           <Field name="fullName"  placeholder="Full Name" className="Field"/>
           {errors.fullName && touched.fullName ? (
             <div className="Errors">{errors.fullName}</div>
           ) : null}
           <Field name="age" placeholder="Age" className="Field" />
           {errors.age && touched.age ? (
             <div className="Errors">{errors.age}</div>
           ) : null}
           <Field  className="Field" as="select" name="gender" placeholder="Gender">
             <option value="male">Male</option>
             <option value="female">Female</option>
             <option value="others">Others</option>
           </Field>
           <Field name="email" placeholder="Email" type="email" className="Field" />
           {errors.email && touched.email ? <div className="Errors">{errors.email}</div> : null}
           <button className="btn" type="submit">Submit</button>
         </Form>
       )}
     </Formik>
   </div>
 );

export default Register