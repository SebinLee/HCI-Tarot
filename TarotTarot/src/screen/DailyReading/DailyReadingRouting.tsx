import React from "react";
import {
    StackNavigationOptions,
    createStackNavigator,
} from "@react-navigation/stack";
import DailyReadingMain from "./DailyReadingMain";
import DailyReadingWriting from "./DailyReadingWrite";
import DailyReadingView from "./DailyReadingView";

export default function DailyReadingRouting({ navigation, route }) {
    const Stack = createStackNavigator();
    const screenOption: StackNavigationOptions = {
        headerShown: false,
    };

    return (
        <Stack.Navigator>
            <Stack.Screen
                name="DailyReadingMain"
                component={DailyReadingMain}
                options={screenOption}
            />
            <Stack.Screen
                name="DailyReadingWrite"
                component={DailyReadingWriting}
                options={screenOption}
            />
            <Stack.Screen
                name="DailyReadingView"
                component={DailyReadingView}
                options={screenOption}
            />
        </Stack.Navigator>
    );
}
