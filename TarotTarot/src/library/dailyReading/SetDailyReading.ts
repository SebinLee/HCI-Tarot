import firestore, {
    FirebaseFirestoreTypes,
} from "@react-native-firebase/firestore";
import { Alert } from "react-native";

export default async function SetDailyReading(
    userID: string,
    date: string,
    index: number,
    content: string,
) {
    const document = firestore().collection("dailyReading").doc(userID);

    await document
        .get()
        .then((querySnapshot) => {
            const data = querySnapshot.data();

            if (!data) CreateDailyReadingDoc(document, date, index, content);
            else UpdateDailyReadingDoc(document, date, index, content);
        })
        .catch((err) => {
            Alert.alert(
                "Error",
                "서버와의 통신 중 오류가 발생했습니다. 다시 시도해주세요",
            );
            console.log(err);
            return null;
        });
}

async function CreateDailyReadingDoc(
    firebaseDocument: FirebaseFirestoreTypes.DocumentReference<FirebaseFirestoreTypes.DocumentData>,
    date: string,
    index: number,
    content: string,
) {
    await firebaseDocument.set({
        [date]: { index, content },
    });
}

async function UpdateDailyReadingDoc(
    firebaseDocument: FirebaseFirestoreTypes.DocumentReference<FirebaseFirestoreTypes.DocumentData>,
    date: string,
    index: number,
    content: string,
) {
    await firebaseDocument.update({
        [date]: { index, content },
    });
}
