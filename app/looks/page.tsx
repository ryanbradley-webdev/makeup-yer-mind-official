import LookList from './components/LookList'
import styles from './page.module.css'

export const metadata = {
    title: 'Makeup Yer Mind | All Looks to Try',
    description: 'Need some makeup inspiration for your next big event? Maybe you want to see some new color combinations. Whatever you\'re searching for, this is the place for you!'
}

export default function Looks() {
    return (
        <main className={styles.main}>
            
            <h1>
                Find a New Look
            </h1>

            <LookList />

        </main>
    )
}