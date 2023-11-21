import React from 'react'
import * as RN from 'react-native'
import Color from './Color';

interface TextInputBaseProp extends RN.TextInputProps {
    AccessoryRight?: React.ElementType;
}

const TextInput = React.forwardRef(
    (
        { AccessoryRight, style, ...props }: TextInputBaseProp,
        ref: any
    ) => {
        return (
            <RN.View
                style={[
                    {
                        height: 40,
                        marginBottom: 20,
                        borderBottomWidth: 1,
                        borderColor: Color.Primary,
                        flexDirection: "row",
                        alignItems: "center",
                    },
                    style,
                ]}
            >
                <RN.TextInput style={{ flex: 1 }} ref={ref} {...props} />
                {AccessoryRight && <AccessoryRight />}
            </RN.View>
        );
    }
);

export default TextInput