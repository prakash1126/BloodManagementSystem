import React from 'react'
import { FormControl, FormControlLabel, FromGroup, FormLabel, Checkbox, FormGroup } from '@mui/material'
import {useField, useFormikContext} from 'formik'

const CheckBox = (
  {name,
  label,
  legend,
  ...otherProps
}
) => {
  const [field,meta]=useField(name)
const {setFieldValue}=useFormikContext()
const handleChange=(event)=>{
    const {checked}=event.target
    setFieldValue(name,checked)
}
const configChecked={
    ...field,
    ...otherProps,
    onChange:handleChange
}
const configFormControl={}

if(meta && meta.touched && meta.error){
    configFormControl.error=true;
}

  return (
    <>
    <FormControl {...configFormControl}>
      <FormLabel component='legend'>
        {legend}
      </FormLabel>
      <FormGroup>
        <FormControlLabel control={<CheckBox {...configChecked}/>}>{label}</FormControlLabel>
      </FormGroup>
    </FormControl>
    </>
   
  )
}

export default CheckBox