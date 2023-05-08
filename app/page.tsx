import styles from './page.module.css'
import LogoName from '../components/assets/LogoName'
import HeroBtn from '../components/assets/HeroBtn'
import Link from 'next/link'

export default function Home() {


  return (
    <main>
      <section className={styles.hero}>
        <LogoName />
        <h3>
          The Blog for people who love to feel <span>beautiful</span>
        </h3>
        <p>
          Follow my journey of sharing new looks, helpful tips and tricks, and all sorts of other fun things along the way.
        </p>
        <div className={styles.heroBtnDiv}>
          <Link href={'/about'}>
            <HeroBtn className={styles.heroBtn}>
              Find Out More
            </HeroBtn>
          </Link>
          <Link href={'/color-match'}>
            <HeroBtn className={styles.heroBtnAlt}>
              Get Color-Matched
            </HeroBtn>
          </Link>
        </div>
      </section>
    </main>
  )
}
