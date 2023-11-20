import React from "react";
import { Platform, StatusBar, View } from "react-native";
import { getStatusBarHeight } from "react-native-safearea-height";

/**
 * @description 상단바를 표출하는 컴포넌트입니다
 * @param {boolean} hide : StatusBar가 화면에 표출되지 않을지 결정합니다. 기본값은 false이며, true로 설정시 투명한 StatusBar가 표출됩니다
 */
export default function StatusBarBase() {
    return Platform.OS === "ios" ? <IOS /> : <Android />;
}

function IOS() {
    return (
        <View
            style={{
                height: getStatusBarHeight(),
                backgroundColor: "#ffffff",
            }}
        />
    );
}

function Android() {
    //@ts-ignore
    if (Platform.Version < 28) return null;

    return (
        <StatusBar
            translucent={true}
            backgroundColor="transparent"
            barStyle="dark-content"
        />
    );
}
