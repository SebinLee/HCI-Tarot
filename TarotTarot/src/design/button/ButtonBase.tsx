import React from "react";
import { TouchableOpacity } from "react-native";
import { ButtonProps, ButtonSize } from "./ButtonInterface";
import { Text, TextType } from "../Text";
import { ButtonStyle } from "./ButtonStyle";

export default function ButtonBase({
    size = ButtonSize.S,
    text = "",
    disabled,
    buttonStyle,
    textStyle,
    textColor,
    ...props
}: ButtonProps) {
    const getButtonBaseStyle = () => {
        switch (size) {
            case ButtonSize.S:
                return ButtonStyle.buttonS;
            case ButtonSize.M:
                return ButtonStyle.buttonM;
            case ButtonSize.L:
                return ButtonStyle.buttonL;
        }
    };

    const getTextType = () => {
        switch (size) {
            case ButtonSize.S:
                return TextType.ButtonS;
            case ButtonSize.M:
                return TextType.ButtonM;
            case ButtonSize.L:
                return TextType.ButtonL;
        }
    };

    return (
        <TouchableOpacity
            style={[getButtonBaseStyle(), buttonStyle]}
            disabled={disabled}
            {...props}
        >
            <Text style={textStyle} color={textColor} type={getTextType()}>
                {text}
            </Text>
        </TouchableOpacity>
    );
}
