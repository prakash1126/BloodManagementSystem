import React from 'react'
import { Input } from '@mui/material'
import {useField} from 'formik'

const InputComponent = ({name,
    
    ...otherProps}) => {
 const [field,meta]=useField(name)
    const configInput={
        ...field,
        ...otherProps,
        fullWidth:true,
    };
    if(meta&&meta.touched&&meta.error){
        configInput.error=true;
        configInput.helperText=meta.error
    }
  return (
  <Input {...configInput}></Input>
  )
}

export default InputComponent