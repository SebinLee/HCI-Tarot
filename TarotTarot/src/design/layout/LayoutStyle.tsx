import { StyleSheet, Dimensions } from "react-native";
import Color from "../Color";

const screen = Dimensions.get("screen");
const LayoutStyle = StyleSheet.create({
    modalBaseFullScreen: {
        width: screen.width,
        height: screen.height,
        justifyContent: "center",
        alignItems: "center",
        position: "absolute",
    },

    modalBaseCenteredView: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },

    modalBaseView: {
        alignItems: "stretch",
        width: screen.width * 0.75,
        paddingHorizontal: 20,
        paddingVertical: 30,
        borderRadius: 15,
        backgroundColor: Color.BackgroundPrimary,
        shadowColor: Color.TextPrimary,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.05,
        shadowRadius: 3.5,
        elevation: 7,
    },

    modalBaseNavigationBar: {
        height: 5,
        marginBottom: 5,
        alignItems: "center",
        flexDirection: "row-reverse",
        justifyContent: "space-between",
    },

    bottomSheetFullScreen: {
        left: 0,
        right: 0,
        bottom: 0,
        position: "absolute",
    },

    bottomSheetBase: {
        padding: 25,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        backgroundColor: Color.BackgroundPrimary,
        alignItems: "flex-start",
    },

    shadowWrapperBase: {
        marginBottom: 20,
        marginHorizontal: 5,
        paddingHorizontal: 10,
        paddingVertical: 20,
        borderRadius: 15,
        backgroundColor: "#ffffff",
        shadowColor: "#000000",
        shadowOffset: { width: 0, height: 0 },
        shadowRadius: 5,
        elevation: 3,
        shadowOpacity: 0.1,
    },

    loadingBase: {
        position: "absolute",
        width: Dimensions.get("screen").width,
        height: Dimensions.get("screen").height,
        backgroundColor: "#00000099",
        justifyContent: "center",
        alignItems: "center",
    },

    searchBase: {
        height: 40,
        borderWidth: 1,
        borderRadius: 20,
        borderColor: Color.BorderSecondary,
        marginVertical: 10,
        paddingHorizontal: 15,
        flexDirection: "row",
        alignItems: "center",
    },
});

export default LayoutStyle;
