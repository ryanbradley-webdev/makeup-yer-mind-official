import styles from './header.module.css'

export default function Burger({
    toggleMenu
}: {
    toggleMenu: () => void
}) {
    return (
        <button className={styles.burgerBtn} onClick={toggleMenu}>
            <div className={styles.burgerDiv}></div>
        </button>
    )
}