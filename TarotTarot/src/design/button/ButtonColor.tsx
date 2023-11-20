import Color from "../Color";

const ButtonColor = {
    SolidDisabled: {
        Button: Color.BackgroundSecondary,
        Text: Color.TextSecondaryDark,
    },

    SolidEnabled: {
        Button: Color.Primary,
        Text: Color.BackgroundPrimary,
    },

    OutlineDisabled: {
        Button: Color.BorderPrimary,
        Text: Color.BorderPrimary,
    },

    OutlineEnabled: {
        Button: Color.Primary,
        Text: Color.Primary,
    },
};

export default ButtonColor;
