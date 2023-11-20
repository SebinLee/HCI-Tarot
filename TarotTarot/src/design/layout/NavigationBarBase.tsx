import React from "react";
import { useNavigation } from "@react-navigation/native";
import { TopNavigation, TopNavigationAction } from "@ui-kitten/components";
import { NavigationBaseProp, NavigationPropEnum } from "./LayoutInterface";
import NavigationBarProp from "./NavigationBarProp";
import { H3 } from "../Typography";
import Color from "../Color";

/**
 * @description AccessoryLeft로 뒤로가기 버튼을 렌더하는 TopNavigation입니다. 이를 사용하는 스크린은 반드시 Drawer의 아래에서 렌더되어야 합니다
 * @param {boolean} transparent NavigationBar의 투명여부를 지정합니다. 기본값은 false입니다
 * @param {string} title transparent가 false인 경우에 표시할 타이틀 텍스트를 전달합니다. 기본값은 ""입니다
 * @param {boolean} renderLeftButton 의 왼쪽 버튼들을 렌더할지를 결정합니다. 기본값은 true입니다.
 * @param {boolean} renderRightButton 의 오른쪽 액션 버튼을 렌더할지 결정합니다. 기본값은 false입니다.
 * @param {"back" | "close" | "profile" | "more" | "complete" | "message" | "save"} leftButtonType 의 왼쪽 액션 버튼의 타입을 결정합니다. 기본값은 "back" 입니다
 * @param {"back" | "close" | "profile" | "more" | "complete" | "message" | "save"} rightButtonType 의 우측 액션 버튼의 타입을 지정합니다. 기본값은 "more"입니다.
 * @param {function | null} onRightButtonPress TopNavigation에서 우측버튼을 렌더할 경우 작성합니다. 완료, 더보기(...), 저장 등의 우측에 위치하는 버튼들의 기능을 전달하는 함수입니다.
 */
export default function NavigationBarBase({
    title = "",
    transparentNavigation = false,
    navigationLeftProp = NavigationPropEnum.back,
    navigationRightProp = NavigationPropEnum.hide,
    navigationPropColor = Color.BackgroundPrimary,
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
                navigation.navigate("profile", { routeParam: "profile" });
                break;

            case NavigationPropEnum.message:
                navigation.navigate("dm", { routeParam: "main" });
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
                        onPress={() => {
                            onLeftPropPress
                                ? onLeftPropPress()
                                : defaultFunction(navigationLeftProp);
                        }}
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
                        onPress={() => {
                            onRightPropPress
                                ? onRightPropPress()
                                : defaultFunction(navigationRightProp);
                        }}
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
            title={() => <H3 color={navigationPropColor}>{title}</H3>}
            style={{
                backgroundColor: transparentNavigation
                    ? "transparent"
                    : "white",
            }}
        />
    );
}
