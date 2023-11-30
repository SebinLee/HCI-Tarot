import React from "react";
import { StyleSheet } from "react-native";
import { Bubble, BubbleProps, IMessage } from "react-native-gifted-chat";
import Color from "../Color";

export default function ChatBubble({ ...props }: BubbleProps<IMessage>) {
    return (
        <Bubble
            {...props}
            textStyle={{
                left: styles.customBubbleTextLeft,
                right: styles.customBubbleTextRight,
            }}
            wrapperStyle={{
                left: styles.customBubbleWrapperLeft,
                right: styles.customBubbleWrapperRight,
            }}
        />
    );
}

const styles = StyleSheet.create({
    customBubbleWrapperLeft: {
        marginVertical: 2,
        backgroundColor: "#F0F0F0",
        borderRadius: 15,
        padding: 5,
    },

    customBubbleWrapperRight: {
        marginVertical: 2,
        backgroundColor: Color.Primary,
        borderRadius: 15,
        padding: 5,
    },

    customBubbleTextLeft: { color: "#111111" },
    customBubbleTextRight: { color: Color.White },
});
