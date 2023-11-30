import React from "react";
import { TouchableOpacity, View } from "react-native";
import { Text, TextType } from "../Text";
import Color from "../Color";

export default function CommentaryQuestionList({
    question = "",
    topic = "",
    onPress = () => {},
}) {
    return (
        <TouchableOpacity onPress={onPress}>
            <View style={{ marginVertical: 10 }}>
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
                <Text type={TextType.H2} color={Color.Primary}>
                    Q. {question}
                </Text>
            </View>
        </TouchableOpacity>
    );
}
