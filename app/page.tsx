import styles from './page.module.css'

export default function Home() {
  return (
    <>
      <header>Header</header>
      <main className={styles.main}>
        <h1>Hello World</h1>
      </main>
      <footer>
        &copy; 2023 Shades of Pink. Designed and developed by Ryan Bradley Web Design.
      </footer>
    </>
  )
}
