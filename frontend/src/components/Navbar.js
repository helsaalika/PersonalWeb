import React from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
    const navigate = useNavigate();
    const Logout = async() => {
        try {
            await axios.delete('http://localhost:5000/logout')
            navigate('/');
        } catch (error) {
            console.log(error)
        }
    }

  return (
    <nav class="navbar" role="navigation" aria-label="main navigation">
        <div className="container">
            <div class="navbar-brand">
            <a class="navbar-item" href="https://bulma.io">
                <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28" alt=''/>
            </a>
        
            <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
            </a>
            </div>
        
            <div id="navbarBasicExample" class="navbar-menu">
            <div class="navbar-start">
                <a class="navbar-item">
                Home
                </a>
        
                <a class="navbar-item">
                Documentation
                </a>
        
                <div class="navbar-item has-dropdown is-hoverable">
                <a class="navbar-link">
                    More
                </a>
        
                <div class="navbar-dropdown">
                    <a class="navbar-item">
                    About
                    </a>
                    <a class="navbar-item">
                    Jobs
                    </a>
                    <a class="navbar-item">
                    Contact
                    </a>
                    <hr class="navbar-divider"/>
                    <a class="navbar-item">
                    Report an issue
                    </a>
                </div>
                </div>
            </div>
        
            <div class="navbar-end">
                <div class="navbar-item">
                <div class="buttons">
                    <button class="button is-primary" onClick={Logout}>
                        <strong>Logout</strong>
                    </button>
                </div>
                </div>
            </div>
            </div>
        </div>
    </nav>
  )
}

export default Navbar