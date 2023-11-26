import {
    View,
    Dimensions,
    Keyboard,
    StyleSheet,
    TouchableOpacity,
} from "react-native";
import React, {
    useCallback,
    useEffect,
    useMemo,
    useRef,
    useState,
} from "react";
import BottomSheet, { BottomSheetTextInput } from "@gorhom/bottom-sheet";
import { BottomSheetModalMethods } from "@gorhom/bottom-sheet/lib/typescript/types";
import { ButtonSize } from "../button/ButtonInterface";
import TarotCard, { TarotCardType } from "../TarotCard";
import { ChatInputTarotProps, Tarot } from "./ChatInterface";
import { Text, TextType } from "../Text";
import Button from "../Button";

const ChatInputBottomSheet = ({ ...props }: ChatInputTarotProps) => {
    const [text, setText] = useState("");
    const [selected, setSelected] = useState(-1);
    const [current, setCurrent] = useState(0);
    const tarots = [
        {
            index: 56,
            topic: "연애",
            keyword:
                "test1, test2, test3, test4, test5, test3, test4, test5, test3, test4, test5",
        },
        {
            index: 59,
            topic: "금전",
            keyword: "test1, test2, test3, test4, test5",
        },
        {
            index: 77,
            topic: "학업",
            keyword: "test1, test2, test3, test4, test5",
        },
    ];

    const snapPoints = useMemo(() => ["40%", "40%"], []);
    const itemRef = useRef<BottomSheetModalMethods>(null);
    const handleSheetChanges = useCallback((index: number) => {
        console.log(index);
    }, []);

    useEffect(() => {
        const keyboardDidHide = Keyboard.addListener(
            "keyboardWillHide",
            (e) => {
                itemRef.current?.snapToPosition("40%");
            },
        );

        return () => {
            keyboardDidHide;
        };
    }, []);

    const TarotSpread = ({ tarots = [] }) =>
        tarots.map((item: Tarot, index) => (
            <TouchableOpacity onPress={() => setSelected(index)}>
                <TarotCard
                    index={item.index}
                    size={
                        current == index
                            ? Dimensions.get("screen").height * 0.16
                            : Dimensions.get("screen").height * 0.13
                    }
                />
            </TouchableOpacity>
        ));

    const TarotExplained = ({ tarot }) => (
        <>
            <View>
                <TouchableOpacity onPress={() => setSelected(-1)}>
                    <TarotCard
                        index={tarot.index}
                        size={Dimensions.get("screen").height * 0.2}
                    />
                </TouchableOpacity>
            </View>
            <View
                style={{
                    flex: 1,
                }}
            >
                <Text type={TextType.H1} style={{ flex: 1 }}>
                    {TarotCardType[tarot.index].card}
                </Text>
                <View style={{ flex: 3 }}>
                    <Text
                        type={TextType.Body1}
                        style={{ marginBottom: 4, fontWeight: "700" }}
                    >
                        {tarot.topic} 키워드
                    </Text>
                    <Text>{tarot.keyword}</Text>
                </View>
            </View>
        </>
    );

    return (
        <BottomSheet
            ref={itemRef}
            index={0}
            snapPoints={snapPoints}
            backdropComponent={null}
            onChange={handleSheetChanges}
            backgroundStyle={style.background}
        >
            <View style={style.cardContainer}>
                {selected < 0 ? (
                    <TarotSpread tarots={tarots} setSelected={setSelected} />
                ) : (
                    <TarotExplained tarot={tarots[selected]} />
                )}
            </View>
            <View style={style.container}>
                <BottomSheetTextInput
                    value={text}
                    style={style.textInput}
                    placeholder={`${current + 1}번째 카드 ${`(${
                        TarotCardType[tarots[current].index].card
                    })`}를 해석해주세요`}
                    onChangeText={(text) => setText(text)}
                    multiline={true}
                />
                <Button
                    size={ButtonSize.M}
                    text="전송"
                    onPress={() => {
                        setCurrent(current + 1);
                    }}
                />
            </View>
        </BottomSheet>
    );
};

const style = StyleSheet.create({
    background: {
        paddingHorizontal: Dimensions.get("screen").width * 0.05,
    },
    container: {
        paddingHorizontal: Dimensions.get("screen").width * 0.05,
        flexDirection: "row",
    },
    cardContainer: {
        flexDirection: "row",
        justifyContent: "space-around",
        height: Dimensions.get("screen").height * 0.2,
        alignItems: "center",
    },
    textInput: {
        flex: 1,
        height: 40,
        marginRight: 10,
        borderBottomWidth: 1,
    },
});

export default ChatInputBottomSheet;
