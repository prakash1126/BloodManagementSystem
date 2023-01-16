import React from "react";
import "../App.css";
import { Formik, Form } from "formik";
import { registerSchema } from "../schema";
import { Grid, Box, Typography, Button} from "@mui/material";
import Alert from '@mui/joy/Alert';
import LoginOutlinedIcon from "@mui/icons-material/LoginOutlined";
import TextFieldComponent from "../components/textFieldComponent";
import SelectField from "../components/selectField";
import Select from "../components/Select";
import countries from "../data/countries.json";
import DatePicker from "../components/datePicker";
const bloodGroup = ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"];
const gender = ["Male", "Female", "Others"];
const Register = () => {
  const handleSumbit = async (values) => {
    const { confirmPassword, ...updatedValues } = values;
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedValues),
    };
    const res = await fetch("http://localhost:5000/register", requestOptions);
    try {
      const data = await res.json();
      if (res.status === 200) {
        return(
          <>
          <Alert severity="success">
            {data.msg}
          </Alert>
          </>
        )
      } else {
        return(
          <>
          <Alert severity="error">
          {data.error}
        </Alert>
          </>
        )
          
      }
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <Formik
      initialValues={{
        fullName: "",
        age: "",
        gender: "",
        dateOfBirth: "",
        phoneNumber: "",
        country: "",
        city: "",
        temporaryAddress: "",
        permanentAddress: "",
        email: "",
        password: "",
        confirmPassword: "",
        bloodGroup: "",
      }}
      validationSchema={registerSchema}
      onSubmit={(values) => handleSumbit(values)}
    >
      <Form>
        <Box
          style={{
            display: "flex",
            flexDirection: "column",
            maxWidth: "500px",
            marginTop: "50px",
            margin: "auto",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: "5px",
            boxShadow: "5px 5px 10px #ccc",
            padding: "20px",
          }}
        >
          <Typography
            style={{ marginTop: "10px", fontSize: "30px", fontWeight: "bold" }}
            variant="h2"
          >
            Register
          </Typography>
          <Grid style={{ margin: "auto", color: "red", marginTop: "10px" }}>
            <Typography
              style={{ fontSize: "15px", fontWeight: "bold" }}
              variant="h5"
            >
              Your Personal Details
            </Typography>
          </Grid>
          <Grid container style={{ marginTop: "5px" }} spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextFieldComponent label="Full Name " name="fullName" />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextFieldComponent label="Age" name="age" />
            </Grid>
          </Grid>
          <Grid container style={{ marginTop: "5px" }} spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextFieldComponent label="Phone Number" name="phoneNumber" />
            </Grid>
            <Grid item xs={12} sm={6}>
              <Select label="Gender" name="gender" options={gender} />
            </Grid>
          </Grid>
          <Grid container style={{ marginTop: "5px" }} spacing={2}>
            <Grid item xs={12} sm={6}>
              <Select
                label="Blood Group"
                name="bloodGroup"
                options={bloodGroup}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <DatePicker label="Date of Birth" name="dateOfBirth" />
            </Grid>
          </Grid>
          <Grid style={{ margin: "auto", color: "red", marginTop: "10px" }}>
            <Typography
              style={{ fontSize: "15px", fontWeight: "bold" }}
              variant="h5"
            >
              Your AddressDetails
            </Typography>
          </Grid>
          <Grid container style={{ marginTop: "5px" }} spacing={2}>
            <Grid item xs={12} sm={6}>
              <SelectField
                label="Country "
                name="country"
                options={countries}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextFieldComponent label="City " name="city" />
            </Grid>
          </Grid>
          <Grid container style={{ marginTop: "5px" }} spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextFieldComponent
                label="Temporary Address "
                name="temporaryAddress"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextFieldComponent
                label="Permanent Address "
                name="permanentAddress"
              />
            </Grid>
          </Grid>
          <Grid container style={{ marginTop: "5px" }} spacing={1}>
            <Grid item xs={12} sm={12}>
              <TextFieldComponent name="email" label="Email" />
            </Grid>
            <Grid style={{ margin: "auto", color: "red", marginTop: "10px" }}>
              <Typography
                style={{ fontSize: "15px", fontWeight: "bold" }}
                variant="h5"
              >
                Your Security Crenditials
              </Typography>
            </Grid>
            <Grid container style={{ marginTop: "5px" }} spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextFieldComponent
                  label="Password"
                  type="password"
                  name="password"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextFieldComponent
                  label="Confirm Password"
                  type="password"
                  name="confirmPassword"
                />
              </Grid>
            </Grid>
          </Grid>
          <Button
            endIcon={<LoginOutlinedIcon />}
            type="submit"
            variant="contained"
            color="warning"
            sx={{ marginTop: 3 }}
          >
            Register
          </Button>
        </Box>
      </Form>
    </Formik>
  );
};

export default Register;
