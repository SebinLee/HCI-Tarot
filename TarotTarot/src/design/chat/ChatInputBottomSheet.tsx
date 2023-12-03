import {
    View,
    Dimensions,
    Keyboard,
    StyleSheet,
    TouchableOpacity,
    ScrollView,
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
import TarotCard, { TarotCardType } from "../TarotCard";
import { ChatInputTarotProps } from "./ChatInterface";
import {
    TarotKeyword,
    TarotKeywordProps,
    TarotKeywordsProps,
} from "../Tarot/TarotInterface";
import { Text, TextType } from "../Text";
import Color from "../Color";
import { Icon } from "@ui-kitten/components";

const ChatInputBottomSheet = ({ tarots, onPressSend }: ChatInputTarotProps) => {
    // State for text input and tarot card selection
    const [text, setText] = useState("");
    const [answer, setAnswer] = useState<string[]>([]);
    const [selected, setSelected] = useState(-1);
    const [current, setCurrent] = useState(0);

    // Ref & callback for bottomsheet
    const snapPoints = useMemo(() => ["40%", "40%"], []);
    const itemRef = useRef<BottomSheetModalMethods>(null);
    const handleSheetChanges = useCallback((index: number) => {
        console.log(index);
    }, []);

    // When keyboard hides, force bottomsheet position to snap point
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

    // Component for show tarot card spread
    const TarotSpread = ({ tarots = [] }: TarotKeywordsProps) =>
        tarots.map((item: TarotKeyword, index) => (
            <TouchableOpacity
                key={item.index}
                onPress={() => setSelected(index)}
            >
                <TarotCard
                    index={item.index}
                    size={
                        current == index
                            ? Dimensions.get("screen").height * 0.185
                            : Dimensions.get("screen").height * 0.16
                    }
                />
            </TouchableOpacity>
        ));

    // Component for display tarot card information
    const TarotExplained = ({ tarot }: TarotKeywordProps) => (
        <>
            <View>
                <TouchableOpacity onPress={() => setSelected(-1)}>
                    <TarotCard
                        index={tarot.index}
                        size={Dimensions.get("screen").height * 0.185}
                    />
                </TouchableOpacity>
            </View>
            <ScrollView
                style={{
                    flex: 1,
                    paddingVertical: 5,
                    marginRight: Dimensions.get("window").width * 0.05,
                }}
            >
                <Text
                    type={TextType.H1}
                    color={Color.Primary_dark}
                    style={{ flex: 1 }}
                >
                    {TarotCardType[tarot.index].card}
                </Text>
                <View style={{ flex: 3, marginTop: 20, marginBottom: 10 }}>
                    <Text
                        type={TextType.Body1}
                        color={Color.Primary_dark}
                        style={{ marginBottom: 4, fontWeight: "700" }}
                    >
                        {tarot.topic} 키워드
                    </Text>
                    <Text color={Color.Primary_dark} type={TextType.Body2}>
                        {tarot.keywords}
                    </Text>
                </View>
            </ScrollView>
        </>
    );

    return (
        <>
            <BottomSheet
                index={0}
                ref={itemRef}
                snapPoints={snapPoints}
                backdropComponent={null}
                onChange={handleSheetChanges}
                backgroundStyle={style.background}
            >
                <View style={style.cardContainer}>
                    {selected < 0 ? (
                        <TarotSpread tarots={tarots} />
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
                    <TouchableOpacity
                        style={style.sendButton}
                        onPress={() => {
                            onPressSend(text, setAnswer, setCurrent);
                            setText("");
                            setSelected(-1);
                        }}
                    >
                        <Icon
                            name="arrow-upward-outline"
                            style={{ width: 30, height: 30 }}
                            fill="white"
                        />
                    </TouchableOpacity>
                </View>
            </BottomSheet>
            <View style={style.dummyFill} />
        </>
    );
};

const style = StyleSheet.create({
    background: {
        paddingHorizontal: Dimensions.get("screen").width * 0.05,
        backgroundColor: "#B3E3C1",
    },
    container: {
        alignItems: "center",
        flexDirection: "row",

        marginTop: 10,
        paddingVertical: 5,
        paddingHorizontal: 20,
        marginHorizontal: Dimensions.get("screen").width * 0.05,

        borderWidth: 1,
        borderRadius: 40,
        borderColor: "#5DB075",
        backgroundColor: Color.White,
    },
    cardContainer: {
        flexDirection: "row",
        justifyContent: "space-around",
        height: Dimensions.get("screen").height * 0.2,
        alignItems: "center",
    },
    textInput: {
        flex: 1,
        height: 36,
        // marginTop: 5,
        marginRight: 10,
    },
    dummyFill: {
        backgroundColor: "#A8E3B9",
        position: "absolute",
        bottom: -50,
        right: 0,
        left: 0,
        height: 50,
    },
    sendButton: {
        width: 34,
        height: 34,
        backgroundColor: "#5DB075",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 20,
    },
});

export default ChatInputBottomSheet;
