import BlogList from './components/BlogList'
import styles from './page.module.css'

export const metadata = {
    title: 'Makeup Yer Mind | All Blogs',
    description: 'Looking for makeup tips or some insight into skindcare? How about a good laugh? We\'ve got what your\'re looking for and more!'
}

export default function Blogs() {

    return (
        <main className={styles.main}>

            <h1>
                Learn Something New
            </h1>

            <BlogList />

        </main>
    )
}