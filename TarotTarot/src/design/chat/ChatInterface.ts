import { TextInputProps } from "react-native";
import { TarotKeyword } from "../Tarot/TarotInterface";

export type ChatInputTypes = "Start" | "Draw" | "Hide" | "Input" | "End";
export interface ChatInputChipFunctions {
    onPressStartA: () => void;
    onPressStartB: () => void;
    onPressDraw: () => void;
    onPressEndA: () => void;
    onPressEndB: () => void;
}

export interface ChatInputTarotProps extends TextInputProps {
    tarots: TarotKeyword[];
    onPressSend: () => void;
}

export interface ChatInputProps
    extends ChatInputChipFunctions,
        ChatInputTarotProps {
    type: ChatInputTypes;
}
