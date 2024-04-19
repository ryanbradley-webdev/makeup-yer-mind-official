import Button from '@/components/Button'
import Link from 'next/link'
import styles from '../page.module.css'

export default function FormSuccess() {
    return (
        <div className={styles.form_completion}>

            <h3>
                Consultation Request Submitted!
            </h3>

            <p>
                Okay! That&apos;s all I need to get started! Watch your email inbox for your results! If you don&apos;t see an email in the next 24-48 hours please make sure it didn&apos;t go to your spam or promotions folders, if it&apos;s still not there reach out to me and let me know!
            </p>

            <p>
                I can&apos;t wait to get to know you!
            </p>
            
            <Link href='/'>
                <Button variant='solid'>
                    Return Home
                </Button>
            </Link>

        </div>
    )
}