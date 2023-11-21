import React from "react";
import { useNavigation } from "@react-navigation/native";
import { TopNavigation, TopNavigationAction } from "@ui-kitten/components";
import { NavigationBaseProp, NavigationPropEnum } from "./LayoutInterface";
import NavigationBarProp from "./NavigationBarProp";
import { Text, TextType } from "../Text";
import Color from "../Color";


export default function NavigationBarBase({
    title = "",
    navigationLeftProp = NavigationPropEnum.back,
    navigationRightProp = NavigationPropEnum.hide,
    navigationPropColor = Color.Black,
    onLeftPropPress,
    onRightPropPress,
}: NavigationBaseProp) {
    // Declare Navigation for Routing
    const navigation = useNavigation();

    const defaultFunction = (navigationProp: NavigationPropEnum) => {
        switch (navigationProp) {
            case NavigationPropEnum.back:
            case NavigationPropEnum.close:
                navigation.goBack();
                break;

            case NavigationPropEnum.profile:
                // @ts-ignore
                navigation.navigate("profile", { routeParam: "profile" });
                break;

            default:
                break;
        }
    };

    // Render Left Icon
    const LeftButton = () => {
        return (
            <TopNavigationAction
                icon={() => (
                    <NavigationBarProp
                        prop={navigationLeftProp}
                        color={navigationPropColor}
                    />
                )}
                onPress={() => {
                    onLeftPropPress
                        ? onLeftPropPress()
                        : defaultFunction(navigationLeftProp);
                }}
            />
        );
    };

    // Render Right Icon
    const RightButton = () => {
        return (
            <TopNavigationAction
                icon={() => (
                    <NavigationBarProp
                        prop={navigationRightProp}
                        color={navigationPropColor}
                    />
                )}
                onPress={() => {
                    onRightPropPress
                        ? onRightPropPress()
                        : defaultFunction(navigationRightProp);
                }}
            />
        );
    };

    return (
        <TopNavigation
            alignment="center"
            accessoryLeft={LeftButton}
            accessoryRight={RightButton}
            title={() => <Text type={TextType.H2} color={navigationPropColor}>{title}</Text>}
            style={{backgroundColor: Color.White}}
        />
    );
}
