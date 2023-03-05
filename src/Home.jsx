import React, { useEffect } from 'react'
import Button from './Components/Common/Button'
import { useNavigate } from 'react-router-dom'
import Store from './Pages/Store'
import Navbar from './Navbar'

export default function Home() {

  let navigate = useNavigate();
  const handleLogOut = () => {
    console.log("logging out")
    sessionStorage.removeItem('Auth Token');
    navigate('/login')
  }

  useEffect(() => {
    let authToken = sessionStorage.getItem('Auth Token')

    // if (authToken) {
    //    navigate('/')
    //  }

    if (!authToken) {
      navigate('/login')
    }
  }, [])
  return (
    <div>
      <Navbar />
      <Store />
    </div>
  )
}
    //<div>
      //<Button title="Log out" handleAction={handleLogOut} />
    //</div>
