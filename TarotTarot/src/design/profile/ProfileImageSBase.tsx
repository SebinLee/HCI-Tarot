import React from "react";
import { BlurView } from "@react-native-community/blur";
import { ProfileImageProp } from "./ProfileInterface";
import { profileStyle } from "./ProfileStyle";
import FastImage from "react-native-fast-image";
import { Image, Platform } from "react-native";

const ProfileImageSBase = ({
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
                style={[profileStyle.profileImageSBase, imageStyle]}
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
            style={[profileStyle.profileImageSBase, imageStyle]}
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

export default React.memo(ProfileImageSBase);
