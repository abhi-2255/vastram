
import { useState } from 'react'
import Home from './pages/Home'
import Login from './pages/LoginSignup'
import OtpForm from './pages/Otp'

export default function App() {

  const [users. setUsers] = useState([])

  const fetchUsers = async()=>{
    const res = await fetch("http://localhost:5000/api/users",{
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    const data = await res.json()
    setUsers(data)
  }

  return (
    <>
      <Home/>
      <Login />
      <OtpForm/>
    </>
  )
}


