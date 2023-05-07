import React from 'react'

export default function HeroBtn({
    children,
    className
}: {
    children: string,
    className: string
}) {
    return (
        <button className={className}>
            {children}
        </button>
    )
}