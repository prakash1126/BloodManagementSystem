import React from 'react'
import {Box, Button, Typography} from '@mui/material'
import {Link,useNavigate} from 'react-router-dom';
import { useDispatch } from 'react-redux';
import LoginOutlinedIcon from '@mui/icons-material/LoginOutlined';
import { Formik, Form } from 'formik'
import { addUserDetails } from '../redux/action/userAction';
import * as Yup from 'yup'
import TextFieldComponent from '../components/textFieldComponent';
const Login = () => {
    const navigate=useNavigate();
    const dispatch=useDispatch()
    const boxStyle2={
        marginTop:'20px',
        display:'flex', 
        flexDirection:'row',
    }
    const boxStyle={
    display:'flex', 
    maxWidth:'400px', 
    flexDirection:'column',
    alignItems:'center',
    justifyContent:'center',
    margin:'auto',
    marginTop:'50px',
    padding:'20px',
    borderRadius:'5px',
    boxShadow:'5px 5px 10px #ccc',
    }
    const initialValues = {
        email: '',
        password: '',
    }
    const validationSchema = Yup.object().shape({
        email: Yup.string().email('please enter valid email').required("Required"),
        password: Yup.string().required("Required")
    })
    const handleSumbit= async(values,resetForm)=>{
        const requestOptions = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(values),
        };
        const res = await fetch("http://localhost:5000/login", requestOptions);
        const data = await res.json()
        if(res.status===200){
            dispatch(addUserDetails(data.userDetails))
            navigate('/home')
        }else{
            alert(data.error)
        }
        resetForm({ values: '' })
    } 
    return (
                <Formik initialValues={initialValues}  validationSchema={validationSchema}
                onSubmit={(values,{resetForm})=>handleSumbit(values,resetForm)}>
                        <Form>
                            <Box style={boxStyle}>
                                <Typography variant="h3">Login</Typography>
                                <TextFieldComponent  margin="normal" name="email" placeholder="Email"/>
                                <TextFieldComponent  margin="normal" name="password" placeholder="Password"/>
                                <Button endIcon={<LoginOutlinedIcon/>} type ="submit" variant="contained" color="warning" sx={{marginTop:3}}>Login</Button>
                                <Box style={boxStyle2} >
                                <Typography style={{marginRight:'30px'}}>Do you have an Account?</Typography><Link  style={{textDecoration:'none',color:'#be4d25', fontWeight:'bold'}} to="/register">Register</Link>
                                </Box>
                            </Box >
                        </Form>
                </Formik>
           
    )
}

export default Login;