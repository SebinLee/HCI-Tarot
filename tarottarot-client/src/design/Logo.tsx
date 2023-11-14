import React from 'react'

// @ts-ignore
import LogoPrimary from "./image/logo-primary.png"
// @ts-ignore
import LogoBlack from "./image/logo-black.png"
// @ts-ignore
import LogotypePrimary from './image/logotype-primary.png'
// @ts-ignore
import SignaturePrimary from './image/signature-primary.png'
import "./logo.sass"


function Logo({black = false}) {
    return (
        <div className="ImageContainer">
            <img className="ImageMedium" src={black ? LogoBlack : LogoPrimary}/>
        </div>
    )
}

function Logotype() {
    return (
        <div className="ImageContainer">
            <img className='ImageMedium' src={LogotypePrimary}/>
        </div>
    )
}

function Signature() {
    return (
        <div className="ImageContainer">
            <img className="ImageXXLarge" src={SignaturePrimary} />
        </div>
    )
}

export {Logo, Logotype, Signature}