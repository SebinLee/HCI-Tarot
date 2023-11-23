import React from "react";
import Screen from "../design/Screen";
import { NavigationPropEnum } from "../design/layout/LayoutInterface";
import { TouchableOpacity } from "react-native";
import { Text, TextType } from "../design/Text";

export default function Home() {
    return (
        <Screen
            navigationLeftProp={NavigationPropEnum.hide}
            navigationRightProp={NavigationPropEnum.profile}
        >
            <TouchableOpacity>
                <Text type={TextType.H2}>타로 숲</Text>
            </TouchableOpacity>
            <TouchableOpacity>
                <Text type={TextType.H2}>타로 백과사전</Text>
            </TouchableOpacity>
            <TouchableOpacity>
                <Text type={TextType.H2}>해석 연습</Text>
            </TouchableOpacity>
        </Screen>
    );
}
