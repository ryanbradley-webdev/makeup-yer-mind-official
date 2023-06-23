import Form from './components/Form'
import styles from './page.module.css'

export const metadata = {
    title: 'Get a FREE color match from yours truly!',
    description: 'Have you always wished you had a personal makeup artist to teach you exactly how to do your makeup? Look no further! Get a custom makeup consultation today and revolutionize your beauty routine!'
}

export default function MakeupConsultation() {
    return (
        <main className={styles.main}>

            <Form />

        </main>
    )
}