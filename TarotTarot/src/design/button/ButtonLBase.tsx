import React from "react";
import LinearGradient from "react-native-linear-gradient";
import { TouchableOpacity } from "react-native";
import { ButtonBaseProps } from "./ButtonInterface";
import { ButtonLText } from "../Typography";
import ButtonStyle from "./ButtonStyle";
import Color from "../Color";

export default function ButtonLBase({
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
                    style={[ButtonStyle.buttonL, buttonStyle]}
                >
                    {AccessoryLeft && <AccessoryLeft />}
                    <ButtonLText style={textStyle} color={textColor}>
                        {text}
                    </ButtonLText>
                    {AccessoryRight && <AccessoryRight />}
                </LinearGradient>
            </TouchableOpacity>
        );
    }

    return (
        <TouchableOpacity
            style={[ButtonStyle.buttonL, buttonStyle]}
            disabled={disabled}
            {...props}
        >
            {AccessoryLeft && <AccessoryLeft />}
            <ButtonLText style={textStyle} color={textColor}>
                {text}
            </ButtonLText>
            {AccessoryRight && <AccessoryRight />}
        </TouchableOpacity>
    );
}
