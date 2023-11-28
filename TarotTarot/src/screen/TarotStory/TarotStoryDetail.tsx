import React from "react";
import Screen from "../../design/Screen";
import DisplayTarotCard from "../../design/dailyReading/DisplayTarotCard";
import { View } from "react-native";

export default function TarotStoryDetail() {
    return (
        <Screen title="Detail">
            <View style={{ alignItems: "center" }}>
                <DisplayTarotCard index={0} />
            </View>
        </Screen>
    );
}
