import React from "react";
import { Icon } from "@ui-kitten/components";
import { TextInput, View, TouchableOpacity, Keyboard } from "react-native";
import { SearchBaseProp } from "./LayoutInterface";
import Color from "../../design/Color";
import styles from "./LayoutStyle";

export default function SearchBase({ style, ...props }: SearchBaseProp) {
    return (
        <View style={[styles.searchBase, style]}>
            <TextInput
                style={{ flex: 1 }}
                placeholderTextColor={Color.TextSecondary}
                {...props}
            />
            <TouchableOpacity
                onPress={() => {
                    props.onSubmitEditing();
                    Keyboard.dismiss();
                }}
            >
                <Icon
                    width={20}
                    height={20}
                    fill={Color.Primary}
                    name="search-outline"
                />
            </TouchableOpacity>
        </View>
    );
}
