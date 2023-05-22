import Link from 'next/link'
import React from 'react'

export default function Button({
    children,
    alt,
    to
}: {
    children: string,
    alt?: boolean,
    to: string
}) {
    const isExternal = to.includes('https://')

    return (
        <Link
            href={to}
            rel={isExternal ? 'noopener noreferrer' : ''}
            target={isExternal ? '_blank' : ''}
        >

            <button 
                className={alt ? 'button button-alt' : 'button button-main' }
            >

                {children}

            </button>

        </Link>
    )
}