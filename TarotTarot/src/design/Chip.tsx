import React from "react";
import { Icon } from "@ui-kitten/components";
import {
    View,
    ViewProps,
    StyleSheet,
    TouchableOpacity,
    TouchableOpacityProps,
} from "react-native";
import { Text, TextType } from "./Text";
import Color from "./Color";

export default function Chip({ filled = false, ...props }: ChipProps) {
    return filled ? <ChipFilled {...props} /> : <ChipOutlined {...props} />;
}

export const ChipContainer = ({ style, children, ...props }: ViewProps) => (
    <View style={[style, styles.container]} {...props}>
        {children}
    </View>
);

const ChipFilled = ({
    text = "",
    selected = false,
    showAccessoryRight = false,
    ...props
}: ChipBaseProps) => (
    <TouchableOpacity
        style={[
            styles.chip,
            {
                backgroundColor: selected
                    ? ChipColor.SolidEnabled.Button
                    : ChipColor.SolidDisabled.Button,
            },
        ]}
        {...props}
    >
        <Text
            type={TextType.ButtonM}
            color={
                selected
                    ? ChipColor.SolidEnabled.Text
                    : ChipColor.SolidDisabled.Text
            }
        >
            {text}
        </Text>
        {selected && showAccessoryRight && (
            <Icon name="close-outline" fill={Color.White} style={styles.icon} />
        )}
    </TouchableOpacity>
);

const ChipOutlined = ({
    text = "",
    selected = false,
    showAccessoryRight = false,
    ...props
}: ChipBaseProps) => (
    <TouchableOpacity
        style={[
            styles.chip,
            styles.outlined,
            {
                borderColor: selected
                    ? ChipColor.OutlineEnabled.Button
                    : ChipColor.OutlineDisabled.Button,
            },
        ]}
        {...props}
    >
        <Text
            type={TextType.ButtonM}
            color={
                selected
                    ? ChipColor.OutlineEnabled.Text
                    : ChipColor.OutlineDisabled.Text
            }
        >
            {text}
        </Text>
        {selected && showAccessoryRight && (
            <Icon
                name="close-outline"
                fill={Color.Primary}
                style={styles.icon}
            />
        )}
    </TouchableOpacity>
);

const styles = StyleSheet.create({
    container: { flexDirection: "row" },

    chip: {
        height: 36,
        marginRight: 10,
        borderRadius: 23,
        paddingHorizontal: 14,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
    },

    outlined: {
        borderWidth: 1,
    },

    icon: {
        width: 18,
        height: 18,
        marginLeft: 2,
    },
});

const ChipColor = {
    SolidDisabled: {
        Button: Color.Gray,
        Text: Color.White,
    },

    SolidEnabled: {
        Button: Color.Primary,
        Text: Color.White,
    },

    OutlineDisabled: {
        Button: Color.Gray,
        Text: Color.Gray,
    },

    OutlineEnabled: {
        Button: Color.Primary,
        Text: Color.Primary,
    },
};

interface ChipBaseProps extends TouchableOpacityProps {
    text?: string;
    selected: boolean;
    showAccessoryRight?: boolean;
}

interface ChipProps extends ChipBaseProps {
    filled: boolean;
}
