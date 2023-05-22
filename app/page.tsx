import styles from './page.module.css'
import Image from 'next/image'
import LogoName from './components/assets/LogoName'
import Button from './components/assets/Button'
import NewSection from './components/section/NewSection'
import LooksSection from './components/section/LooksSection'
import BlogsSection from './components/section/BlogsSection'

export const metadata = {
  title: 'Makeup Yer Mind',
  description: 'Be your most beautiful self!'
}

export default function Home() {
  return (
    <main className={styles.main}>

      <section className={styles.hero}>

        <LogoName />

        <h3>
          The Blog for people who love to feel <span>beautiful</span>
        </h3>

        <p>
          Follow my journey of sharing new looks, helpful tips and tricks, and all sorts of other fun things along the way.
        </p>

        <div className={styles.heroBtnDiv}>

          <Button to='/about'>
            Find Out More
          </Button>

          <Button to='/color-match' alt>
            Get Color-Matched
          </Button>

        </div>
        
      </section>

      <section className={styles.about}>

        <Image src='/about-333x500.png' height={500} width={333} alt='' />

        <aside>

          <h4>Hey Bebe!</h4>

          <p>Welcome to my blog! I&apos;m so glad you&apos;re here!</p>

          <p>I absolutely LOVE sharing what I know about makeup and skincare, and I know you&apos;ll find something here that you&apos;ll find useful!</p>

          <p>From tutorials to life-hacks, new looks for you to try, new and exciting products, and everything in-between, I&apos;ll share everything with you! So take a look around, check out some of my blog articles, and visit my community on Instagram!</p>

          <p>Ready to get started??</p>

          <Button to='/' alt>
            Let&apos;s Do It!!
          </Button>

        </aside>

      </section>

      <NewSection />

      <LooksSection />

      <BlogsSection />

    </main>
  )
}
