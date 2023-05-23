import React from 'react'

interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
    children: string
    variant?: string
}

export default function Button({
    children,
    variant
}: ButtonProps) {
    const generateClassName = () => {
        if (variant === 'solid') {
            return 'button-solid'
        } else if (variant === 'ghost') {
            return 'button-ghost'
        } else {
            return 'button-main'
        }
    }

    return (
        <button className={ `button ${generateClassName()}` } >
            {children}
        </button>
    )
}