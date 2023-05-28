import LoadingSpinner from '@/components/LoadingSpinner'
import styles from '../page.module.css'

export default function FormSubmitting() {
    return (
        <div className={styles.form_completion}>

            <LoadingSpinner />

            <h3>Submitting Form...</h3>
            
        </div>
    )
}