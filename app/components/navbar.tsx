import React from 'react'
import { Link } from 'react-router'
const Navbar = () => {
  return (
    <div className="navbar">
        <Link to="/" className="Home">  
            <p className="text-2xl font-bold text-gradient">Resumind</p>
        </Link>
        <Link to="/upload" className="upload">
            <button className="primary-button w-fit">Upload Resume</button>
        </Link>
    </div>
  )
}

export default Navbar