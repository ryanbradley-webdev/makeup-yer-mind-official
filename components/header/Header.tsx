'use client'

import Burger from "./Burger"
import Image from "next/image"
import styles from './header.module.css'
import Menu from "./Menu"
import { useState } from "react"

export default function Header() {
    const [menuVisible, setMenuVisible] = useState(false)

    const toggleMenu = () => {
        setMenuVisible(!menuVisible)
    }

    return (
        <header className={styles.header}>
            <Image src={'/Logo-Small.svg'} alt='' width={95} height={36} />

            <Burger toggleMenu={toggleMenu} />

            <Menu isVisible={menuVisible} />
        </header>
    )
}