import React from "react";
import { Icon } from "@ui-kitten/components";
import { TouchableOpacity } from "react-native";
import { CheckBoxProps } from "./CheckInterface";
import ProfileImageSBase from "../profile/ProfileImageSBase";
import { ButtonMText } from "../Typography";
import CheckStyle from "./CheckStyle";

export default function CheckBoxBase({
    text,
    color,
    onPress,
    profilePic,
    blurRadius = 10,
    renderOnModal = false,
}: CheckBoxProps) {
    return (
        <TouchableOpacity
            style={[CheckStyle.checkBoxBaseContainer, { borderColor: color }]}
            onPress={onPress}
        >
            {profilePic && (
                <ProfileImageSBase
                    profilePic={profilePic}
                    blurRadius={blurRadius}
                    renderOnModal={renderOnModal}
                />
            )}
            <ButtonMText
                color={color}
                style={{ flex: 1, marginLeft: profilePic ? 10 : 0 }}
            >
                {text}
            </ButtonMText>
            <Icon
                name="checkmark-outline"
                width={30}
                height={30}
                fill={color}
            />
        </TouchableOpacity>
    );
}
