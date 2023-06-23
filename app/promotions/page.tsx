import { Suspense } from 'react'
import ActivePromos from './components/ActivePromos'
import styles from './page.module.css'
import PastPromos from './components/PastPromos'

export const revalidate = 60 // FIXME update revalidate variable for production

export const metadata = {
    title: 'Makeup Yer Mind | All Promotions',
    description: 'Deep dive into exclusive discounts, giveaways, and promotions from some of the best beauty products on the market!'
}

export default function Promotions() {
    return (
        <main className={styles.main}>

            <section className={styles.promotion_grid}>

                <h2>
                    Active Promotions
                </h2>

                <Suspense fallback={<p>Loading...</p>}>
                    {/* @ts-expect-error Async Server Component */}
                    <ActivePromos />
                </Suspense>

            </section>

            <section className={styles.promotion_grid}>

                <h2>
                    Past Promotions
                </h2>

                <Suspense fallback={<p>Loading...</p>}>
                    {/* @ts-expect-error Async Server Component */}
                    <PastPromos />
                </Suspense>

            </section>

        </main>
    )
}