import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Signup from './pages/Signup'
import Login from './pages/Login'


function App() {
  return (
    <div>
      <BrowserRouter>
          <Routes>
             <Route path='/' element={<Signup/>}/>
             <Route path='/login' element={<Login/>}/>
          </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App