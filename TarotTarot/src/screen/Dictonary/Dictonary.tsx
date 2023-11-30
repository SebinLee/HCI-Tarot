import React, { useEffect, useRef, useState } from "react";
import Screen from "../../design/Screen";
import {
    Dimensions,
    View,
    ScrollView,
    FlatList,
    TouchableOpacity,
    Alert,
} from "react-native";
import TarotCard, { TarotCardType } from "../../design/TarotCard";
import { Text, TextType } from "../../design/Text";
import { NavigationPropEnum } from "../../design/layout/LayoutInterface";
import Chip, { ChipContainer } from "../../design/Chip";
import Color from "../../design/Color";
import GetTarotDictionary from "../../library/tarotDict/GetTarotDictionary";
import MarkdownText from "../../design/MarkdownText";

export default function Dictionary({ navigation }) {
    const [tarotDict, setTarotDict] = useState({});
    const [selectedCard, setSelectedCard] = useState(0);
    const [selectedType, setSelectedType] = useState("Major");
    const [menuIndex, setMenuIndex] = useState({ start: 0, end: 21 });
    const listRef = useRef(null);
    const screenWidth = Dimensions.get("screen").width;

    useEffect(() => {
        GetTarotDictionary()
            .then((value) => {
                //@ts-ignore
                setTarotDict(value);
            })
            .catch(() => {
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
            });
    }, []);

    useEffect(() => {
        switch (selectedType) {
            case "Major":
                setMenuIndex({ start: 0, end: 21 });
                break;
            case "Swords":
                setMenuIndex({ start: 50, end: 63 });
                break;
            case "Pentacles":
                setMenuIndex({ start: 64, end: 77 });
                break;
            case "Cups":
                setMenuIndex({ start: 36, end: 49 });
                break;
            case "Wand":
                setMenuIndex({ start: 22, end: 35 });
                break;
        }

        //@ts-ignore
        listRef.current?.scrollToOffset({ animated: true, offset: 0 });
    }, [selectedType]);

    return (
        <Screen
            title="키워드 사전"
            navigationLeftProp={NavigationPropEnum.hide}
            horizontalPadding={false}
        >
            <ChipContainer>
                <ScrollView
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={{ paddingHorizontal: 10 }}
                >
                    {["Major", "Swords", "Pentacles", "Cups", "Wand"].map(
                        (item) => (
                            <Chip
                                key={item}
                                text={item}
                                filled={false}
                                onPress={() => setSelectedType(item)}
                                selected={item === selectedType}
                                style={{ height: 30 }}
                            />
                        ),
                    )}
                </ScrollView>
            </ChipContainer>

            <View
                style={{
                    flexDirection: "row",
                    paddingBottom: 70,
                    marginVertical: 20,
                }}
            >
                <FlatList
                    ref={listRef}
                    data={TarotCardType.filter(
                        (value, index) =>
                            index >= menuIndex.start && index <= menuIndex.end,
                    )}
                    style={{ width: screenWidth * 0.25 }}
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={{ width: screenWidth * 0.26 }}
                    renderItem={({ item, index }) => (
                        <DictionaryVerticalButton
                            onPress={() =>
                                setSelectedCard(index + menuIndex.start)
                            }
                            selected={index + menuIndex.start === selectedCard}
                            text={item.card}
                        />
                    )}
                />
                <ScrollView
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={{
                        width: screenWidth * 0.7,
                        paddingHorizontal: 20,
                        alignItems: "center",
                        paddingBottom: 100,
                    }}
                >
                    <Text type={TextType.H1}>
                        {TarotCardType[selectedCard].card}
                    </Text>
                    <View style={{ marginVertical: 15 }}>
                        <TarotCard
                            index={selectedCard}
                            size={Dimensions.get("screen").height * 0.25}
                        />
                    </View>
                    <DictionaryContent
                        title="설명"
                        content={tarotDict[selectedCard]?.description}
                    />
                    <DictionaryContent
                        title="키워드"
                        content={tarotDict[selectedCard]?.keyword}
                    />
                    <DictionaryContent
                        title="심볼"
                        content={tarotDict[selectedCard]?.symbol}
                    />
                </ScrollView>
            </View>
        </Screen>
    );
}

const DictionaryVerticalButton = ({ onPress, selected, text }) => (
    <TouchableOpacity onPress={onPress}>
        <View
            style={{
                paddingVertical: 20,
                paddingHorizontal: 10,
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: selected ? "#5DB07599" : "#5DB07544",
            }}
        >
            <Text
                type={TextType.Body2}
                style={{ textAlign: "center" }}
                color={selected ? Color.White : Color.Primary}
            >
                {text}
            </Text>
        </View>
    </TouchableOpacity>
);

const DictionaryContent = ({ title, content }) =>
    content && (
        <View
            style={{
                marginVertical: 10,
                paddingBottom: 10,
                borderColor: Color.Primary,
                borderBottomWidth: 0.5,
            }}
        >
            <Text type={TextType.H2}>{title}</Text>
            <MarkdownText text={content} />
        </View>
    );
