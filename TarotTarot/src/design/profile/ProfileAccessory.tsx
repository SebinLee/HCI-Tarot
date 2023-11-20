import React from "react";
import { View } from "react-native";
import { Icon } from "@ui-kitten/components";
import { accessoryItemSize, profileStyle } from "./ProfileStyle";

//@ts-ignore
import MeetingProfileHost from "../../asset/meeting/MeetingProfileHost.svg";
import { ProfileAccessoryProp } from "./ProfileInterface";

export default function ProfileAccessory({
    accessory,
    position,
}: ProfileAccessoryProp) {
    const style =
        position === "left"
            ? profileStyle.profileAccessoryLeft
            : profileStyle.profileAccessoryRight;

    switch (accessory) {
        case "host":
            return <Host style={style} />;

        case "speaking":
            return <Speaking style={style} />;

        case "none":
            return null;

        default:
            return null;
    }
}

const Speaking = ({ style }) => (
    <View style={[profileStyle.profileAccessory, style]}>
        <Icon
            name="volume-up"
            width={accessoryItemSize}
            height={accessoryItemSize}
            fill="#FF6172"
        />
    </View>
);

const Host = ({ style }) => (
    <View style={[profileStyle.profileAccessory, style]}>
        <MeetingProfileHost
            style={{
                width: accessoryItemSize,
                height: accessoryItemSize,
            }}
        />
    </View>
);
