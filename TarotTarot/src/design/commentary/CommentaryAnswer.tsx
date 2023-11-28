import React from "react";
import { StyleSheet, View } from "react-native";
import FastImage from "react-native-fast-image";
import { Text, TextType } from "../Text";
import Color from "../Color";

export default function CommentaryListElement({ ...props }) {
    const { answer } = props;

    return (
        <View style={style.container}>
            <View style={style.titleContainer}>
                <FastImage
                    style={style.profilePic}
                    source={{ uri: props.profilePic }}
                    resizeMode="contain"
                />
                <Text
                    color={Color.Primary_dark}
                    style={style.userName}
                    type={TextType.Body1}
                >
                    {props.username}
                </Text>
            </View>
            <View style={style.answerContainer}>
                {answer.map((content, index) => (
                    <Answer title={`카드 ${index + 1}`} content={content} />
                ))}
            </View>
        </View>
    );
}

const Answer = ({ title = "카드 1", content = "" }) => (
    <View style={{ marginBottom: 10 }}>
        <Text
            color={Color.Primary_dark}
            type={TextType.Body2}
            style={{ marginBottom: 3, fontWeight: "700" }}
        >
            {title}
        </Text>
        <Text color={Color.Primary_dark} type={TextType.Caption}>
            {content}
        </Text>
    </View>
);

const style = StyleSheet.create({
    container: {
        paddingVertical: 10,
        borderBottomWidth: 1,
        borderColor: "#D9D9D9",
    },

    titleContainer: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 10,
    },

    profilePic: {
        width: 30,
        height: 30,
        borderRadius: 30,
    },
    answerContainer: { marginLeft: 40 },
    userName: { marginLeft: 10, fontWeight: "700" },
});
