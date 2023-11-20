import { StyleSheet } from "react-native";
import { profileMUnit } from "../profile/ProfileStyle";
import Color from "../Color";

const CheckStyle = StyleSheet.create({
    checkButtonBase: {
        width: 20,
        height: 20,
        borderRadius: 10,
        justifyContent: "center",
        alignItems: "center",
    },

    checkProfilePicBaseContainer: {
        alignItems: "center",
        height: profileMUnit,
    },

    checkProfileBaseCheck: {
        width: profileMUnit,
        height: profileMUnit,
        bottom: profileMUnit,
        borderColor: Color.Primary,
        borderRadius: profileMUnit,
        borderWidth: 2,
        backgroundColor: "rgba(255,97,114,0.25)",
        justifyContent: "center",
        alignItems: "center",
    },

    checkBoxBaseContainer: {
        padding: 13,
        marginTop: 10,
        borderWidth: 1,
        borderRadius: 5,
        justifyContent: "space-between",
        flexDirection: "row",
        alignItems: "center",
        flexWrap: "wrap",
    },
});

export default CheckStyle;
