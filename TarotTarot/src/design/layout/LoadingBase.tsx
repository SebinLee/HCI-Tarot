import React from "react";
import { View } from "react-native";
import { Spinner } from "@ui-kitten/components";
import { LoadingBaseProp } from "./LayoutInterface";
import style from "./LayoutStyle";

/**
 * @description 화면을 로딩할 때 유저에게 Spinner를 표출하는 Component입니다.
 * @param {boolean} display Spinner를 표출할지 여부를 결정합니다.
 */
export default function LoadingBase({ loading = false }: LoadingBaseProp) {
    if (loading)
        return (
            <View style={style.loadingBase}>
                <Spinner size="giant" status="basic" />
            </View>
        );

    return null;
}
