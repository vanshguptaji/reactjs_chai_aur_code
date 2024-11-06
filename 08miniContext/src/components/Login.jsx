import React from 'react'
import { useState, useContext } from 'react'
import UserContext from '../context/UserContext'

function Login() {
    
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const {setUser} = useContext(UserContext)//the const {setUser} is destructured and then used as the same name what it does is takes setUser from USerCOntext and assins it to useState only

    const handleSubmit = (e) => {
        e.preventDefault()
        setUser({username, password})//this creates an object of username and password and destructures it too
        
    }
  return (
    <div>
        <h2>Login</h2>
        <input type='text'
        value={username}
        onChange={(e) => setUsername(e.target.value)} 
        placeholder='username'/>
        <input type='text'
        value={password}
        onChange={(e) => setPassword(e.target.value)} 
        placeholder='password'/>
        <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default Login