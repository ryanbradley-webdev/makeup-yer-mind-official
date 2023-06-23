import Image from 'next/image'
import styles from './page.module.css'
import Link from 'next/link'
import Button from '@/components/Button'

export const metadata = {
    title: 'Makeup Yer Mind | About',
    description: 'Meet Courtney, founder and lead blogger of Makeup Yer Mind.'
}

export default function About() {
    return (
        <main className={styles.main}>

            <Image src='/about-lg.png' height={1200} width={800} alt='' />

            <div className={styles.wrapper}>
            
                <h1>
                    Hi! I&apos;m Courtney!
                </h1>

                <Image src='/about-md.png' height={550} width={360} alt='' />

                <section className={styles.section}>

                    <p>
                        I&apos;m a professional makeup artist, SFX makeup artist, actress, voice over actress … my goodness the list goes on!
                    </p>

                    <p>
                        For years I struggled with my own self-image. Working in an industry that places a lot of weight on the way you look can take a toll on the mind if one lets themselves spiral into the &quot;I&apos;m not enough&quot; mentality. Which is why I began searching out ways to learn to love myself as I am, not what I think the world wants me to be.
                    </p>

                    <p>
                        I&apos;ve always had a passion for makeup and beauty as a form of self-expression and for the longest time my friends and family, heck even strangers begged me to create some sort of place for them to learn from the knowledge I&apos;ve acquired over the years!
                    </p>

                    <p>
                        In October of 2021 I enrolled as an Artist with Seint Beauty and life has never been the same since. That&apos;s when Makeup Yer Mind was born!
                    </p>

                    <Link href='/what-is-a-seint-artist'>
                        What is a Seint Artist?
                    </Link>

                    <p>
                        Since then it&apos;s become not only a place for me to share my favorite beauty tips and products with you all but also a journey of self-discovery.
                    </p>

                    <p>
                        I firmly believe that unless you truly believe you&apos;re beautiful, you&apos;ll never see it on the outside. So my goal is to help you through my own endeavors. This place is as much a form of respite for me as I hope it becomes for you.
                    </p>

                    <p>
                        I am so incredibly glad you&apos;re here.
                    </p>

                </section>

                <div className={styles.btnDiv}>

                    <Link href='/meet-the-team'>
                        <Button>
                            Meet my team!
                        </Button>
                    </Link>

                    <Link href='/makeup-consultation'>
                        <Button variant='solid'>
                            Get a Free Makeup Consultation
                        </Button>
                    </Link>

                </div>

            </div>

        </main>
    )
}