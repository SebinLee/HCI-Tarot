import React from "react";
import { View, Modal, TouchableOpacity } from "react-native";
import { ModalBaseProp } from "./LayoutInterface";
import LayoutStyle from "./LayoutStyle";

//@ts-ignore
import ModalClose from "../../asset/modal/ModalClose.svg";
import { Body2, H1 } from "../Typography";
import Color from "../Color";

/**
 * @description 모달을 표출하는 Component입니다.
 * @param {boolean} visible Modal의 Visible 여부를 전달합니다.
 * @param {function} setVisible Modal의 표출여부를 결정할 수 있는 함수를 전달합니다.
 * @param {boolean} renderClose 상단에 닫기 버튼을 렌더할지 여부를 전달합니다.
 */
export default function ModalBase({
    title,
    subtitle,
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
                <H1
                    style={{
                        fontWeight: "500",
                        textAlign: "center",
                        marginBottom: 10,
                    }}
                >
                    {title}
                </H1>
            )}
            {subtitle && (
                <Body2
                    color={Color.TextSecondary}
                    style={{ textAlign: "center", marginBottom: 5 }}
                >
                    {subtitle}
                </Body2>
            )}
        </View>
    );

    return (
        <View style={LayoutStyle.modalBaseFullScreen}>
            <Modal animationType="slide" transparent={true} visible={visible}>
                <View style={LayoutStyle.modalBaseCenteredView}>
                    <View style={LayoutStyle.modalBaseView}>
                        {renderClose && (
                            <ModalCloseButton
                                onPress={() => {
                                    setVisible(false);
                                    onClosePress();
                                }}
                            />
                        )}
                        <View style={containerStyle}>
                            <Title />
                            {children}
                        </View>
                    </View>
                </View>
            </Modal>
        </View>
    );
}

function ModalCloseButton({ onPress }) {
    return (
        <View style={LayoutStyle.modalBaseNavigationBar}>
            <TouchableOpacity onPress={onPress}>
                <ModalClose width={20} height={20} />
            </TouchableOpacity>
        </View>
    );
}
