import BlogList from './components/BlogList'
import styles from './page.module.css'

export const metadata = {
    title: 'All blogs',
    description: 'Are you looking for some helpful tips and tricks? What about a product upgrade? I\'ve got you covered!'
}

export default function Blogs() {

    return (
        <main>

            <h1>
                Learn Something New
            </h1>

            {/* @ts-expect-error Async Server Component */}
            <BlogList />

        </main>
    )
}