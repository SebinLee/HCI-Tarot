import Color from "../Color";
import {
    StyleProp,
    TouchableOpacityProps,
    ViewStyle,
    TextStyle,
} from "react-native";

export enum ButtonSize {
    S,
    M,
    L,
}

export interface ButtonProps extends TouchableOpacityProps {
    size: ButtonSize;
    text?: string;
    textColor?: Color;
    textStyle?: StyleProp<TextStyle>;
    buttonStyle?: StyleProp<ViewStyle>;
}
