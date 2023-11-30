import React from "react";
import Chip, { ChipContainer } from "../Chip";
import ChatInputBottomSheet from "./ChatInputBottomSheet";
import { ChatInputProps } from "./ChatInterface";
import { Dimensions, ScrollView } from "react-native";

export default function ChatInputProp({
    contentRoute,
    onPressSend,
    chips,
    ...props
}: ChatInputProps) {
    switch (contentRoute) {
        case "draw":
            return (
                <ChatInputBottomSheet {...props} onPressSend={onPressSend} />
            );

        default:
            return (
                Object.keys(chips).includes(contentRoute) && (
                    <ChipContainer style={{ justifyContent: "space-around" }}>
                        {chips[contentRoute].length < 2 ? (
                            chips[contentRoute].map((item, index) => (
                                <Chip
                                    key={index}
                                    text={item.text}
                                    onPress={item.onPress}
                                    style={{ paddingHorizontal: 30 }}
                                    filled={false}
                                    selected={true}
                                />
                            ))
                        ) : (
                            <ScrollView
                                horizontal={true}
                                showsHorizontalScrollIndicator={false}
                                style={{
                                    paddingHorizontal:
                                        Dimensions.get("window").width * 0.05,
                                }}
                            >
                                {chips[contentRoute].map((item, index) => (
                                    <Chip
                                        key={index}
                                        text={item.text}
                                        onPress={item.onPress}
                                        style={{ paddingHorizontal: 30 }}
                                        filled={false}
                                        selected={true}
                                    />
                                ))}
                            </ScrollView>
                        )}
                    </ChipContainer>
                )
            );
    }
}
