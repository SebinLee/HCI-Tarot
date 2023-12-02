import React from "react";
import {
    createStackNavigator,
    StackNavigationOptions,
    TransitionPresets,
} from "@react-navigation/stack";

import MainContent from "./src/screen/MainContent";
import Start from "./src/screen/Start";
import PracticeBotChat from "./src/screen/PracticeBot/PracticeBotChat";

export default function Routes() {
    // Create StackNavigator
    const Stack = createStackNavigator();

    const TransitionScreenOptions = {
        ...TransitionPresets.SlideFromRightIOS, // This is where the transition happens
    };

    const screenOption: StackNavigationOptions = {
        headerShown: false,
    };

    // const routeParam = route?.params.routeParam;

    return (
        <Stack.Navigator screenOptions={TransitionScreenOptions}>
            <Stack.Screen
                name="Start"
                component={Start}
                options={screenOption}
            />
            <Stack.Screen
                name="MainContent"
                component={MainContent}
                options={screenOption}
            />
            <Stack.Screen
                name="PracticeBotChat"
                component={PracticeBotChat}
                options={screenOption}
            />
        </Stack.Navigator>
    );
}
