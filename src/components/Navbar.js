import React from 'react'
// import { Link } from 'react-router-dom'
import Avatar from '../images/default.jpg'
import Logo from '../images/LnData.png'
import {Link} from 'react-router-dom'
export default function Navbar() {
    return (
        <nav className="nav-top">
            <Link to="/">
                <img className="nav-logo" src={Logo} alt="Logo" />
            </Link>
            
            <img className="nav-avatar" src={Avatar} alt="Avatar" />
        </nav>
    )
}
