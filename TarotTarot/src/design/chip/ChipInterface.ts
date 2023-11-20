import { ViewStyle, StyleProp, TextStyle } from "react-native";
import Color from "../Color";

export interface ChipProps {
    text: string;
    chipStyle?: StyleProp<ViewStyle>;
    textStyle?: StyleProp<TextStyle>;
    textColor?: Color;
    gradient?: boolean;
}
