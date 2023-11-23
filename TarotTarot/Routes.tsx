import React, { useEffect } from "react";
import {
    createStackNavigator,
    StackNavigationOptions,
    TransitionPresets,
} from "@react-navigation/stack";
import { useDispatch } from "react-redux";
import { CommonActions, useNavigation } from "@react-navigation/native";
import { storeUserInfo } from "./src/library/redux/UserInfoReducer";

import auth from "@react-native-firebase/auth";
import MainContent from "./src/screen/MainContent";
import Start from "./src/screen/Start";
import Home from "./src/screen/Home";

export default function Routes() {
    // Create StackNavigator
    const Stack = createStackNavigator();
    const navigation = useNavigation();
    const dispatch = useDispatch();

    const TransitionScreenOptions = {
        ...TransitionPresets.SlideFromRightIOS, // This is where the transition happens
    };

    const screenOption: StackNavigationOptions = {
        headerShown: false,
    };

    // Handle firebase Auth
    const onAuthStateChanged = (user: any) => {
        if (user) {
            navigation.dispatch(
                CommonActions.reset({
                    index: 1,
                    routes: [{ name: "Home", params: { routeParam: "front" } }],
                }),
            );

            dispatch(
                storeUserInfo({
                    id: user.uid,
                    username: user.displayName,
                    profilePic: user.photoURL,
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
                name="MainContent"
                component={MainContent}
                options={screenOption}
            />
        </Stack.Navigator>
    );
}
