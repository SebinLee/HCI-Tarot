import React from 'react'
import './input.sass'

export default function Input({text, setText, bordered=true, round=false, flex=true, size="S", ...props}) {
    return (
        <div className="Flex">
            <textarea
                value={text}
                onChange={(e) => {setText(e.target.value)}}
                className="Flex Input-S"
                rows={1}
            />
        </div>
    )
}

