import React from "react";
import CommentaryPost from "./CommentaryPost";
import CommentaryMain from "./CommentaryMain";
import {
    StackNavigationOptions,
    createStackNavigator,
} from "@react-navigation/stack";

export default function CommentaryRoute() {
    const Stack = createStackNavigator();
    const screenOption: StackNavigationOptions = {
        headerShown: false,
    };

    return (
        <Stack.Navigator>
            <Stack.Screen
                name="CommentaryMain"
                component={CommentaryMain}
                options={screenOption}
            />
            <Stack.Screen
                name="CommentaryPost"
                component={CommentaryPost}
                options={screenOption}
            />
        </Stack.Navigator>
    );
}
