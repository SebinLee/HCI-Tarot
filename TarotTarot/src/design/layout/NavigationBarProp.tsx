import React from "react";
import { Icon } from "@ui-kitten/components";
import { View, StyleSheet } from "react-native";
import { NavigationIconProp, NavigationPropEnum } from "./LayoutInterface";
import FastImage from "react-native-fast-image";
import { Text, TextType } from "../Text";
import Color from "../Color";

export default function NavigationBarProp({ prop, color }: NavigationIconProp) {
    switch (prop) {
        case NavigationPropEnum.profile:
            return (
                <View style={styles.profileContainer}>
                    <FastImage
                        source={{
                            uri: "https://avatars.githubusercontent.com/u/44885477?v=4",
                        }}
                        style={{
                            width: 40,
                            height: 40,
                            borderRadius: 20,
                        }}
                    />
                </View>
            );

        case NavigationPropEnum.submit:
            return (
                <Text type={TextType.H3} color={color}>
                    등록
                </Text>
            );

        case NavigationPropEnum.close:
            return (
                <Icon name="close-outline" fill={color} style={styles.icon} />
            );

        case NavigationPropEnum.back:
            return (
                <Icon
                    name="chevron-left-outline"
                    fill={color}
                    style={styles.icon}
                />
            );

        case NavigationPropEnum.more:
            return (
                <Icon
                    name="more-horizontal-outline"
                    fill={color}
                    style={styles.icon}
                />
            );

        default:
            return null;
    }
}

const styles = StyleSheet.create({
    message: {
        width: 24,
        height: 20,
        marginRight: 8,
    },

    icon: {
        width: 32,
        height: 32,
    },

    marginLeft: { marginLeft: 7 },
    marginRight: { marginRight: 7 },
    profileContainer: { flexDirection: "row", alignItems: "center" },
});
