import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Routes ,Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Layout from './hoc/Layout'
import Product from './pages/Product'
import Contact from './pages/Contact'


function App() {


  return (
    <>
    <Routes>
      <Route element={<Layout />}>
      <Route path='/' element={<Home />}></Route>
      <Route path='/product' element={<Product />}></Route>
      <Route path='/about' element={<About />}></Route>
      <Route path='/contact' element={<Contact />}></Route>
      </Route>
    </Routes>
    </>
  )
}

export default App
