import React,{useState,useEffect} from 'react'
import Card from '../components/card'
import axios from 'axios'

const Donor = () => {
  const [recieverDetails,setRecieverDetails]=useState([])
  const fetchDetails=async()=>{
    const response= await axios.get('http://localhost:5000/reciever')
    const data=response.data.validDetails
    setRecieverDetails(data)
  }
  useEffect(()=>{
    fetchDetails()
  },
  []
  )
  return (
    
       recieverDetails.map((item,id)=>{
        return(
          <Card details={item}/>
        )
       })
   
  )
}

export default Donor