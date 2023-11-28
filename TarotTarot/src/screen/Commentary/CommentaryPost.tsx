import React, { useEffect, useState } from "react";
import Screen from "../../design/Screen";
import { FlatList } from "react-native";
import GetUserCommentary from "../../library/firebase/GetUserCommentary";
import CommentaryAnswer from "../../design/commentary/CommentaryAnswer";
import CommentaryQuestion from "../../design/commentary/CommentaryQuestion";

export default function CommentaryPost({ route }) {
    const { params } = route;
    const [userComment, setUserComment] = useState([]);

    useEffect(() => {
        console.log(params.data);
        GetUserCommentary(params.data.id).then((data) => {
            setUserComment([...data]);
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
                    <CommentaryAnswer {...data.item} key={data.item.id} />
                )}
            />
        </Screen>
    );
}
