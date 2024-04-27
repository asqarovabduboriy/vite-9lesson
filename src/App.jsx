import React from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import { Routes, Route, } from 'react-router-dom'
import Login from './components/Page/Login/Logi'
import Home from './components/Page/Home/Home'
import Footer from './components/Footer/Footer'
import Auth from './components/Page/Auth/Auth'
import Admin from './components/Page/Admin/Admin'

function App() {


  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/' element={<Auth />}>
          <Route path='admin' element={<Admin />}> </Route>
        </Route>
      </Routes>
      <Footer />

    </>
  )
}

export default App
