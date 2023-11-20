import React from "react";
import { Text, StyleSheet, TextProps } from "react-native";
import Color from "./Color";

export function LargeTitle({
    color = Color.TextPrimary,
    style,
    children,
    ...props
}: TypographyProps) {
    return (
        <Text {...props} style={[styles.largeTitle, { color }, style]}>
            {children}
        </Text>
    );
}

export function H1({
    color = Color.TextPrimary,
    style,
    children,
    ...props
}: TypographyProps) {
    return (
        <Text {...props} style={[styles.h1, { color }, style]}>
            {children}
        </Text>
    );
}

export function H2({
    color = Color.TextPrimary,
    style,
    children,
    ...props
}: TypographyProps) {
    return (
        <Text {...props} style={[styles.h2, { color }, style]}>
            {children}
        </Text>
    );
}

export function H3({
    color = Color.TextPrimary,
    style,
    children,
    ...props
}: TypographyProps) {
    return (
        <Text {...props} style={[styles.h3, { color }, style]}>
            {children}
        </Text>
    );
}

export function Body1({
    color = Color.TextPrimary,
    style,
    children,
    ...props
}: TypographyProps) {
    return (
        <Text {...props} style={[styles.body1, { color }, style]}>
            {children}
        </Text>
    );
}

export function Body2({
    color = Color.TextPrimary,
    style,
    children,
    ...props
}: TypographyProps) {
    return (
        <Text {...props} style={[styles.body2, { color }, style]}>
            {children}
        </Text>
    );
}

export function Caption({
    color = Color.TextPrimary,
    style,
    children,
    ...props
}: TypographyProps) {
    return (
        <Text {...props} style={[styles.caption, { color }, style]}>
            {children}
        </Text>
    );
}

export function ButtonLText({
    color = Color.TextPrimary,
    style,
    children,
    ...props
}: TypographyProps) {
    return (
        <Text {...props} style={[styles.buttonL, { color }, style]}>
            {children}
        </Text>
    );
}

export function ButtonMText({
    color = Color.TextPrimary,
    style,
    children,
    ...props
}: TypographyProps) {
    return (
        <Text {...props} style={[styles.buttonM, { color }, style]}>
            {children}
        </Text>
    );
}

export function ButtonSText({
    color = Color.TextPrimary,
    style,
    children,
    ...props
}: TypographyProps) {
    return (
        <Text {...props} style={[styles.buttonS, { color }, style]}>
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

export interface TypographyProps extends TextProps {
    color?: Color;
    children?: any;
}
