import React, { useEffect, useState } from "react";
import { Alert, Dimensions, ScrollView, StyleSheet, View } from "react-native";
import FastImage from "react-native-fast-image";
import Screen from "../../design/Screen";
import MarkdownText from "../../design/MarkdownText";
import DisplayTarotCard from "../../design/dailyReading/DisplayTarotCard";
import GetTarotStoryData from "../../library/tarotStory/GetTarotStoryData";
import Color from "../../design/Color";
//@ts-ignore
import Tree from "../../design/assets/tarotStory/I_Tree.svg";
//@ts-ignore
import Wand from "../../design/assets/tarotStory/I_Wand.svg";

export default function TarotStoryDetail({ navigation, route }) {
    const { type, contentTitle } = route.params;
    const [content, setContent] = useState({
        index: -1,
        content: "",
        uri: "",
    });

    useEffect(() => {
        GetTarotStoryData(type, contentTitle).then((data) => {
            if (data)
                setContent({
                    index: data.index,
                    content: data.content,
                    uri: data?.uri,
                });
            else {
                Alert.alert(
                    "Error",
                    "서버와의 통신 중 오류가 발생했습니다. 다시 시도해주세요",
                    [
                        {
                            text: "OK",
                            onPress: () => {
                                navigation.goBack();
                            },
                        },
                    ],
                );
            }
        });
    }, []);

    return (
        <Screen title={contentTitle} backgroundColor="#9EFFBA28">
            <ScrollView
                contentContainerStyle={{
                    alignItems: "center",
                    paddingBottom: 100,
                }}
                showsVerticalScrollIndicator={false}
            >
                <Decoration type={type} />
                {content.uri && (
                    <FastImage
                        source={{ uri: content.uri }}
                        style={{
                            width: Dimensions.get("window").width * 0.7,
                            height: Dimensions.get("window").height * 0.25,
                            marginVertical: 30,
                        }}
                        resizeMode="contain"
                    />
                )}
                <DisplayTarotCard index={content.index} />
                <View style={{ width: Dimensions.get("window").width * 0.65 }}>
                    <MarkdownText
                        text={content.content}
                        color={Color.Primary_dark}
                    />
                </View>
            </ScrollView>
        </Screen>
    );
}

const Decoration = ({ type }) => {
    const style = StyleSheet.create({
        left: {
            position: "absolute",
            width: Dimensions.get("window").height * 0.08,
            height: Dimensions.get("window").height * 0.08,
            top: Dimensions.get("window").height * 0.08,
            left: Dimensions.get("window").width * 0.05,
        },
        right: {
            position: "absolute",
            width: Dimensions.get("window").height * 0.08,
            height: Dimensions.get("window").height * 0.08,
            top: Dimensions.get("window").height * 0.25,
            right: Dimensions.get("window").width * 0.05,
        },
    });

    switch (type) {
        case "major":
            return (
                <>
                    <Tree style={style.left} />
                    <Tree style={style.right} />
                </>
            );

        case "minor-wand":
            return (
                <>
                    <Wand style={style.left} />
                    <Wand style={style.right} />
                </>
            );

        default:
            return null;
    }
};
