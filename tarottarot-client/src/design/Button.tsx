import React from 'react'
import {ButtonProps} from './Inputs.type'
import './button.sass'

function Button({children, onClick, bordered=false, round=false, flex=true, size="S"}: ButtonProps) {
    return (
        <a
            role="button"
            onClick={onClick}
            className={
                `${flex? "Flex" : ""}
                ${bordered ? "Bordered" : "Filled"} 
                Button-${size.toUpperCase()}${round ? "R" : ""}`
            } 
        >
            {children}
        </a>
    )
}


export default Button