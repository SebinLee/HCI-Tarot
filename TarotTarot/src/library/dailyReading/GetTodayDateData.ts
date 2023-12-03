import { DateData } from "react-native-calendars";

export default function GetTodayDateData(): DateData {
    const today = new Date();
    const todayDate =
        today.getDate() < 10 ? `0${today.getDate()}` : today.getDate();

    return {
        year: today.getFullYear(),
        month: today.getMonth() + 1,
        day: today.getDate(),
        dateString: `${today.getFullYear()}-${
            today.getMonth() + 1
        }-${todayDate}`,
        timestamp: today.getTime(),
    };
}
