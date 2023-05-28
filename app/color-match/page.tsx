import Form from './components/Form'
import styles from './page.module.css'

export const metadata = {
    title: 'Get a FREE color match from yours truly!',
    description: 'Just give me a little information about yourself and I\'ll give you a personalized color palette, all for free!'
}

export default function ColorMatch() {
    return (
        <main className={styles.main}>
            
            <h1>
                Well Hello Gorgeous!!
            </h1>

            <p>
                So you&apos;re interested in getting a free color match for Seint Makeup? Yay! I&apos;m so excited! I can&apos;t wait to match you to your perfect colors! I just need a few things from you to get started.
            </p>

            <Form />

        </main>
    )
}