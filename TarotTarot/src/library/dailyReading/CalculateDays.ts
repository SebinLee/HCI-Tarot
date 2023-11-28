export default function CalculateDays(createdAt: string) {
    if (!createdAt) return 0;

    const oneDayInMillis = 1000 * 60 * 60 * 24;
    const createdAtInMillis = new Date(createdAt).getTime();
    const createdAtRemoveTime =
        createdAtInMillis - (createdAtInMillis % oneDayInMillis);

    return Math.floor(
        (new Date().getTime() - createdAtRemoveTime) / oneDayInMillis + 1,
    );
}
