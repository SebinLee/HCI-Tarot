import React from "react";
import Color from "./Color";
import ButtonLBase from "./button/ButtonLBase";
import ButtonMBase from "./button/ButtonMBase";
import ButtonSBase from "./button/ButtonSBase";
import ButtonStyle from "./button/ButtonStyle";
import ButtonColor from "./button/ButtonColor";
import { ButtonProps, ButtonTimedProps } from "./button/ButtonInterface";
import { useTimer } from "react-timer-hook";

export function ButtonL({ disabled, buttonStyle, ...props }: ButtonProps) {
    return (
        <ButtonLBase
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

export function ButtonLRound({ disabled, buttonStyle, ...props }: ButtonProps) {
    return (
        <ButtonLBase
            {...props}
            disabled={disabled}
            buttonStyle={[
                {
                    backgroundColor: disabled
                        ? ButtonColor.SolidDisabled.Button
                        : ButtonColor.SolidEnabled.Button,
                },
                ButtonStyle.round,
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

export function ButtonLTimed({
    text,
    disabled,
    buttonStyle,
    expireAt,
    onExpire,
    ...props
}: ButtonTimedProps) {
    const expiryTimestamp = Date.now() + expireAt;
    const { seconds, minutes } = useTimer({
        expiryTimestamp,
        onExpire,
    });

    return (
        <ButtonLBase
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
            text={
                minutes + seconds === 0 ? text : `${text} ${minutes}:${seconds}`
            }
        />
    );
}

export function ButtonLTimedRound({
    text,
    disabled,
    buttonStyle,
    expireAt,
    onExpire,
    ...props
}: ButtonTimedProps) {
    const expiryTimestamp = Date.now() + expireAt;
    const { seconds, minutes } = useTimer({
        expiryTimestamp,
        onExpire,
    });

    return (
        <ButtonLBase
            {...props}
            disabled={disabled}
            buttonStyle={[
                {
                    backgroundColor: disabled
                        ? ButtonColor.SolidDisabled.Button
                        : ButtonColor.SolidEnabled.Button,
                },
                ButtonStyle.round,
                buttonStyle,
            ]}
            textColor={
                disabled
                    ? ButtonColor.SolidDisabled.Text
                    : ButtonColor.SolidEnabled.Text
            }
            text={
                minutes + seconds === 0 ? text : `${text} ${minutes}:${seconds}`
            }
        />
    );
}

export function ButtonLOutline({
    disabled,
    buttonStyle,
    ...props
}: ButtonProps) {
    return (
        <ButtonLBase
            {...props}
            disabled={disabled}
            buttonStyle={[
                {
                    borderColor: disabled
                        ? ButtonColor.OutlineDisabled.Button
                        : ButtonColor.OutlineEnabled.Button,
                    backgroundColor: Color.BackgroundPrimary,
                },
                ButtonStyle.outlined,
                buttonStyle,
            ]}
            textColor={
                disabled
                    ? ButtonColor.OutlineDisabled.Text
                    : ButtonColor.OutlineEnabled.Text
            }
        />
    );
}

export function ButtonLOutlineRound({
    disabled,
    buttonStyle,
    ...props
}: ButtonProps) {
    return (
        <ButtonLBase
            {...props}
            disabled={disabled}
            buttonStyle={[
                {
                    borderColor: disabled
                        ? ButtonColor.OutlineDisabled.Button
                        : ButtonColor.OutlineEnabled.Button,
                    backgroundColor: Color.BackgroundPrimary,
                },
                ButtonStyle.round,
                ButtonStyle.outlined,
                buttonStyle,
            ]}
            textColor={
                disabled
                    ? ButtonColor.OutlineDisabled.Text
                    : ButtonColor.OutlineEnabled.Text
            }
        />
    );
}

export function ButtonLGradient({
    disabled,
    buttonStyle,
    ...props
}: ButtonProps) {
    return (
        <ButtonLBase
            {...props}
            gradient={true}
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

export function ButtonLGradientRound({
    disabled,
    buttonStyle,
    ...props
}: ButtonProps) {
    return (
        <ButtonLBase
            {...props}
            gradient={true}
            disabled={disabled}
            buttonStyle={[
                {
                    backgroundColor: disabled
                        ? ButtonColor.SolidDisabled.Button
                        : ButtonColor.SolidEnabled.Button,
                },
                ButtonStyle.round,
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

export function ButtonM({ disabled, buttonStyle, ...props }: ButtonProps) {
    return (
        <ButtonMBase
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

export function ButtonMRound({ disabled, buttonStyle, ...props }: ButtonProps) {
    return (
        <ButtonMBase
            {...props}
            disabled={disabled}
            buttonStyle={[
                {
                    backgroundColor: disabled
                        ? ButtonColor.SolidDisabled.Button
                        : ButtonColor.SolidEnabled.Button,
                },
                ButtonStyle.round,
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

export function ButtonMOutline({
    disabled,
    buttonStyle,
    ...props
}: ButtonProps) {
    return (
        <ButtonMBase
            {...props}
            disabled={disabled}
            buttonStyle={[
                {
                    borderColor: disabled
                        ? ButtonColor.OutlineDisabled.Button
                        : ButtonColor.OutlineEnabled.Button,
                    backgroundColor: Color.BackgroundPrimary,
                },
                ButtonStyle.outlined,
                buttonStyle,
            ]}
            textColor={
                disabled
                    ? ButtonColor.OutlineDisabled.Text
                    : ButtonColor.OutlineEnabled.Text
            }
        />
    );
}

export function ButtonMOutlineRound({
    disabled,
    buttonStyle,
    ...props
}: ButtonProps) {
    return (
        <ButtonMBase
            {...props}
            disabled={disabled}
            buttonStyle={[
                {
                    borderColor: disabled
                        ? ButtonColor.OutlineDisabled.Button
                        : ButtonColor.OutlineEnabled.Button,
                    backgroundColor: Color.BackgroundPrimary,
                },
                ButtonStyle.round,
                ButtonStyle.outlined,
                buttonStyle,
            ]}
            textColor={
                disabled
                    ? ButtonColor.OutlineDisabled.Text
                    : ButtonColor.OutlineEnabled.Text
            }
        />
    );
}

export function ButtonMGradient({
    disabled,
    buttonStyle,
    ...props
}: ButtonProps) {
    return (
        <ButtonMBase
            {...props}
            gradient={true}
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

export function ButtonMGradientRound({
    disabled,
    buttonStyle,
    ...props
}: ButtonProps) {
    return (
        <ButtonMBase
            {...props}
            gradient={true}
            disabled={disabled}
            buttonStyle={[
                {
                    backgroundColor: disabled
                        ? ButtonColor.SolidDisabled.Button
                        : ButtonColor.SolidEnabled.Button,
                },
                ButtonStyle.round,
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

export function ButtonS({ disabled, buttonStyle, ...props }: ButtonProps) {
    return (
        <ButtonSBase
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

export function ButtonSRound({ disabled, buttonStyle, ...props }: ButtonProps) {
    return (
        <ButtonSBase
            {...props}
            disabled={disabled}
            buttonStyle={[
                {
                    backgroundColor: disabled
                        ? ButtonColor.SolidDisabled.Button
                        : ButtonColor.SolidEnabled.Button,
                },
                ButtonStyle.round,
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

export function ButtonSOutline({
    disabled,
    buttonStyle,
    ...props
}: ButtonProps) {
    return (
        <ButtonSBase
            {...props}
            disabled={disabled}
            buttonStyle={[
                {
                    borderColor: disabled
                        ? ButtonColor.OutlineDisabled.Button
                        : ButtonColor.OutlineEnabled.Button,
                    backgroundColor: Color.BackgroundPrimary,
                },
                ButtonStyle.outlined,
                buttonStyle,
            ]}
            textColor={
                disabled
                    ? ButtonColor.OutlineDisabled.Text
                    : ButtonColor.OutlineEnabled.Text
            }
        />
    );
}

export function ButtonSOutlineRound({
    disabled,
    buttonStyle,
    ...props
}: ButtonProps) {
    return (
        <ButtonSBase
            {...props}
            disabled={disabled}
            buttonStyle={[
                {
                    borderColor: disabled
                        ? ButtonColor.OutlineDisabled.Button
                        : ButtonColor.OutlineEnabled.Button,
                    backgroundColor: Color.BackgroundPrimary,
                },
                ButtonStyle.round,
                ButtonStyle.outlined,
                buttonStyle,
            ]}
            textColor={
                disabled
                    ? ButtonColor.OutlineDisabled.Text
                    : ButtonColor.OutlineEnabled.Text
            }
        />
    );
}

export function ButtonSGradient({
    disabled,
    buttonStyle,
    ...props
}: ButtonProps) {
    return (
        <ButtonSBase
            {...props}
            gradient={true}
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

export function ButtonSGradientRound({
    disabled,
    buttonStyle,
    ...props
}: ButtonProps) {
    return (
        <ButtonSBase
            {...props}
            gradient={true}
            disabled={disabled}
            buttonStyle={[
                {
                    backgroundColor: disabled
                        ? ButtonColor.SolidDisabled.Button
                        : ButtonColor.SolidEnabled.Button,
                },
                ButtonStyle.round,
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
