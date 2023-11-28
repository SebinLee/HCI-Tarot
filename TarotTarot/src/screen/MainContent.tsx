import React from "react";
import {
    BottomTabNavigationOptions,
    createBottomTabNavigator,
} from "@react-navigation/bottom-tabs";

import DailyReadingRouting from "./DailyReading/DailyReadingRouting";
import CommentaryRoute from "./Commentary/CommentaryRoute";
import PracticeBot from "./PracticeBot/PracticeBotMain";
import TarotStory from "./TarotStory/TarotStory";
import Dictionary from "./Dictonary/Dictonary";

const Tab = createBottomTabNavigator();

const screenOption: BottomTabNavigationOptions = {
    headerShown: false,
};

export default function MainContent() {
    return (
        <Tab.Navigator>
            <Tab.Screen
                name="DailyReaing"
                component={DailyReadingRouting}
                options={screenOption}
            />
            <Tab.Screen
                name="TarotStory"
                component={TarotStory}
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
