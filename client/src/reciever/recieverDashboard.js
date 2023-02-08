import React, { useState } from "react";
import TextFieldComponent from "../components/textFieldComponent";
import { Button, InputLabel, Typography, Input } from "@mui/material";
import { Formik, Form, useFormikContext } from "formik";
import Select from "../components/Select";
import * as Yup from 'yup'
import axios from "axios";
const Reciever = () => { 
const recieverDetailsSchema= Yup.object().shape({
fullName: Yup.string()
  .min(2, 'Too Short!')
  .max(50, 'Too Long!')
  .required('required'),
requisitionForm:Yup.mixed().test('hasFile','image is required',()=>{
  if(file){
    return true
  }
  return false
}),
phoneNumber: Yup.number().required('required')
.typeError("That doesn't look like a phone number")
.positive("A phone number can't start with a minus")
.integer("A phone number can't include a decimal point")
.min(10,'please enter the valid number'),
bloodGroup:Yup.string().required("required"),
detailsNote:Yup.string().required("required").max(1000, 'Too Long')
})

  const [file, setFile] = useState(null);
  const onFileChange = (e) => {
    setFile(e.target.files[0]);
  };
  const bloodGroup = ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"];
  const initialValues = {
    fullName: "",
    phoneNumber: "",
    bloodGroup: "",
    detailsNote: "",
    requisitionForm: "",
  };
  const ResetInput=()=>{
    setFile(null)
    document.getElementById("fileInput").value = "";
  }

  const handleSumbit = (values,{resetForm}) => {
    // values.requisitionForm=file.name
    const formData = new FormData();
    formData.append("image", file);
    formData.append("fullName", values.fullName);
    formData.append("bloodGroup", values.bloodGroup);
    formData.append("phoneNumber", values.phoneNumber);
    formData.append("detailsNote", values.detailsNote);
    formData.append('requisitionForm',values.requisitionForm=file.name)
    axios.post('http://localhost:5000/reciever',formData)
    ResetInput()
    resetForm()
  };

  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          background:
            "linear-gradient(90deg, rgba(2,1,18,1) 0%, rgba(186,34,101,0.9724264705882353) 100%, rgba(64,4,4,0.700717787114846) 100%)",
          width: "100%",
          height: "10rem",
          color: "white",
          alignItems: "center",
          justifyItems: "center",
          margin: "auto",
        }}
      >
        <Typography>Blood Request Form</Typography>
        <Typography> रगत चाहियो ?</Typography>
      </div>
      <div
        style={{
          marginTop: "30px",
          marginLeft: "5rem",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyItems: "center",
          maxWidth: "1000px",
          background: "#ffe6ff",
        }}
      >
        <div style={{ marginTop: "10px" }}>
          <Formik
            initialValues={initialValues}
            validationSchema={recieverDetailsSchema}
            onSubmit={(values, {resetForm}) => handleSumbit(values, {resetForm})}
          >{({ errors, touched }) => (
            <Form>
              <TextFieldComponent
                name="fullName"
                margin="normal"
                label="Full Name (तपाईँको पुरा नाम)"
              />
              <TextFieldComponent
                name="phoneNumber"
                margin="normal"
                label="Phone Number (तपाईँको सम्पर्क नम्बर)"
              />
              <Select
                label="Blood Group (तपाईँलाई आवश्यक रक्त समुह)"
                name="bloodGroup"
                options={bloodGroup}
              />
              <InputLabel>Requistion Form(रक्त निवेदन फारम)</InputLabel>
              <Input id='fileInput' type='file' onChange={onFileChange}  fullWidth={true}/>
              {errors.requisitionForm && touched.requisitionForm ? (
             <div style={{color:'red'}}>{errors.requisitionForm}</div> ) : null}
              <TextFieldComponent
                multiline={true}
                rows={4}
                name="detailsNote"
                margin="normal"
                label="Details (स‌न्देश) "
              />
              <Button type="submit">Submit</Button>
            </Form>)}
          </Formik>
        </div>
      </div>
    </>
  );
};
export default Reciever;
