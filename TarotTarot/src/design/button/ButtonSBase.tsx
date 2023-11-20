import React from "react";
import LinearGradient from "react-native-linear-gradient";
import { TouchableOpacity } from "react-native";
import { ButtonBaseProps } from "./ButtonInterface";
import { ButtonSText } from "../Typography";
import ButtonStyle from "./ButtonStyle";
import Color from "../Color";

export default function ButtonSBase({
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
                    style={[ButtonStyle.buttonS, buttonStyle]}
                >
                    {AccessoryLeft && <AccessoryLeft />}
                    <ButtonSText style={textStyle} color={textColor}>
                        {text}
                    </ButtonSText>
                    {AccessoryRight && <AccessoryRight />}
                </LinearGradient>
            </TouchableOpacity>
        );
    }

    return (
        <TouchableOpacity
            style={[ButtonStyle.buttonS, buttonStyle]}
            disabled={disabled}
            {...props}
        >
            {AccessoryLeft && <AccessoryLeft />}
            <ButtonSText style={textStyle} color={textColor}>
                {text}
            </ButtonSText>
            {AccessoryRight && <AccessoryRight />}
        </TouchableOpacity>
    );
}
