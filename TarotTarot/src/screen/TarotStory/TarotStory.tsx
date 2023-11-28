import React, { useRef, useState } from "react";
import { Dimensions, StyleSheet, TouchableOpacity, View } from "react-native";
import Color from "../../design/Color";
import Screen from "../../design/Screen";
import { Text } from "../../design/Text";
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

export default function TarotStory() {
    const [index, setIndex] = useState(2);
    const data = useRef([Story, Major, MinorWand]);

    return (
        <Screen title="타로스토리" horizontalPadding={false}>
            <View style={style.background} />
            <View style={style.buttonContainer}>
                <TouchableOpacity>
                    <Text color={Color.Primary}>산책로 입구</Text>
                </TouchableOpacity>
            </View>
            <TarotStoryDecorations data={data.current[index]} />
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

const Story: StoryRoadItemProp[] = [
    {
        text: "Tarot Deck",
        onPress: () => {},
        disabled: false,
        Decoration: Flag,
        DisabledDecoration: Flag,
    },
    {
        text: "Major & Minor",
        onPress: () => {},
        disabled: false,
        Decoration: Flag,
        DisabledDecoration: FlagDisabled,
    },
    {
        text: "Suit",
        onPress: () => {},
        disabled: true,
        Decoration: Flag,
        DisabledDecoration: FlagDisabled,
    },
    {
        text: "Pip & Court Card",
        onPress: () => {},
        disabled: true,
        Decoration: Flag,
        DisabledDecoration: FlagDisabled,
    },
    {
        text: "Spread",
        onPress: () => {},
        disabled: true,
        Decoration: Flag,
        DisabledDecoration: FlagDisabled,
    },
    {
        text: "Finish",
        onPress: () => {},
        disabled: true,
        Decoration: Flag,
        DisabledDecoration: FlagDisabled,
    },
];

const Major: StoryRoadItemProp[] = [
    {
        text: "The Fool",
        onPress: () => {},
        disabled: true,
        Decoration: Tree,
        DisabledDecoration: TreeDisabled,
    },
    {
        text: "The Magician",
        onPress: () => {},
        disabled: false,
        Decoration: Tree,
        DisabledDecoration: TreeDisabled,
    },
    {
        text: "The High Priestess",
        onPress: () => {},
        disabled: true,
        Decoration: Tree,
        DisabledDecoration: TreeDisabled,
    },
    {
        text: "The Empress",
        onPress: () => {},
        disabled: true,
        Decoration: Tree,
        DisabledDecoration: TreeDisabled,
    },
    {
        text: "The Emperor",
        onPress: () => {},
        disabled: true,
        Decoration: Tree,
        DisabledDecoration: TreeDisabled,
    },
    {
        text: "The Hierophant",
        onPress: () => {},
        disabled: true,
        Decoration: Tree,
        DisabledDecoration: TreeDisabled,
    },
];

const MinorWand: StoryRoadItemProp[] = [
    {
        text: "King of Wands",
        onPress: () => {},
        disabled: true,
        Decoration: Wand,
        DisabledDecoration: WandDisabled,
    },
    {
        text: "Ace of Wands",
        onPress: () => {},
        disabled: false,
        Decoration: Wand,
        DisabledDecoration: WandDisabled,
    },
    {
        text: "II of Wands",
        onPress: () => {},
        disabled: true,
        Decoration: Wand,
        DisabledDecoration: WandDisabled,
    },
    {
        text: "III of Wands",
        onPress: () => {},
        disabled: true,
        Decoration: Wand,
        DisabledDecoration: WandDisabled,
    },
    {
        text: "IV of Wands",
        onPress: () => {},
        disabled: true,
        Decoration: Flag,
        DisabledDecoration: FlagDisabled,
    },
    {
        text: "V of Wands",
        onPress: () => {},
        disabled: true,
        Decoration: Wand,
        DisabledDecoration: WandDisabled,
    },
];
