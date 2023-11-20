import React from "react";
import { View } from "react-native";
import { ShadowWrapperBaseProp } from "./LayoutInterface";
import styles from "./LayoutStyle";

export default function ShadowWrapperBase({
    style,
    children,
}: ShadowWrapperBaseProp) {
    return <View style={[styles.shadowWrapperBase, style]}>{children}</View>;
}
