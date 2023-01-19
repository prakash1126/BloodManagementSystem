import React from 'react'
import { useSelector} from 'react-redux'
import Header from '../components/header'
const Home = () => {
    const {fullName}=useSelector(state=>state.userDetails)
  return (

    <div>
        <Header/>
        <h1>hello {fullName}</h1>
    </div>
  )
}
export default Home;