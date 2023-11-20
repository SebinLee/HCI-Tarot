import React from "react";
import LinearGradient from "react-native-linear-gradient";
import { TouchableOpacity } from "react-native";
import { ButtonBaseProps } from "./ButtonInterface";
import { ButtonMText } from "../Typography";
import ButtonStyle from "./ButtonStyle";
import Color from "../Color";

export default function ButtonMBase({
    text = "",
    disabled,
    gradient = false,
    AccessoryLeft,
    AccessoryRight,
    buttonStyle,
    textStyle,
    textColor,
    ...props
}: ButtonBaseProps) {
    if (gradient && !disabled) {
        return (
            <TouchableOpacity {...props}>
                <LinearGradient
                    colors={[
                        Color.BackgroundGradientStart,
                        Color.BackgroundGradientMid,
                        Color.BackgroundGradientEnd,
                    ]}
                    start={{ x: 0, y: -0.5 }}
                    end={{ x: 1, y: 1.5 }}
                    style={[ButtonStyle.buttonM, buttonStyle]}
                >
                    {AccessoryLeft && <AccessoryLeft />}
                    <ButtonMText style={textStyle} color={textColor}>
                        {text}
                    </ButtonMText>
                    {AccessoryRight && <AccessoryRight />}
                </LinearGradient>
            </TouchableOpacity>
        );
    }

    return (
        <TouchableOpacity
            style={[ButtonStyle.buttonM, buttonStyle]}
            disabled={disabled}
            {...props}
        >
            {AccessoryLeft && <AccessoryLeft />}
            <ButtonMText style={textStyle} color={textColor}>
                {text}
            </ButtonMText>
            {AccessoryRight && <AccessoryRight />}
        </TouchableOpacity>
    );
}
