import { TextInputProps } from "react-native";

export type ChatInputTypes = "Start" | "Draw" | "Hide" | "Input" | "End";
export interface ChatInputChipFunctions {
    onPressStartA: () => void;
    onPressStartB: () => void;
    onPressDraw: () => void;
    onPressEndA: () => void;
    onPressEndB: () => void;
}

export interface Tarot {
    index: number;
    topic: string;
    keywords: string;
}

export interface ChatInputTarotProps extends TextInputProps {
    tarots: Tarot[];
    onPressSend: () => void;
}

export interface ChatInputProps
    extends ChatInputChipFunctions,
        ChatInputTarotProps {
    type: ChatInputTypes;
}
