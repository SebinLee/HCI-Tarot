import React, { useState } from "react";
import ChatBase from "../../design/chat/ChatBase";
import Screen from "../../design/Screen";
import { IMessage } from "react-native-gifted-chat";

export default function Chat() {
    const [text, setText] = useState("");
    const [message, setMessage] = useState<IMessage[]>([
        {
            _id: 1234,
            text: "testtesttest",
            createdAt: Date.now(),
            user: {
                _id: "test",
                name: "DummyUser",
            },
        },
    ]);

    const onSend = () => {
        console.log("Pressed");
    };

    return (
        <Screen title="Chats">
            <ChatBase
                text={text}
                setText={setText}
                onSend={onSend}
                message={message}
            />
        </Screen>
    );
}
