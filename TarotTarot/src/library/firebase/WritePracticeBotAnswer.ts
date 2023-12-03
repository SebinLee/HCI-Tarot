import firestore from "@react-native-firebase/firestore";

export default async function WritePracticeBotAnswer(
    docID = "",
    answer: string[] = [],
    userID = "",
    profilePic = "",
    username = "",
) {
    const questionDoc = firestore().collection("practiceBot").doc(docID);
    const questionDocValue = await (await questionDoc.get()).data();

    // Submit user answer
    await questionDoc
        .collection("userAnswer")
        .add({ answer, profilePic, userID, username, createdAt: Date.now() });

    // Update answered user
    await questionDoc.update({
        answeredUser: [...questionDocValue?.answeredUser, userID],
    });
}
