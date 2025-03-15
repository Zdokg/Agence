import React from "react";
import { Link } from "react-router-dom";
import "./account.css"


function account(){

    return(
        <div>
            <div class="abc1"></div>
            <div class="abc2"></div>
            <img width="350" height="350" src={`${process.env.PUBLIC_URL}/image/837.jpg`} alt="user-female-circle" className="logoTofla"/>
            <div class="abc3"></div>
            <img width="30" height="30" src="https://img.icons8.com/ios-filled/50/name.png" alt="name" className="a1"/>
            <img width="30" height="30" src="https://img.icons8.com/ios-filled/50/phone.png" alt="phone" className="a2"/>
            <img width="30" height="30" src="https://img.icons8.com/ios-filled/50/email.png" alt="email" className="a3"/>
            <img width="30" height="30" src="https://img.icons8.com/ios-filled/50/about.png" alt="about" className="a4"/>
             <p className="p1">Zaid</p>
             <p className="p2">+216 2611123</p>
             <p className="p3">zaidstt12@gmail.com</p>
             <p className="p4">Traveling is not just about tours to places – it also means <br/> collecting an extensive amount of knowledge about <br/> that particular place.</p>
        </div>
    );
}

export default account;