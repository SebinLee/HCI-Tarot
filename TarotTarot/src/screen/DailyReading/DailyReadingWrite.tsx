import React, { useRef, useState } from "react";
import { Alert, Dimensions, TextInput } from "react-native";
import { KeyboardAvoidingScrollView } from "react-native-keyboard-avoiding-scroll-view";

import Button from "../../design/Button";
import Screen from "../../design/Screen";
import DateTitle from "../../design/dailyReading/DateTitle";
import DisplayTarotCard from "../../design/dailyReading/DisplayTarotCard";
import { ButtonSize } from "../../design/button/ButtonInterface";
import { TarotCardType } from "../../design/TarotCard";
import SetDailyReading from "../../library/dailyReading/SetDailyReading";
import { useAppSelector } from "../../library/redux/ReduxStore";
import GetTodayDateData from "../../library/dailyReading/GetTodayDateData";

export default function DailyReadingWriting({ navigation }) {
    const [content, setContent] = useState("");
    const { id } = useAppSelector((state) => state.userInfo);

    // Declare const values - today date and card index
    const dateData = useRef(GetTodayDateData());
    const cardIndex = useRef(Math.floor(Math.random() * TarotCardType.length));

    return (
        <Screen title="데일리 리딩">
            <KeyboardAvoidingScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ paddingBottom: 60 }}
            >
                <DateTitle {...dateData.current} />
                <DisplayTarotCard index={cardIndex.current} />
                <TextInput
                    style={{
                        height: Dimensions.get("screen").height * 0.25,
                        padding: 10,
                    }}
                    placeholder="여기에 뽑은 카드를 바탕으로 오늘 하루를 기록해보세요 :)"
                    multiline={true}
                    value={content}
                    onChangeText={(text) => setContent(text)}
                />
                <Button
                    text="저장하기"
                    size={ButtonSize.L}
                    disabled={content.length <= 1}
                    onPress={() => {
                        SetDailyReading(
                            id,
                            dateData.current.dateString,
                            cardIndex.current,
                            content,
                        )
                            .then(() => {
                                navigation.navigate("DailyReadingMain");
                                Alert.alert(
                                    "업로드 완료",
                                    "데일리 리딩을 업로드했습니다.",
                                );
                            })
                            .catch(() => {
                                Alert.alert(
                                    "통신 오류",
                                    "데일리 리딩을 업로드 하는 도중 오류가 발생했습니다. 다시 시도해주세요",
                                );
                            });
                    }}
                />
            </KeyboardAvoidingScrollView>
        </Screen>
    );
}
