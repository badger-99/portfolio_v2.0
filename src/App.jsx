import { useState } from 'react'
import './App.scss'
import { Route, Routes } from 'react-router';

const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={< L/>} />
      </Routes>
    </>
  )
}
export default App
