import Form from './components/Form'
import styles from './page.module.css'

export const metadata = {
    title: 'Get a FREE color match from yours truly!',
    description: 'Just give me a little information about yourself and I\'ll give you a personalized color palette, all for free!'
}

export default function MakeupConsultation() {
    return (
        <main className={styles.main}>

            <Form />

        </main>
    )
}