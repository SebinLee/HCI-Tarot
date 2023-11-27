import React from "react";
import Screen from "../../design/Screen";
import { FlatList, TouchableOpacity, View } from "react-native";
import { Text, TextType } from "../../design/Text";
import FastImage from "react-native-fast-image";
import Color from "../../design/Color";
import GetAvailableQuestions from "../../library/firebase/GetAvailableQuestions";
import { useAppSelector } from "../../library/redux/ReduxStore";

export default function PracticeBot({ navigation }) {
    const { id } = useAppSelector((state) => state.userInfo);

    return (
        <Screen title="연습봇">
            <FlatList
                data={data}
                renderItem={({ item, index }) => (
                    <Item
                        key={index}
                        title={item.title}
                        description={item.description}
                        onPress={() => {
                            GetAvailableQuestions(id, item.topic).then(
                                (docId) => {
                                    if (docId) {
                                        navigation.push("PracticeBotChat", {
                                            id: docId,
                                        });
                                    }
                                },
                            );
                        }}
                    />
                )}
            />
        </Screen>
    );
}

const Item = ({ title, description, onPress }) => (
    <TouchableOpacity
        style={{ height: 80, borderBottomWidth: 1, justifyContent: "center" }}
        onPress={onPress}
    >
        <View style={{ flexDirection: "row" }}>
            <View style={{ marginHorizontal: 10 }}>
                <FastImage
                    source={require("../../design/assets/logo-primary.png")}
                    style={{
                        width: 40,
                        height: 40,
                        borderRadius: 20,
                        backgroundColor: Color.White,
                    }}
                    resizeMode="contain"
                />
            </View>

            <View style={{ flex: 1, justifyContent: "space-around" }}>
                <Text type={TextType.H1}>{title}</Text>
                <Text type={TextType.Caption}>{description}</Text>
            </View>
        </View>
    </TouchableOpacity>
);

const data = [
    {
        topic: "튜토리얼",
        title: "뉴비봇",
        description: "튜토리얼",
    },
    {
        topic: "연애운",
        title: "연애상담",
        description: "연애봇",
    },
    {
        topic: "금전운",
        title: "금전봇",
        description: "금전상담",
    },
    {
        topic: "학업운",
        title: "학업봇",
        description: "학업상담",
    },
];
