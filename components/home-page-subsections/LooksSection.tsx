import Image from 'next/image'
import SectionHeader from './SectionHeader'
import styles from './section.module.css'
import Button from '../Button'
import Link from 'next/link'

import { SAMPLE_LOOKS } from '@/app/looks/sampleLooks'
import LargeLookCard from '../cards/LargeLookCard'
import LookCard from '../cards/LookCard'

export default function LooksSection() {
    return (
        <section id='looks'>

            <SectionHeader>
                Find a New Look
            </SectionHeader>

            <div className={styles.grid}>

                <LargeLookCard look={SAMPLE_LOOKS[0]} />

                <div className={styles.btnDiv}>

                    <Link href=''>
                        <Button>
                            Read More
                        </Button>
                    </Link>

                    <Link href='/looks'>
                        <Button variant='solid'>
                            All Looks
                        </Button>
                    </Link>

                </div>

                <p>
                    I&apos;ve got a whole bunch of looks for you to try, I know you&apos;ll find one you&apos;ll love!
                </p>

                {SAMPLE_LOOKS.map((look, idx) => {
                    if (idx === 0) return
                    return <LookCard look={look} key={look.id} />
                })}

            </div>

            <Link href='/looks'>
                <Button variant='solid'>
                    See the rest of my looks!
                </Button>
            </Link>

        </section>
    )
}