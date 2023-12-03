export default function SortCommentaryData(data = []) {
    return data.sort((a, b) => {
        if (a.createdAt < b.createdAt) return -1;
        else if (a.createdAt > b.createdAt) return 1;
        else return 1;
    });
}
