import { Suspense } from 'react'
import ActivePromos from './components/ActivePromos'
import styles from './page.module.css'
import PastPromos from './components/PastPromos'

export const revalidate = 60 // FIXME update revalidate variable for production

export default function Promotions() {
    return (
        <main className={styles.main}>

            <h1>
                Active Promotions
            </h1>

            <section>

                <Suspense fallback={<p>Loading...</p>}>
                    {/* @ts-expect-error Async Server Component */}
                    <ActivePromos />
                </Suspense>

            </section>

            <h2>
                Past Promotions
            </h2>

            <section>

                <Suspense fallback={<p>Loading...</p>}>
                    {/* @ts-expect-error Async Server Component */}
                    <PastPromos />
                </Suspense>

            </section>

        </main>
    )
}