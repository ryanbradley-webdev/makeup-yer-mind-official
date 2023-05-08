'use client'

import Link from 'next/link'
import styles from './header.module.css'
import { useEffect, useState } from 'react'

export default function Menu({
    isVisible,
    toggleMenu
}: {
    isVisible: boolean,
    toggleMenu: () => void
}) {
    const [menuVisible, setMenuVisible] = useState(false)

    useEffect(() => {
        if (window.innerWidth <= 480) {
            setMenuVisible(isVisible)
        }
    }, [isVisible])

    return (
        <nav className={styles.menu} style={{ right: menuVisible ? '0' : '-100%' }}>
            <button className={styles.closeBtn} onClick={toggleMenu}>
                <div className={styles.closeBtnDiv}></div>
                <div className={styles.closeBtnDiv}></div>
            </button>

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
                <Link href='/affiliates' onClick={toggleMenu}>
                    Affiliates
                </Link>
            </ul>
        </nav>
    )
}