import React, { useEffect, useState } from "react";
import { Dimensions, ScrollView, View } from "react-native";
import Chip, { ChipContainer } from "../Chip";
import ChatInputBottomSheet from "./ChatInputBottomSheet";
import { ChatInputProps } from "./ChatInterface";

export default function ChatInputProp({
    type,
    onPressSend,
    chips,
    ...props
}: ChatInputProps) {
    //@ts-ignore
    const ChatChip = ({ onPress, text = "" }) => (
        <Chip
            text={text}
            filled={false}
            selected={true}
            style={{ paddingHorizontal: 30 }}
            onPress={onPress}
        />
    );

    switch (type) {
        case "Start":
            return (
                <ChipContainer style={{ justifyContent: "space-around" }}>
                    {chips.start.map((item, index) => (
                        <ChatChip
                            text={item.text}
                            onPress={item.onPress}
                            key={`start_${index}`}
                        />
                    ))}
                </ChipContainer>
            );

        case "Draw":
            return (
                <ChipContainer style={{ justifyContent: "space-around" }}>
                    {chips.draw.map((item, index) => (
                        <ChatChip
                            text={item.text}
                            onPress={item.onPress}
                            key={`draw${index}`}
                        />
                    ))}
                </ChipContainer>
            );

        case "End":
            return (
                <ChipContainer>
                    <ScrollView
                        style={{
                            paddingHorizontal:
                                Dimensions.get("screen").width * 0.05,
                        }}
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                    >
                        {chips.end.map((item, index) => (
                            <ChatChip
                                text={item.text}
                                onPress={item.onPress}
                                key={`end_${index}`}
                            />
                        ))}
                    </ScrollView>
                </ChipContainer>
            );

        case "Input":
            return (
                <ChatInputBottomSheet {...props} onPressSend={onPressSend} />
            );
    }
}
