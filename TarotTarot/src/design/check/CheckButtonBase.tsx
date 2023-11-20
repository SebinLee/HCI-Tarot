import React from "react";
import { Icon } from "@ui-kitten/components";
import { View, TouchableOpacity } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { CheckProps } from "./CheckInterface";
import CheckStyle from "./CheckStyle";
import Color from "../Color";

export default function CheckButtonBase({ checked, onPress }: CheckProps) {
    return (
        <TouchableOpacity onPress={onPress}>
            {checked ? <Checked /> : <UnChecked />}
        </TouchableOpacity>
    );
}

// 체크되지 않은 상태의 버튼을 나타냅니다
function UnChecked() {
    return (
        <View
            style={[
                CheckStyle.checkButtonBase,
                { borderWidth: 1, borderColor: Color.BorderSecondary },
            ]}
        >
            <Icon
                width={16}
                height={16}
                fill={Color.BorderSecondary}
                name="checkmark-outline"
            />
        </View>
    );
}

// 체크된 상태의 버튼을 나타냅니다
function Checked() {
    return (
        <LinearGradient
            colors={[
                Color.BackgroundGradientStart,
                Color.BackgroundGradientMid,
                Color.BackgroundGradientEnd,
            ]}
            start={{ x: 0, y: -0.5 }}
            end={{ x: 1, y: 1.5 }}
            style={CheckStyle.checkButtonBase}
        >
            <Icon
                width={16}
                height={16}
                fill="#ffffff"
                name="checkmark-outline"
            />
        </LinearGradient>
    );
}
