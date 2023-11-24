import React from "react";
import Color from "../Color";

export interface NavigationBaseProp {
    title?: string;
    navigationPropColor?: Color;
    navigationLeftProp?: NavigationPropEnum;
    navigationRightProp?: NavigationPropEnum;
    onLeftPropPress?: () => void;
    onRightPropPress?: () => void;
}

export interface ScreenProp extends NavigationBaseProp {
    backgroundColor?: Color;
    children: React.ReactNode;
    horizontalPadding?: boolean;
    hideNavigationBar?: boolean;
}

export interface NavigationIconProp {
    prop: NavigationPropEnum;
    color?: Color;
}

export enum NavigationPropEnum {
    hide,
    back,
    more,
    close,
    profile,
    submit,
}
