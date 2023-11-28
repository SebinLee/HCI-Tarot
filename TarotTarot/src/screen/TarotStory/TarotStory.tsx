import React, { useRef, useState } from "react";
import { Dimensions, StyleSheet, TouchableOpacity, View } from "react-native";
import Color from "../../design/Color";
import Screen from "../../design/Screen";
import Modal from "../../design/Modal";
import Button from "../../design/Button";
import { Text } from "../../design/Text";
import { ButtonSize } from "../../design/button/ButtonInterface";
import TarotStoryDecorations, {
    StoryRoadItemProp,
} from "../../design/tarotStory/TarotStoryDecorations";

//@ts-ignore
import Flag from "../../design/assets/tarotStory/I_Flag.svg";
//@ts-ignore
import FlagDisabled from "../../design/assets/tarotStory/I_Flag_Disabled.svg";
//@ts-ignore
import Tree from "../../design/assets/tarotStory/I_Tree.svg";
//@ts-ignore
import TreeDisabled from "../../design/assets/tarotStory/I_Tree_Disabled.svg";
//@ts-ignore
import Wand from "../../design/assets/tarotStory/I_Wand.svg";
//@ts-ignore
import WandDisabled from "../../design/assets/tarotStory/I_Wand_Disabled.svg";
import { Icon } from "@ui-kitten/components";
import { NavigationPropEnum } from "../../design/layout/LayoutInterface";

const contents = [
    "산책로 입구",
    "메이저 카드 산책로",
    "마이너카드 완드 산책로",
];

export default function TarotStory({ navigation }) {
    const [index, setIndex] = useState(0);
    const [modalVisible, setModalVisible] = useState(false);

    const Story = useRef<StoryRoadItemProp[]>([
        {
            text: "Tarot Deck",
            onPress: () => {
                navigation.push("TarotStoryDetail");
            },
            disabled: false,
            Decoration: Flag,
            DisabledDecoration: Flag,
        },
        {
            text: "Major & Minor",
            onPress: () => {
                navigation.push("TarotStoryDetail");
            },
            disabled: false,
            Decoration: Flag,
            DisabledDecoration: FlagDisabled,
        },
        {
            text: "Suit",
            onPress: () => {
                navigation.push("TarotStoryDetail");
            },
            disabled: true,
            Decoration: Flag,
            DisabledDecoration: FlagDisabled,
        },
        {
            text: "Pip & Court Card",
            onPress: () => {
                navigation.push("TarotStoryDetail");
            },
            disabled: true,
            Decoration: Flag,
            DisabledDecoration: FlagDisabled,
        },
        {
            text: "Spread",
            onPress: () => {
                navigation.push("TarotStoryDetail");
            },
            disabled: true,
            Decoration: Flag,
            DisabledDecoration: FlagDisabled,
        },
        {
            text: "Finish",
            onPress: () => {
                navigation.push("TarotStoryDetail");
            },
            disabled: true,
            Decoration: Flag,
            DisabledDecoration: FlagDisabled,
        },
    ]);

    const Major = useRef<StoryRoadItemProp[]>([
        {
            text: "The Fool",
            onPress: () => {
                navigation.push("TarotStoryDetail");
            },
            disabled: false,
            Decoration: Tree,
            DisabledDecoration: TreeDisabled,
        },
        {
            text: "The Magician",
            onPress: () => {
                navigation.push("TarotStoryDetail");
            },
            disabled: false,
            Decoration: Tree,
            DisabledDecoration: TreeDisabled,
        },
        {
            text: "The High Priestess",
            onPress: () => {
                navigation.push("TarotStoryDetail");
            },
            disabled: false,
            Decoration: Tree,
            DisabledDecoration: TreeDisabled,
        },
        {
            text: "The Empress",
            onPress: () => {
                navigation.push("TarotStoryDetail");
            },
            disabled: true,
            Decoration: Tree,
            DisabledDecoration: TreeDisabled,
        },
        {
            text: "The Emperor",
            onPress: () => {
                navigation.push("TarotStoryDetail");
            },
            disabled: true,
            Decoration: Tree,
            DisabledDecoration: TreeDisabled,
        },
        {
            text: "The Hierophant",
            onPress: () => {
                navigation.push("TarotStoryDetail");
            },
            disabled: true,
            Decoration: Tree,
            DisabledDecoration: TreeDisabled,
        },
    ]);

    const MinorWand = useRef<StoryRoadItemProp[]>([
        {
            text: "King of Wands",
            onPress: () => {
                navigation.push("TarotStoryDetail");
            },
            disabled: false,
            Decoration: Wand,
            DisabledDecoration: WandDisabled,
        },
        {
            text: "Ace of Wands",
            onPress: () => {
                navigation.push("TarotStoryDetail");
            },
            disabled: false,
            Decoration: Wand,
            DisabledDecoration: WandDisabled,
        },
        {
            text: "II of Wands",
            onPress: () => {
                navigation.push("TarotStoryDetail");
            },
            disabled: false,
            Decoration: Wand,
            DisabledDecoration: WandDisabled,
        },
        {
            text: "III of Wands",
            onPress: () => {
                navigation.push("TarotStoryDetail");
            },
            disabled: true,
            Decoration: Wand,
            DisabledDecoration: WandDisabled,
        },
        {
            text: "IV of Wands",
            onPress: () => {
                navigation.push("TarotStoryDetail");
            },
            disabled: true,
            Decoration: Flag,
            DisabledDecoration: FlagDisabled,
        },
        {
            text: "V of Wands",
            onPress: () => {
                navigation.push("TarotStoryDetail");
            },
            disabled: true,
            Decoration: Wand,
            DisabledDecoration: WandDisabled,
        },
    ]);

    const data = useRef([Story.current, Major.current, MinorWand.current]);

    return (
        <Screen
            title="타로스토리"
            horizontalPadding={false}
            navigationLeftProp={NavigationPropEnum.hide}
        >
            <View style={style.background} />
            <View style={style.buttonContainer}>
                <TouchableOpacity
                    onPress={() => setModalVisible(true)}
                    style={{ flexDirection: "row", alignItems: "center" }}
                >
                    <Text color={Color.Primary}>{contents[index]}</Text>
                    <View
                        style={{
                            width: 15,
                            height: 15,
                            borderRadius: 20,
                            marginLeft: 5,
                            borderWidth: 1,
                            borderColor: Color.Primary,
                            justifyContent: "center",
                            alignItems: "center",
                        }}
                    >
                        <Icon
                            fill={Color.Primary}
                            name="arrow-ios-downward-outline"
                            style={{ width: 13, height: 13 }}
                        />
                    </View>
                </TouchableOpacity>
            </View>
            <TarotStoryDecorations data={data.current[index]} />
            <Modal
                title="산책로 선택"
                visible={modalVisible}
                setVisible={setModalVisible}
            >
                {contents.map((item, idx) => (
                    <Button
                        key={item}
                        size={ButtonSize.L}
                        text={item}
                        buttonStyle={
                            index !== idx && {
                                backgroundColor: Color.White,
                                borderWidth: 1,
                                borderColor: Color.Primary,
                            }
                        }
                        textStyle={index !== idx && { color: Color.Primary }}
                        onPress={() => {
                            setIndex(idx);
                            setModalVisible(false);
                        }}
                    />
                ))}
            </Modal>
        </Screen>
    );
}

const style = StyleSheet.create({
    background: {
        backgroundColor: "#effff4",
        position: "absolute",
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
    },

    buttonContainer: {
        height: 30,
        paddingHorizontal: Dimensions.get("screen").width * 0.05,
        backgroundColor: Color.White,
    },
});