import React, { useState } from "react";
import ChatBase from "../../design/chat/ChatBase";
import Screen from "../../design/Screen";
import { IMessage } from "react-native-gifted-chat";

export default function Chat() {
    const [text, setText] = useState("");
    const [message, setMessage] = useState<IMessage[]>([
        {
            _id: 1,
            text: "testtesttest",
            createdAt: Date.now(),
            user: {
                _id: "test",
                name: "DummyUser",
            },
        },
        {
            _id: 2,
            text: "testtesttest",
            createdAt: Date.now(),
            user: {
                _id: "test",
                name: "DummyUser",
            },
        },
        {
            _id: 3,
            text: "testtesttest",
            createdAt: Date.now(),
            user: {
                _id: "test",
                name: "DummyUser",
            },
        },
        {
            _id: 4,
            text: "testtesttest",
            createdAt: Date.now(),
            user: {
                _id: "test",
                name: "DummyUser",
            },
        },
        {
            _id: 5,
            text: "testtesttest",
            createdAt: Date.now(),
            user: {
                _id: "test",
                name: "DummyUser",
            },
        },
        {
            _id: 6,
            text: "testtesttest",
            createdAt: Date.now(),
            user: {
                _id: "test",
                name: "DummyUser",
            },
        },
        {
            _id: 7,
            text: "testtesttest",
            createdAt: Date.now(),
            user: {
                _id: "test",
                name: "DummyUser",
            },
        },
        {
            _id: 8,
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
        <Screen title="Chats" horizontalPadding={false}>
            <ChatBase
                text={text}
                setText={setText}
                onSend={onSend}
                message={message}
            />
        </Screen>
    );
}
