import React, {useState} from 'react'
import { useDispatch } from 'react-redux'
import './login.css'
export default function Login() {
const [userName, setUserName] = useState('')
const [password, setPassword] = useState('')
const dispatch = useDispatch()
const handleClick =()=>{
console.log('hi')
}
  return (

    <div className='login'>
      <div className='contal'>
        <input type="text" name='userName' className="input" value={userName} onChange={(e)=>setUserName(e.target.value)}/>
        <input type="text" name='password' className="input" value={password} onChange={(e)=>setPassword(e.target.value)}/>
        <button type="submit" onClick={handleClick} className="loginbtn">Submit</button>
    </div>
    </div>
  )
}
