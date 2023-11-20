import { TouchableOpacityProps } from "react-native";
import Color from "../Color";

export interface CheckProps extends TouchableOpacityProps {
    checked: boolean;
}

export interface CheckProfileProps extends CheckProps {
    profilePic: string;
    blurRadius: number;
}

export interface CheckBoxProps extends CheckProps {
    text: string;
    color?: Color;
    profilePic?: string;
    blurRadius?: number;
    renderOnModal?: boolean;
}
