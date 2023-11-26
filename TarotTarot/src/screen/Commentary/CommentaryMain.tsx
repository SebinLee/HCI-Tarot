import React, { useEffect, useState } from "react";
import Screen from "../../design/Screen";
import { FlatList, TouchableOpacity, View } from "react-native";
import { Text, TextType } from "../../design/Text";
import GetPracticeQuestions from "../../library/firebase/GetPracticeQuestions";

export default function CommentaryMain({ navigation }) {
    const [questions, setQuestions] = useState([]);

    useEffect(() => {
        GetPracticeQuestions().then((data) => setQuestions(data));
    }, []);

    // useEffect(() => {
    //     console.log(questions);
    // }, [questions]);

    return (
        <Screen title="해석 리스트">
            <FlatList
                data={questions}
                renderItem={(data) => {
                    console.log(data);

                    return (
                        <TouchableOpacity
                            onPress={() =>
                                navigation.push("CommentaryPost", {
                                    data: data.item,
                                })
                            }
                        >
                            <View>
                                <Text type={TextType.H2}>
                                    Q. {data?.item.question}
                                </Text>
                            </View>
                        </TouchableOpacity>
                    );
                }}
            />
        </Screen>
    );
}
