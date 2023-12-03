import React from "react";
import * as RN from "react-native";
import {
    View,
    TouchableOpacity,
    StyleProp,
    ViewStyle,
    StyleSheet,
    Dimensions,
} from "react-native";
import { Icon } from "@ui-kitten/components";
import { Text, TextType } from "./Text";
import Color from "./Color";

export default function Modal({
    title = "",
    subtitle = "",
    visible,
    setVisible,
    renderClose = true,
    onClosePress = () => {},
    containerStyle,
    children,
}: ModalBaseProp) {
    if (!visible) return null;

    const Title = () => (
        <View style={{ alignItems: "center", alignSelf: "center" }}>
            {title && (
                <Text
                    type={TextType.H1}
                    style={{
                        fontSize: 25,
                        textAlign: "center",
                        marginBottom: 10,
                    }}
                >
                    {title}
                </Text>
            )}
            {subtitle && (
                <Text
                    type={TextType.Body2}
                    color={Color.Gray}
                    style={{ textAlign: "center", marginBottom: 5 }}
                >
                    {subtitle}
                </Text>
            )}
        </View>
    );

    const ModalCloseButton = () => (
        <View style={styles.modalNavigation}>
            <TouchableOpacity
                onPress={() => {
                    setVisible(false);
                    onClosePress();
                }}
            >
                <Icon
                    name="close-outline"
                    fill={Color.Black}
                    style={styles.icon}
                />
            </TouchableOpacity>
        </View>
    );

    return (
        <View style={styles.fullScreen}>
            <RN.Modal
                animationType="slide"
                transparent={true}
                visible={visible}
            >
                <View style={styles.centerView}>
                    <View style={styles.modalContainer}>
                        {renderClose && <ModalCloseButton />}
                        <View style={containerStyle}>
                            <Title />
                            {children}
                        </View>
                    </View>
                </View>
            </RN.Modal>
        </View>
    );
}

const screen = Dimensions.get("screen");
const styles = StyleSheet.create({
    fullScreen: {
        width: screen.width,
        height: screen.height,
        justifyContent: "center",
        alignItems: "center",
        position: "absolute",
    },

    centerView: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },

    modalContainer: {
        alignItems: "stretch",
        width: screen.width * 0.8,
        paddingHorizontal: 15,
        paddingVertical: 30,
        borderRadius: 15,
        backgroundColor: Color.White,
        shadowColor: Color.Black,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.05,
        shadowRadius: 3.5,
        elevation: 7,
    },

    modalNavigation: {
        height: 5,
        marginBottom: 5,
        alignItems: "center",
        flexDirection: "row-reverse",
        justifyContent: "space-between",
    },

    icon: {
        width: 20,
        height: 20,
    },
});

interface ModalBaseProp {
    title?: string;
    subtitle?: string;
    visible: boolean;
    setVisible: React.Dispatch<React.SetStateAction<boolean>>;
    renderClose?: boolean;
    onClosePress?: () => void;
    containerStyle?: StyleProp<ViewStyle>;
    children: React.ReactNode;
}
