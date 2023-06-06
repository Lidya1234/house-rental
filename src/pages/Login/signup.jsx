import React, {useState} from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import './login.css'
export default function Signup() {
const [details, setDetails] = useState({fullName: '', userName: "", email: "" , password: "", confirmPassword: ""})
const dispatch = useDispatch()
const handleSubmit =()=>{
console.log('hi')
}
const handleChange = (e)=>{
 setDetails({...details,
    [e.target.name]: e.target.value})
}
  return (

    <div className='loginpage'>
      
      <div className='signupDetails'>
      <h3 className="heading"><strong>SIGN UP</strong> </h3>
        <input type="text" name='userName' className="input" value={details.userName} placeholder='Enter user name' onChange={(e)=>handleChange(e)}/>
        <input type="email" name='email' className="input" value={details.email} placeholder="Enter your email " onChange={(e)=>handleChange(e)}/>
        <input type="password" name='password' className="input" value={details.password} placeholder='Enter password' onChange={(e)=>handleChange(e)}/>
        <input type="password" name='confirmPassword' className="input" value={details.confirmPassword} placeholder="Confirm pasword" onChange={(e)=>handleChange(e)}/>
        <button type="submit" onClick={handleSubmit} className="loginbtn">Register</button>
        <p> Already have an account <Link to='/login'>Login</Link></p>
    </div>
    </div>
  )
}
