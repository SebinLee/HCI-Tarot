import React from 'react'
import './text.sass'

export default function Text({
    size= "S",
    color="primary",
    align="center",
    bold=false,
    children
}) {

    return (
        <p className={
            `Font-${size.toUpperCase()} Font-${align} Font-${color.toLowerCase()} ${bold ? "Font-Bold" : ""}`
        }>
            {children}
        </p>
    )

}