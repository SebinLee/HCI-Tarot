import React from "react";
import {
    BottomTabNavigationOptions,
    createBottomTabNavigator,
} from "@react-navigation/bottom-tabs";
import TarotForest from "./TarotForest/TarotForest";
import MyTarot from "./MyTarot/MyTarot";
import PracticeBot from "./PracticeBot/PracticeBotMain";
import CommentaryRoute from "./Commentary/CommentaryRoute";
import Dictionary from "./Dictonary/Dictonary";

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
            <Tab.Screen
                name="해석 리스트"
                component={CommentaryRoute}
                options={screenOption}
            />
            <Tab.Screen
                name="TarotDict"
                component={Dictionary}
                options={screenOption}
            />
        </Tab.Navigator>
    );
}
