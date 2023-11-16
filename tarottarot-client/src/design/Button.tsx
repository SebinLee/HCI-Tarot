import React from 'react'
import './button.sass'

function Button({bordered=true, round=false, flex=true, size="S", ...props}) {
    return (
        <a
            role="button"
            onClick={props.onClick}
            className={
                `${flex? "Flex" : ""}
                ${bordered ? "Bordered" : "Filled"} 
                Button-${size.toUpperCase()}${round ? "R" : ""}`
            } 
            {...props}
        >
            {props.children}
        </a>
    )
}

export default Button