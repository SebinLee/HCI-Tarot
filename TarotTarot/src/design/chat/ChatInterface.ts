import { TextInputProps } from "react-native";
import { TarotKeyword } from "../Tarot/TarotInterface";
import { IMessage } from "react-native-gifted-chat";

export type ChatInputTypes = "Start" | "Draw" | "Hide" | "Input" | "End";

export interface ChatInputChipProps {
    text: string;
    onPress: () => void;
}
export interface ChatInputChipsProps {
    start: ChatInputChipProps[];
    draw: ChatInputChipProps[];
    end: ChatInputChipProps[];
}

export interface ChatInputTarotProps extends TextInputProps {
    tarots: TarotKeyword[];
    onPressSend: () => void;
}

export interface ChatInputProps extends ChatInputTarotProps {
    type: ChatInputTypes;
    chips: ChatInputChipsProps;
}

export interface ChatBaseProps extends ChatInputProps {
    message: IMessage[];
}
