'use client'

import Link from 'next/link'
import styles from './header.module.css'
import { useEffect, useState } from 'react'

export default function Menu({
    isVisible
}: {
    isVisible: boolean
}) {
    const [menuVisible, setMenuVisible] = useState(false)

    useEffect(() => {
        if (window.innerWidth <= 480) {
            setMenuVisible(isVisible)
        }
    }, [isVisible])

    return (
        <nav className={styles.menu} style={{ right: menuVisible ? '0' : '-100%' }}>
            <ul>
                <Link href='/'>
                    Home
                </Link>
                <Link href='/about'>
                    About
                </Link>
                <Link href='/blogs'>
                    Blogs
                </Link>
                <Link href='/looks'>
                    Looks
                </Link>
                <Link href='/affiliates'>
                    Affiliates
                </Link>
            </ul>
        </nav>
    )
}