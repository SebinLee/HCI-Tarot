import React, { useEffect, useState } from "react";
import { Alert, View } from "react-native";
import { Text } from "../../design/Text";
import Screen from "../../design/Screen";
import DisplayTarotCard from "../../design/dailyReading/DisplayTarotCard";
import GetTarotStoryData from "../../library/tarotStory/GetTarotStoryData";

export default function TarotStoryDetail({ navigation, route }) {
    const { type, contentTitle } = route.params;
    const [content, setContent] = useState({
        index: -1,
        content: "",
    });

    useEffect(() => {
        GetTarotStoryData(type, contentTitle).then((data) => {
            if (data) setContent({ index: data.index, content: data.content });
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
            <View style={{ alignItems: "center" }}>
                <DisplayTarotCard index={content.index} />
                <Text>{content.content}</Text>
            </View>
        </Screen>
    );
}
