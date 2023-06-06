import React, {useState} from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import './login.css'
export default function Login() {
const [userName, setUserName] = useState('')
const [password, setPassword] = useState('')
const dispatch = useDispatch()
const handleClick =()=>{
console.log('hi')
}
  return (

    <div className='loginpage'>
      
      <div className='loginDetails'>
      <h3 className="heading"><strong>SIGN IN</strong> </h3>
      <p className="desc">Hello there: sign in and start managing your system</p>
        <input type="text" name='userName' className="input" value={userName} placeholder='Enter user name' onChange={(e)=>setUserName(e.target.value)}/>
        <input type="text" name='password' className="input" value={password} placeholder="Enter password" onChange={(e)=>setPassword(e.target.value)}/>
        <button type="submit" onClick={handleClick} className="loginbtn">Submit</button>
        <p> Don't have an account yet <Link to='/signup'>Register</Link></p>
    </div>
    </div>
  )
}
