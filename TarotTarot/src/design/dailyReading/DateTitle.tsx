import React from "react";
import { View } from "react-native";
import { DateData } from "react-native-calendars";

import Color from "../Color";
import { Text, TextType } from "../Text";

import CalculateDays from "../../library/dailyReading/CalculateDays";
import { useAppSelector } from "../../library/redux/ReduxStore";

const weekdayArray = ["일", "월", "화", "수", "목", "금", "토"];

export default function DateTitle({ dateString, month, day }: DateData) {
    const { createdAt } = useAppSelector((state) => state.userInfo);

    const authoredDate = new Date(dateString);
    const weekday = weekdayArray[authoredDate.getDay()];

    return (
        <View style={{ marginVertical: 10 }}>
            <Text
                type={TextType.H1}
                color={Color.Primary_dark}
                style={{ fontSize: 22 }}
            >
                {month}월 {day}일 {weekday}요일
            </Text>
            <Text
                type={TextType.Body2}
                color={Color.Primary_dark}
                style={{ opacity: 0.7, marginVertical: 7 }}
            >
                타로 공부한지 {CalculateDays(createdAt, authoredDate)}일 째
            </Text>
        </View>
    );
}
