import React from 'react'

const Navbar    = () => {
    return (
        <div>
            <nav className='navbar navbar-dark bg-dark navbar-expand-lg'>
                <a href="#" className='navbar-brand'>Bootsrap Logo </a>
                <div className='ml-auto'>
                    <ul className='navbar-nav '>
                        <li className='nav-item'><a href="#" className='nav-link'>Home</a></li>
                        <li className='nav-item'><a href="#" className='nav-link'>Services</a>
                        </li>
                        <li className='nav-item'><a href="#" className='nav-link'>About</a>
                        </li>
                        <li className='nav-item'><a href="#" className='nav-link'>Employees</a>
                        </li>
                        <li className='nav-item'><a href="#" className='nav-link'>Contact</a>
                        </li>
                        <li className='nav-item'><a href="#" className='nav-link'>Login</a>
                        </li>
                    </ul>
                    
                </div>
            </nav>
        </div>
    )
}

export default Navbar