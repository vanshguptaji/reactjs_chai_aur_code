import './App.css'
import Login from './components/login'
import Profile from './components/profile'
import UserContextProvider from './context/UserContextProvider'
import React, {useState} from 'react'

function App() {

  return (
    <UserContextProvider>
    <h1>hi</h1>
    <Login/>
    <Profile/>
    </UserContextProvider>
  )
}

export default App
