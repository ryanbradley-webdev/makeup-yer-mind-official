'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import styles from './header.module.css'
import SocialLinks from '../SocialLinks'
import Button from '../Button'

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

                <Link href='/promotions' onClick={toggleMenu}>
                    Promotions
                </Link>

                <Link href='/meet-the-team' onClick={toggleMenu}>
                    Meet the Team
                </Link>

            </ul>

            <div className={styles.btnDiv}>

                <Button variant='solid'>
                    Get a Free Consultation!
                </Button>

                <Button>
                    What is a Seint Artist?
                </Button>

            </div>

            <SocialLinks className={styles.iconDiv} />

        </nav>
    )
}