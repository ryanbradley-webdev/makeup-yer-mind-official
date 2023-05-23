'use client'

import Button from '../assets/Button'
import styles from './section.module.css'

export default function ContactForm() {
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
    }

    return (
        <section className={styles.contact}>
            
            <h5>
                Want to see specific content?
                <br />
                Send me a message to let me know what you want to see!
            </h5>

            <form action="" onSubmit={handleSubmit} className={styles.form}>

                <label htmlFor="name">

                    <span>
                        First Name
                    </span>

                    <input type='text' id='name' name='name' placeholder='Please tell me your name!' required />

                </label>

                <label htmlFor="message">

                    <span>
                        Message
                    </span>

                    <textarea name="message" id="message" cols={30} rows={5} placeholder='Enter your message here!' required></textarea>

                </label>
                
                <Button>
                    Submit
                </Button>

            </form>

        </section>
    )
}