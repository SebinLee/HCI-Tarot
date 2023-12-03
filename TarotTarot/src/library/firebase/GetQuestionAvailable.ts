import firestore from "@react-native-firebase/firestore";
import { Alert } from "react-native";

export default async function GetQuestionAvailable(userID = "", docID = "") {
    return await firestore()
        .collection("practiceBot")
        .doc(docID)
        .get()
        .then((querySnapshot) => {
            const data = querySnapshot.data();
            console.log(data);

            if (data.answeredUser.includes(userID)) {
                Alert.alert(
                    "완료한 상담",
                    "이미 완료한 상담 컨텐츠입니다. 새로운 상담 컨텐츠를 기다려주세요!",
                );
                return false;
            }

            return true;
        })
        .catch(() => {
            Alert.alert(
                "Error",
                "서버와의 통신 중 오류가 발생했습니다. 다시 시도해주세요",
            );
            return null;
        });
}
