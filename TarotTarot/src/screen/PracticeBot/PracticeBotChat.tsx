import React, { useEffect, useState } from "react";
import { IMessage } from "react-native-gifted-chat";
import { TarotKeyword } from "../../design/Tarot/TarotInterface";
import GetPracticeBotData from "../../library/firebase/GetPracticeBotData";
import ChatBase from "../../design/chat/ChatBase";
import Screen from "../../design/Screen";

export default function PracticeBotChat({ navigation, route }) {
    const [text, setText] = useState("");
    const [message, setMessage] = useState<IMessage[]>([]);
    const [messageData, setMessageData] = useState({
        chats: [],
        routeIndex: [],
        routeTo: [],
    });
    const [tarots, setTarots] = useState<TarotKeyword[]>([]);
    let appendMessage = null;

    useEffect(() => {
        console.log(route.params);
        if (route?.params?.id) {
            GetPracticeBotData(route.params.id).then((data) => {
                setMessageData({
                    chats: data?.chats,
                    routeIndex: Object.keys(data?.routeIndex).map((value) =>
                        parseInt(value),
                    ),
                    routeTo: Object.values(data?.routeIndex),
                });

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

    useEffect(() => {
        if (messageData.chats.length > 0 && !appendMessage)
            appendMessage = setInterval(() => {
                setMessageData((prevData) => {
                    setMessage((prevMessage) => {
                        // Append Data
                        if (prevMessage.length < prevData.chats.length) {
                            const dataToAppend = {
                                _id: Date.now(),
                                text: prevData.chats[prevMessage.length],
                                createdAt: Date.now(),
                                user: {
                                    _id: "system",
                                    name: "연애봇",
                                },
                            };

                            return [...prevMessage, dataToAppend];
                        }

                        return [...prevMessage];
                    });

                    return { ...prevData };
                });
            }, 2000);
    }, [messageData.chats]);

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
