export default function SortCommentaryData(data = [], userID = "") {
    return data.sort((a, b) => {
        if (a.userID === userID) return 1;
        if (b.userID === userID) return -1;

        if (a.createdAt < b.createdAt) return -1;
        else if (a.createdAt > b.createdAt) return 1;
        else return 1;
    });
}
