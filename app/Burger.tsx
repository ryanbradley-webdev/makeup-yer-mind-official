import styles from './page.module.css'

export default function Burger() {
    return (
        <button className={styles.burgerBtn}>
            <div className={styles.burgerDiv}></div>
        </button>
    )
}