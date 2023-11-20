import React from "react";
import { View } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { ButtonSText } from "../Typography";
import { ChipProps } from "./ChipInterface";
import ChipStyle from "./ChipStyle";
import Color from "../Color";

export default function ChipSBase({
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
                style={[ChipStyle.chipS, chipStyle]}
            >
                <ButtonSText style={textStyle} color={textColor}>
                    {text}
                </ButtonSText>
            </LinearGradient>
        );
    }

    return (
        <View style={[ChipStyle.chipS, chipStyle]}>
            <ButtonSText style={textStyle} color={textColor}>
                {text}
            </ButtonSText>
        </View>
    );
}
