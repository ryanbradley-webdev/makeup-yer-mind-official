import { capitalize } from '@/lib/capitalize'
import { Great_Vibes } from 'next/font/google'
import { CSSProperties } from 'react'

const greatVibes = Great_Vibes({ 
    weight: '400',
    subsets: ['latin']
})

export default function Signoff({
    className,
    author = 'courtney'
}: { 
    className?: string,
    author?: string
}) {
    const localStyles = {
        paragraph: {
            marginTop: '16px',
            marginRight: '42px',
            textAlign: 'right' as CSSProperties['textAlign'],
            lineHeight: '2.2em',
            fontSize: '1rem',
            fontStyle: 'italic'
        },
        span: {
            fontSize: '2em',
            color: 'var(--color-gold-pri)'
        }
    }

    return (
        <p
            className={className}
            style={localStyles.paragraph}
        >
            Love always,

            <br />

            <span 
                className={greatVibes.className}
                style={localStyles.span}>
                    {capitalize(author)}
            </span>
            
            &nbsp;xoxo

        </p>
    )
}