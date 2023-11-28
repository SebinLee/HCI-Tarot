import React, { useEffect, useRef, useState } from "react";
import Screen from "../../design/Screen";
import {
    Dimensions,
    View,
    ScrollView,
    FlatList,
    TouchableOpacity,
} from "react-native";
import TarotCard, { TarotCardType } from "../../design/TarotCard";
import { Text, TextType } from "../../design/Text";
import { NavigationPropEnum } from "../../design/layout/LayoutInterface";
import Chip, { ChipContainer } from "../../design/Chip";
import Color from "../../design/Color";

export default function Dictionary() {
    const [selectedCard, setSelectedCard] = useState(0);
    const [selectedType, setSelectedType] = useState("Major");
    const [menuIndex, setMenuIndex] = useState({ start: 0, end: 21 });
    const listRef = useRef(null);
    const screenWidth = Dimensions.get("screen").width;

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
                    style={{ width: screenWidth * 0.3 }}
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={{ width: screenWidth * 0.3 }}
                    renderItem={({ item, index }) => (
                        <TouchableOpacity
                            onPress={() =>
                                setSelectedCard(index + menuIndex.start)
                            }
                        >
                            <View
                                style={{
                                    paddingVertical: 20,
                                    paddingHorizontal: 10,
                                    alignItems: "center",
                                    justifyContent: "center",
                                    backgroundColor:
                                        index + menuIndex.start === selectedCard
                                            ? "#5DB07599"
                                            : "#5DB07544",
                                }}
                            >
                                <Text
                                    style={{ textAlign: "center" }}
                                    color={
                                        index + menuIndex.start === selectedCard
                                            ? Color.White
                                            : Color.Primary
                                    }
                                >
                                    {item.card}
                                </Text>
                            </View>
                        </TouchableOpacity>
                    )}
                />
                <View
                    style={{
                        width: screenWidth * 0.7,
                        paddingHorizontal: 10,
                        alignItems: "center",
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
                    <Text>
                        asdflkajsdfl;kasjd;flkjasdfl;kjasd;flkjasdf;lkjasdfl;kjasdfl;kjasdfl;kasjdfl;kjasdfl;kasjdfl;kasjdfl;kasjdfl;askjdfl;kasjdfl;aksdfjl;kj
                    </Text>
                </View>
            </View>
        </Screen>
    );
}
