import React from 'react'
import { useSelector} from 'react-redux'
import Header from '../components/header'
const Home = () => {
    const {fullName}=useSelector(state=>state.userDetails)
  return (
    <div>
      hello {fullName} welcome to home
        <Header/>
    </div>
  )
}
export default Home;