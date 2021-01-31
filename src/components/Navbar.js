import React from 'react'
import bootstrap from 'bootstrap/dist/css/bootstrap.min.css';

function Navbar() {
    return (
        <div>
            <nav className="navbar navbar-dark bg-dark">
                <a><h1 style={{color: 'white'}}>The Meal DB</h1></a>
            </nav>
        </div>
    )
}

export default Navbar
