import { StyleSheet } from "react-native";

const ChipStyle = StyleSheet.create({
    chipL: {
        borderRadius: 23,
        marginVertical: 5,
        paddingVertical: 15,
        paddingHorizontal: 20,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
    },

    chipM: {
        padding: 12,
        borderRadius: 19,
        justifyContent: "center",
        alignItems: "center",
    },

    chipS: {
        borderRadius: 30,
        paddingVertical: 5,
        paddingHorizontal: 10,
        justifyContent: "center",
        alignItems: "center",
    },

    outlined: {
        borderWidth: 1,
    },

    label: {
        marginEnd: 5,
        borderRadius: 5,
        paddingVertical: 5,
        paddingHorizontal: 7,
        alignItems: "center",
        backgroundColor: "#FEE5E1",
        marginTop: 5,
    },
});

export default ChipStyle;
