'use client'

import Button from '../../assets/Button'
import styles from './footer.module.css'

export default function Subscribe() {
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
    }

    return (
        <form action='' onSubmit={handleSubmit} className={styles.form}>

            <p>Want to know when I add new content?</p>
            <p>Subscribe to my mailing list to get notified!</p>

            <div>

                <input type="email" name="email" id="email" placeholder='Enter your email' required />

                <Button variant='ghost'>
                    Submit
                </Button>

            </div>

        </form>
    )
}