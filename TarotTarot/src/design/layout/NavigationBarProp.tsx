import React from "react";
import { View, StyleSheet } from "react-native";
import { Typography, TypographyType } from "../Typography";
import { Icon } from "@ui-kitten/components";
import { NavigationIconProp, NavigationPropEnum } from "./LayoutInterface";
import Color from "../Color";

export default function NavigationBarProp({
    prop,
    color,
    onPress,
}: NavigationIconProp) {
    switch (prop) {
        case NavigationPropEnum.profile:
            return <Profile color={color} />;

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

const Profile = ({ color=Color.Black }) => (
    <View style={styles.profileContainer}>
        {/* <ProfileImageSBase blurRadius={0} profilePic={getUserProfilePic()} /> */}
        <Typography type={TypographyType.H3} style={styles.marginLeft} color={color}>
            Testasdfasdf
        </Typography>
    </View>
);

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
