import React from "react";
import {
    View,
    Dimensions,
    TouchableOpacity,
    TouchableOpacityProps,
} from "react-native";
import Color from "./Color";

//@ts-ignore
import PostIcon from "./assets/icon-add-post.svg";

export default function PostButton({
    onPress,
    ...props
}: TouchableOpacityProps) {
    return (
        <View
            style={{
                position: "absolute",
                alignItems: "flex-end",
                bottom: Dimensions.get("screen").height * 0.05,
                right: Dimensions.get("screen").width * 0.02,
            }}
        >
            <TouchableOpacity
                style={{
                    width: 80,
                    height: 80,
                    borderRadius: 40,
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: Color.Primary,
                    shadowRadius: 7,
                    shadowColor: Color.Primary_dark,
                    shadowOffset: { width: 0, height: 0 },
                    shadowOpacity: 0.2,
                }}
                onPress={onPress}
                {...props}
            >
                <PostIcon style={{ width: 40, height: 40 }} />
            </TouchableOpacity>
        </View>
    );
}
