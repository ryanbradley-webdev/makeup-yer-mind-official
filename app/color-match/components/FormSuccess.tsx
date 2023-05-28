import styles from '../page.module.css'

export default function FormSuccess() {
    return (
        <div className={styles.form_completion}>

            <h3>
                Form Submitted!
            </h3>

            <p>
                Look out for an email in a couple days with your personalized color match!
            </p>

        </div>
    )
}