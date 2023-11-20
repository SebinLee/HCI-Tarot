import React from "react";
import { View } from "react-native";
import { ButtonMText } from "../Typography";
import { ChipProps } from "./ChipInterface";
import ChipStyle from "./ChipStyle";

export default function LabelBase({
    text,
    chipStyle,
    textColor,
    textStyle,
}: ChipProps) {
    return (
        <View style={[ChipStyle.label, chipStyle]}>
            <ButtonMText style={textStyle} color={textColor}>
                {text}
            </ButtonMText>
        </View>
    );
}
