import firestore from "@react-native-firebase/firestore";
import { Alert } from "react-native";

export default async function GetUserCommentary(docID) {
    return firestore()
        .collection("practiceBot")
        .doc(docID)
        .collection("userAnswer")
        .get()
        .then((querySnapshot) =>
            querySnapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data(),
            })),
        )
        .catch(() => {
            Alert.alert(
                "Error",
                "서버와의 통신 중 오류가 발생했습니다. 다시 시도해주세요",
            );
            return null;
        });
}
