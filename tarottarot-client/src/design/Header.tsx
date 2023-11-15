import React from 'react'
import './header.sass'
import { Logo, Logotype } from './Logo.tsx'

//@ts-ignore
import DayeKim from '../tmp/DayeKim.png'

function Profile({image, name}) {
    return (
        <a className="Profile" href={"http://localhost:3000"}>
            <img src={image} />
            <p>{name}</p>
        </a>
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