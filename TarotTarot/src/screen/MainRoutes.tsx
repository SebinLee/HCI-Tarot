import React from "react";
import {
    BottomTabNavigationOptions,
    createBottomTabNavigator,
} from "@react-navigation/bottom-tabs";
import TarotForest from "./TarotForest/TarotForest";
import MyTarot from "./MyTarot/MyTarot";

const Tab = createBottomTabNavigator();

const screenOption: BottomTabNavigationOptions = {
    headerShown: false,
};

export default function MainRoutes() {
    return (
        <Tab.Navigator>
            <Tab.Screen
                name="Home"
                component={TarotForest}
                options={screenOption}
            />
            <Tab.Screen
                name="Settings"
                component={MyTarot}
                options={screenOption}
            />
        </Tab.Navigator>
    );
}
