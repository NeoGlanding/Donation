import React from 'react'
import './NavigationBar.css'

const Navbar = props => {
    return (
        <nav className="navigation_bar">
            <div className="container_navbar">
                <p>Logo</p>
            </div>
            <div className="container_navbar_end">
                <p>Home</p>
                <p>About</p>
                <p>Donation</p>
            </div>
        </nav>
    )
}

export default Navbar