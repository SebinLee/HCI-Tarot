export default function CreateMessage(
    text: string,
    user = {
        _id: "system",
        name: "상담자",
        avatar: require("../../design/assets/logo-primary.png"),
    },
) {
    const data = { _id: Date.now(), createdAt: Date.now(), user };

    if (text.includes("http")) return { ...data, image: text };
    else return { ...data, text };
}
