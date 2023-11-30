import React, { useEffect, useRef } from "react";
import { Dimensions, FlatList, View } from "react-native";
import { GiftedChat, IMessage } from "react-native-gifted-chat";
import { useAppSelector } from "../../library/redux/ReduxStore";
import { ChatBaseProps } from "./ChatInterface";
import ChatInputProp from "./ChatInputProp";
import ChatBubble from "./ChatBubble";

export default function ChatBase({
    contentRoute,
    message,
    showBottomAccessory,
    ...props
}: ChatBaseProps) {
    const { id, username, profilePic } = useAppSelector(
        (state) => state.userInfo,
    );

    const chatRef = useRef<FlatList<IMessage> | null>(null);

    useEffect(() => {
        if (message.length > 0 && chatRef !== null)
            chatRef.current?.scrollToEnd();
    }, [message]);

    return (
        <View style={{ flex: 1 }}>
            <GiftedChat
                messageContainerRef={chatRef}
                user={{
                    _id: id,
                    name: username,
                    avatar: profilePic,
                }}
                messages={message}
                // Add Custom Theme
                // Did not render default time and day
                renderInputToolbar={() =>
                    showBottomAccessory && (
                        <ChatInputProp
                            {...props}
                            contentRoute={contentRoute}
                            multiline={true}
                        />
                    )
                }
                renderTime={() => null}
                renderDay={() => null}
                renderBubble={ChatBubble}
                imageStyle={{
                    //@ts-ignore
                    resizeMode: "contain",
                    width: Dimensions.get("window").width * 0.5,
                    height: Dimensions.get("window").width * 0.5,
                }}
                renderAvatarOnTop={true}
                alwaysShowSend={true}
                alignTop={true}
                inverted={false}
                scrollToBottom={true}
                showUserAvatar={true}
                messagesContainerStyle={{
                    paddingBottom:
                        contentRoute === "draw"
                            ? Dimensions.get("window").height * 0.28
                            : 10,
                }}
            />
        </View>
    );
}
