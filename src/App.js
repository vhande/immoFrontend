import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Layout from './Layout/Layout'
import Homepage from './Homepage'
import AdvancedSearch from './AdvancedSearch'
import Classified from './Classified'
import Ad from './Ad'
import CreateAccount from './CreateAccount'
import Token from './Context/Token'
import Profile from './Profile'
import ProtectedRoute from './ProtectedRoute'
import Search from './Search'
import { useState } from 'react'
import { GrSearchAdvanced } from 'react-icons/gr'


function App() {
  const [token, setToken] = useState("")
  const [firstname, setFirstname] = useState("")
  const [lastname, setLastname] = useState("")

  return (

    <Token.Provider value={{ token, setToken, firstname, setFirstname, lastname, setLastname, }}>
      <ProtectedRoute>
        <Layout>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/advanced-search" element={<AdvancedSearch />} />
            <Route path="/ad" element={<Ad />} />
            <Route path="/classified/:id" element={<Classified />} />
            <Route path="/create-account" element={<CreateAccount />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/search" element={<Search />} />
          </Routes>
        </Layout>
      </ProtectedRoute>
    </Token.Provider>

  )
}

export default App