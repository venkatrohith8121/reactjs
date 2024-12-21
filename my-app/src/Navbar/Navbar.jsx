import React from 'react'
import {Link} from 'react-router-dom'
const Navbar = () => {
  return <nav className='navbar navbar-dark bg-dark navbar-expand-lg'>
             <Link to="/" className='navbar-brand'>React Logo</Link> 
             <div className="ms-auto">
                <ul className='navbar-nav'>
                    <li><Link to="/index" className='nav-link'>Home</Link></li>
                    <li><Link to="/contact" className='nav-link'>Contacts</Link></li>
                </ul>
             </div>
        </nav>
}

export default Navbar