import firestore from "@react-native-firebase/firestore";
import { Alert } from "react-native";

export default async function GetAvailableQuestions(
    userID = "",
    topic = "연애운",
) {
    return await firestore()
        .collection("practiceBot")
        .where("topic", "==", topic)
        .get()
        .then((querySnapshot) => {
            const docs = querySnapshot.docs.filter(
                (value) => !value.data().answeredUser.includes(userID),
            );

            if (docs.length > 0)
                return docs[Math.floor(Math.random() * docs.length)].id;
            else {
                Alert.alert(
                    "모든 상담 연습을 진행했습니다",
                    "새로운 상담 연습 컨텐츠가 준비중입니다. 새로운 상담 컨텐츠를 기다려주세요!",
                );
                return null;
            }
        })
        .catch(() => {
            Alert.alert(
                "Error",
                "서버와의 통신 중 오류가 발생했습니다. 다시 시도해주세요",
            );
            return null;
        });
}
