import React, { useEffect, useState } from "react";
import Screen from "../../design/Screen";
import { Text } from "../../design/Text";
import { NavigationPropEnum } from "../../design/layout/LayoutInterface";
import PostButton from "../../design/PostButton";
import { Dimensions, View } from "react-native";
import { Calendar, DateData } from "react-native-calendars";
import Color from "../../design/Color";
import { useAppSelector } from "../../library/redux/ReduxStore";
import CalculateDays from "../../library/dailyReading/CalculateDays";

export default function DailyReadingMain({ navigation }) {
    const { createdAt } = useAppSelector((state) => state.userInfo);
    const [day, setDay] = useState(0);
    const [selected, setSelected] = useState("");
    const [markedDate, setMarkedDate] = useState({
        "2023-11-06": { marked: true },
    });

    useEffect(() => {
        console.log(typeof createdAt);
        setDay(CalculateDays(createdAt));
    }, []);

    const Title = () => (
        <Text style={{}}>
            타로 공부한지{" "}
            <Text
                style={{ fontSize: 40, fontWeight: "200", fontStyle: "italic" }}
            >
                {day}
            </Text>
            일째
        </Text>
    );

    const onPressDate = (day: DateData) => {
        const exist = Object.keys(markedDate).includes(day.dateString);

        if (exist) {
            navigation.push("DailyReadingView", {
                id: day.dateString,
            });
        } else {
            setSelected(day.dateString);
        }
    };

    const onPressWrite = () => {
        navigation.push("DailyReadingWrite", {
            id: "today",
        });
    };

    return (
        <Screen
            title="데일리 리딩"
            navigationLeftProp={NavigationPropEnum.hide}
        >
            <View style={{ alignItems: "center" }}>
                <Title />
                <Calendar
                    markingType="custom"
                    style={{
                        marginTop: 30,
                        width: Dimensions.get("screen").width * 0.8,
                    }}
                    theme={{
                        arrowColor: Color.Primary,

                        // Define color for text
                        selectedDayBackgroundColor: Color.Primary,
                        selectedDayTextColor: Color.White,
                        indicatorColor: Color.Primary,

                        todayTextColor: Color.Primary_dark,
                        monthTextColor: Color.Primary,
                        dayTextColor: "#222222",

                        // Define font family and size for texts
                        textDayFontFamily: "monospace",
                        textMonthFontFamily: "monospace",
                        textDayHeaderFontFamily: "monospace",
                        textDayFontWeight: "300",
                        textMonthFontWeight: "500",
                        textDayHeaderFontWeight: "300",
                        textDayFontSize: 13,
                        textMonthFontSize: 16,
                        textDayHeaderFontSize: 13,
                    }}
                    onDayPress={onPressDate}
                    markedDates={{
                        ...markedDate,
                        [selected]: { selected: true },
                    }}
                />
            </View>
            <PostButton onPress={onPressWrite} />
        </Screen>
    );
}
