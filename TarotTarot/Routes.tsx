import React from "react";
import {
    createStackNavigator,
    StackNavigationOptions,
    TransitionPresets,
} from "@react-navigation/stack";
import Start from "./src/screen/Start";

export default function Routes() {
    // Create StackNavigator
    const Stack = createStackNavigator();

    const TransitionScreenOptions = {
        ...TransitionPresets.SlideFromRightIOS, // This is where the transition happens
    };

    const screenOption: StackNavigationOptions = {
        headerShown: false,
    };

    return (
        <Stack.Navigator screenOptions={TransitionScreenOptions}>
            <Stack.Screen
                name="Start"
                component={Start}
                options={screenOption}
            />
        </Stack.Navigator>
    );
}
