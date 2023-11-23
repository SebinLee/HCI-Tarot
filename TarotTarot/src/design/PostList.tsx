import React from "react";
import { Text, TextType } from "./Text";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import FastImage from "react-native-fast-image";
import Color from "./Color";

export default function PostList({
    onPress,
    title = "asdasdadasad",
    description = "qwerqwerqwerqwer",
}: PostList) {
    return (
        <TouchableOpacity style={styles.container} onPress={onPress}>
            <View style={styles.tarotImageContainer}>
                <TarotImage />
                <TarotImage />
                <TarotImage />
            </View>
            <View style={styles.textContainer}>
                <Text type={TextType.H3} numberOfLines={1}>
                    Q. {title}
                </Text>
                <Text type={TextType.Caption} numberOfLines={1}>
                    {description}
                </Text>
            </View>
        </TouchableOpacity>
    );
}

const TarotImage = ({
    uri = "https://avatars.githubusercontent.com/u/44885477?v=4",
}) => <FastImage source={{ uri }} style={styles.tarotImage} />;

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        flexDirection: "row",
        marginBottom: 15,
        paddingVertical: 15,
        paddingHorizontal: 5,
        borderRadius: 10,

        shadowRadius: 2,
        shadowColor: Color.Primary_dark,
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.2,

        backgroundColor: Color.White,
    },

    tarotImageContainer: {
        flexDirection: "row",
        marginRight: 10,
    },

    textContainer: {
        flex: 1,
    },

    tarotImage: {
        width: 40,
        height: 40,
        borderRadius: 20,
    },
});

interface PostList {
    onPress: () => void;
    title: string;
    description: string;
}
