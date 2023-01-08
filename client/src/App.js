
import './App.css';
import Register from './auth/register';
import {Routes, Route} from 'react-router-dom'
import Login from './auth/login';

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Login/>}/>
      <Route path="/register" element={<Register/>}/>
    </Routes>
    </>
   
  );
}
export default App;
