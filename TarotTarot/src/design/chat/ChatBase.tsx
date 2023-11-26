import React, { useState } from "react";
import { Dimensions, View } from "react-native";
import { GiftedChat } from "react-native-gifted-chat";
import { useAppSelector } from "../../library/redux/ReduxStore";
import { ChatInputTypes } from "./ChatInterface";
import ChatInputProp from "./ChatInputProp";
import { TarotKeyword } from "../Tarot/TarotInterface";
import ChatBubble from "./ChatBubble";

/**
 * @description 채팅 화면을 렌더하는 Component입니다
 * @param {IMessage[]} message 현재 채팅방에 올라온 채팅들을 전달합니다
 * @param {string} text 현재 입력중인 텍스트를 전달합니다
 * @param {function} setText 현재 입력중인 텍스트를 변경할 수 있는 함수를 전달합니다.
 * @param {function} onSend 메세지 전송 버튼을 눌렀을 때 수행할 함수를 전달합니다.
 */
export default function ChatBase({ message, text, setText, onSend, tarots }) {
    const [type, setType] = useState<ChatInputTypes>("Draw");

    const { id, username, profilePic } = useAppSelector(
        (state) => state.userInfo,
    );

    return (
        <View style={{ flex: 1 }}>
            <GiftedChat
                user={{
                    _id: id,
                    name: username,
                    avatar: profilePic,
                }}
                text={text}
                messages={message}
                // Add Custom Theme
                // Did not render default time and day
                renderInputToolbar={() => (
                    <ChatInputProp
                        type={type}
                        onPressStartA={() => setType("Draw")}
                        onPressStartB={() => setType("Draw")}
                        onPressDraw={() => setType("End")}
                        onPressEndA={() => setType("Input")}
                        onPressEndB={() => setType("Hide")}
                        multiline={true}
                        tarots={tarots}
                        onPressSend={onPressSend}
                    />
                )}
                renderTime={() => null}
                renderDay={() => null}
                renderBubble={ChatBubble}
                // renderAvatar={CustomAvatar}
                renderAvatarOnTop={true}
                alwaysShowSend={true}
                alignTop={true}
                inverted={false}
                messagesContainerStyle={{
                    paddingBottom:
                        type === "Input"
                            ? Dimensions.get("window").height * 0.28
                            : 10,
                }}
            />
        </View>
    );
}

// Dummy data for tarot card display
const dummyTarots: TarotKeyword[] = [
    {
        index: 56,
        topic: "연애",
        keywords:
            "test1, test2, test3, test4, test5, test3, test4, test5, test3, test4, test5",
    },
    {
        index: 59,
        topic: "금전",
        keywords: "test1, test2, test3, test4, test5",
    },
    {
        index: 77,
        topic: "학업",
        keywords: "test1, test2, test3, test4, test5",
    },
];

const onPressSend = () => {
    console.log("Implement Submit Function Here");
};
