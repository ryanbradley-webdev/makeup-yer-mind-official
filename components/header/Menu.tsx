'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import styles from './header.module.css'
import SocialLinks from '../SocialLinks'

export default function Menu({
    isVisible,
    toggleMenu
}: {
    isVisible: boolean,
    toggleMenu: () => void
}) {
    const [menuVisible, setMenuVisible] = useState(false)

    useEffect(() => {
        if (window.innerWidth <= 1024) {
            setMenuVisible(isVisible)
        } else {
            setMenuVisible(true)
        }
    }, [isVisible])

    return (
        <nav className={styles.menu} aria-hidden={!menuVisible}>

            <ul>

                <Link href='/' onClick={toggleMenu}>
                    Home
                </Link>

                <Link href='/about' onClick={toggleMenu}>
                    About
                </Link>

                <Link href='/blogs' onClick={toggleMenu}>
                    Blogs
                </Link>

                <Link href='/looks' onClick={toggleMenu}>
                    Looks
                </Link>

                <Link href='/meet-the-team' onClick={toggleMenu}>
                    Meet the Team
                </Link>

                <Link href='/makeup-consultation' onClick={toggleMenu}>
                    Get a Free Consultation!
                </Link>

            </ul>

            <SocialLinks className={styles.iconDiv} />

        </nav>
    )
}