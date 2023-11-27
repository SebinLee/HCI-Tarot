import React, { useEffect, useRef, useState } from "react";
import { IMessage } from "react-native-gifted-chat";
import { TarotKeyword } from "../../design/Tarot/TarotInterface";
import GetPracticeBotData from "../../library/firebase/GetPracticeBotData";
import ChatBase from "../../design/chat/ChatBase";
import Screen from "../../design/Screen";
import AppendMessage from "../../library/practiceBot/AppendMessage";

export default function PracticeBotChat({ navigation, route }) {
    const [text, setText] = useState("");
    const [message, setMessage] = useState<IMessage[]>([]);
    const [messageData, setMessageData] = useState({
        chats: [],
        routeIndex: [],
        routeTo: [],
    });
    const [tarots, setTarots] = useState<TarotKeyword[]>([]);
    let appendMessage = useRef<Number>(null);

    useEffect(() => {
        console.log(route.params);
        if (route?.params?.id) {
            GetPracticeBotData(route.params.id).then((data) => {
                const { chats, routeIndex, routeTo, tarotCards } = data;
                setMessageData({ chats, routeIndex, routeTo });
                setTarots(
                    tarotCards.map((data) => ({
                        index: data.index,
                        topic: data.topic,
                        keywords: data.keywords,
                    })),
                );
            });
        }
    }, []);

    useEffect(() => {
        if (messageData.chats.length > 0 && appendMessage.current === null)
            appendMessage.current = AppendMessage(setMessageData, setMessage);
    }, [messageData.chats]);

    useEffect(() => {
        if (message.length > messageData.routeIndex[0])
            clearInterval(appendMessage.current);
    }, [message]);

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
