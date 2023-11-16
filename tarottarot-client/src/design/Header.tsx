import React from 'react'
import './header.sass'
import { Logo, Logotype } from './Logo.tsx'
import { Link } from 'react-router-dom'

//@ts-ignore
import DayeKim from '../tmp/DayeKim.png'

function Profile({image, name}) {
    return (
        <Link className="Profile" to="/mypage">
            <img src={image} />
            <p>{name}</p>
        </Link>
    )
}


function Header({image=DayeKim, name="Daye Kim"}) {
    return (
        <header>
            <div className='Header'>
                <div>
                    <Logotype/>
                </div>
                <Profile
                    image={image}
                    name={name}
                />
            </div>
        </header>
    )
}

export default Header