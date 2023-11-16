import React, { SyntheticEvent } from 'react'

type InputSizeVariant = "S" | "M" | "L" 

class InputBaseProps {
    bordered?: boolean = false;
    round?: boolean = false;
    flex?: boolean = true;
    size?: InputSizeVariant = "S"
}

class ButtonProps extends InputBaseProps {
    children: React.ReactNode
    onClick: (e:any) => void
}

class InputProps extends InputBaseProps {
    text: string = ""
    setText: React.Dispatch<React.SetStateAction<string>>
}

export {ButtonProps, InputProps}