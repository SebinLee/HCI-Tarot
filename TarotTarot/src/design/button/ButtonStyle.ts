import { StyleSheet } from "react-native";
import Color from "../Color";

export const ButtonStyle = StyleSheet.create({
    buttonL: {
        height: 45,
        borderRadius: 4,
        marginVertical: 5,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
    },

    buttonM: {
        height: 38,
        borderRadius: 4,
        paddingHorizontal: 15,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
    },

    buttonS: {
        height: 28,
        borderRadius: 4,
        paddingHorizontal: 10,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
    },

    round: {
        borderRadius: 23,
    },

    outlined: {
        borderWidth: 1,
    },
});

export const ButtonColor = {
    SolidDisabled: {
        Button: Color.Primary_light,
        Text: Color.White,
    },

    SolidEnabled: {
        Button: Color.Primary,
        Text: Color.White,
    },

    OutlineDisabled: {
        Button: Color.Primary_light,
        Text: Color.Primary_light,
    },

    OutlineEnabled: {
        Button: Color.Primary,
        Text: Color.Primary,
    },
};
