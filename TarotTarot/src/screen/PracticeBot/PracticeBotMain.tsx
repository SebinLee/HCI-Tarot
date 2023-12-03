import React, { useEffect, useState } from "react";
import { FlatList, TouchableOpacity, View } from "react-native";
import FastImage from "react-native-fast-image";

import Color from "../../design/Color";
import Screen from "../../design/Screen";
import { Text, TextType } from "../../design/Text";
import { NavigationPropEnum } from "../../design/layout/LayoutInterface";
import { useAppSelector } from "../../library/redux/ReduxStore";

import GetQuestions from "../../library/firebase/GetQuestions";
import GetQuestionAvailable from "../../library/firebase/GetQuestionAvailable";
import SortPracticeBotData from "../../library/practiceBot/SortPraticeBotData";

export default function PracticeBot({ navigation }) {
    const { id } = useAppSelector((state) => state.userInfo);
    const [questionData, setQuestionData] = useState([]);

    useEffect(() => {
        GetQuestions().then((value) => {
            if (value) setQuestionData(SortPracticeBotData(value));
        });
    }, []);

    return (
        <Screen title="연습봇" navigationLeftProp={NavigationPropEnum.hide}>
            <FlatList
                data={questionData}
                renderItem={({ item, index }) => (
                    <Item
                        key={index}
                        title={item?.question}
                        description={item?.description}
                        profilePic={item?.profilePic}
                        onPress={() => {
                            GetQuestionAvailable(id, item.docID).then(
                                (result) => {
                                    if (result === true)
                                        navigation.push("PracticeBotChat", {
                                            id: item.docID,
                                        });
                                },
                            );
                        }}
                    />
                )}
            />
        </Screen>
    );
}

const Item = ({
    title = "",
    description = "",
    profilePic = "",
    onPress = () => {},
}) => (
    <TouchableOpacity
        style={{ height: 80, justifyContent: "center" }}
        onPress={onPress}
    >
        <View style={{ flexDirection: "row" }}>
            <View style={{ marginRight: 15 }}>
                <FastImage
                    source={{ uri: profilePic }}
                    style={{
                        width: 50,
                        height: 50,
                        borderRadius: 30,
                        backgroundColor: Color.White,
                    }}
                    resizeMode="contain"
                />
            </View>

            <View style={{ flex: 1, justifyContent: "space-around" }}>
                <Text type={TextType.H1}>{title}</Text>
                <Text type={TextType.Caption} style={{ marginTop: 5 }}>
                    {description}
                </Text>
            </View>
        </View>
    </TouchableOpacity>
);
