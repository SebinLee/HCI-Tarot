import React from "react";
import {
    BottomTabNavigationOptions,
    createBottomTabNavigator,
} from "@react-navigation/bottom-tabs";
import TarotForest from "./TarotForest/TarotForest";
import MyTarot from "./MyTarot/MyTarot";
import PracticeBot from "./PracticeBot/PracticeBotMain";

const Tab = createBottomTabNavigator();

const screenOption: BottomTabNavigationOptions = {
    headerShown: false,
};

export default function MainContent() {
    return (
        <Tab.Navigator>
            <Tab.Screen
                name="TarotForest"
                component={TarotForest}
                options={screenOption}
            />
            <Tab.Screen
                name="MyTarot"
                component={MyTarot}
                options={screenOption}
            />
            <Tab.Screen
                name="연습봇"
                component={PracticeBot}
                options={screenOption}
            />
        </Tab.Navigator>
    );
}
