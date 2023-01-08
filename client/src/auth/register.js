import React from 'react'
import '../App.css'
import {Link} from 'react-router-dom'
 import { Formik, Form, Field } from 'formik';
 import * as Yup from 'yup';
 const registerSchema = Yup.object().shape({
   fullName: Yup.string()
     .min(2, 'Too Short!')
     .max(50, 'Too Long!')
     .required('required'),
   age: Yup.number()
   .typeError("That doesn't look age")
   .positive("A phone number can't start with a minus")
   .integer("A phone number can't include a decimal point")
   .min(1)
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
   phoneNumber: Yup.number()
  .typeError("That doesn't look like a phone number")
  .positive("A phone number can't start with a minus")
  .integer("A phone number can't include a decimal point")
  .min(10)
  .required('A phone number is required'),
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
         age:"",
         gender:'',
         phoneNumber:'',
         temporaryAddress:'',
         permanentAddress:'',
         email: '',
         password:'',
         confirmPassword:'',
         bloodGroup:''
       }}
       validationSchema={registerSchema}
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
           <Field name="fullName"  placeholder="Full Name" className="Field"/>
           {errors.fullName && touched.fullName ? (
             <div className="Errors">{errors.fullName}</div>
           ) : null}
           <Field name="age" placeholder="Age" className="Field" />
           {errors.age && touched.age ? (<div className="Errors">{errors.age}</div>) : null}
           <Field  className="Field" as="select" name="gender" placeholder="Select Gender">
            <option value="">Select Gender</option>
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
           <Field  className="Field" as="select" name="bloodGroup" placeholder=" Select Blood Group">
            <option value="">Select Blood Group</option>
            {bloodGroup.map(item => (
                  <option  value={item}>
                    {item}
                  </option>
                ))}
           </Field>
           {errors.bloodGroup && touched.bloodGroup ? <div className="Errors">{errors.bloodGroup}</div> : null}
           <button className="btn"type="submit">Submit</button>
           <Link className="link" to="/">Already have an Account?</Link>
         </Form>
       )}
     </Formik>
   </div>
 );

export default Register