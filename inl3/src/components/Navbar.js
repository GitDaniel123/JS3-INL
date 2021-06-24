import { NavLink } from 'react-router-dom'
import { useState } from 'react'

const Navbar = () => {

    const [showDropdown, setShowDropdown] = useState(false);

    return (
        <nav className="navbar">
            <h1>E-Commerce</h1>
            <ul className="nav-links">
                <li><NavLink className="nav-link" exact to="/">Home</NavLink></li>
                <li><NavLink className="nav-link" exact to="/About">About</NavLink></li>
                <li><NavLink className="nav-link" exact to="/products">Products</NavLink></li>
                <div>
                <div className="dropdown">
                    <i className=" fas fa-shopping-cart" onClick={() => setShowDropdown(prev => !prev)}></i>
                    {showDropdown && <div className="dropdown-content">
                        shoppingcart
                    </div>}
                </div>

                </div>
            </ul>
            
        </nav>
    )
}

export default Navbar