import React from "react";
import { BlurView } from "@react-native-community/blur";
import { Image, Platform } from "react-native";
import { ProfileImageProp } from "./ProfileInterface";
import { profileStyle } from "./ProfileStyle";
import FastImage from "react-native-fast-image";

const ProfileImageMBase = ({
    profilePic,
    blurRadius = 0,
    imageStyle,
    renderOnModal = false,
}: ProfileImageProp) => {
    if (renderOnModal && blurRadius !== 0 && Platform.OS === "android") {
        return (
            <Image
                blurRadius={blurRadius}
                source={{ uri: profilePic }}
                style={[profileStyle.profileImageMBase, imageStyle]}
            />
        );
    }

    return (
        <FastImage
            source={
                profilePic === ""
                    ? require("../../asset/default/profilePic.png")
                    : { uri: profilePic }
            }
            style={[profileStyle.profileImageMBase, imageStyle]}
        >
            {blurRadius !== 0 && (
                <BlurView
                    style={profileStyle.profileBlur}
                    blurType="light"
                    blurRadius={blurRadius}
                    blurAmount={blurRadius / 3}
                    reducedTransparencyFallbackColor="white"
                />
            )}
        </FastImage>
    );
};

export default React.memo(ProfileImageMBase);
