import React, { ReactNode } from 'react'

interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
    children: string | ReactNode | ReactNode[]
    variant?: string
    type?: 'submit' | 'reset' | 'button',
    disabled?: boolean
}

export default function Button({
    children,
    variant,
    type,
    disabled,
    ...props
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
        <button
            className={ `button ${generateClassName()}` } 
            type={type}
            disabled={disabled}
            {...props}
        >
            {children}
        </button>
    )
}