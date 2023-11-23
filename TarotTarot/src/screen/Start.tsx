import React, { useState } from "react";
import { View } from "react-native";
import Screen from "../design/Screen";
import FastImage from "react-native-fast-image";
import Button from "../design/Button";
import { ButtonSize } from "../design/button/ButtonInterface";
import { NavigationPropEnum } from "../design/layout/LayoutInterface";
import TextInput from "../design/TextInput";
import Chip, { ChipContainer } from "../design/Chip";
import Modal from "../design/Modal";
import { Text } from "../design/Text";

export default function Start() {
    const [text, setText] = useState("");
    const [visible, setVisible] = useState(false);
    const [selected, setSelected] = useState(false);

    return (
        <Screen
            title="test"
            navigationLeftProp={NavigationPropEnum.back}
            navigationRightProp={NavigationPropEnum.hide}
            onRightPropPress={() => {
                console.log("Testtest");
            }}
        >
            <View>
                <FastImage
                    source={require("../design/assets/logo-primary.png")}
                    style={{ width: 120, height: 120, margin: 30 }}
                    resizeMode={FastImage.resizeMode.contain}
                />
                <Button
                    size={ButtonSize.L}
                    text="시작하기"
                    onPress={() => setVisible(true)}
                />
                <TextInput
                    value={text}
                    onChangeText={(text) => setText(text)}
                    multiline={true}
                />
                <ChipContainer>
                    <Chip
                        filled={true}
                        text="test"
                        selected={selected}
                        onPress={() => {
                            setSelected(!selected);
                        }}
                        showAccessoryRight={true}
                    />
                    <Chip
                        filled={true}
                        text="test"
                        selected={selected}
                        onPress={() => {
                            setSelected(!selected);
                        }}
                        showAccessoryRight={true}
                    />
                    <Chip
                        filled={true}
                        text="test"
                        selected={selected}
                        onPress={() => {
                            setSelected(!selected);
                        }}
                        showAccessoryRight={true}
                    />
                </ChipContainer>
                <Modal
                    title="Modal Test"
                    subtitle="asdkfadsfkjasl;fdkj;alksjdf;laksjdfl;kasdjfkl"
                    visible={visible}
                    setVisible={setVisible}
                    renderClose={true}
                >
                    <Text>test</Text>
                </Modal>
            </View>
        </Screen>
    );
}
