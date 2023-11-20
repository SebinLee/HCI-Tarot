import React from "react";
import Color from "./Color";
import ChipLBase from "./chip/ChipLBase";
import ChipMBase from "./chip/ChipMBase";
import ChipSBase from "./chip/ChipSBase";
import ChipStyle from "./chip/ChipStyle";
import LabelBase from "./chip/LabelBase";
import { ChipProps } from "./chip/ChipInterface";

export function ChipL({ chipStyle, textColor, ...props }: ChipProps) {
    return (
        <ChipLBase
            {...props}
            chipStyle={[{ backgroundColor: Color.Primary }, chipStyle]}
            textColor={textColor ? textColor : Color.BackgroundPrimary}
        />
    );
}

export function ChipLOutline({ chipStyle, textColor, ...props }: ChipProps) {
    return (
        <ChipLBase
            {...props}
            chipStyle={[
                {
                    borderColor: Color.Primary,
                    backgroundColor: Color.BackgroundPrimary,
                },
                chipStyle,
                ChipStyle.outlined,
            ]}
            textColor={textColor ? textColor : Color.Primary}
        />
    );
}

export function ChipLGradient({ chipStyle, textColor, ...props }: ChipProps) {
    return (
        <ChipLBase
            {...props}
            gradient={true}
            chipStyle={chipStyle}
            textColor={textColor ? textColor : Color.BackgroundPrimary}
        />
    );
}

export function ChipM({ chipStyle, textColor, ...props }: ChipProps) {
    return (
        <ChipMBase
            {...props}
            chipStyle={[{ backgroundColor: Color.Primary }, chipStyle]}
            textColor={textColor ? textColor : Color.BackgroundPrimary}
        />
    );
}

export function ChipMOutline({ chipStyle, textColor, ...props }: ChipProps) {
    return (
        <ChipLBase
            {...props}
            chipStyle={[
                {
                    borderColor: Color.Primary,
                    backgroundColor: Color.BackgroundPrimary,
                },
                chipStyle,
                ChipStyle.outlined,
            ]}
            textColor={textColor ? textColor : Color.Primary}
        />
    );
}

export function ChipMGradient({ chipStyle, textColor, ...props }: ChipProps) {
    return (
        <ChipMBase
            {...props}
            gradient={true}
            chipStyle={chipStyle}
            textColor={textColor ? textColor : Color.BackgroundPrimary}
        />
    );
}

export function ChipS({ chipStyle, textColor, ...props }: ChipProps) {
    return (
        <ChipSBase
            {...props}
            chipStyle={[{ backgroundColor: Color.Primary }, chipStyle]}
            textColor={textColor ? textColor : Color.BackgroundPrimary}
        />
    );
}

export function ChipSOutline({ chipStyle, textColor, ...props }: ChipProps) {
    return (
        <ChipSBase
            {...props}
            chipStyle={[
                {
                    borderColor: Color.Primary,
                    backgroundColor: Color.BackgroundPrimary,
                },
                chipStyle,
                ChipStyle.outlined,
            ]}
            textColor={textColor ? textColor : Color.Primary}
        />
    );
}

export function ChipSGradient({ chipStyle, textColor, ...props }: ChipProps) {
    return (
        <ChipSBase
            {...props}
            gradient={true}
            chipStyle={chipStyle}
            textColor={textColor ? textColor : Color.BackgroundPrimary}
        />
    );
}

export function ChipLMessage({ chipStyle, textColor, ...props }: ChipProps) {
    return (
        <ChipLBase
            {...props}
            chipStyle={[
                { borderBottomLeftRadius: 0, backgroundColor: Color.Primary },
                chipStyle,
            ]}
            textColor={textColor ? textColor : Color.BackgroundPrimary}
        />
    );
}

export function ChipMMessage({ chipStyle, textColor, ...props }: ChipProps) {
    return (
        <ChipMBase
            {...props}
            chipStyle={[
                { borderBottomLeftRadius: 0, backgroundColor: Color.Primary },
                chipStyle,
            ]}
            textColor={textColor ? textColor : Color.BackgroundPrimary}
        />
    );
}

export function ChipSMessage({ chipStyle, textColor, ...props }: ChipProps) {
    return (
        <ChipSBase
            {...props}
            chipStyle={[
                { borderBottomLeftRadius: 0, backgroundColor: Color.Primary },
                chipStyle,
            ]}
            textColor={textColor ? textColor : Color.BackgroundPrimary}
        />
    );
}

export function Label(props: ChipProps) {
    return <LabelBase textColor={Color.Primary} {...props} />;
}
