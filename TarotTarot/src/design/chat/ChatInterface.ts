import { TextInputProps } from "react-native";
import { TarotKeyword } from "../Tarot/TarotInterface";
import { IMessage } from "react-native-gifted-chat";

export type ChatInputTypes = "Start" | "Draw" | "Hide" | "Input" | "End";
export interface ChatInputTarotProps extends TextInputProps {
    tarots: TarotKeyword[];
    onPressSend: () => void;
}

export interface ChatInputProps extends ChatInputTarotProps {
    type: ChatInputTypes;
}

export interface ChatBaseProps extends ChatInputProps {
    message: IMessage[];
}
