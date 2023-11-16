import React, { useState } from 'react'
import Screen from '../design/Screen.tsx'
import {Signature} from '../design/Logo.tsx'
import Button from '../design/Button.tsx'
import Input from '../design/Input.tsx'
import Text from '../design/Text.tsx'
import TarotCard from '../design/TarotCard.tsx'


function Start() {
    const [text, setText] = useState("")

    return (
        <Screen header={true}>
            <Signature />
            <Text color="primary">
                Lorem ipsum dolor sit amet, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Text>
            <Button onClick={(e) => {alert("안녕하세요")}}>
                testtestsetsetset
            </Button>
            <Input text={text} setText={setText}/>
            <TarotCard/>
        </Screen>
    )
}

export default Start 