import React from "react";
import { View, Platform, Dimensions, StyleSheet } from "react-native";
import { ScreenBackgroundType, ScreenBaseProp } from "./LayoutInterface";
import { getStatusBarHeight } from "react-native-status-bar-height";
import LinearGradient from "react-native-linear-gradient";
import Color from "../Color";

export default function ScreenBase({
    backgroundColor = Color.BackgroundPrimary,
    backgroundType = ScreenBackgroundType.none,
    children,
}: ScreenBaseProp) {
    const styles = StyleSheet.create({
        container: {
            width: Dimensions.get("screen").width,
            height: Dimensions.get("screen").height,
            paddingTop: Platform.OS === "android" ? getStatusBarHeight() : 0,
            paddingBottom: Platform.OS === "android" ? 48 : 0,
            backgroundColor,
        },

        card: {
            width: Dimensions.get("screen").width,
            height: Dimensions.get("screen").height * 0.3,
            borderBottomLeftRadius: Dimensions.get("screen").width * 0.1,
            borderBottomRightRadius: Dimensions.get("screen").width * 0.1,
            backgroundColor: "#ffffff",
            position: "absolute",
        },
    });

    switch (backgroundType) {
        case ScreenBackgroundType.none:
            return <View style={styles.container}>{children}</View>;

        case ScreenBackgroundType.gradientCard:
            return (
                <View style={styles.container}>
                    <LinearGradient
                        colors={[
                            Color.BackgroundGradientStart,
                            Color.BackgroundGradientMid,
                            Color.BackgroundGradientEnd,
                        ]}
                        style={styles.card}
                        start={{ x: 0, y: 0 }}
                        end={{ x: 1, y: 1 }}
                    />
                    {children}
                </View>
            );

        case ScreenBackgroundType.whiteCard:
            return (
                <LinearGradient
                    colors={[
                        Color.BackgroundGradientStart,
                        Color.BackgroundGradientMid,
                        Color.BackgroundGradientEnd,
                    ]}
                    style={styles.container}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 1 }}
                >
                    <View style={styles.card} />
                    {children}
                </LinearGradient>
            );
    }
}
