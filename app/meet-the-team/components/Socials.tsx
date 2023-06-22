'use client'

import Instagram from "@/components/icons/Instagram"
import { ReactNode, useState } from "react"
import styles from '../page.module.css'
import ExternalLink from "@/components/ExternalLink"

export default function Socials({
    link,
    children
}: {
    link: string,
    children?: ReactNode
}) {
    const [isHover, setIsHover] = useState(false)

    const handle = '@' + link.replace('https://instagram.com/', '').replace('/', '')

    return (
        <div className={styles.socials}>

            <ExternalLink
                href={link}
                onMouseEnter={() => setIsHover(true)}
                onMouseLeave={() => setIsHover(false)}
            >

                <Instagram hover={isHover} />

                {handle}

            </ExternalLink>

            {
                children
            }

        </div>
    )
}