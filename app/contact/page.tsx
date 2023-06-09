import Image from "next/image"
import Form from "./components/Form"
import styles from './page.module.css'

export const metadata = {
    title: 'I want to hear from you!',
    description: 'Do you have a question for me? Or something specific you want me to cover in a blog post? Let me know by sending me a message!'
}

export default function Contact() {

    return (
        <main className={styles.main}>
            
            <h1>
                I want to hear from you!
            </h1>

            <div className={styles.form_container}>

                <Image src='/contact.webp' height={540} width={500} alt="" />

                <Form />

            </div>

        </main>
    )
}