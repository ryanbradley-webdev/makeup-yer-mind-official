import React from 'react'

interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
    children: string
    variant?: string
    type?: 'submit' | 'reset' | 'button'
}

export default function Button({
    children,
    variant,
    type,
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
        <button className={ `button ${generateClassName()}` } type={type} {...props}>
            {children}
        </button>
    )
}