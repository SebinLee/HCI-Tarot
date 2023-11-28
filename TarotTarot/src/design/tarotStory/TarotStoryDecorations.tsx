import React, { useRef } from "react";
import { getStatusBarHeight } from "react-native-safearea-height";
import { useBottomTabBarHeight } from "@react-navigation/bottom-tabs";
import {
    Dimensions,
    StyleProp,
    StyleSheet,
    TextStyle,
    TouchableOpacity,
    ViewStyle,
} from "react-native";
import { Text } from "../../design/Text";

//@ts-ignore
import BackgroundPath from "../../design/assets/tarotStory/background.svg";

export default function TarotStoryDecorations({ data }: StoryRoadItemProps) {
    console.log(data);

    const actualHeight = useRef(
        Dimensions.get("screen").height -
            getStatusBarHeight() -
            useBottomTabBarHeight() -
            30,
    );
    const roadWidth = useRef(actualHeight.current * 0.43);
    const widthMargin = useRef(
        (Dimensions.get("screen").width - roadWidth.current) / 2,
    );

    const itemStyle = StyleSheet.create({
        road: {
            marginTop: actualHeight.current * 0.1,
            height: actualHeight.current * 0.8,
        },
        container: {
            position: "absolute",
            width: roadWidth.current * 0.8,
        },
        container_even: {
            position: "absolute",
            alignItems: "flex-end",
            width: roadWidth.current * 0.8,
        },
        item: {
            position: "absolute",
            width: actualHeight.current * 0.08,
            height: actualHeight.current * 0.08,
        },
        item_text_odd: {
            marginLeft: actualHeight.current * 0.08 * 0.6,
            marginTop: actualHeight.current * 0.08 - 20,
        },
        item_text_even: {
            marginTop: actualHeight.current * 0.08 - 20,
            marginRight: actualHeight.current * 0.08,
            textAlign: "right",
        },
        item_pos_1st: {
            left: widthMargin.current,
            bottom: useBottomTabBarHeight() + actualHeight.current * 0.8,
        },
        item_pos_2nd: {
            right: widthMargin.current,
            bottom: useBottomTabBarHeight() + actualHeight.current * 0.67,
        },
        item_pos_3rd: {
            left: widthMargin.current,
            bottom: useBottomTabBarHeight() + actualHeight.current * 0.5,
        },
        item_pos_4th: {
            right: widthMargin.current * 0.5,
            bottom: useBottomTabBarHeight() + actualHeight.current * 0.32,
        },
        item_pos_5th: {
            left: widthMargin.current,
            bottom: useBottomTabBarHeight() + actualHeight.current * 0.2,
        },
        item_pos_6th: {
            right: widthMargin.current * 0.3,
            bottom: useBottomTabBarHeight() + actualHeight.current * 0.03,
        },
    });

    const Element = ({
        text,
        onPress,
        Decoration,
        DisabledDecoration,
        containerStyle,
        textStyle,
        disabled = false,
    }: StoryRoadItem) => (
        <TouchableOpacity
            style={containerStyle}
            onPress={onPress}
            disabled={disabled}
        >
            {disabled ? (
                <DisabledDecoration style={itemStyle.item} />
            ) : (
                <Decoration style={itemStyle.item} />
            )}
            <Text style={textStyle} color={"#333333cc"}>
                {text}
            </Text>
        </TouchableOpacity>
    );

    if (!data) return null;

    console.log(data);

    return (
        <>
            <BackgroundPath style={itemStyle.road} />
            <Element
                text={data[0].text}
                onPress={data[0].onPress}
                Decoration={data[0].Decoration}
                DisabledDecoration={data[0].DisabledDecoration}
                containerStyle={[itemStyle.container, itemStyle.item_pos_1st]}
                textStyle={itemStyle.item_text_odd}
                disabled={data[0].disabled}
            />
            <Element
                text={data[1].text}
                onPress={data[1].onPress}
                Decoration={data[1].Decoration}
                DisabledDecoration={data[1].DisabledDecoration}
                containerStyle={[
                    itemStyle.container_even,
                    itemStyle.item_pos_2nd,
                ]}
                textStyle={itemStyle.item_text_even}
                disabled={data[1].disabled}
            />
            <Element
                text={data[2].text}
                onPress={data[2].onPress}
                Decoration={data[2].Decoration}
                DisabledDecoration={data[2].DisabledDecoration}
                containerStyle={[itemStyle.container, itemStyle.item_pos_3rd]}
                textStyle={itemStyle.item_text_odd}
                disabled={data[2].disabled}
            />
            <Element
                text={data[3].text}
                onPress={data[3].onPress}
                Decoration={data[3].Decoration}
                DisabledDecoration={data[3].DisabledDecoration}
                containerStyle={[
                    itemStyle.container_even,
                    itemStyle.item_pos_4th,
                ]}
                textStyle={itemStyle.item_text_even}
                disabled={data[3].disabled}
            />
            <Element
                text={data[4].text}
                onPress={data[4].onPress}
                Decoration={data[4].Decoration}
                DisabledDecoration={data[4].DisabledDecoration}
                containerStyle={[itemStyle.container, itemStyle.item_pos_5th]}
                textStyle={itemStyle.item_text_odd}
                disabled={data[4].disabled}
            />
            <Element
                text={data[5].text}
                onPress={data[5].onPress}
                Decoration={data[5].Decoration}
                DisabledDecoration={data[5].DisabledDecoration}
                containerStyle={[
                    itemStyle.container_even,
                    itemStyle.item_pos_6th,
                ]}
                textStyle={itemStyle.item_text_even}
                disabled={data[5].disabled}
            />
        </>
    );
}

interface StoryRoadItemProps {
    data: StoryRoadItemProp[];
}

export interface StoryRoadItemProp {
    text: string;
    onPress: () => void;
    Decoration: React.JSX.Element;
    DisabledDecoration: React.JSX.Element;
    disabled?: boolean;
}

interface StoryRoadItem extends StoryRoadItemProp {
    containerStyle: StyleProp<ViewStyle>;
    textStyle: StyleProp<TextStyle>;
}
