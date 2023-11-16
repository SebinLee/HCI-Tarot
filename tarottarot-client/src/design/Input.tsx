import React, { useState } from 'react'
import {InputProps} from './Inputs.type'
import './input.sass'

export default function Input({text, setText, bordered=true, round=false, flex=true, size="S"}: InputProps) {
    [text, setText] = useState("")
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

