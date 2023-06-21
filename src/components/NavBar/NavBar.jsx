import React, {useState} from 'react'
import  { Link } from 'react-router-dom'
import './navStyle.css'

export default function NavBar() {
  const [showMenu, setShowmenu] = useState(false)
  const handleMenuClick =()=>{
    console.log("hii")
    console.log(!showMenu)
    setShowmenu(!showMenu)
  }
  return (
    <nav>
      <h1>Houses</h1>
     <button className='menu-icon' onClick={handleMenuClick}><svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          viewBox="0 0 20 20"
          fill="white"
        >
          <path
            fillRule="evenodd"
            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
            clipRule="evenodd"
          />
        </svg></button>
     {/* <div className='NavBar'> */}
     <div className={showMenu ? "nav-menu expanded" : "nav-menu"}>
      <ul>
      <li><Link to='/' className='NavItem'>Home</Link></li>
      <li><Link to='./about' className='NavItem'>About</Link></li>
      <li><Link to='/contact' className='NavItem'>Contact us</Link></li>
      <li><Link to="./login" className='NavItem'>Login</Link></li>
      </ul>
      </div>
      </nav>
     
  )
}
