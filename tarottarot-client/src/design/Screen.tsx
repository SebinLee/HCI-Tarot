import React from 'react'
import "./screen.sass"
import Header from './Header.tsx'


function Screen({children, overflow=true, header=true}) {
    return (
        <div className={`Screen-Wrapper-${header ? "Header": "NoHeader"}`}>
            {header && <Header />}
            <div className={overflow? "ScreenOverflow" : "ScreenFixed"}>
                {children}
            </div>
        </div>
        
    )
}

export default Screen