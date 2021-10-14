import React from 'react'
import './NavigationBar.css'

const Navbar = props => {
    return (
        <nav className="navigation_bar">
            <div className="container_navbar">
                <p>Tyr</p>
            </div>
            <div className="container_navbar_end">
                <a href="#">Home</a>
                <a href="#about">About</a>
                <a href="#form">Donation</a>
            </div>
        </nav>
    )
}

export default Navbar