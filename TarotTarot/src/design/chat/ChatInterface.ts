import { TextInputProps } from "react-native";
import { TarotKeyword } from "../Tarot/TarotInterface";
import { IMessage } from "react-native-gifted-chat";

export interface ChatInputChipProps {
    text: string;
    onPress: () => void;
}

export interface ChatInputTarotProps extends TextInputProps {
    tarots: TarotKeyword[];
    onPressSend: (
        text: string,
        answer: string[],
        setAnswer: React.Dispatch<React.SetStateAction<string[]>>,
    ) => void;
}

export interface ChatInputProps extends ChatInputTarotProps {
    contentRoute: string;
    chips: Record<string, ChatInputChipProps[]>;
}

export interface ChatBaseProps extends ChatInputProps {
    message: IMessage[];
    showBottomAccessory: boolean;
}
