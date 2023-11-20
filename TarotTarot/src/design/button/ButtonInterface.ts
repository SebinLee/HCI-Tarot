import Color from "../Color";
import {
    StyleProp,
    TouchableOpacityProps,
    ViewStyle,
    TextStyle,
} from "react-native";
import React from "react";

export interface ButtonProps extends TouchableOpacityProps {
    text: string;
    textColor?: Color;
    textStyle?: StyleProp<TextStyle>;
    buttonStyle?: StyleProp<ViewStyle>;
    AccessoryLeft?: React.ElementType;
    AccessoryRight?: React.ElementType;
}

export interface ButtonTimedProps extends ButtonProps {
    expireAt?: number;
    onExpire?: () => void;
}

export interface ButtonBaseProps extends ButtonProps, ButtonTimedProps {
    gradient?: boolean;
}
