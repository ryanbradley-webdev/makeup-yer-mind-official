import Link from 'next/link'
import styles from '../page.module.css'

export default function FormError() {
    return (
        <div className={styles.form_completion}>
                
            <h3>
                Something went wrong.
            </h3>

            <p>
                I&apos;m sorry, I wasn&apos;t able to get your information. I&apos;ll get that fixed as soon as I can.
            </p>

            <p>
                In the mean time, feel free to reach out to me <Link href='/contact'>here</Link> so I can still get you that color match!
            </p>

        </div>
    )
}