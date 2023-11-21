import React from 'react'
import { View } from 'react-native'
import { Screen } from '../design/Layout'
import FastImage from 'react-native-fast-image'
import StyledButton from '../design/Button'
import { ButtonSize } from '../design/button/ButtonInterface'
import { NavigationPropEnum } from '../design/layout/LayoutInterface'

export default function Start() {
    return (
        <Screen title="test" navigationLeftProp={NavigationPropEnum.back} navigationRightProp={NavigationPropEnum.close}>
            <View>
                <FastImage
                    source={require('../design/assets/logo-primary.png')}
                    style={{width:120, height: 120, margin : 30}}
                    resizeMode={FastImage.resizeMode.contain}
                />
                <StyledButton size={ButtonSize.L} text="시작하기"/>
            </View>
        </Screen>
    )
}