import React from "react";
import { Dimensions, SafeAreaView, View } from "react-native";
import NavigationBarBase from "./layout/NavigationBarBase";
import ShadowWrapperBase from "./layout/ShadowWrapperBase";
import BottomSheetBase from "./layout/BottomSheetBase";
import TextInputBase from "./layout/TextInputBase";
import StatusBarBase from "./layout/StatusBarBase";
import LoadingBase from "./layout/LoadingBase";
import ScreenBase from "./layout/ScreenBase";
import ModalBase from "./layout/ModalBase";
import Color from "./Color";
import {
    ScreenProp,
    ModalBaseProp,
    BottomSheetBaseProp,
    ScreenBackgroundType,
    ShadowWrapperBaseProp,
    LoadingBaseProp,
    TextInputBaseProp,
    SearchBaseProp,
} from "./layout/LayoutInterface";
import SearchBase from "./layout/SearchBase";

export function Modal(props: ModalBaseProp) {
    return <ModalBase {...props} />;
}

export function BottomSheet(props: BottomSheetBaseProp) {
    return <BottomSheetBase {...props} />;
}

export const TextInput = React.forwardRef(
    (props: TextInputBaseProp, ref: any) => (
        <TextInputBase ref={ref} {...props} />
    )
);

export function ShadowWrapper(props: ShadowWrapperBaseProp) {
    return <ShadowWrapperBase {...props} />;
}

export function Search(props: SearchBaseProp) {
    return <SearchBase {...props} />;
}

export function Loading(props: LoadingBaseProp) {
    return <LoadingBase {...props} />;
}

export function Screen({
    horizontalPadding = true,
    transparentNavigation = false,
    navigationPropColor = Color.TextPrimary,
    backgroundColor = Color.BackgroundPrimary,
    backgroundType = ScreenBackgroundType.none,
    children,
    ...props
}: ScreenProp) {
    const navigationTransparent =
        backgroundType !== ScreenBackgroundType.gradientCard
            ? transparentNavigation
            : true;

    return (
        <ScreenBase
            backgroundColor={backgroundColor}
            backgroundType={backgroundType}
        >
            <StatusBarBase hide={navigationTransparent} />
            <NavigationBarBase
                transparentNavigation={navigationTransparent}
                navigationPropColor={
                    backgroundType !== ScreenBackgroundType.gradientCard
                        ? navigationPropColor
                        : Color.BackgroundPrimary
                }
                {...props}
            />
            <View
                style={{
                    flex: 1,
                    paddingHorizontal: horizontalPadding
                        ? Dimensions.get("screen").width * 0.05
                        : 0,
                }}
            >
                <SafeAreaView style={{ flex: 1 }}>{children}</SafeAreaView>
            </View>
        </ScreenBase>
    );
}
