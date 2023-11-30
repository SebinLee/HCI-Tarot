import React, { useEffect, useState } from "react";
import { Alert, Dimensions, ScrollView, View } from "react-native";
import FastImage from "react-native-fast-image";
import Screen from "../../design/Screen";
import MarkdownText from "../../design/MarkdownText";
import DisplayTarotCard from "../../design/dailyReading/DisplayTarotCard";
import GetTarotStoryData from "../../library/tarotStory/GetTarotStoryData";

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
        <Screen title={contentTitle}>
            <ScrollView
                contentContainerStyle={{
                    alignItems: "center",
                    paddingBottom: 100,
                }}
                showsVerticalScrollIndicator={false}
            >
                {content.uri && (
                    <FastImage
                        source={{ uri: content.uri }}
                        style={{
                            width: Dimensions.get("window").width * 0.7,
                            height: Dimensions.get("window").height * 0.25,
                            marginVertical: 5,
                        }}
                        resizeMode="contain"
                    />
                )}
                <DisplayTarotCard index={content.index} />
                <View style={{ marginVertical: 20 }}>
                    <MarkdownText text={content.content} />
                </View>
            </ScrollView>
        </Screen>
    );
}
