import React from "react";
import { View } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { ButtonLText } from "../Typography";
import { ChipProps } from "./ChipInterface";
import ChipStyle from "./ChipStyle";
import Color from "../Color";

export default function ChipLBase({
    text = "",
    gradient = false,
    chipStyle,
    textColor,
    textStyle,
}: ChipProps) {
    if (gradient) {
        return (
            <LinearGradient
                colors={[
                    Color.BackgroundGradientStart,
                    Color.BackgroundGradientMid,
                    Color.BackgroundGradientEnd,
                ]}
                start={{ x: 0, y: -0.5 }}
                end={{ x: 1, y: 1.5 }}
                style={[ChipStyle.chipL, chipStyle]}
            >
                <ButtonLText style={textStyle} color={textColor}>
                    {text}
                </ButtonLText>
            </LinearGradient>
        );
    }

    return (
        <View style={[ChipStyle.chipL, chipStyle]}>
            <ButtonLText style={textStyle} color={textColor}>
                {text}
            </ButtonLText>
        </View>
    );
}
