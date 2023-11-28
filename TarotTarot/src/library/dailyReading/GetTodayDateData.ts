import { DateData } from "react-native-calendars";

export default function GetTodayDateData(): DateData {
    const today = new Date();
    return {
        year: today.getFullYear(),
        month: today.getMonth() + 1,
        day: today.getDate(),
        dateString: `${today.getFullYear()}-${
            today.getMonth() + 1
        }-${today.getDate()}`,
        timestamp: today.getTime(),
    };
}
