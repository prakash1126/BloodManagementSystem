
import * as Yup from 'yup'
export const validationSchema = Yup.object().shape({
    name: Yup.string().min(3, "It's too short").required("Required"),
    email: Yup.string().email("Enter valid email").required("Required"),
    gender: Yup.string().oneOf(["male", "female"], "Required").required("Required"),
    phoneNumber: Yup.number().typeError("Enter valid Phone Number").required('Required'),
    password: Yup.string().min(8, "Password minimum length should be 8").required("Required"),
    confirmPassword: Yup.string().oneOf([Yup.ref('password')], "Password not matched").required("Required"),
    termsAndConditions: Yup.string().oneOf(["true"], "Accept terms & conditions")
})
export const registerSchema = Yup.object().shape({
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
    dateOfBirth:Yup.date().required('required'),
    country:Yup.string().required('required'),
    city:Yup.string().required('required'),
    temporaryAddress: Yup.string()
    .min(2, 'Too short!')
    .max(50, 'Too Long!')
    .required('required'),
    permanentAddress: Yup.string()
    .min(2, 'Too short!')
    .max(50, 'Too Long!')
    .required('required'),
    email: Yup.string().email('Invalid email').required('required'),
    phoneNumber: Yup.number().required('required')
   .typeError("That doesn't look like a phone number")
   .positive("A phone number can't start with a minus")
   .integer("A phone number can't include a decimal point")
   .min(10),
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