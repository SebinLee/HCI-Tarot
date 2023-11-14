import React from 'react'
import './header.sass'
import { Logo, Logotype } from './Logo.tsx'

function Header() {

    return (
        <nav>
            <div className='Header'>
                <Logo/>
                <Logotype/>
            </div>
        </nav>
    )

}

export {Header}