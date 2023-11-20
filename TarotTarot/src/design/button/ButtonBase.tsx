import React from "react";
import { TouchableOpacity } from "react-native";
import { ButtonProps, ButtonSize } from "./ButtonInterface";
import { Typography, TypographyType } from "../Typography";
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
        switch(size) {
            case ButtonSize.S: return ButtonStyle.buttonS
            case ButtonSize.M: return ButtonStyle.buttonM
            case ButtonSize.L: return ButtonStyle.buttonL
        }
    }

    const getTypographyType = () => {
        switch(size) {
            case ButtonSize.S: return TypographyType.ButtonS
            case ButtonSize.M: return TypographyType.ButtonM
            case ButtonSize.L: return TypographyType.ButtonL
        }
    }

    return (
        <TouchableOpacity
            style={[getButtonBaseStyle(), buttonStyle]}
            disabled={disabled}
            {...props}
        >
            <Typography style={textStyle} color={textColor} type={getTypographyType()}>
                {text}
            </Typography>
        </TouchableOpacity>
    );
}
