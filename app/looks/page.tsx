import LookList from './components/LookList'
import styles from './page.module.css'

export const metadata = {
    title: 'Makeup Yer Mind | All Looks to Try',
    description: 'I love experimenting with all the different products there are, and I\'m sure there\'s something here you\'ll love to try!'
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