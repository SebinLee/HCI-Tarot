import React from "react";
import { ScrollView } from "react-native";

import Screen from "../../design/Screen";
import DateTitle from "../../design/dailyReading/DateTitle";
import { Text, TextType } from "../../design/Text";
import DisplayTarotCard from "../../design/dailyReading/DisplayTarotCard";

export default function DailyReadingView({ navigation, route }) {
    const { data, datedata } = route?.params;

    return (
        <Screen title="데일리 리딩">
            <ScrollView>
                <DateTitle {...datedata} />
                <DisplayTarotCard index={data.index} />
                <Text style={{ marginTop: 15 }}>{data.content}</Text>
            </ScrollView>
        </Screen>
    );
}
