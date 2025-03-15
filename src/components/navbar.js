import React from "react";
import { Link } from "react-router-dom";
import "../Style/navbar.css"


function Navbar(){
    return(
        <div class="all">
            <img src="" alt=""/>
            <h1 class="sfar">VOYAGE++</h1>
            <div>
            <Link to="/" class="a">ACCEUIL</Link>
            <Link to="/service" class="b">SERVICE</Link>
            <Link to="/experience" class="c">EXPERIENCE</Link>
            <Link to="/login" class="d">LOGIN</Link>
            <img width="50" height="50" src="https://img.icons8.com/ios/50/user-male-circle--v1.png" alt="user-male-circle--v1" className="logoUser"/>

            </div>
        </div>
    );
}

export default Navbar;