import React from 'react'
import {Route,Routes} from "react-router-dom"
import Authors from './pages/authors'
import MainPage from './pages/main'


function App() {
  return (
    <> 
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/authors" element={<Authors />} />
      </Routes>
      
    </>
  )
}

export default App
