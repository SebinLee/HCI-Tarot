import React, { useEffect } from "react";
import LottieView from "lottie-react-native";
import { View, TouchableOpacity } from "react-native";

import { profileStyle } from "./profile/ProfileStyle";
import { ProfileInlineProp, ProfileProp } from "./profile/ProfileInterface";
import { Body1, Body2, Caption } from "./Typography";
import ProfileImageMBase from "./profile/ProfileImageMBase";
import ProfileImageSBase from "./profile/ProfileImageSBase";
import ProfileAccessory from "./profile/ProfileAccessory";
import Color from "./Color";

export function Profile({
    nickname = "",
    onPress = null,
    speaking = false,
    penalty = false,
    host = false,
    ...props
}: ProfileProp) {
    let animationRef;

    useEffect(() => {
        animationRef && animationRef.play();
    }, [penalty]);

    return (
        <View>
            <TouchableOpacity
                onPress={onPress}
                disabled={!onPress}
                style={profileStyle.profileContainer}
            >
                <ProfileImageMBase {...props} />
                {penalty && (
                    <LottieView
                        ref={(ref) => (animationRef = ref)}
                        source={require("./profile/UmulPenalty.json")}
                        style={profileStyle.profileAnimation}
                        loop={true}
                    />
                )}
                {host && <ProfileAccessory accessory="host" position="left" />}
                {speaking && (
                    <ProfileAccessory accessory="speaking" position="right" />
                )}
            </TouchableOpacity>
            {nickname && (
                <Caption style={profileStyle.profileText}>{nickname}</Caption>
            )}
        </View>
    );
}

export function ProfileInline({
    onPress,
    nickname = "",
    schoolInfo = "",
    AccessoryRight,
    style,
    ...props
}: ProfileInlineProp) {
    return (
        <View
            style={[
                {
                    alignItems: "center",
                    flexDirection: "row",
                    justifyContent: "space-between",
                },
                style,
            ]}
        >
            <TouchableOpacity
                disabled={!onPress}
                onPress={onPress}
                style={{
                    flex: 1,
                    flexDirection: "row",
                    alignItems: "center",
                }}
            >
                <ProfileImageSBase {...props} />
                <Body1 style={{ marginLeft: 7 }}>{nickname} </Body1>
                <Body2
                    style={{ flex: 1, flexWrap: "wrap", marginHorizontal: 5 }}
                    color={Color.TextSecondary}
                >
                    {schoolInfo}
                </Body2>
            </TouchableOpacity>
            {AccessoryRight && <AccessoryRight />}
        </View>
    );
}
