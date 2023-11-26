import firestore from "@react-native-firebase/firestore";
import { Alert } from "react-native";

export default async function LoadTarotPracticeBot() {
    const collection = firestore()
        .collection("practiceBot")
        .where("kind", "==", "love")
        .get()
        .then((querySnapshot) => {
            const docs = querySnapshot.docs[0];
            console.log(docs.ref);
        })
        .catch(() => {
            Alert.alert(
                "Error",
                "서버와의 통신 중 오류가 발생했습니다. 다시 시도해주세요",
            );
        });
    console.log(collection);
}
