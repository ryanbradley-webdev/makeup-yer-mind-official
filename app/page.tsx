import styles from './page.module.css'
import Image from 'next/image'
import LogoName from '../components/icons/LogoName'
import Button from '../components/Button'
import NewSection from '../components/home-page-subsections/NewSection'
import LooksSection from '../components/home-page-subsections/LooksSection'
import BlogsSection from '../components/home-page-subsections/BlogsSection'
import ContactForm from '../components/home-page-subsections/ContactForm'
import Link from 'next/link'
import { Suspense } from 'react'

export const metadata = {
  title: 'Makeup Yer Mind',
  description: 'Be your most beautiful self!'
}

export default function Home() {
  return (
    <main className={styles.main}>



      {/* Hero Section */}

      <section className={styles.hero}>

        <LogoName />

        <h3>
          The Blog for people who love to feel <span>beautiful</span>
        </h3>

        <p>
          Follow my journey of sharing new looks, helpful tips and tricks, and all sorts of other fun things along the way.
        </p>

        <div className={styles.heroBtnDiv}>

          <Link href='/about'>
            <Button>
              Find Out More
            </Button>
          </Link>

          <Link href='/color-match'>
            <Button variant='solid'>
              Get Color-Matched
            </Button>
          </Link>

        </div>
        
      </section>



      {/* About Section */}

      <section className={styles.about}>


        <div className={styles.about_hero}>

          <Image src='/about.png' height={200} width={200} alt='' />

          <h4>
            Hey Bebe!
          </h4>

        </div>

        <aside>

          <p>
            Welcome to my blog! I&apos;m so glad you&apos;re here!
          </p>

          <p>
            I&apos;m a <span>Seint Artist</span>, actor, voice actor, singer, and content creator here to try to make your life even just a little bit better.
          </p>

          <Link href='/what-is-a-seint-artist'>
            <span className={styles.inline_link}>
              What is a Seint Artist?
            </span>
          </Link>

          <p>
            I absolutely LOVE sharing what I know about makeup and skincare, and I know you&apos;ll find something here that you&apos;ll find useful!
          </p>

          <p>
            From tutorials to life-hacks, new looks for you to try, new and exciting products, and everything in-between, I&apos;ll share everything with you! So take a look around, check out some of my blog articles, and visit my community on Instagram!
          </p>

          <p>
            Ready to get started??
          </p>

          <Link href='/'>
            <Button variant='solid'>
              Let&apos;s Do It!!
            </Button>
          </Link>

        </aside>

      </section>



      {/* Additional Subsections */}

      <Suspense fallback={<section>Loading...</section>}>
        {/* @ts-expect-error Async Server Component */}
        <NewSection />
      </Suspense>

      <Suspense fallback={<section>Loading...</section>}>
        {/* @ts-expect-error Async Server Component */}
        <LooksSection />
      </Suspense>

      <Suspense fallback={<section>Loading...</section>}>
        {/* @ts-expect-error Async Server Component */}
        <BlogsSection />
      </Suspense>

      <ContactForm />

    </main>
  )
}
