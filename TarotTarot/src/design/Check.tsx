import React from "react";
import {
    CheckProfileProps,
    CheckBoxProps,
    CheckProps,
} from "./check/CheckInterface";
import CheckProfilePicBase from "./check/CheckProfilePicBase";
import CheckButtonBase from "./check/CheckButtonBase";
import CheckBoxBase from "./check/CheckBoxBase";
import Color from "./Color";

export function CheckButton(props: CheckProps) {
    return <CheckButtonBase {...props} />;
}

export function CheckProfilePic(props: CheckProfileProps) {
    return <CheckProfilePicBase {...props} />;
}

export function CheckBox(props: CheckBoxProps) {
    return (
        <CheckBoxBase
            color={props.checked ? Color.Primary : Color.BorderSecondary}
            {...props}
        />
    );
}
