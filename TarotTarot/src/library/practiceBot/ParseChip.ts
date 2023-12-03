import { IMessage } from "react-native-gifted-chat";
import { ChatInputChipProps } from "../../design/chat/ChatInterface";
import { ServerMessages } from "./PracticeBotInterface";
import { UserInfo } from "../redux/UserInfoReducer";
import CreateMessage from "./CreateMessage";
import AppendServerMessage from "./AppendServerMessage";

export default function ParseChips(
    data: ServerMessages,
    userInfo: UserInfo,
    botUserInfo: { _id: string; name: string; avatar: string },
    setContentRoute: React.Dispatch<React.SetStateAction<string>>,
    setMessage: React.Dispatch<React.SetStateAction<IMessage[]>>,
    setShowChips: React.Dispatch<React.SetStateAction<boolean>>,
    navigation: any,
): Record<string, ChatInputChipProps[]> {
    const { id, username, profilePic } = userInfo;
    const routeKeys = Object.keys(data);
    let chips: Record<string, ChatInputChipProps[]> = {
        exit: [
            {
                text: "종료합니다",
                onPress: () => {
                    console.log("Navigate Screen Here");
                },
            },
        ],
    };

    routeKeys.forEach((key) => {
        // @ts-ignore
        chips[key] = data[key].chips.map((chip) => ({
            text: chip.text,
            onPress: () => {
                setShowChips(false);
                setMessage((prev) => [
                    ...prev,
                    CreateMessage(chip.text, {
                        _id: id,
                        name: username,
                        avatar: profilePic,
                    }),
                ]);

                // If the chip is displayed at finish stage, then route to other screen
                if (key === "finish") navigation.navigate(chip.route);
                else {
                    setContentRoute(chip.route);
                    if (chip.route !== "draw")
                        AppendServerMessage(
                            botUserInfo,
                            data[chip.route],
                            setMessage,
                            setShowChips,
                        );
                    else setShowChips(true);
                }
            },
        }));
    });

    return chips;
}
