import React from "react";
import { Dimensions, View } from "react-native";
import { Text, TextType } from "../Text";
import TarotCard from "../TarotCard";
import Color from "../Color";

export default function CommentaryQuestion({
    topic = "test",
    question = "",
    description = "",
    tarotCards = [],
}) {
    return (
        <View>
            <View style={{ alignItems: "flex-start" }}>
                <Text
                    style={{
                        backgroundColor: Color.Primary,
                        paddingHorizontal: 5,
                        paddingVertical: 3,
                        marginBottom: 10,
                    }}
                    color={Color.White}
                    type={TextType.Body2}
                >
                    {topic}
                </Text>
            </View>
            <Text color={Color.Primary} type={TextType.H1}>
                Q. {question}
            </Text>
            <Text
                style={{ marginVertical: 15 }}
                color={Color.Primary}
                type={TextType.Body1}
            >
                {description}
            </Text>

            <View style={{ flexDirection: "row", marginVertical: 20 }}>
                {tarotCards.map((data) => (
                    <TarotCard
                        size={Dimensions.get("screen").width * 0.35}
                        index={data.index}
                        key={data.index}
                    />
                ))}
            </View>
            <Text
                style={{ marginVertical: 10 }}
                color={Color.Primary}
                type={TextType.H1}
            >
                답변
            </Text>
        </View>
    );
}
