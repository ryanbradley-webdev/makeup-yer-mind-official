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
import Signoff from '@/components/Signoff'

export const metadata = {
  title: 'Makeup Yer Mind',
  description: 'Be your most beautiful self!'
}

// FIXME adjust revalidate variable to 3600 for production
export const revalidate = 60

export default function Home() {
  return (
    <main className={styles.main}>



      {/* Hero Section */}

      <section className={styles.hero} id='hero'>

        <LogoName />

        <h3>
          Beauty begins with <span>mindset</span>
        </h3>

        <p>
          Join the beauty adventure: with helpful tips, tricks, and a sprinkle of humor we aim to make you feel beautiful inside and out!
        </p>

        <div className={styles.heroBtnDiv}>

          <Link href='/about'>
            <Button>
              Find Out More
            </Button>
          </Link>

          <Link href='/color-match'>
            <Button variant='solid'>
              Free Makeup Consultation
            </Button>
          </Link>

        </div>
        
      </section>



      {/* About Section */}

      <section className={styles.about} id='about'>

        <Image src='/about-lg.png' height={550} width={360} alt='' />

        <div>

          <div className={styles.about_hero}>

            <Image src='/about-sm.png' height={200} width={200} alt='' />

            <h4>
              Hey Bebe!
            </h4>

          </div>

          <aside>

            <p>
              Welcome to the MYM community! I&apos;m so happy you&apos;re here!
            </p>

            <p>
              &quot;Makeup Yer Mind&apos; is so much more than just a fun play on words. <strong>It&apos;s a mission.</strong>
            </p>

            <p>
              It&apos;s meant to be a place for respite from the weight and negativity of the world for you. A place where you can laugh, have community and truly feel beautiful.
            </p>

            <p>
              Makeup is fun, and it can make you feel pretty but if your mind doesn&apos;t truly believe you&apos;re beautiful you&apos;ll never feel it on the outside. Beauty begins with your mindset and radiates out. This is makeup <em>for</em> your mind.
            </p>

            <p>
              So please, join in on this crazy little beauty adventure. Think of me as your funny little makeup bestie.
            </p>

            <p>
              I&apos;m here to serve you with laughs, positivity and, of course, makeup!
            </p>

            <Signoff />

          </aside>

        </div>

        <Link href='/'>
          <Button variant='solid'>
            Let&apos;s Do It!!
          </Button>
        </Link>

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
