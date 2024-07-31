import React, { useState, useEffect } from 'react'
import Nav from './component/Nav'
import './App.css'
import Home from './component/Home'
import Toast from './Containers/Toast'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import UserAuth from './component/UserAuth'

function App() {
  const [useremail, setUseremail] = useState('')
  useEffect(() => {
    const storedEmail = sessionStorage.getItem('user_email');
    setUseremail(storedEmail || '');
  }, [])
  return (
    <>
      <Router>
        <Nav useremail={useremail} />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/signin' element={<UserAuth />} />
          <Route path='/signup' element={<UserAuth />} />
        </Routes>
        <Toast />
      </Router>

    </>
  )
}

export default App
