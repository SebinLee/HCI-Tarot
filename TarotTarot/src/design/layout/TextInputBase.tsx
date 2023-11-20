import React from "react";
import { View, TextInput } from "react-native";
import { TextInputBaseProp } from "./LayoutInterface";
import Color from "../Color";

const TextInputBase = React.forwardRef(
    (
        { AccessoryRight, AccessoryBottom, style, ...props }: TextInputBaseProp,
        ref: any
    ) => {
        if (!AccessoryBottom)
            return (
                <View
                    style={[
                        {
                            height: 40,
                            marginBottom: 20,
                            borderBottomWidth: 1,
                            borderColor: Color.BorderPrimary,
                            flexDirection: "row",
                            alignItems: "center",
                        },
                        style,
                    ]}
                >
                    <TextInput style={{ flex: 1 }} ref={ref} {...props} />
                    {AccessoryRight && <AccessoryRight />}
                </View>
            );

        return (
            <View style={{ marginBottom: 20 }}>
                <View
                    style={[
                        {
                            height: 40,
                            marginBottom: 7,
                            borderBottomWidth: 1,
                            borderColor: Color.BorderPrimary,
                            flexDirection: "row",
                            alignItems: "center",
                        },
                        style,
                    ]}
                >
                    <TextInput style={{ flex: 1 }} ref={ref} {...props} />
                    {AccessoryRight && <AccessoryRight />}
                </View>
                {AccessoryBottom && <AccessoryBottom />}
            </View>
        );
    }
);

export default TextInputBase;
