import { StyleSheet } from "react-native";
import Color from "../Color";

export const profileLUnit = 96;
export const profileMUnit = 50;
export const profileSUnit = 36;
export const accessoryWrapperSize = 24;
export const accessoryItemSize = 15;
export const profileStyle = StyleSheet.create({
    profileImageLBase: {
        width: profileLUnit,
        height: profileLUnit,
        borderRadius: profileLUnit / 2,
        margin: 15,
    },

    profileImageMBase: {
        width: profileMUnit,
        height: profileMUnit,
        borderRadius: profileMUnit / 2,
    },

    profileImageSBase: {
        width: profileSUnit,
        height: profileSUnit,
        borderRadius: profileSUnit / 2,
    },

    profileBlur: {
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
    },

    profileText: {
        flexWrap: "wrap",
        textAlign: "center",
        width: profileMUnit + 10,
    },

    profileContainer: {
        alignItems: "center",
        width: profileMUnit + 10,
        height: profileMUnit,
        marginBottom: 5,
    },

    profileAnimation: {
        left: 0,
        right: 0,
        bottom: -0.5,
        opacity: 0.9,
        position: "absolute",
    },

    profileAccessory: {
        bottom: -5,
        position: "absolute",
        alignItems: "center",
        justifyContent: "center",
        width: accessoryWrapperSize,
        height: accessoryWrapperSize,
        borderRadius: accessoryWrapperSize / 2,
        backgroundColor: Color.BackgroundPrimary,
        shadowColor: Color.TextPrimary,
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 3,
    },

    profileAccessoryLeft: {
        left: 0,
    },

    profileAccessoryRight: {
        right: 0,
    },
});
