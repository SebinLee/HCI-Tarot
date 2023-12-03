import React, { useEffect, useState } from "react";
import Screen from "../../design/Screen";
import { FlatList } from "react-native";
import CommentaryAnswer from "../../design/commentary/CommentaryAnswer";
import CommentaryQuestion from "../../design/commentary/CommentaryQuestion";
import GetUserCommentary from "../../library/firebase/GetUserCommentary";
import SortCommentaryData from "../../library/commentary/SortCommentaryData";
import { useAppSelector } from "../../library/redux/ReduxStore";

export default function CommentaryPost({ route }) {
    const { params } = route;
    const { id } = useAppSelector((state) => state.userInfo);
    const [userComment, setUserComment] = useState([]);

    useEffect(() => {
        GetUserCommentary(params.data.id).then((data) => {
            setUserComment([...SortCommentaryData(data, id)]);
        });
    }, []);

    return (
        <Screen title="해석 리스트">
            <FlatList
                data={userComment}
                contentContainerStyle={{ paddingBottom: 100 }}
                showsVerticalScrollIndicator={false}
                ListHeaderComponent={() => (
                    <CommentaryQuestion
                        topic={params.data.topic}
                        question={params.data.question}
                        description={params.data.description}
                        tarotCards={params.data.tarotCards}
                    />
                )}
                renderItem={(data) => (
                    <CommentaryAnswer
                        {...data.item}
                        key={data.item.id}
                        tarotCards={params.data.tarotCards}
                    />
                )}
            />
        </Screen>
    );
}
