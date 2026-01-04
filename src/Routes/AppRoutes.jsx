import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Cabinet from '../pages/Cabinet'

const AppRoutes = () => {
  return (
    <>
    <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/cabinet' element={<Cabinet/>} />
    </Routes>
    </>
  )
}

export default AppRoutes
