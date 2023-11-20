import React from "react";
import { View, Dimensions } from "react-native";
import { BottomSheetBaseProp } from "./LayoutInterface";
import LayoutStyle from "./LayoutStyle";

export default function BottomSheetBase({
    heightRatio,
    children,
    style,
    absolute = false,
}: BottomSheetBaseProp) {
    return (
        <View
            style={[
                { height: Dimensions.get("window").height * heightRatio },
                absolute && LayoutStyle.bottomSheetFullScreen,
                LayoutStyle.bottomSheetBase,
                style,
            ]}
        >
            {children}
        </View>
    );
}
