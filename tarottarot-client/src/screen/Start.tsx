import React, { useState } from 'react'
import Screen from '../design/Screen.tsx'
import {Signature} from '../design/Logo.tsx'
import Button from '../design/Button.tsx'
import Input from '../design/Input.tsx'


function Start() {
    const [text, setText] = useState("")

    return (
        <Screen header={true}>
            <Signature />
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <Button onClick={() => {alert("안녕하세요")}}>
                testtestsetsetset
            </Button>
            <Input text={text} setText={setText} className={"Flex Input-L"}/>
        </Screen>
    )
}

export default Start 