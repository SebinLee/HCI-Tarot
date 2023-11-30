import { StyleSheet } from "react-native";
import Markdown from "react-native-markdown-display";
import Color from "./Color";

export default function MarkdownText({ text = "" }) {
    const style = StyleSheet.create({
        text: {
            fontSize: 16,
            lineHeight: 24,
            color: Color.Primary,
        },
    });

    return (
        <Markdown style={style}>{text.replace(/\\n/g, "\n\n").trim()}</Markdown>
    );
}
