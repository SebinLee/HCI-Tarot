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
import AppendServerMessage from "../../library/practiceBot/AppendServerMessage";
import ParseChips from "../../library/practiceBot/ParseChip";
import Modal from "../../design/Modal";
import MarkdownText from "../../design/MarkdownText";
import { Dimensions, ScrollView } from "react-native";

export default function PracticeBotChat({ navigation, route }) {
    const botUserInfo = useRef({
        _id: "system",
        name: "bot",
        avatar: "",
    });
    const bottomChips = useRef<Record<string, ChatInputChipProps[]>>({});
    const userInfo = useAppSelector((state) => state.userInfo);

    const [modalVisible, setModalVisible] = useState(false);
    const [contentRoute, setContentRoute] = useState<string>("entry");
    const [showBottomAcc, setShowBottomAcc] = useState<boolean>(false);
    const [message, setMessage] = useState<IMessage[]>([]);
    const [serverData, setServerData] = useState({
        tip: "",
        tarotCards: [],
        data: {},
    });

    // ---------------------------------------------------------------------------------
    // Load chat data from server
    useEffect(() => {
        console.log(route.params);
        if (route?.params?.id) {
            GetPracticeBotData(route.params.id).then((value) => {
                console.log(value);
                const { tarotCards, data, tip, profilePic } = value;

                botUserInfo.current = {
                    ...botUserInfo.current,
                    avatar: profilePic,
                };

                bottomChips.current = ParseChips(
                    data,
                    userInfo,
                    botUserInfo.current,
                    setContentRoute,
                    setMessage,
                    setShowBottomAcc,
                    navigation,
                );
                setServerData({ tarotCards, data, tip });

                AppendServerMessage(
                    botUserInfo.current,
                    data[contentRoute],
                    setMessage,
                    setShowBottomAcc,
                );
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
                    AppendServerMessage(
                        botUserInfo.current,
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
            navigationRightProp={
                serverData.tip
                    ? NavigationPropEnum.info
                    : NavigationPropEnum.hide
            }
            onRightPropPress={() => {
                setModalVisible(true);
            }}
        >
            <ChatBase
                chips={bottomChips.current}
                showBottomAccessory={showBottomAcc}
                contentRoute={contentRoute}
                onPressSend={onPressSend}
                message={message}
                tarots={serverData.tarotCards}
            />
            <Modal
                title="TIP"
                visible={modalVisible}
                setVisible={setModalVisible}
            >
                <ScrollView
                    style={{
                        height: Dimensions.get("screen").height * 0.6,
                        marginTop: 10,
                    }}
                    showsVerticalScrollIndicator={false}
                >
                    <MarkdownText text={serverData.tip} />
                </ScrollView>
            </Modal>
        </Screen>
    );
}
