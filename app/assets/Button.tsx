import React from 'react'

interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
    children: string
    alt?: boolean
}

export default function Button({
    children,
    alt
}: ButtonProps) {
    return (
        <button className={alt ? 'button button-alt' : 'button button-main' } >
            {children}
        </button>
    )
}