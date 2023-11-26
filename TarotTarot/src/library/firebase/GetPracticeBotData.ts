import firestore from "@react-native-firebase/firestore";
import { Alert } from "react-native";
import { IMessage } from "react-native-gifted-chat";

export default async function GetPracticeBotData() {
    return await firestore()
        .collection("practiceBot")
        .where("kind", "==", "love")
        .get()
        .then((querySnapshot) => {
            const docs = querySnapshot.docs[0];
            return docs.data();
        })
        .catch(() => {
            Alert.alert(
                "Error",
                "서버와의 통신 중 오류가 발생했습니다. 다시 시도해주세요",
            );
            return null;
        });
}

export function WrapIMessage(chat: string) {
    const message: IMessage = {
        _id: Date.now(),
        text: chat,
        createdAt: Date.now(),
        user: {
            _id: "system",
            name: "타로봇",
        },
    };

    return message;
}

export interface FirebaseChat {
    chats: string[];
}
