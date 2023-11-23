import React from "react";
import { Icon } from "@ui-kitten/components";
import { View, StyleSheet } from "react-native";
import { Text, TextType } from "../Text";
import { NavigationIconProp, NavigationPropEnum } from "./LayoutInterface";
import { useAppSelector } from "../../library/redux/ReduxStore";
import FastImage from "react-native-fast-image";

export default function NavigationBarProp({ prop, color }: NavigationIconProp) {
    const { profilePic } = useAppSelector((state) => state.userInfo);

    switch (prop) {
        case NavigationPropEnum.profile:
            return (
                <View style={styles.profileContainer}>
                    <FastImage
                        source={{ uri: profilePic }}
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
