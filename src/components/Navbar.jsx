import React from 'react'
import "../styles/Navbar.css"

const Navbar = () => {
    return(
        <nav>
            <div className="firstChild">
                <img src="./images/nexcent.jpg" alt="" />
            </div>

            <div className="secondChild">
                <a href="">Home</a>
                <a href="">About</a>
                <a href="">Project</a>
                <a href="">Contact</a>
            </div>

            <div className="thirdChild">
            <i class="fa-regular fa-user"></i>
            <i class="fa-solid fa-phone"></i>
            <i class="fa-solid fa-envelope"></i>
            </div>
        </nav>
    )
}

export default Navbar