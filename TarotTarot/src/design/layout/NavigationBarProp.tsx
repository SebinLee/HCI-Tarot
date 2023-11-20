import React from "react";
import { View, StyleSheet } from "react-native";
import { Body1, H1, H3 } from "../Typography";
import { Icon } from "@ui-kitten/components";
import ProfileImageSBase from "../profile/ProfileImageSBase";
import { ButtonSOutline } from "../Button";
import { NavigationIconProp, NavigationPropEnum } from "./LayoutInterface";
import {
    getUserNickname,
    getUserProfilePic,
} from "../../lib/reduxDispatch/userInfo";

//@ts-ignore
import Message from "../../asset/default/message.svg";
//@ts-ignore
import MessageWhite from "../../asset/profile/message_white.svg";

export default function NavigationBarProp({
    prop,
    color,
    onPress,
}: NavigationIconProp) {
    switch (prop) {
        case NavigationPropEnum.complete:
            return <Complete color={color} />;

        case NavigationPropEnum.profile:
            return <Profile color={color} />;

        case NavigationPropEnum.largeProfile:
            return <LargeProfile color={color} />;

        case NavigationPropEnum.message:
            return <Message style={styles.message} />;

        case NavigationPropEnum.messageWhite:
            return <MessageWhite style={styles.message} />;

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

        case NavigationPropEnum.save:
            return (
                <Icon
                    name="download-outline"
                    fill={color}
                    style={styles.icon}
                />
            );

        case NavigationPropEnum.communityWrite:
            return <ButtonSOutline text="작성" onPress={onPress} />;

        case NavigationPropEnum.communityProfile:
            return (
                <Icon
                    name="person-outline"
                    style={{ width: 30, height: 30 }}
                    fill={color}
                />
            );

        default:
            return null;
    }
}

const Complete = ({ color }) => (
    <Body1 color={color} style={styles.marginRight}>
        완료
    </Body1>
);

const Profile = ({ color }) => (
    <View style={styles.profileContainer}>
        <ProfileImageSBase blurRadius={0} profilePic={getUserProfilePic()} />
        <H3 style={styles.marginLeft} color={color}>
            {getUserNickname()}
        </H3>
    </View>
);

const LargeProfile = ({ color }) => (
    <Body1
        color={color}
        style={[
            styles.marginLeft,
            styles.profileContainer,
            { marginBottom: 2 },
        ]}
    >
        안녕하세요{"\n"}
        <H1 color={color}>{getUserNickname()}님</H1>
    </Body1>
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
