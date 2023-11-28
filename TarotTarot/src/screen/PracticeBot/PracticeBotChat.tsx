import React, { useEffect, useRef, useState } from "react";
import { IMessage } from "react-native-gifted-chat";
import GetPracticeBotData from "../../library/firebase/GetPracticeBotData";
import ChatBase from "../../design/chat/ChatBase";
import Screen from "../../design/Screen";
import AppendMessage from "../../library/practiceBot/AppendMessage";
import ParseChips from "../../library/practiceBot/ParseChip";
import { ChatInputChipProps } from "../../design/chat/ChatInterface";
import { useAppSelector } from "../../library/redux/ReduxStore";

export default function PracticeBotChat({ navigation, route }) {
    const bottomChips = useRef<Record<string, ChatInputChipProps[]>>({});
    const userInfo = useAppSelector((state) => state.userInfo);

    const [contentRoute, setContentRoute] = useState<string>("entry");
    const [showBottomAcc, setShowBottomAcc] = useState<boolean>(false);
    const [message, setMessage] = useState<IMessage[]>([]);
    const [serverData, setServerData] = useState({
        tarotCards: [],
        data: {},
    });

    // ---------------------------------------------------------------------------------
    // Load chat data from server
    useEffect(() => {
        console.log(route.params);
        if (route?.params?.id) {
            GetPracticeBotData(route.params.id).then((value) => {
                const { tarotCards, data } = value;
                bottomChips.current = ParseChips(
                    data,
                    userInfo,
                    setContentRoute,
                    setMessage,
                    setShowBottomAcc,
                );
                setServerData({ tarotCards, data });
                AppendMessage(data[contentRoute], setMessage, setShowBottomAcc);
            });
        }
    }, []);

    // ---------------------------------------------------------------------------------

    const onPressSend = () => {
        console.log("onPress");
    };

    return (
        <Screen title="Chats" horizontalPadding={false}>
            <ChatBase
                chips={bottomChips.current}
                showBottomAccessory={showBottomAcc}
                contentRoute={contentRoute}
                onPressSend={onPressSend}
                message={message}
                tarots={serverData.tarotCards}
            />
        </Screen>
    );
}
