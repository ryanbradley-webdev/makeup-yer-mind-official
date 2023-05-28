import { useEffect, useState } from "react"

export default function ProgressRing() {
    const [counter, setCounter] = useState(1)

    // calculate circle dimensions based on predetermined radius
    const RADIUS = 60
    const CIRCUMFERENCE = Math.PI * RADIUS * 2

    const localStyles = {
        transformOrigin: 'center',
        rotate: '-90deg',
        transition: 'stroke-dashoffset 0.5s ease-in-out'
    }

    // set interval to animate circle based on 1 second intervals
    useEffect(() => {
        const interval = setInterval(() => {
            setCounter(prev => prev + 1)
        }, 1000)

        // clear interval upon component unmount
        return () => clearInterval(interval)
    }, [])

    return (
        <svg viewBox="0 0 140 140" style={{ height: '140px' }}>

            <circle 
                strokeWidth="10" 
                stroke='var(--color-blue-link'
                fill="transparent"
                r={RADIUS} 
                cx="70" 
                cy="70"
                strokeDasharray={`${CIRCUMFERENCE} ${CIRCUMFERENCE}`}
                strokeDashoffset={-(CIRCUMFERENCE * counter)}
                style={localStyles}
            />

        </svg>
    )
}