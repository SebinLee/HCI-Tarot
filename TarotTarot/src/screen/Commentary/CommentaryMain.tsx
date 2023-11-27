import React, { useEffect, useState } from "react";
import Screen from "../../design/Screen";
import { FlatList } from "react-native";
import GetPracticeQuestions from "../../library/firebase/GetPracticeQuestions";
import CommentaryQuestionList from "../../design/commentary/CommentaryQuestionList";
import CommentaryFilter from "../../design/commentary/CommentaryFilter";

export default function CommentaryMain({ navigation }) {
    const [questions, setQuestions] = useState([]);
    const [displayData, setDisplayData] = useState([]);
    const [selectedChips, setSelectedChips] = useState([]);

    useEffect(() => {
        GetPracticeQuestions().then((data) => {
            setQuestions(data);
            setDisplayData(data?.filter((item) => item.topic != "튜토리얼"));
        });
    }, []);

    useEffect(() => {
        if (selectedChips.length < 1) {
            setDisplayData(
                questions.filter((item) => item.topic != "튜토리얼"),
            );
        } else {
            setDisplayData(
                questions.filter((data) => selectedChips.includes(data.topic)),
            );
        }
    }, [selectedChips]);

    return (
        <Screen title="해석 리스트">
            <FlatList
                data={displayData}
                ListHeaderComponent={() => (
                    <CommentaryFilter
                        selectedChips={selectedChips}
                        setSelectedChips={setSelectedChips}
                    />
                )}
                renderItem={(data) => (
                    <CommentaryQuestionList
                        key={data.item.id}
                        question={data.item.question}
                        topic={data.item.topic}
                        onPress={() => {
                            navigation.push("CommentaryPost", {
                                data: data.item,
                            });
                        }}
                    />
                )}
            />
        </Screen>
    );
}
