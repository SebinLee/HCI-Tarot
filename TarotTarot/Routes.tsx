import React, { useEffect } from "react";
import {
    createStackNavigator,
    StackNavigationOptions,
    TransitionPresets,
} from "@react-navigation/stack";
import { CommonActions, useNavigation } from "@react-navigation/native";
import auth from "@react-native-firebase/auth";
import MainRoutes from "./src/screen/MainRoutes";
import Start from "./src/screen/Start";
import Home from "./src/screen/Home";

export default function Routes() {
    // Create StackNavigator
    const Stack = createStackNavigator();
    const navigation = useNavigation();

    const TransitionScreenOptions = {
        ...TransitionPresets.SlideFromRightIOS, // This is where the transition happens
    };

    const screenOption: StackNavigationOptions = {
        headerShown: false,
    };

    // Handle firebase Auth
    const onAuthStateChanged = (user: any) => {
        console.log(user);
        if (user) {
            navigation.dispatch(
                CommonActions.reset({
                    index: 1,
                    routes: [{ name: "Home", params: { routeParam: "front" } }],
                }),
            );
        }
    };

    useEffect(() => {
        const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
        return subscriber;
    });

    return (
        <Stack.Navigator screenOptions={TransitionScreenOptions}>
            <Stack.Screen
                name="Start"
                component={Start}
                options={screenOption}
            />
            <Stack.Screen name="Home" component={Home} options={screenOption} />
            <Stack.Screen
                name="MainRoutes"
                component={MainRoutes}
                options={screenOption}
            />
        </Stack.Navigator>
    );
}
