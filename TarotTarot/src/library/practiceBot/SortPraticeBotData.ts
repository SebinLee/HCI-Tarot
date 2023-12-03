export default function SortPracticeBotData(data) {
    const order = ["튜토리얼", "연애운", "금전운", "학업운"];

    return data.sort((a, b) => {
        const orderA = order.indexOf(a.topic);
        const orderB = order.indexOf(b.topic);

        if (orderA < orderB) return -1;
        else if (orderA > orderB) return 1;
        else return 1;
    });
}
