import React from 'react'

interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
    children: string
    variant?: string
    type?: string
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

    const generateType = () => {

        if (!validateType(type)) {
            return undefined
        } else {
            return type
        }
    }

    const validateType = (str: unknown): str is 'submit' | 'reset' | 'button' => {
        const allowableTypes = ['submit', 'button', 'reset']
        
        if (!str){
            return false
        }

        if (typeof str === 'string' && !allowableTypes.includes(str)) {
            return false
        }

        return true
    }

    return (
        <button className={ `button ${generateClassName()}` } type={generateType()} {...props}>
            {children}
        </button>
    )
}