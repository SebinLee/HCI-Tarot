import React, { useEffect, useState } from "react";
import { View } from "react-native";
import { GiftedChat } from "react-native-gifted-chat";
import { useAppSelector } from "../../library/redux/ReduxStore";
import Color from "../Color";
import ChatInputProp, { ChatInputTypes } from "./ChatInputProp";

/**
 * @description 채팅 화면을 렌더하는 Component입니다
 * @param {IMessage[]} message 현재 채팅방에 올라온 채팅들을 전달합니다
 * @param {string} text 현재 입력중인 텍스트를 전달합니다
 * @param {function} setText 현재 입력중인 텍스트를 변경할 수 있는 함수를 전달합니다.
 * @param {function} onSend 메세지 전송 버튼을 눌렀을 때 수행할 함수를 전달합니다.
 */
export default function ChatBase({ message, text, setText, onSend }) {
    const [type, setType] = useState<ChatInputTypes>("Start");

    const { id, username, profilePic } = useAppSelector(
        (state) => state.userInfo,
    );

    // const { id, username, profilePic } = {
    //     id: "",
    //     username: "test",
    //     profilePic: "",
    // };

    return (
        <View style={{ flex: 1, backgroundColor: Color.Primary_light }}>
            <GiftedChat
                user={{
                    _id: id,
                    name: username,
                    avatar: profilePic,
                }}
                text={text}
                messages={message}
                // Indicate Functions
                onSend={onSend}
                onInputTextChanged={setText}
                // Add Custom Theme
                renderInputToolbar={() => (
                    <ChatInputProp
                        type={type}
                        onPressStartA={() => setType("Draw")}
                        onPressStartB={() => setType("Draw")}
                        onPressDraw={() => setType("End")}
                        onPressEndA={() => setType("Input")}
                        onPressEndB={() => setType("Hide")}
                        multiline={true}
                    />
                )}
                // renderBubble={CustomBubble}
                // renderComposer={CustomComposer}
                // renderTime={CustomTime}
                // renderSend={CustomSend}
                // renderAvatar={CustomAvatar}
                renderAvatarOnTop={true}
                alwaysShowSend={true}
                alignTop={true}
            />
            {/* {Platform.OS === "android" && (
                <KeyboardAvoidingView
                    behavior={"padding"}
                    keyboardVerticalOffset={80}
                />
            )} */}
        </View>
    );
}
