import React from "react";
import {
    BottomTabNavigationOptions,
    createBottomTabNavigator,
} from "@react-navigation/bottom-tabs";

import DailyReadingRouting from "./DailyReading/DailyReadingRouting";
import CommentaryRoute from "./Commentary/CommentaryRoute";
import PracticeBot from "./PracticeBot/PracticeBotMain";
import TarotStoryRoute from "./TarotStory/TarotStoryRoute";
import Dictionary from "./Dictonary/Dictonary";

//@ts-ignore
import DailyReadingIcon from "../design/assets/navigation/I_DailyReading.svg";
//@ts-ignore
import TarotStoryIcon from "../design/assets/navigation/I_TarotStory.svg";
//@ts-ignore
import PracticeBotIcon from "../design/assets/navigation/I_Bot.svg";
//@ts-ignore
import CommentaryIcon from "../design/assets/navigation/I_Commentary.svg";
//@ts-ignore
import DictionaryIcon from "../design/assets/navigation/I_Dictionary.svg";
import Color from "../design/Color";

const Tab = createBottomTabNavigator();
const commonScreenOption: BottomTabNavigationOptions = {
    headerShown: false,
    tabBarActiveTintColor: Color.Primary,
    tabBarInactiveTintColor: Color.Gray,
};

export default function MainContent() {
    return (
        <Tab.Navigator>
            <Tab.Screen
                name="DailyReaing"
                component={DailyReadingRouting}
                options={{
                    ...commonScreenOption,
                    title: "데일리 리딩",
                    tabBarIcon: ({ focused }) => (
                        <DailyReadingIcon style={{ width: 25, height: 25 }} />
                    ),
                }}
            />
            <Tab.Screen
                name="TarotStory"
                component={TarotStoryRoute}
                options={{
                    ...commonScreenOption,
                    title: "타로 스토리",
                    tabBarIcon: ({ color, size }) => (
                        <TarotStoryIcon
                            fill={color}
                            style={{ width: 25, height: 25 }}
                        />
                    ),
                }}
            />
            <Tab.Screen
                name="연습봇"
                component={PracticeBot}
                options={{
                    ...commonScreenOption,
                    title: "연습봇",
                    tabBarIcon: ({ color, size }) => (
                        <PracticeBotIcon
                            fill={color}
                            style={{ width: 25, height: 25 }}
                        />
                    ),
                }}
            />
            <Tab.Screen
                name="해석 리스트"
                component={CommentaryRoute}
                options={{
                    ...commonScreenOption,
                    title: "해석리스트",
                    tabBarIcon: ({ color, size }) => (
                        <CommentaryIcon
                            color={color}
                            style={{ width: 25, height: 25 }}
                        />
                    ),
                }}
            />
            <Tab.Screen
                name="TarotDict"
                component={Dictionary}
                options={{
                    ...commonScreenOption,
                    title: "키워드사전",
                    tabBarIcon: ({ color, size }) => (
                        <DictionaryIcon
                            color={color}
                            style={{ width: 25, height: 25 }}
                        />
                    ),
                }}
            />
        </Tab.Navigator>
    );
}
