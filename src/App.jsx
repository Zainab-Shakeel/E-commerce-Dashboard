import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import React from 'react'
import Dashboard from './Pages/Dashboard'
import Sidebar from './Components/Sidebar'

function App() {
  return (
    <div className='flex'>
      <Sidebar />
      <div className="flex-1 p-10">
        <Dashboard />
      </div>


    </div>
  )
}

export default App
