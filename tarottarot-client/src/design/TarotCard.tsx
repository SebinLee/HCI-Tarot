import React from 'react'
import './tarotcard.sass'

//@ts-ignore
import Tarot from '../tmp/tarot.jpg'

export default function TarotCard() {
    return (
        <div>
            <img src={Tarot} className="TarotCard-L"/>
        </div>
    )
}