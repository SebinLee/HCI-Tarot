import React from "react";
import { StyleProp, TextInputProps, ViewStyle } from "react-native";
import Color from "../Color";

export interface ModalBaseProp {
    title?: string;
    subtitle?: string;
    visible: boolean;
    setVisible: React.Dispatch<React.SetStateAction<boolean>>;
    renderClose: boolean;
    onClosePress?: () => void;
    containerStyle?: StyleProp<ViewStyle>;
    children: React.ReactNode;
}

export interface BottomSheetBaseProp {
    heightRatio: number;
    absolute: boolean;
    style?: StyleProp<ViewStyle>;
    children: React.ReactNode;
}

export interface ShadowWrapperBaseProp {
    style?: StyleProp<ViewStyle>;
    children: React.ReactNode;
}

export interface LoadingBaseProp {
    loading: boolean;
}

export interface TextInputBaseProp extends TextInputProps {
    AccessoryRight?: React.ElementType;
    AccessoryBottom?: React.ElementType;
}

export interface SearchBaseProp extends TextInputProps {
    onSubmitEditing?: () => void;
}

export interface NavigationBaseProp {
    title?: string;
    transparentNavigation?: boolean;
    navigationPropColor?: Color;
    navigationLeftProp?: NavigationPropEnum;
    navigationRightProp?: NavigationPropEnum;
    onLeftPropPress?: () => void;
    onRightPropPress?: () => void;
}

export interface ScreenBaseProp extends NavigationBaseProp {
    backgroundColor?: Color;
    backgroundType?: ScreenBackgroundType;
    children: React.ReactNode;
}

export interface ScreenProp extends ScreenBaseProp, NavigationBaseProp {
    horizontalPadding?: boolean;
}

export interface NavigationIconProp {
    prop: NavigationPropEnum;
    color: Color;
    onPress: () => void;
}

export enum ScreenBackgroundType {
    none,
    gradientCard,
    whiteCard,
}

export enum NavigationPropEnum {
    hide,
    back,
    save,
    more,
    close,
    profile,
    complete,
    message,
    messageWhite,
    largeProfile,
    communityWrite,
    communityProfile,
}
