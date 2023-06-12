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
                <span>
                    Glossary
                </span>

                <span>
                    &nbsp;- navigate to a specific section
                </span>
            </button>

            <nav className={styles.glossary} aria-hidden={glossaryExpanded}>

                <ol>

                    <a href='#what-is-the-seint-artist-program' onClick={handleClick}>
                        <li>
                            What is the Seint Artist Program?
                        </li>
                    </a>

                    <a href='#isnt-seint-an-mlm' onClick={handleClick}>
                        <li>
                            Is Seint an MLM?
                        </li>
                    </a>

                    <a href='#im-not-a-makeup-artist' onClick={handleClick}>
                        <li>
                            I&apos;m not a makeup artist, can I still be a Seint Artist?
                        </li>
                    </a>

                    <a href='#do-i-have-to-pay-for-anything' onClick={handleClick}>
                        <li>
                            Do I have to pay for anything?
                        </li>
                    </a>

                    <a href='#difference-between-kits' onClick={handleClick}>
                        <li>
                            Difference between kits
                        </li>
                    </a>

                    <a href='#cheat-code' onClick={handleClick}>
                        <li>
                            Cheat code to get started for less!!
                        </li>
                    </a>

                    <a href='#minimum-sales' onClick={handleClick}>
                        <li>
                            Are there sales minimums?
                        </li>
                    </a>

                    <a href='#discount' onClick={handleClick}>
                        <li>
                            Do I get a discount?
                        </li>
                    </a>

                    <a href='#inventory' onClick={handleClick}>
                        <li>
                            Do I have to keep inventory?
                        </li>
                    </a>

                    <a href='#commission' onClick={handleClick}>
                        <li>
                            Commission plans
                        </li>
                    </a>

                    <a href='#how-often-do-you-get-paid' onClick={handleClick}>
                        <li>
                            How often do you get paid?
                        </li>
                    </a>

                    <a href='#influencer' onClick={handleClick}>
                        <li>
                            Influencer passive income tip!
                        </li>
                    </a>

                    <a href='#competition' onClick={handleClick}>
                        <li>
                            Do artists compete?
                        </li>
                    </a>

                    <a href='#team' onClick={handleClick}>
                        <li>
                            Do I have to build a team?
                        </li>
                    </a>

                    <a href='#best-way-to-enroll' onClick={handleClick}>
                        <li>
                            The best way to enroll
                        </li>
                    </a>

                    <a href='#personal-experience' onClick={handleClick}>
                        <li>
                            Courtney&apos;s personal experience
                        </li>
                    </a>

                </ol>

            </nav>

        </div>
    )
}