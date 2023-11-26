import React, { useEffect, useState } from "react";
import Screen from "../../design/Screen";
import { Text, TextType } from "../../design/Text";
import TarotCard from "../../design/TarotCard";
import { Dimensions, FlatList, View } from "react-native";
import GetUserCommentary from "../../library/firebase/GetUserCommentary";
import FastImage from "react-native-fast-image";

export default function CommentaryPost({ route }) {
    const { params } = route;
    const [userComment, setUserComment] = useState([]);

    useEffect(() => {
        console.log(params.data.id);
        GetUserCommentary(params.data.id).then((data) => {
            setUserComment([...data]);
        });
    }, []);

    return (
        <Screen title="해석 리스트">
            <Text type={TextType.H1}>Q. {params.data.question}</Text>
            <Text type={TextType.Body1}>{params.data.description}</Text>

            <View style={{ flexDirection: "row" }}>
                {params.data.tarotCards.map((data) => (
                    <TarotCard
                        size={Dimensions.get("screen").width * 0.35}
                        index={data.index}
                    />
                ))}
            </View>
            <Text type={TextType.H3}>답변</Text>
            <FlatList
                data={userComment}
                renderItem={(data) => {
                    console.log(data.item.profilePic);
                    return (
                        <View>
                            <FastImage
                                style={{
                                    width: 60,
                                    height: 60,
                                }}
                                source={data.item.profilePic}
                                resizeMode="contain"
                            />
                            <Text>{data.item.username}</Text>
                            <View>
                                <Text>Q1 {data.item.Q1}</Text>
                                <Text>Q2 {data.item.Q2}</Text>
                                <Text>Q3 {data.item.Q3}</Text>
                            </View>
                        </View>
                    );
                }}
            />
        </Screen>
    );
}
