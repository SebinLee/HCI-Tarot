import React from "react";
import * as RN from 'react-native'
import Color from "./Color";

export function Text({
    type = TextType.Body1,
    color = Color.Primary,
    style,
    children,
    ...props
}: TextProps) {

    const GetBaseStyle = () => {
        switch(type) {
            case TextType.LargeTitle: return styles.largeTitle;
            case TextType.H1: return styles.h1
            case TextType.H2: return styles.h2
            case TextType.H3: return styles.h3
            case TextType.Body1: return styles.body1
            case TextType.Body2: return styles.body2
            case TextType.ButtonL: return styles.buttonL
            case TextType.ButtonM: return styles.buttonM
            case TextType.ButtonS: return styles.buttonS
            case TextType.Caption: return styles.caption
        }
    }

    return (
        <RN.Text {...props} style={[GetBaseStyle(), { color }, style]}>
            {children}
        </RN.Text>
    );
}

const styles = RN.StyleSheet.create({
    largeTitle: {
        fontSize: 28,
        fontWeight: "700",
    },

    h1: {
        fontSize: 20,
        fontWeight: "700",
    },

    h2: {
        fontSize: 18,
        fontWeight: "700",
    },

    h3: {
        fontSize: 18,
        fontWeight: "500",
    },

    body1: {
        fontSize: 16,
        fontWeight: "500",
    },

    body2: {
        fontSize: 14,
        fontWeight: "500",
    },

    caption: {
        fontSize: 12,
        fontWeight: "500",
    },

    buttonL: {
        fontSize: 16,
        fontWeight: "500",
    },

    buttonM: {
        fontSize: 14,
        fontWeight: "500",
    },

    buttonS: {
        fontSize: 12,
        fontWeight: "500",
    },
});


export enum TextType {
    LargeTitle, H1, H2, H3, Body1, Body2, Caption, ButtonL, ButtonM, ButtonS
}

interface TextProps extends RN.TextProps {
    type?: TextType;
    color?: Color;
    children?: any;
}
