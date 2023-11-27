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
    const [serverData, setserverData] = useState({
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
                setserverData({ chats, routeIndex, routeTo, tarotCards });
            });
        }
    }, []);

    // Start appending chats after serverData state has initialized
    useEffect(() => {
        if (serverData.chats.length > 0 && appendMessage.current === null) {
            appendMessage.current = AppendMessage(setserverData, setMessage);
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

    return (
        <Screen title="Chats" horizontalPadding={false}>
            <ChatBase
                type={type}
                onPressSend={onPressSend}
                message={message}
                tarots={serverData.tarotCards}
            />
        </Screen>
    );
}
