import React from 'react'
import './Header.css'
import krishna from '../../Assets/krishna.jpg'


function Header() {

    return (
        <div className="header__container">
            <div className="username__tasks">
                <h1>Hello Krishna Jha</h1>
                <p>You have 3 tasks</p>
            </div>
            <div className="user__profile">
                <img src={krishna} className="profile_pic" alt=""/>
            </div>
        </div>
    )
}

export default Header
