export default function CreateMessage(
    text: string,
    user = {
        _id: "system",
        name: "상담자",
        avatar: "",
    },
) {
    return {
        _id: Date.now(),
        createdAt: Date.now(),
        text,
        user,
    };
}
