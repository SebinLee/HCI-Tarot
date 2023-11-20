import React from "react";
import { Icon } from "@ui-kitten/components";
import { View, TouchableOpacity } from "react-native";
import { CheckProfileProps } from "./CheckInterface";
import ProfileImageMBase from "../profile/ProfileImageMBase";
import CheckStyle from "./CheckStyle";
import Color from "../Color";

export default function CheckProfilePicBase({
    checked,
    onPress,
    profilePic,
    blurRadius,
    disabled,
}: CheckProfileProps) {
    return (
        <TouchableOpacity
            onPress={onPress}
            disabled={disabled}
            style={CheckStyle.checkProfilePicBaseContainer}
        >
            <ProfileImageMBase
                blurRadius={blurRadius}
                profilePic={profilePic}
            />
            {checked && (
                <View style={CheckStyle.checkProfileBaseCheck}>
                    <Icon
                        name="checkmark-outline"
                        width={30}
                        height={30}
                        fill={Color.Primary}
                    />
                </View>
            )}
        </TouchableOpacity>
    );
}
