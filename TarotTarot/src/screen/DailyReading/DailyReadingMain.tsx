import React from "react";
import Screen from "../../design/Screen";
import { Text } from "../../design/Text";
import { NavigationPropEnum } from "../../design/layout/LayoutInterface";
import PostButton from "../../design/PostButton";

export default function DailyReadingMain() {
    return (
        <Screen
            title="데일리 리딩"
            navigationLeftProp={NavigationPropEnum.hide}
        >
            <Text>타로 공부한지 xx일째</Text>
            <PostButton />
        </Screen>
    );
}
