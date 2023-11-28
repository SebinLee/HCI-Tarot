import React, { useEffect, useState } from "react";
import { Alert, Dimensions, StyleSheet, View } from "react-native";
import { useIsFocused } from "@react-navigation/native";
import { Calendar, DateData } from "react-native-calendars";

import Color from "../../design/Color";
import Screen from "../../design/Screen";
import PostButton from "../../design/PostButton";
import { NavigationPropEnum } from "../../design/layout/LayoutInterface";
import { Text } from "../../design/Text";

import { useAppSelector } from "../../library/redux/ReduxStore";
import CalculateDays from "../../library/dailyReading/CalculateDays";
import GetDailyReadingLists from "../../library/dailyReading/GetDailyReading";
import GetTodayDateData from "../../library/dailyReading/GetTodayDateData";
import FastImage from "react-native-fast-image";

export default function DailyReadingMain({ navigation }) {
    const isFocused = useIsFocused();
    const { createdAt, id } = useAppSelector((state) => state.userInfo);

    const [day, setDay] = useState(0);
    const [markedDate, setMarkedDate] = useState({});
    const [dailyTarot, setDailyTarot] = useState({});

    useEffect(() => {
        if (isFocused) {
            setDay(CalculateDays(createdAt));
            GetDailyReadingLists(id)
                .then((res) => {
                    if (res) {
                        // Parse daily reading date and append to markedDate
                        setMarkedDate((prev) => {
                            Object.keys(res).forEach((value) => {
                                prev = { ...prev, [value]: { marked: true } };
                            });

                            return prev;
                        });

                        // Store loaded daily tarots.
                        setDailyTarot({ ...res });
                    }
                })
                .catch(() => {
                    Alert.alert(
                        "통신 오류",
                        "데일리 리딩 정보를 가져오던 중 오류가 발생했습니다. 다시 시도해주세요",
                    );
                });
        }
    }, [isFocused]);

    const onPressDate = (day: DateData) => {
        if (Object.keys(markedDate).includes(day.dateString)) {
            navigation.push("DailyReadingView", {
                //@ts-ignore
                data: dailyTarot[day.dateString],
                datedata: day,
            });
        }
    };

    const onPressWrite = () => {
        const { dateString } = GetTodayDateData();
        if (Object.keys(dailyTarot).includes(dateString)) {
            Alert.alert("작성 완료", "이미 오늘의 데일리 리딩을 작성했어요");
            return;
        } else {
            navigation.push("DailyReadingWrite");
        }
    };

    return (
        <Screen
            title="데일리 리딩"
            navigationLeftProp={NavigationPropEnum.hide}
        >
            <View style={style.container}>
                <Text>
                    타로 공부한지 <Text style={style.textDays}>{day}</Text> 일째
                </Text>
                <FastImage
                    source={require("../../design/assets/decoration-main.png")}
                    style={{ width: 100, height: 60, marginTop: 30 }}
                    resizeMode="contain"
                />
                <Calendar
                    style={style.calendar}
                    theme={{
                        arrowColor: Color.Primary,

                        // Define color for text
                        selectedDayBackgroundColor: Color.Primary,
                        selectedDayTextColor: Color.White,
                        indicatorColor: Color.Primary,

                        todayTextColor: Color.Black,
                        todayBackgroundColor: "#80dfb166",
                        monthTextColor: Color.Primary,
                        dayTextColor: "#222222",
                        dotColor: Color.Primary,

                        // Define font family and size for texts
                        textDayFontFamily: "monospace",
                        textMonthFontFamily: "monospace",
                        textDayHeaderFontFamily: "monospace",
                        textDayFontWeight: "300",
                        textMonthFontWeight: "500",
                        textDayHeaderFontWeight: "300",
                        textDayFontSize: 14,
                        textMonthFontSize: 16,
                        textDayHeaderFontSize: 13,
                    }}
                    onDayPress={onPressDate}
                    markedDates={{ ...markedDate }}
                />
            </View>
            <PostButton onPress={onPressWrite} />
        </Screen>
    );
}

const style = StyleSheet.create({
    container: { alignItems: "center" },
    textDays: {
        fontSize: 40,
        fontWeight: "200",
        fontStyle: "italic",
    },
    calendar: {
        marginTop: 30,
        width: Dimensions.get("screen").width * 0.8,
    },
});
