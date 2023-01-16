import React from 'react'
import { TextField } from '@mui/material'
import {useField} from 'formik'

const TextFieldComponent = ({name,
    ...otherProps}) => {
    const [field,meta]=useField(name);

    const configTextField={
        ...field,
        ...otherProps,
        fullWidth:true,
        variant:'outlined'
    };
    if(meta&&meta.touched&&meta.error){
        configTextField.error=true;
        configTextField.helperText=meta.error
    }
  return (
  <TextField {...configTextField}></TextField>
  )
}

export default TextFieldComponent