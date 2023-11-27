import React, { useEffect, useRef, useState } from "react";
import { IMessage } from "react-native-gifted-chat";
import GetPracticeBotData from "../../library/firebase/GetPracticeBotData";
import ChatBase from "../../design/chat/ChatBase";
import Screen from "../../design/Screen";
import AppendMessage from "../../library/practiceBot/AppendMessage";
import { ChatInputTypes } from "../../design/chat/ChatInterface";

export default function PracticeBotChat({ navigation, route }) {
    const [type, setType] = useState<ChatInputTypes>("Hide");
    const [message, setMessage] = useState<IMessage[]>([]);
    const [serverData, setServerData] = useState({
        chats: [],
        routeIndex: [],
        routeTo: [],
        tarotCards: [],
    });
    let appendMessage = useRef<Number>(null);

    // ---------------------------------------------------------------------------------
    // Load chat data from server
    useEffect(() => {
        console.log(route.params);
        if (route?.params?.id) {
            GetPracticeBotData(route.params.id).then((data) => {
                console.log(data);
                const { chats, routeIndex, routeTo, tarotCards } = data;
                setServerData({ chats, routeIndex, routeTo, tarotCards });
            });
        }
    }, []);

    // Start appending chats after serverData state has initialized
    useEffect(() => {
        if (serverData.chats.length > 0 && appendMessage.current === null) {
            appendMessage.current = AppendMessage(setServerData, setMessage);
        }
    }, [serverData.chats]);

    // Stop appending when chat meets stop condition
    useEffect(() => {
        if (message.length > serverData.routeIndex[0]) {
            console.log(serverData.routeTo);
            clearInterval(appendMessage.current);
            setType(serverData.routeTo[0]);
        }
    }, [message]);

    // ---------------------------------------------------------------------------------

    const onPressSend = () => {
        console.log("Pressed");
    };

    const removeRouting = () => {
        setServerData((prev) => ({
            ...prev,
            routeIndex: prev.routeIndex.filter((v, index) => index != 0),
            routeTo: prev.routeTo.filter((v, index) => index != 0),
        }));
    };

    const chips = {
        start: [
            {
                text: "선택지 A",
                onPress: () => {
                    removeRouting();
                    appendMessage.current = AppendMessage(
                        setServerData,
                        setMessage,
                    );
                    setType("Hide");
                },
            },
            {
                text: "선택지 B",
                onPress: () => {
                    removeRouting();
                    appendMessage.current = AppendMessage(
                        setServerData,
                        setMessage,
                    );
                    setType("Hide");
                },
            },
        ],
        draw: [
            {
                text: "선택지 A",
                onPress: () => {
                    setType("Input");
                },
            },
        ],
        end: [
            {
                text: "새로운 상담 시작하기",
                onPress: () => {
                    console.log("Exit");
                },
            },
            {
                text: "다른 리더의 해석 보러가기",
                onPress: () => {
                    console.log("Exit");
                },
            },
        ],
    };

    return (
        <Screen title="Chats" horizontalPadding={false}>
            <ChatBase
                chips={chips}
                type={type}
                onPressSend={onPressSend}
                message={message}
                tarots={serverData.tarotCards}
            />
        </Screen>
    );
}
