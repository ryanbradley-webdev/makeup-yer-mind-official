import styles from './page.module.css'
import LookList from './components/LookList'

export const metadata = {
    title: 'All Looks to Try',
    description: 'I love experimenting with all the different products there are, and I\'m sure there\'s something here you\'ll love to try!'
}

export default function Looks() {
    return (
        <main>
            
            <h1>
                Find a New Look
            </h1>

            {/* @ts-expect-error Async Server Component */}
            <LookList />

        </main>
    )
}