import React, {useState} from 'react'
import { useDispatch } from 'react-redux'
import './contact.css'
export default function Contact() {
const [userName, setUserName] = useState('')
const [comment, setComment] = useState('')
const dispatch = useDispatch()
const handleClick =()=>{
console.log('hi')
}
  return (

    <div className='loginpage'>
      
      <div className='loginDetails'>
      <h3 className="heading"><strong>CONTACT US</strong> </h3>
        <input type="text" name='userName' className="input" value={userName} placeholder='Enter user name' onChange={(e)=>setUserName(e.target.value)}/>
        <input type="textArea" name='comment' className="input inputArea" value={comment} placeholder="Enter your comment here ..." onChange={(e)=>setComment(e.target.value)}/>
        <button type="submit" onClick={handleClick} className="loginbtn">Submit</button>
    </div>
    </div>
  )
}
