import firestore from "@react-native-firebase/firestore";

export default async function GetTarotDictionary() {
    return await firestore()
        .collection("tarotDictionary")
        .doc("data")
        .get()
        .then((querySnapshot) => querySnapshot.data())
        .catch(() => null);
}
