'use client'

import { useState } from 'react'
import styles from '../page.module.css'

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

                    <a href='#what-is-the-seint-artist-program'>
                        <li>
                            What is the Seint Artist Program?
                        </li>
                    </a>

                    <a href='#isnt-seint-an-mlm'>
                        <li>
                            Is Seint an MLM?
                        </li>
                    </a>

                    <a href='#im-not-a-makeup-artist'>
                        <li>
                            I&apos;m not a makeup artist, can I still be a Seint Artist?
                        </li>
                    </a>

                    <a href='#do-i-have-to-pay-for-anything'>
                        <li>
                            Do I have to pay for anything?
                        </li>
                    </a>

                    <a href='#difference-between-kits'>
                        <li>
                            Difference between kits
                        </li>
                    </a>

                    <a href='#cheat-code'>
                        <li>
                            Cheat code to get started for less!!
                        </li>
                    </a>

                    <a href='#minimum-sales'>
                        <li>
                            Are there sales minimums?
                        </li>
                    </a>

                    <a href='#discount'>
                        <li>
                            Do I get a discount?
                        </li>
                    </a>

                    <a href='#inventory'>
                        <li>
                            Do I have to keep inventory?
                        </li>
                    </a>

                    <a href='#commission'>
                        <li>
                            Commission plans
                        </li>
                    </a>

                    <a href='#how-often-do-you-get-paid'>
                        <li>
                            How often do you get paid?
                        </li>
                    </a>

                    <a href='#influencer'>
                        <li>
                            Influencer passive income tip!
                        </li>
                    </a>

                    <a href='#competition'>
                        <li>
                            Do artists compete?
                        </li>
                    </a>

                    <a href='#team'>
                        <li>
                            Do I have to build a team?
                        </li>
                    </a>

                    <a href='#best-way-to-enroll'>
                        <li>
                            The best way to enroll
                        </li>
                    </a>

                    <a href='#personal-experience'>
                        <li>
                            Courtney&apos;s personal experience
                        </li>
                    </a>

                </ol>

            </nav>

        </div>
    )
}