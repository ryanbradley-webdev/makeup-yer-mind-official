'use client'

import Burger from "./Burger"
import Image from "next/image"
import styles from './header.module.css'
import Menu from "./Menu"
import { useEffect, useState } from "react"
import { useRouter } from "next/router"

export default function Header() {
    const [menuVisible, setMenuVisible] = useState(false)
    // const [background, setBackground] = useState('transparent')

    const toggleMenu = () => {
        setMenuVisible(!menuVisible)
    }

    /* useEffect(() => {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setBackground('var(--color-background-main)')
                } else {
                    setBackground('transparent')
                }

                console.log(entry.isIntersecting)
            })
        }, {
            root: null,
            rootMargin: '-10%',
            threshold: 0
        })
        
        const hero = document.getElementById('hero')

        if (hero) observer.observe(document.body)
    }, []) */

    return (
        <header className={styles.header}>
            <Image src={'/Logo-Small.svg'} alt='' width={95} height={36} />

            <Burger toggleMenu={toggleMenu} />

            <Menu isVisible={menuVisible} toggleMenu={toggleMenu} />
        </header>
    )
}