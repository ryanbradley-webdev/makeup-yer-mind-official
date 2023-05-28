'use client'

import Link from 'next/link'
import styles from './header.module.css'
import { useEffect, useState } from 'react'
import YouTube from '../icons/YouTube'
import Instagram from '../icons/Instagram'
import Pinterest from '../icons/Pinterest'
import Facebook from '../icons/Facebook'
import Email from '../icons/Email'

export default function Menu({
    isVisible,
    toggleMenu
}: {
    isVisible: boolean,
    toggleMenu: () => void
}) {
    const [menuVisible, setMenuVisible] = useState(false)

    const localStyle = {
        link: menuVisible ? {
            transform: 'translateX(0)',
            opacity: '1'
        } : {}
    }

    useEffect(() => {
        if (window.innerWidth <= 480) {
            setMenuVisible(isVisible)
        }
    }, [isVisible])

    return (
        <nav className={styles.menu} aria-hidden={!menuVisible}>

            <ul>

                <Link href='/' onClick={toggleMenu} style={localStyle.link}>
                    Home
                </Link>

                <Link href='/about' onClick={toggleMenu} style={localStyle.link}>
                    About
                </Link>

                <Link href='/blogs' onClick={toggleMenu} style={localStyle.link}>
                    Blogs
                </Link>

                <Link href='/looks' onClick={toggleMenu} style={localStyle.link}>
                    Looks
                </Link>

                <Link href='/affiliates' onClick={toggleMenu} style={localStyle.link}>
                    Affiliates
                </Link>

            </ul>

            <div className={styles.iconDiv}>

                <Link href='https://www.youtube.com/@Makeup.Yer.Mind.' rel='noopener noreferrer' target='_blank'>
                    <YouTube />
                </Link>

                <Link href='https://www.youtube.com/@Makeup.Yer.Mind.' rel='noopener noreferrer' target='_blank'>
                    <Instagram />
                </Link>

                <Link href='https://www.pinterest.com/MakeupYerMind/' rel='noopener noreferrer' target='_blank'>
                    <Pinterest />
                </Link>

                <Link href='https://www.facebook.com/MakeupYerMind' rel='noopener noreferrer' target='_blank'>
                    <Facebook />
                </Link>

                <Link href='mailto:courtneyhollyactor@gmail.com' target='_blank'>
                    <Email />
                </Link>

            </div>

        </nav>
    )
}