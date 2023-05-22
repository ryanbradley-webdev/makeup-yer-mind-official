import styles from './sectionHeader.module.css'

export default function SectionHeader({
    children
}: {
    children: string
}) {
    return (
        <div className={styles.sectionHeader}>
            <h2>
                {children}
            </h2>
        </div>
    )
}