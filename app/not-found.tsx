'use client'

import styles from './page.module.css'
import { useSelectedLayoutSegment } from 'next/navigation'

export default function NotFound() {
    const segment = useSelectedLayoutSegment()

    return (
        <main className={styles.main}>
            
            <section className={styles.not_found}>

                <h2>
                    Sorry, I wasn&apos;t able to find what you were looking for!
                </h2>

                <p>
                    Use the navigation at the top to look around, or <a href={segment ? `/${segment}` : '/'}>go back</a>.
                </p>

            </section>

        </main>
    )
}