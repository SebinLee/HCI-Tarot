import React from "react";
import { Dimensions, Platform, SafeAreaView, View } from "react-native";
import { getStatusBarHeight } from "react-native-safearea-height";
import { ScreenProp } from "./layout/LayoutInterface";
import NavigationBarBase from "./layout/NavigationBarBase";
import StatusBarBase from "./layout/StatusBarBase";
import Color from "./Color";

export default function Screen({
    title = "",
    hideNavigationBar = false,
    horizontalPadding = true,
    backgroundColor = Color.White,
    children,
    ...props
}: ScreenProp) {
    return (
        <View
            style={{
                width: Dimensions.get("screen").width,
                height: Dimensions.get("screen").height,
                paddingTop:
                    Platform.OS === "android" ? getStatusBarHeight() : 0,
                paddingBottom: Platform.OS === "android" ? 48 : 0,
                backgroundColor,
            }}
        >
            <StatusBarBase />
            {!hideNavigationBar && (
                <NavigationBarBase title={title} {...props} />
            )}
            <View
                style={{
                    flex: 1,
                    paddingHorizontal: horizontalPadding
                        ? Dimensions.get("screen").width * 0.05
                        : 0,
                }}
            >
                <SafeAreaView style={{ flex: 1 }}>{children}</SafeAreaView>
            </View>
        </View>
    );
}
