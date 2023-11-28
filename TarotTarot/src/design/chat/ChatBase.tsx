import React from "react";
import { Dimensions, View } from "react-native";
import { GiftedChat } from "react-native-gifted-chat";
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

    return (
        <View style={{ flex: 1 }}>
            <GiftedChat
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
                // renderAvatar={CustomAvatar}
                renderAvatarOnTop={true}
                alwaysShowSend={true}
                alignTop={true}
                inverted={false}
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
