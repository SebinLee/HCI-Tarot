import React from "react";
import ButtonBase from "./button/ButtonBase";
import { ButtonColor } from "./button/ButtonStyle";
import { ButtonProps } from "./button/ButtonInterface";

export default function Button({disabled, buttonStyle, ...props }: ButtonProps) {
    return (
        <ButtonBase
            {...props}
            disabled={disabled}
            buttonStyle={[
                {
                    backgroundColor: disabled
                        ? ButtonColor.SolidDisabled.Button
                        : ButtonColor.SolidEnabled.Button,
                },
                buttonStyle,
            ]}
            textColor={
                disabled
                    ? ButtonColor.SolidDisabled.Text
                    : ButtonColor.SolidEnabled.Text
            }
        />
    );
}

