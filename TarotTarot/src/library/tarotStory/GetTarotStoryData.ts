import firestore from "@react-native-firebase/firestore";
import { Alert } from "react-native";

export default async function GetTarotStoryData(type = "", story = "") {
    return await firestore()
        .collection("tarotStory")
        .doc(type)
        .get()
        .then((querySnapshot) => {
            const data = querySnapshot.data();

            if (!data) return null;
            return data[story];
        })
        .catch(() => null);
}
