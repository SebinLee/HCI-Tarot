import React, { useEffect, useRef, useState } from "react";
import { IMessage } from "react-native-gifted-chat";

import { NavigationPropEnum } from "../../design/layout/LayoutInterface";
import { ChatInputChipProps } from "../../design/chat/ChatInterface";
import ChatBase from "../../design/chat/ChatBase";
import Screen from "../../design/Screen";

import { useAppSelector } from "../../library/redux/ReduxStore";
import WritePracticeBotAnswer from "../../library/firebase/WritePracticeBotAnswer";
import GetPracticeBotData from "../../library/firebase/GetPracticeBotData";
import CreateMessage from "../../library/practiceBot/CreateMessage";
import AppendMessage from "../../library/practiceBot/AppendMessage";
import ParseChips from "../../library/practiceBot/ParseChip";

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
                    navigation,
                );
                setServerData({ tarotCards, data });
                AppendMessage(data[contentRoute], setMessage, setShowBottomAcc);
            });
        }
    }, []);

    // ---------------------------------------------------------------------------------

    const onPressSend = async (
        text: string,
        setAnswer: React.Dispatch<React.SetStateAction<string[]>>,
        setCurrent: React.Dispatch<React.SetStateAction<number>>,
    ) => {
        const { id, username, profilePic } = userInfo;

        setAnswer((prev) => {
            const newData = [...prev, text];
            if (newData.length >= serverData.tarotCards.length) {
                console.log("Please Submit data here");

                WritePracticeBotAnswer(
                    route.params.id,
                    newData,
                    id,
                    profilePic,
                    username,
                ).then(() => {
                    setShowBottomAcc(false);
                    setContentRoute("finish");
                    AppendMessage(
                        serverData.data["finish"],
                        setMessage,
                        setShowBottomAcc,
                    );
                });
            }

            return newData;
        });

        setMessage((prev) => [
            ...prev,
            CreateMessage(text, {
                _id: id,
                name: username,
                avatar: profilePic,
            }),
        ]);
        setCurrent((prev) =>
            Math.min(serverData.tarotCards.length - 1, prev + 1),
        );
    };

    return (
        <Screen
            title="Chats"
            horizontalPadding={false}
            navigationLeftProp={NavigationPropEnum.hide}
        >
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
