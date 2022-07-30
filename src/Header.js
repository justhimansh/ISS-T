import React from "react"
import logo from './static/ISS-LOGO-2.png';



function Header(){
    return(
        <header>
            <div className="title">
                <img className="ISS" src={logo}/>
            </div>
        </header>
    )
}

export default Header