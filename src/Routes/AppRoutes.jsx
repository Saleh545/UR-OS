import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import SignIn from '../pages/SignIn'

const AppRoutes = () => {
  return (
    <>
    <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/sign' element={<SignIn/>} />
    </Routes>
    </>
  )
}

export default AppRoutes
