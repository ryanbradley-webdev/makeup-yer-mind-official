'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import ExternalLink from '../ExternalLink'
import YouTube from '../icons/YouTube'
import Instagram from '../icons/Instagram'
import Pinterest from '../icons/Pinterest'
import Facebook from '../icons/Facebook'
import Email from '../icons/Email'
import styles from './header.module.css'

export default function Menu({
    isVisible,
    toggleMenu
}: {
    isVisible: boolean,
    toggleMenu: () => void
}) {
    const [menuVisible, setMenuVisible] = useState(false)
    const [youtubeHover, setYoutubeHover] = useState(false)
    const [instagramHover, setInstagramHover] = useState(false)
    const [pinterestHover, setPinterestHover] = useState(false)
    const [facebookHover, setFacebookHover] = useState(false)
    const [emailHover, setEmailHover] = useState(false)

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

            <div className={styles.iconDiv}>

                <ExternalLink 
                    href='https://www.youtube.com/@Makeup.Yer.Mind.'
                    onMouseEnter={() => setYoutubeHover(true)}
                    onMouseLeave={() => setYoutubeHover(false)}
                >
                    <YouTube hover={youtubeHover} />
                </ExternalLink>

                <ExternalLink 
                    href='https://www.instagram.com/makeup.yer.mind/'
                    onMouseEnter={() => setInstagramHover(true)}
                    onMouseLeave={() => setInstagramHover(false)}
                >
                    <Instagram hover={instagramHover} />
                </ExternalLink>

                <ExternalLink 
                    href='https://www.pinterest.com/MakeupYerMind/'
                    onMouseEnter={() => setPinterestHover(true)}
                    onMouseLeave={() => setPinterestHover(false)}
                >
                    <Pinterest hover={pinterestHover} />
                </ExternalLink>

                <ExternalLink 
                    href='https://www.facebook.com/MakeupYerMind'
                    onMouseEnter={() => setFacebookHover(true)}
                    onMouseLeave={() => setFacebookHover(false)}
                >
                    <Facebook hover={facebookHover} />
                </ExternalLink>

                <Link 
                    href='mailto:courtneyhollyactor@gmail.com'
                    target='_blank'
                    rel='nofollow'
                    onMouseEnter={() => setEmailHover(true)}
                    onMouseLeave={() => setEmailHover(false)}
                >
                    <Email hover={emailHover} />
                </Link>

            </div>

        </nav>
    )
}