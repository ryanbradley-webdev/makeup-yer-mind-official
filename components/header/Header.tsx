'use client'

import Burger from "./Burger"
import Image from "next/image"
import styles from './header.module.css'
import Menu from "./Menu"
import { useEffect, useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"

export default function Header() {
    const pathname = usePathname()
    
    const [menuVisible, setMenuVisible] = useState(false)
    const [background, setBackground] = useState(() => {
        if (pathname === '/') return 'transparent'
        return 'var(--color-background-main)'
    })

    const toggleMenu = () => {
        setMenuVisible(!menuVisible)
    }

    useEffect(() => {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setBackground('transparent')
                } else {
                    setBackground('var(--color-background-main)')
                }
            })
        }, {
            root: null,
            rootMargin: '0px',
            threshold: window.innerWidth > 1024 ? 0.8 : 0.6
        })
        
        const hero = document.getElementById('hero')

        if (pathname === '/') {
            if (hero) observer.observe(hero)
        } else {
            setBackground('var(--color-background-main')
        }

        return () => {
            if (hero) observer.unobserve(hero)
        }
    }, [pathname])

    return (
        <header className={styles.header} style={{ background }}>

            <Link href='/'>
                <Image src={'/Logo-Small.svg'} alt='' width={95} height={36} />
            </Link>

            <Burger toggleMenu={toggleMenu} />

            <Menu isVisible={menuVisible} toggleMenu={toggleMenu} />

        </header>
    )
}