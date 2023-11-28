import firestore from "@react-native-firebase/firestore";
import { Alert } from "react-native";

export default async function GetDailyReadingLists(userID: string) {
    return await firestore()
        .collection("dailyReading")
        .doc(userID)
        .get()
        .then((querySnapshot) => querySnapshot.data())
        .catch((err) => {
            Alert.alert(
                "Error",
                "서버와의 통신 중 오류가 발생했습니다. 다시 시도해주세요",
            );
            console.log(err);
            return null;
        });
}
