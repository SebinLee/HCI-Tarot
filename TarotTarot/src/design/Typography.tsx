import React from "react";
import { Text, StyleSheet, TextProps } from "react-native";
import Color from "./Color";

export function Typography({
    type = TypographyType.Body1,
    color = Color.Primary,
    style,
    children,
    ...props
}: TypographyProps) {

    const GetBaseStyle = () => {
        switch(type) {
            case TypographyType.LargeTitle: return styles.largeTitle;
            case TypographyType.H1: return styles.h1
            case TypographyType.H2: return styles.h2
            case TypographyType.H3: return styles.h3
            case TypographyType.Body1: return styles.body1
            case TypographyType.Body2: return styles.body2
            case TypographyType.ButtonL: return styles.buttonL
            case TypographyType.ButtonM: return styles.buttonM
            case TypographyType.ButtonS: return styles.buttonS
            case TypographyType.Caption: return styles.caption
        }
    }

    return (
        <Text {...props} style={[GetBaseStyle(), { color }, style]}>
            {children}
        </Text>
    );
}

export const styles = StyleSheet.create({
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


export enum TypographyType {
    LargeTitle, H1, H2, H3, Body1, Body2, Caption, ButtonL, ButtonM, ButtonS
}

interface TypographyProps extends TextProps {
    type?: TypographyType;
    color?: Color;
    children?: any;
}
