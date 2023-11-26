import React, { useEffect, useState } from "react";
import { Dimensions, ScrollView, View } from "react-native";
import Chip, { ChipContainer } from "../Chip";
import ChatInputBottomSheet from "./ChatInputBottomSheet";
import { ChatInputProps } from "./ChatInterface";

export default function ChatInputProp({
    type = "End",
    onPressStartA,
    onPressStartB,
    onPressDraw,
    onPressEndA,
    onPressEndB,
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
                    <ChatChip text="선택지 A" onPress={onPressStartA} />
                    <ChatChip text="선택지 B" onPress={onPressStartB} />
                </ChipContainer>
            );

        case "Draw":
            return (
                <ChipContainer style={{ justifyContent: "space-around" }}>
                    <ChatChip text="카드를 뽑아주세요" onPress={onPressDraw} />
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
                        <ChatChip
                            text="새로운 상담 시작하기"
                            onPress={onPressEndA}
                        />
                        <ChatChip
                            text="다른 리더의 해석 보러가기"
                            onPress={onPressEndB}
                        />
                    </ScrollView>
                </ChipContainer>
            );

        case "Input":
            return <ChatInputBottomSheet {...props} />;
    }
}
