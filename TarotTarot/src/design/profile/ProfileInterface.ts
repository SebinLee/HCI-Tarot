import React from "react";
import { StyleProp, ViewStyle } from "react-native";

export interface ProfileImageProp {
    profilePic: string;
    blurRadius: number;
    imageStyle?: any;
    renderOnModal?: boolean;
}

export interface ProfileProp extends ProfileImageProp {
    nickname?: string;
    onPress?: () => void;
    speaking?: boolean;
    penalty?: boolean;
    host?: boolean;
}

export interface ProfileInlineProp extends ProfileProp {
    onPress?: () => void;
    schoolInfo?: string;
    AccessoryRight?: React.ElementType;
    style?: StyleProp<ViewStyle>;
}

export interface ProfileAccessoryProp {
    accessory: "none" | "host" | "speaking";
    position: "left" | "right";
}
