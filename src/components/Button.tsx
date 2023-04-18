import React from "react"

interface ButtonProps {
    buttonText: String
}

const Button: React.FC<ButtonProps> = (props:ButtonProps) => {
    return(
        <button>{props.buttonText}</button>
    )
}

export default Button;