import React from "react";
import TarotStory from "./TarotStory";
import {
    StackNavigationOptions,
    createStackNavigator,
} from "@react-navigation/stack";
import TarotStoryDetail from "./TarotStoryDetail";

export default function TarotStoryRoute() {
    const Stack = createStackNavigator();
    const screenOption: StackNavigationOptions = {
        headerShown: false,
    };

    return (
        <Stack.Navigator>
            <Stack.Screen
                name="TarotStoryMain"
                component={TarotStory}
                options={screenOption}
            />
            <Stack.Screen
                name="TarotStoryDetail"
                component={TarotStoryDetail}
                options={screenOption}
            />
        </Stack.Navigator>
    );
}
