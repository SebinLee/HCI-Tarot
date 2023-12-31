import { IMessage } from "react-native-gifted-chat";
import { ServerMessage } from "./PracticeBotInterface";
import CreateMessage from "./CreateMessage";

export default function AppendServerMessage(
    botInfo: { _id: string; name: string; avatar: string },
    serverMessage: ServerMessage,
    setMessage: React.Dispatch<React.SetStateAction<IMessage[]>>,
    setShowChips: React.Dispatch<React.SetStateAction<boolean>>,
) {
    const { messages } = serverMessage;
    let idx = 0;

    const interval = setInterval(() => {
        const dataToAppend = CreateMessage(messages[idx], botInfo);
        setMessage((prev) => [...prev, dataToAppend]);

        if (++idx === messages.length) {
            setShowChips(true);
            clearInterval(interval);
        }
    }, 700);
}
