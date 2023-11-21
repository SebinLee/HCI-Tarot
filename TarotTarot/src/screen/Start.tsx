import React, { useState } from 'react'
import { View } from 'react-native'
import { Screen } from '../design/Layout'
import FastImage from 'react-native-fast-image'
import Button from '../design/Button'
import { ButtonSize } from '../design/button/ButtonInterface'
import { NavigationPropEnum } from '../design/layout/LayoutInterface'
import TextInput from '../design/TextInput'

export default function Start() {

    const [text, setText] = useState("")

    return (
        <Screen
            title="test"
            navigationLeftProp={NavigationPropEnum.back}
            navigationRightProp={NavigationPropEnum.submit}
            onRightPropPress={() => {console.log("Testtest")}}
        >
            <View>
                <FastImage
                    source={require('../design/assets/logo-primary.png')}
                    style={{width:120, height: 120, margin : 30}}
                    resizeMode={FastImage.resizeMode.contain}
                />
                <Button size={ButtonSize.L} text="시작하기"/>
                <TextInput value={text} onChangeText={(text) => setText(text)} multiline={true}/>
            </View>
        </Screen>
    )
}