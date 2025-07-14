import { useState } from 'react'
import './App.css'
import VehicleCatalog from './components/VehicleCatalog'
import Header from './components/Header'

function App() {
  return (
    <div className="app">
      <Header />
      <VehicleCatalog />
    </div>
  )
}

export default App
