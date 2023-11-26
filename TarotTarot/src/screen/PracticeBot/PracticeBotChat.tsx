import React, { useEffect, useState } from "react";
import ChatBase from "../../design/chat/ChatBase";
import Screen from "../../design/Screen";
import { IMessage } from "react-native-gifted-chat";
import GetPracticeBotData from "../../library/firebase/GetPracticeBotData";
import {
    TarotKeyword,
    TarotKeywordProps,
} from "../../design/Tarot/TarotInterface";

export default function PracticeBotChat({ navigation, route }) {
    useEffect(() => {
        console.log(route.params);
        if (route?.params?.id) {
            GetPracticeBotData(route.params.id).then((data) => {
                setMessage(
                    data?.chats.map((data, index) => ({
                        _id: index,
                        text: data,
                        createdAt: Date.now(),
                        user: {
                            _id: "system",
                            name: "연애봇",
                        },
                    })),
                );

                setTarots(
                    data?.tarotCards.map((data) => ({
                        index: data.index,
                        topic: data.topic,
                        keywords: data.keywords,
                    })),
                );
            });
        }
    }, []);

    const [text, setText] = useState("");
    const [message, setMessage] = useState<IMessage[]>([]);
    const [tarots, setTarots] = useState<TarotKeyword[]>([]);

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
                tarots={tarots}
            />
        </Screen>
    );
}
