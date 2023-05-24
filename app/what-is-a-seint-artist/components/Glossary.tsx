'use client'

import { useState } from 'react'
import styles from '../page.module.css'
import Link from 'next/link'

export default function Glossary() {
    const [glossaryExpanded, setGlossaryExpanded] = useState(true)

    const handleClick = () => {
        setGlossaryExpanded(!glossaryExpanded)
    }

    return (
        <div className={styles.glossary_container}>

            <button className={styles.glossary_btn} onClick={handleClick}>
                Glossary
            </button>

            <nav className={styles.glossary} aria-hidden={glossaryExpanded}>

                <ol>

                    <li>
                        <Link href='what-is-the-seint-artist-program'>
                            What is the Seint Artist Program?
                        </Link>
                    </li>

                    <li>
                        <Link href='isnt-seint-an-mlm'>
                            Is Seint an MLM?
                        </Link>
                    </li>

                    <li>
                        <Link href='im-not-a-makeup-artist'>
                            I&apos;m not a makeup artist, can I still be a Seint Artist?
                        </Link>
                    </li>

                    <li>
                        <Link href='do-i-have-to-pay-for-anything'>
                            Do I have to pay for anything?
                        </Link>
                    </li>

                    <li>
                        <Link href='difference-between-kits'>
                            Difference between kits
                        </Link>
                    </li>

                    <li>
                        <Link href='cheat-code'>
                            Cheat code to get started for less!!
                        </Link>
                    </li>

                    <li>
                        <Link href='minimum-sales'>
                            Are there sales minimums?
                        </Link>
                    </li>

                    <li>
                        <Link href='discount'>
                            Do I get a discount?
                        </Link>
                    </li>

                    <li>
                        <Link href='inventory'>
                            Do I have to keep inventory?
                        </Link>
                    </li>

                    <li>
                        <Link href='commission'>
                            Commission plans
                        </Link>
                    </li>

                    <li>
                        <Link href='how-often-do-you-get-paid'>
                            How often do you get paid?
                        </Link>
                    </li>

                    <li>
                        <Link href='influencer'>
                            Influencer passive income tip!
                        </Link>
                    </li>

                    <li>
                        <Link href='competition'>
                            Do artists compete?
                        </Link>
                    </li>

                    <li>
                        <Link href='team'>
                            Do I have to build a team?
                        </Link>
                    </li>

                    <li>
                        <Link href='best-way-to-enroll'>
                            The best way to enroll
                        </Link>
                    </li>

                    <li>
                        <Link href='personal-experience'>
                            Courtney&apos;s personal experience
                        </Link>
                    </li>

                </ol>

            </nav>

        </div>
    )
}