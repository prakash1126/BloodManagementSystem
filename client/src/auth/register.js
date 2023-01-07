import React from 'react'
import '../App.css'
 import { Formik, Form, Field } from 'formik';
 import * as Yup from 'yup';
 const registerSchema = Yup.object().shape({
   fullName: Yup.string()
     .min(2, 'Too Short!')
     .max(50, 'Too Long!')
     .required('required'),
   age: Yup.string()
    .min(2, 'Too short!')
    .max(4, 'Too Long!')
    .required('required'),
   gender:Yup.string().required("required"),
   temporaryAddress: Yup.string()
   .min(2, 'Too short!')
   .max(50, 'Too Long!')
   .required('required'),
   permanentAddress: Yup.string()
   .min(2, 'Too short!')
   .max(50, 'Too Long!')
   .required('required'),
   email: Yup.string().email('Invalid email').required('required'),
   phoneNumber: Yup.string()
   .min(1, 'Too short!')
   .max(10, 'Too Long!')
   .required("required"),
   password: Yup.string()
   .min(5, "Too Short!")
   .max(100, "Too Long!")
   .required("required"),
 confirmPassword: Yup.string()
   .min(8, "Too Short!")
   .max(100, "Too Long!")
   .required("required")
   .oneOf([Yup.ref("password"), null], "Passwords must match"),
  bloodGroup:Yup.string().required("required")
 });
 const bloodGroup=["A+", "A-","B+", "B-", "AB+", "AB-", "O+","O-"]
 const gender=["Male", "Female", "Others"]
 
 const Register = () => (
   <div className="Body">
     <h1>Register</h1>
     <Formik
       initialValues={{
         fullName: '',
         age:Number(),
         gender:'',
         phoneNumber:Number(),
         temporaryAddress:'',
         permanentAddress:'',
         email: '',
         password:'',
         bloodGroup:''
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
           {errors.age && touched.age ? (<div className="Errors">{errors.age}</div>) : null}
           <Field  className="Field" as="select" name="gender" placeholder="Gender">
             <option defaultvalue>Select</option>
             {gender.map(item => (
                  <option  value={item}>
                    {item}
                  </option>
                ))}
           </Field>
           {errors.gender && touched.gender ? <div className="Errors">{errors.gender}</div> : null}
           <Field name="email" placeholder="Email" type="email" className="Field" />
           {errors.email && touched.email ? <div className="Errors">{errors.email}</div> : null}
           <Field name="temporaryAddress" placeholder="Temporary Address" type="text" className="Field" />
           {errors.temporaryAddress && touched.temporaryAddress ? <div className="Errors">{errors.temporaryAddress}</div> : null}
           <Field name="permanentAddress" placeholder="Permanent Address" type="text" className="Field" />
           {errors.permanentAddress && touched.permanentAddress ? <div className="Errors">{errors.permanentAddress}</div> : null}
           <Field name="phoneNumber" placeholder="Phone Number" className="Field" />
           {errors.phoneNumber && touched.phoneNumber ? <div className="Errors">{errors.phoneNumber}</div> : null}
           <Field name="password" placeholder="Password" type="password"className="Field" />
           {errors.password && touched.password ? <div className="Errors">{errors.password}</div> : null}
           <Field name="confirmPassword" type="password" placeholder="Confirm Password" className="Field" />
           {errors.confirmPassword && touched.confirmPassword ? <div className="Errors">{errors.confirmPassword}</div> : null}
           <Field  className="Field" as="select" name="bloodGroup" placeholder="Blood Group">
            <option defaultvalue>Select</option>
            {bloodGroup.map(item => (
                  <option  value={item}>
                    {item}
                  </option>
                ))}
           </Field>
           {errors.bloodGroup && touched.bloodGroup ? <div className="Errors">{errors.bloodGroup}</div> : null}
           <button className="btn" type="submit">Submit</button>
         </Form>
       )}
     </Formik>
   </div>
 );

export default Register